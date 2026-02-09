import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://salomondiei.com";

  // Static pages
  const routes = [
    "",
    "/about",
    "/blog",
    "/projects",
    "/photo-gallery",
    "/gallery/apps",
    "/notes",
    "/research",
    "/reading",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
