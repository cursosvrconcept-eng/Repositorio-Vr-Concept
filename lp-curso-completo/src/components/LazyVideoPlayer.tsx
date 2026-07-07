import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoPlayerProps {
  id: string;
  vertical?: boolean;
  className?: string;
}

export default function LazyVideoPlayer({ id, vertical = false, className = "" }: LazyVideoPlayerProps) {
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  // Otimização 1: Inicializa via scroll (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayerReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );
    if (playerRef.current) observer.observe(playerRef.current);
    return () => observer.disconnect();
  }, []);

  const aspectRatio = vertical ? "aspect-[9/16]" : "aspect-video";

  return (
    <div 
      ref={playerRef} 
      className={`relative w-full ${aspectRatio} bg-[#0a0a0a] overflow-hidden cursor-pointer group ${className}`} 
      onClick={() => setPlayerReady(true)}
    >
      {playerReady ? (
        <iframe 
          id={`panda-${id}`} 
          src={`https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=${id}`} 
          className="absolute top-0 left-0 w-full h-full border-none"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
          allowFullScreen={true}
          fetchPriority={vertical ? "auto" : "high"}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#111] hover:bg-[#1a1a1a] transition-colors duration-300">
           {/* Placeholder otimizado (não carrega scripts nem iframes) */}
           <img 
             src={`https://b-vz-093b9755-d94.tv.pandavideo.com.br/${id}/thumbnail.jpg`}
             alt="Video Thumbnail"
             loading="lazy"
             decoding="async"
             className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-300"
           />
           <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-[var(--color-gold-primary)] rounded-full flex items-center justify-center pl-1 md:pl-2 shadow-[0_0_30px_rgba(201,168,76,0.5)] group-hover:scale-110 transition-transform duration-300">
             <Play className="w-8 h-8 md:w-10 md:h-10 text-black fill-black" />
           </div>
        </div>
      )}
    </div>
  );
}