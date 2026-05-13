import { getStories } from "@/utils/api/getStory";
import type { TypePageEntrySkeleton } from "@/contentful/types";
import Link from "next/link";

const Home = async () => {
  const stories = await getStories<TypePageEntrySkeleton>({
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
    <main className="home-main">
      <div className="home-inner">
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
      </div>
    </main>
  );
};

export default Home;
