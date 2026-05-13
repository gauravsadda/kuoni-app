import type { Entry } from "contentful";
import type { TypeSeoSkeleton } from "@/contentful/types";

jest.mock("@/config/env", () => ({
  env: {
    NEXT_PUBLIC_SITE_URL: "https://example.com",
    NEXT_PUBLIC_SITE_NAME: "Test Site",
    NEXT_PUBLIC_SITE_DESCRIPTION: "Test site description",
  },
}));

import { buildMetadataFromSeo } from "@/utils/seo/buildMetadata";

type SeoEntry = Entry<TypeSeoSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;

const makeSeo = (fields: Partial<SeoEntry["fields"]> = {}): SeoEntry =>
  ({
    fields: { metaTitle: "Default", ...fields },
  }) as unknown as SeoEntry;

describe("buildMetadataFromSeo", () => {
  test("returns empty metadata when given nothing", () => {
    const result = buildMetadataFromSeo({});
    expect(result.title).toBeUndefined();
    expect(result.description).toBeUndefined();
    expect(result.alternates).toBeUndefined();
    expect(result.openGraph).toBeUndefined();
  });

  test("uses fallback title when SEO entry is absent", () => {
    const result = buildMetadataFromSeo({ fallbackTitle: "Fallback" });
    expect(result.title).toBe("Fallback");
  });

  test("prefers Contentful metaTitle over fallback", () => {
    const seo = makeSeo({ metaTitle: "From CMS" });
    const result = buildMetadataFromSeo({ seo, fallbackTitle: "Fallback" });
    expect(result.title).toBe("From CMS");
  });

  test("maps description, canonical, ogTitle", () => {
    const seo = makeSeo({
      metaTitle: "Title",
      metaDescription: "Desc",
      canonicalUrl: "/about",
      ogTitle: "OG Title",
    });
    const result = buildMetadataFromSeo({ seo });
    expect(result.description).toBe("Desc");
    expect(result.alternates).toEqual({ canonical: "/about" });
    expect(result.openGraph?.title).toBe("OG Title");
  });

  test("ogTitle falls back to metaTitle when not set", () => {
    const seo = makeSeo({ metaTitle: "Shared" });
    const result = buildMetadataFromSeo({ seo });
    expect(result.openGraph?.title).toBe("Shared");
  });

  test("absolutizes relative canonical for OG url", () => {
    const seo = makeSeo({ canonicalUrl: "/about" });
    const result = buildMetadataFromSeo({ seo });
    expect(result.openGraph?.url).toBe("https://example.com/about");
  });

  test("keeps absolute URL in OG when canonical is already absolute", () => {
    const seo = makeSeo({ canonicalUrl: "https://other.com/page" });
    const result = buildMetadataFromSeo({ seo });
    expect(result.openGraph?.url).toBe("https://other.com/page");
  });

  test("uses path argument as canonical when SEO field empty", () => {
    const result = buildMetadataFromSeo({ path: "/from-path" });
    expect(result.alternates).toEqual({ canonical: "/from-path" });
  });

  test("uses fallback description when SEO has none", () => {
    const result = buildMetadataFromSeo({ fallbackDescription: "fallback" });
    expect(result.description).toBe("fallback");
  });

  test("absolutizes protocol-relative canonical URL for OG", () => {
    const seo = makeSeo({ canonicalUrl: "//cdn.example.com/page" });
    const result = buildMetadataFromSeo({ seo });
    expect(result.openGraph?.url).toBe("https://cdn.example.com/page");
  });

  test("merges parent openGraph with page openGraph (page wins on conflict)", () => {
    const seo = makeSeo({ ogTitle: "Page Title" });
    const result = buildMetadataFromSeo({
      seo,
      parentOpenGraph: {
        siteName: "Test Site",
        type: "website",
        title: "Layout Title",
      } as never,
    });
    expect(result.openGraph?.title).toBe("Page Title");
    expect((result.openGraph as { siteName?: string })?.siteName).toBe(
      "Test Site",
    );
    expect((result.openGraph as { type?: string })?.type).toBe("website");
  });

  test("preserves parent openGraph when page has no OG data", () => {
    const result = buildMetadataFromSeo({
      parentOpenGraph: {
        siteName: "Test Site",
        type: "website",
      } as never,
    });
    expect((result.openGraph as { siteName?: string })?.siteName).toBe(
      "Test Site",
    );
  });

  test("converts protocol-relative Contentful image URL to https", () => {
    const seo = {
      fields: {
        metaTitle: "X",
        ogImage: {
          fields: {
            file: {
              url: "//images.ctfassets.net/abc/image.jpg",
              details: { image: { width: 1200, height: 630 } },
            },
            description: "Alt text",
          },
        },
      },
    } as unknown as SeoEntry;
    const result = buildMetadataFromSeo({ seo });
    const images = result.openGraph?.images as
      | Array<{ url: string; width?: number; height?: number; alt?: string }>
      | undefined;
    expect(images?.[0]?.url).toBe("https://images.ctfassets.net/abc/image.jpg");
    expect(images?.[0]?.width).toBe(1200);
    expect(images?.[0]?.height).toBe(630);
    expect(images?.[0]?.alt).toBe("Alt text");
  });
});
