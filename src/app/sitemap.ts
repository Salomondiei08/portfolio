import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/markdown";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://salomondiei.com";

  // Static pages (excluding deleted routes: /notes, /photo-gallery, /gallery)
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/research", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gallery/apps", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/reading", priority: 0.6, changeFrequency: "monthly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  // Dynamic blog post routes — included so crawlers discover individual articles
  const blogSlugs = getAllPostSlugs("blog");
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
