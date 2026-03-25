"use client";

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function LuxuryEntryPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<any>(null);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video 
          ref={videoRef}
          autoPlay muted={isMuted} loop playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/luxury-reel.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            Athenian <span className="text-[#D4AF37]">Excellence</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Athens Urban Vibes */}
          <Link href="/athens-urban-vibes" className="group p-10 border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md rounded-2xl hover:border-[#D4AF37] transition-all">
            <h2 className="text-3xl font-bold mb-4">Athens <span className="text-[#D4AF37]">Urban Vibes</span></h2>
            <p className="text-zinc-400 text-sm mb-6">Modern city living at Miron 18.</p>
            <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">Enter Collection →</div>
          </Link>

          {/* Athenian Sky Retreat */}
          <div className="p-10 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl opacity-60">
            <h2 className="text-3xl font-bold mb-4">Athenian <span className="text-[#D4AF37]">Sky Retreat</span></h2>
            <p className="text-zinc-400 text-sm mb-6">Luxury views from above.</p>
            <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">Coming Soon</div>
          </div>
        </div>

        <footer className="mt-20">
          <p className="text-[#D4AF37] italic text-2xl font-serif">"Making people smile"</p>
        </footer>
      </div>
    </main>
  );
}