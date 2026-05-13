import type { Metadata, ResolvedMetadata } from "next";
import type { Entry } from "contentful";
import type { TypeSeoSkeleton } from "@/contentful/types";
import { parseContentfulContentImage } from "@/contentful/contentImage";
import { env } from "@/config/env";

type SeoEntry = Entry<TypeSeoSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;

interface BuildMetadataInput {
  seo?: SeoEntry;
  fallbackTitle?: string;
  fallbackDescription?: string;
  path?: string;
  parentOpenGraph?: ResolvedMetadata["openGraph"];
}

const ensureAbsoluteUrl = (url: string): string => {
  if (/^https?:\/\//i.test(url)) return url;
  return `${env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}${
    url.startsWith("/") ? url : `/${url}`
  }`;
};

export const buildMetadataFromSeo = ({
  seo,
  fallbackTitle,
  fallbackDescription,
  path,
  parentOpenGraph,
}: BuildMetadataInput): Metadata => {
  const fields = seo?.fields;

  const title = fields?.metaTitle ?? fallbackTitle;
  const description = fields?.metaDescription ?? fallbackDescription;
  const canonical = fields?.canonicalUrl ?? path;
  const ogTitle = fields?.ogTitle ?? title;
  const ogImage = parseContentfulContentImage(fields?.ogImage);

  const metadata: Metadata = {};

  if (title) metadata.title = title;
  if (description) metadata.description = description;

  if (canonical) {
    metadata.alternates = { canonical };
  }

  const pageOpenGraph: NonNullable<Metadata["openGraph"]> = {
    ...(ogTitle ? { title: ogTitle } : {}),
    ...(description ? { description } : {}),
    ...(canonical ? { url: ensureAbsoluteUrl(canonical) } : {}),
    ...(ogImage
      ? {
          images: [
            {
              url: ensureAbsoluteUrl(
                ogImage.src.startsWith("//")
                  ? `https:${ogImage.src}`
                  : ogImage.src,
              ),
              width: ogImage.width || undefined,
              height: ogImage.height || undefined,
              alt: ogImage.alt || undefined,
            },
          ],
        }
      : {}),
  };

  const hasPageOg = Object.keys(pageOpenGraph).length > 0;

  if (parentOpenGraph || hasPageOg) {
    metadata.openGraph = {
      ...(parentOpenGraph as Metadata["openGraph"]),
      ...pageOpenGraph,
    };
  }

  return metadata;
};
