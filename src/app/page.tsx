import { getAllBlogs } from "@/lib/notion";
import Link from "next/link";

export default async function Page() {
  const posts = await getAllBlogs();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <Link
            href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
            key={post.id}
          >
            <li key={post.id}>{post.properties.Title.title[0].plain_text}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
