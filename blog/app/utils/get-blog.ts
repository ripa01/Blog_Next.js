import { Blog } from "../globals/types";

export async function getBlogs(): Promise<Blog[]> {

  try {
    const response = await fetch(`${process.env.API_URL}`, {
      cache: "no-store", 
    });

    if (!response.ok) throw new Error("Failed to fetch blogs");

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
