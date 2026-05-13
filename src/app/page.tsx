import type { Metadata } from "next";
import { getStories } from "@/utils/api/getStory";
import type { TypePageSkeleton } from "@/contentful/types";
import Link from "next/link";
import { Style } from "@mui/icons-material";
import StyleGuide from "@/components/presentation/StyleGuide";
import { Container } from "@mui/material";
import SectionWrapper from "@/components/presentation/SectionWrapper";

// Home metadata is static by design — this route lists all Contentful
// pages and isn't backed by a single Contentful entry. If marketing
// later wants to edit homepage SEO, create a singleton entry and
// route this through `buildMetadataFromSeo` like `[...slug]/page.tsx`.
export const metadata: Metadata = {
  title: "Home",
  description: "Browse pages",
  alternates: { canonical: "/" },
  openGraph: { title: "Home", url: "/" },
};

const Home = async () => {
  const stories = await getStories<TypePageSkeleton>({
    content_type: "page",
    include: 2,
    order: ["fields.title"],
  });

  if (!stories || stories.length === 0) {
    return (
      <main className="home-main">
        <div className="home-inner home-empty">No stories found.</div>
      </main>
    );
  }

  return (
    <main>
      <SectionWrapper>
        <p className="home-subtitle">Contentful</p>
        <h1 className="home-title">My Pages</h1>
        <ul className="home-list">
          {stories.map((story) => (
            <li key={story?.fields?.slug}>
              <Link href={`/${story?.fields?.slug}`} className="home-card">
                <span className="home-card-label">Page</span>
                <h2 className="home-card-title">{story?.fields?.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>
      <StyleGuide />
    </main>
  );
};

export default Home;
