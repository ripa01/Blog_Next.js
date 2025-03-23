import { Blog } from "../globals/types";


export async function getBlogById(id: number): Promise<Blog | null> {
  try {
    const response = await fetch(`${process.env.API_URL}/${id}`, { cache: "no-store" });

    if (!response.ok) throw new Error("Failed to fetch blog");

    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
