import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStories, getStory } from "@/utils/api/getStory";
import type { TypePageEntrySkeleton } from "@/contentful/types";
import PageShell from "./PageShell";

interface Params {
  slug: string[];
}

interface PageProps {
  params: Promise<Params>;
}

export async function generateStaticParams(): Promise<Params[]> {
  const stories = await getStories<TypePageEntrySkeleton>({
    content_type: "page",
    include: 2,
    order: ["fields.title"],
  });

  return (
    stories?.map((story) => ({ slug: story.fields.slug.split("/") })) ?? []
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStory<TypePageEntrySkeleton>(slug.join("/"), {
    include: 2,
    content_type: "page",
  });

  if (!story) {
    return notFound();
  }

  return {
    title: story?.fields?.title || "Page title",
  };
}

async function Page({ params }: PageProps) {
  const { slug } = await params;

  const story = await getStory<TypePageEntrySkeleton>(slug.join("/"), {
    include: 2,
    content_type: "page",
  });

  if (!story) {
    return notFound();
  }

  return <PageShell story={story} />;
}

export default Page;
