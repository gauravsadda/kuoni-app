import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchBlogPost, fetchBlogPosts } from "../../contentful/blogPosts";
import Link from "next/link";
import Image from "next/image";
import RichText from "../../contentful/RichText";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: Promise<BlogPostPageParams>;
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const draft = await draftMode();
  const blogPost = await fetchBlogPost({
    slug,
    preview: draft.isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}

// The actual BlogPostPage component.
async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const draft = await draftMode();
  const blogPost = await fetchBlogPost({
    slug,
    preview: draft.isEnabled,
  });

  if (!blogPost) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound();
  }

  const imageSrc = blogPost.image?.src || "";
  const cleanedUrl = imageSrc.startsWith("//") ? `https:${imageSrc}` : imageSrc;

  return (
    <main className="p-[6vw]">
      <Link href="/">← Posts</Link>
      <div className="prose mt-8 border-t pt-8">
        {/* Render the blog post image */}
        {cleanedUrl && blogPost?.image && (
          <Image
            src={cleanedUrl}
            width={blogPost?.image.width || 300}
            height={blogPost?.image.height || 300}
            alt={blogPost?.image.alt || ""}
          />
        )}

        {blogPost.author && (
          <div className="author-info">
            <h2>Author: {blogPost.author?.fields?.name}</h2>
            {blogPost.author?.fields?.image && (
              <Image
                src={
                  blogPost?.author?.fields?.image?.fields?.file?.url?.startsWith(
                    "//",
                  )
                    ? `https:${blogPost.author.fields.image.fields.file.url}`
                    : blogPost?.author?.fields?.image?.fields?.file?.url || ""
                }
                width={100}
                height={100}
                alt={blogPost?.author?.fields?.name || ""}
              />
            )}
          </div>
        )}

        {/* Render the blog post title */}
        <h1>{blogPost.title}</h1>

        {/* Render the blog post body */}
        <RichText document={blogPost.body} />
      </div>
    </main>
  );
}

export default BlogPostPage;
