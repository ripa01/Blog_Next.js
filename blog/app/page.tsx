import Link from "next/link";
import { getBlogs } from "./utils/get-blog";
import { Blog } from "./globals/types";

export default async function BlogsPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>
              <p className="text-sm text-gray-500 mt-2">
                By {blog.author} | {new Date(blog.date).toDateString()}
              </p>
              <p className="text-gray-600 mt-2">{blog.category}</p>
              <Link
                href={`/blogs/${blog.id}`}
                className="mt-4 inline-block text-blue-600 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
