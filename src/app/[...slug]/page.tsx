import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getStories, getStory } from "@/utils/api/getStory";
import type { TypePageSkeleton, TypeSeoSkeleton } from "@/contentful/types";
import type { Entry } from "contentful";
import { buildMetadataFromSeo } from "@/utils/seo/buildMetadata";
import PageShell from "./PageShell";

interface Params {
  slug: string[];
}

interface PageProps {
  params: Promise<Params>;
}

type PageFieldsWithSeo = {
  title?: string;
  slug: string;
  seo?: Entry<TypeSeoSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
};

export const generateStaticParams = async (): Promise<Params[]> => {
  const stories = await getStories<TypePageSkeleton>({
    content_type: "page",
    include: 2,
    order: ["fields.title"],
  });

  return (
    stories?.map((story) => ({
      slug: (story.fields as PageFieldsWithSeo).slug.split("/"),
    })) ?? []
  );
};

export const generateMetadata = async (
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { slug } = await params;
  const story = await getStory<TypePageSkeleton>(slug.join("/"), {
    include: 2,
    content_type: "page",
  });

  if (!story) {
    return notFound();
  }

  const fields = story.fields as PageFieldsWithSeo;
  const parentMeta = await parent;

  return buildMetadataFromSeo({
    seo: fields.seo,
    fallbackTitle: fields.title || "Page title",
    path: `/${slug.join("/")}`,
    parentOpenGraph: parentMeta.openGraph,
  });
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const story = await getStory<TypePageSkeleton>(slug.join("/"), {
    include: 2,
    content_type: "page",
  });

  if (!story) {
    return notFound();
  }

  return <PageShell story={story} />;
};

export default Page;
