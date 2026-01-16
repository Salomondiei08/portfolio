"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

// Sample photos - replace with your actual images
const photos = [
  {
    id: 1,
    src: "/gallery/photo-1.jpg",
    alt: "Mountain landscape",
    category: "Nature",
    date: "2024-01",
  },
  {
    id: 2,
    src: "/gallery/photo-2.jpg",
    alt: "City skyline at night",
    category: "Urban",
    date: "2024-01",
  },
  {
    id: 3,
    src: "/gallery/photo-3.jpg",
    alt: "Abstract patterns",
    category: "Abstract",
    date: "2023-12",
  },
  {
    id: 4,
    src: "/gallery/photo-4.jpg",
    alt: "Portrait shot",
    category: "Portrait",
    date: "2023-12",
  },
  {
    id: 5,
    src: "/gallery/photo-5.jpg",
    alt: "Ocean waves",
    category: "Nature",
    date: "2023-11",
  },
  {
    id: 6,
    src: "/gallery/photo-6.jpg",
    alt: "Street photography",
    category: "Urban",
    date: "2023-11",
  },
];

const categories = ["All", "Nature", "Urban", "Abstract", "Portrait"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Photography Gallery</h1>
        <p className="text-muted-foreground">
          A collection of photographs capturing moments and scenes that inspire me.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {filteredPhotos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="relative aspect-square overflow-hidden rounded-lg bg-secondary group cursor-pointer"
          >
            {/* Placeholder - replace with actual images */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-secondary">
              <span className="text-4xl text-muted-foreground/30">{photo.id}</span>
            </div>
            {/* Uncomment when you have real images:
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            */}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
              <div className="p-3 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium truncate">{photo.alt}</p>
                <p className="text-white/70 text-xs">{photo.category}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No photos in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            {/* Placeholder */}
            <div className="w-full aspect-video bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl text-muted-foreground/30">{selectedPhoto.id}</span>
                <p className="mt-4 text-foreground font-medium">{selectedPhoto.alt}</p>
                <p className="text-sm text-muted-foreground">{selectedPhoto.category} · {selectedPhoto.date}</p>
              </div>
            </div>
            {/* Uncomment for real images:
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-[80vh]"
            />
            */}
          </div>
        </div>
      )}
    </div>
  );
}
