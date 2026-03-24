"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // הפונקציה המעודכנת שמכריחה את הסאונד לפעול
  const toggleMute = () => {
    if (videoRef.current) {
      const isCurrentlyMuted = videoRef.current.muted;
      videoRef.current.muted = !isCurrentlyMuted;
      videoRef.current.volume = 1; // מכריח ווליום 100%
      setMuted(!isCurrentlyMuted);
    }
  };

  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white font-sans overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>

      <header className="relative z-10 flex flex-col items-center pt-12 pb-8 px-4 text-center">
        <Image src="/logo.png" alt="Athens Urban Vibes" width={160} height={160} className="object-contain mb-6" />
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-semibold">Athens, Greece</span>
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
        </div>
        <p className="text-zinc-300 text-base font-light tracking-widest uppercase mb-3">Curated Stays · Authentic Experiences</p>
        <p className="text-zinc-500 text-sm font-light max-w-lg mx-auto leading-relaxed">
          Five boutique apartments and a rooftop retreat in the heart of Athens — fully renovated, self check-in, 7 minutes from the metro. Designed to make every guest smile.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={() => setShowComingSoon(!showComingSoon)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4AF37] hover:bg-[#f5d97a] text-black font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
          >
            ✉️ Direct Booking
          </button>
          {showComingSoon && (
            <div className="px-6 py-4 bg-zinc-900 border border-[#D4AF37]/30 rounded-2xl text-center max-w-xs">
              <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-1">Coming Soon ✨</p>
              <p className="text-zinc-400 text-xs leading-relaxed">Direct booking will be available shortly. In the meantime, book via Airbnb or Booking.com.</p>
            </div>
          )}
        </div>
      </header>

      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

        {/* --- כרטיסיית Miron 18 (מופרדת מקישור כדי לאפשר סאונד) --- */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl group">
          
          {/* הקישור עוטף את הכרטיס מאחורה בלבד */}
          <Link href="/athens-urban-vibes" className="absolute inset-0 z-10" aria-label="Explore Miron 18" />

          <div className="relative aspect-[4/3] bg-black overflow-hidden">
            <video
              ref={videoRef}
              src="/miron.mp4"
              autoPlay 
              loop 
              muted // חשוב שיתחיל מושתק כדי שהדפדפן יאשר לו להתנגן אוטומטית
              playsInline
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* כפתור הסאונד יושב מקדימה (z-20) ולא מופרע מהקישור */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 backdrop-blur-sm text-white text-lg w-10 h-10 rounded-full flex items-center justify-center border border-white/20 transition-all cursor-pointer"
              title={muted ? "Unmute" : "Mute"}
            >
              {muted ? '🔇' : '🔊'}
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
              <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-2 font-semibold">Miron 18 · 5 Apartments</div>
              <h2 className="text-3xl font-bold text-white mb-2">Aura Apartments</h2>
              <p className="text-zinc-300 text-sm font-light leading-relaxed">
                Five fully renovated apartments in the heart of Athens. 7 minutes from the metro.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase border border-white/30 px-5 py-2.5 rounded-full group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all duration-300 font-semibold">
                Explore Apartments →
              </div>
            </div>
          </div>
        </div>

        {/* --- כרטיסיית Sky Retreat --- */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl group">
          <Link href="/athenian-sky-retreat" className="absolute inset-0 z-10" aria-label="Explore Sky Retreat" />
          <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
            <Image src="/sky-retreat/cover.jpg" alt="Athenian Sky Retreat" fill className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
              <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-2 font-semibold">Signature Suite · Panoramic Views</div>
              <h2 className="text-3xl font-bold text-white mb-2">Athenian Sky Retreat</h2>
              <p className="text-zinc-300 text-sm font-light leading-relaxed">
                A private rooftop sanctuary with sweeping views over Athens and the surrounding mountains.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase border border-white/30 px-5 py-2.5 rounded-full group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all duration-300 font-semibold">
                Discover the Retreat →
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-zinc-800 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { icon: '📍', label: '7 min from Metro' },
            { icon: '✨', label: 'Fully Renovated' },
            { icon: '🔑', label: 'Self Check-in' },
            { icon: '🌟', label: 'Superhost · Yuval' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-zinc-400 text-xs tracking-widest uppercase font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 py-10 text-center border-t border-zinc-800">
        <p className="text-[#D4AF37] text-xs tracking-[0.5em] uppercase font-light">Making People Smile</p>
      </footer>
    </main>
  );
}