import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/markdown";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://salomondiei.com";

  // Static pages with real last-modified dates (update these when pages change)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`,              lastModified: new Date("2026-02-14") },
    { url: `${baseUrl}/about`,        lastModified: new Date("2026-01-01") },
    { url: `${baseUrl}/blog`,         lastModified: new Date("2026-02-14") },
    { url: `${baseUrl}/projects`,     lastModified: new Date("2026-01-01") },
    { url: `${baseUrl}/research`,     lastModified: new Date("2026-01-01") },
    { url: `${baseUrl}/gallery/apps`, lastModified: new Date("2026-01-01") },
    { url: `${baseUrl}/reading`,      lastModified: new Date("2026-01-01") },
  ];

  // Blog posts using their actual publish dates.
  // getAllPosts filters out published:false, so drafts stay out of the sitemap.
  const blogPosts = getAllPosts("blog");
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}
