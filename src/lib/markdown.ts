import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  coverAlt?: string;
  tags?: string[];
  published?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

/**
 * Get all posts from a content directory (blog or notes)
 */
export function getAllPosts(type: "blog" | "notes"): PostMeta[] {
  const directory = path.join(contentDirectory, type);

  // Create directory if it doesn't exist
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(directory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        coverImage: data.coverImage || undefined,
        coverAlt: data.coverAlt || "",
        tags: data.tags || [],
        published: data.published !== false,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return allPosts;
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(type: "blog" | "notes", slug: string): Promise<Post | null> {
  const directory = path.join(contentDirectory, type);
  const fullPath = path.join(directory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    description: data.description || "",
    coverImage: data.coverImage || undefined,
    coverAlt: data.coverAlt || "",
    tags: data.tags || [],
    published: data.published !== false,
    content: contentHtml,
  };
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(type: "blog" | "notes"): string[] {
  const directory = path.join(contentDirectory, type);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const fileNames = fs.readdirSync(directory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}
