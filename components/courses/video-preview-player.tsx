"use client";

import * as React from "react";
import { Play, X } from "lucide-react";

interface VideoPreviewPlayerProps {
  thumbnailUrl: string;
  videoUrl?: string;
  title: string;
}

export function VideoPreviewPlayer({
  thumbnailUrl,
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  title,
}: VideoPreviewPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <>
      <div
        onClick={() => setIsPlaying(true)}
        className="relative group w-full aspect-16/10 rounded-3xl overflow-hidden cursor-pointer bg-slate-900 shadow-2xl border border-white/20"
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-90"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-slate-900 group-hover:scale-110 group-hover:bg-[#D2FF00] transition-all duration-300 shadow-2xl shadow-black/40">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-medium drop-shadow-md">
          <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
            ▶ Click to Preview Course Video
          </span>
          <span className="bg-[#D2FF00] text-[#0f172a] font-bold px-3 py-1.5 rounded-full">
            Free Preview
          </span>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#D2FF00] hover:text-[#0f172a] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full bg-black">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-sm">{title}</h4>
                <p className="text-xs text-slate-400">ByteSpace Official Lesson Preview</p>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="text-xs text-[#D2FF00] hover:underline"
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
