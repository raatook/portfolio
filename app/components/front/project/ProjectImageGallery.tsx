"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface Media {
  id: number;
  path: string;
  title?: string;
}

interface ProjectImageGalleryProps {
  media: Media[];
  projectTitle: string;
}

export default function ProjectImageGallery({ media, projectTitle }: ProjectImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!media || media.length === 0) {
    return (
      <div className="mb-16">
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700/50">
          <div className="text-center">
            <div className="w-20 h-20 bg-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🖼️</span>
            </div>
            <p className="text-slate-400 text-lg">No images available</p>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % media.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <>
      <div className="mb-16">
        {/* Image principale */}
        <div className="relative group">
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl">
          <Image
              src={media[selectedImage]?.path || "/images/default-project.jpeg"}
              alt={media[selectedImage]?.title || projectTitle}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority={selectedImage === 0}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              unoptimized={false}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-6 right-6 p-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-800 hover:scale-110"
              aria-label="View fullscreen"
            >
              <ZoomIn className="w-5 h-5" />
            </button>

            {media.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-800 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-800 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {media.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/90 border border-slate-700 rounded-full text-white text-sm font-medium">
                {selectedImage + 1} / {media.length}
              </div>
            )}
          </div>
        </div>
        
        {media.length > 1 && (
          <div className="mt-6 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {media.map((mediaItem, index) => (
              <button
                key={mediaItem.id}
                onClick={() => setSelectedImage(index)}
                className={`relative h-20 md:h-24 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedImage === index 
                    ? "ring-4 ring-blue-500 scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                    : "ring-2 ring-slate-700/50 opacity-60 hover:opacity-100 hover:scale-105 hover:ring-slate-600"
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image 
                  src={mediaItem.path} 
                  alt={mediaItem.title || `${projectTitle} - Image ${index + 1}`} 
                  fill 
                  className="object-contain"
                  sizes="150px"
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-blue-500/20" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal Fullscreen */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 bg-slate-800/90 border border-slate-700 rounded-xl text-white hover:bg-slate-700 transition-all z-10"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={media[selectedImage]?.path || "/images/default-project.jpeg"}
              alt={media[selectedImage]?.title || projectTitle}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {media.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-slate-800/90 border border-slate-700 rounded-xl text-white hover:bg-slate-700 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-slate-800/90 border border-slate-700 rounded-xl text-white hover:bg-slate-700 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-800/90 border border-slate-700 rounded-full text-white font-medium">
                {selectedImage + 1} / {media.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}