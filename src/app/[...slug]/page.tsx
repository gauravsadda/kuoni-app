import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getStories, getStory } from "@/utils/api/getStory";
import type { TypePageSkeleton } from "@/contentful/types";
import { buildMetadataFromSeo } from "@/utils/seo/buildMetadata";
import PageShell from "./PageShell";

interface Params {
  slug: string[];
}

interface PageProps {
  params: Promise<Params>;
}

const PAGE_QUERY = { include: 2, content_type: "page" } as const;

export const generateStaticParams = async (): Promise<Params[]> => {
  const stories = await getStories<TypePageSkeleton>({
    ...PAGE_QUERY,
    order: ["fields.title"],
  });

  return (
    stories?.map((story) => ({
      slug: story.fields.slug.split("/"),
    })) ?? []
  );
};

export const generateMetadata = async (
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { slug } = await params;
  const story = await getStory<TypePageSkeleton>(slug.join("/"), PAGE_QUERY);

  if (!story) {
    return notFound();
  }

  const parentMeta = await parent;

  return buildMetadataFromSeo({
    seo: story.fields.seo,
    fallbackTitle: story.fields.title || "Page title",
    path: `/${slug.join("/")}`,
    parentOpenGraph: parentMeta.openGraph,
  });
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const story = await getStory<TypePageSkeleton>(slug.join("/"), PAGE_QUERY);

  if (!story) {
    return notFound();
  }

  return <PageShell story={story} />;
};

export default Page;
