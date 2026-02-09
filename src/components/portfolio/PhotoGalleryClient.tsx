"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { BlogGalleryImage } from "@/lib/markdown";

type PhotoGalleryClientProps = {
  photos: BlogGalleryImage[];
};

/**
 * Client-side gallery interactions (filter + lightbox) fed by server-side blog image data.
 */
export function PhotoGalleryClient({ photos }: PhotoGalleryClientProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(photos.map((photo) => photo.category)))],
    [photos]
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<BlogGalleryImage | null>(null);

  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Photo Gallery</h1>
        <p className="text-muted-foreground">
          Images from my blog posts and visual notes.
        </p>
      </div>

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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {filteredPhotos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="relative aspect-square overflow-hidden rounded-lg bg-secondary group cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
              <div className="p-3 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium truncate">{photo.alt}</p>
                <p className="text-white/70 text-xs">{photo.category}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No photos in this category yet.</p>
        </div>
      )}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-5xl max-h-[85vh] relative w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-secondary">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="pt-3">
              <p className="text-foreground font-medium">{selectedPhoto.alt}</p>
              <p className="text-sm text-muted-foreground">
                {selectedPhoto.category} · {selectedPhoto.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
