import { getBlogById } from "@/app/utils/single-blog";
import { Blog } from "@/app/globals/types";
import Link from "next/link";


// interface BlogPageProps {
//   params: { id: number };
// }

export default async function BlogPage({ params }: {params: Promise<{ id: number }> }) {
  const {id} = await params;
  const blog: Blog | null = await getBlogById(id);
  // const blog: Blog | null = await getBlogById(Number(params.id));

  if (!blog) {
    return <p className="text-center text-red-500">Blog not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500">
        By {blog.author} | {new Date(blog.date).toDateString()}
      </p>
      <p className="text-gray-600 mt-2 italic">Category: {blog.category}</p>
      <div className="mt-6">{blog.content}</div>
      <Link href="/" className="mt-4 inline-block text-blue-600 font-medium">
        Go back to Home →
      </Link>
    </div>
  );
}
