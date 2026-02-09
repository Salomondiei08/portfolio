import { PhotoGalleryClient } from "@/components/portfolio/PhotoGalleryClient";
import { getBlogGalleryImages } from "@/lib/markdown";

export const metadata = {
  title: "Photo Gallery | AI Engineer Portfolio",
  description: "A gallery of visuals pulled from blog posts and updates.",
};

export default function PhotoGalleryPage() {
  const photos = getBlogGalleryImages();

  return <PhotoGalleryClient photos={photos} />;
}
