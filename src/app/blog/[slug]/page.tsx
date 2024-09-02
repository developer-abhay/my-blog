import { fetchContent, getBlogBySlug, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return <div>Blog Not Found</div>;
  }

  const blocks = await fetchContent(blog.id);

  const renderer = new NotionRenderer({ client: notion });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}
