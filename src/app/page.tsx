import { getAllBlogs } from "@/lib/notion";

export default async function Page() {
  const posts = await getAllBlogs();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <div> post </div>
        ))}
      </ul>
    </div>
  );
}
