"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PremiumAuraApt3Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const images = Array.from({ length: 6 }).map((_, i) => `https://via.placeholder.com/800x600/121212/D4AF37?text=Aura+3+Image+${i + 1}`);

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#D4AF37] selection:text-black pb-20">
      <nav className="flex justify-between items-center p-6 border-b border-zinc-800 text-xs font-bold tracking-widest text-zinc-500 uppercase">
        <Link href="/athens-urban-vibes" className="hover:text-white transition-colors">
          &larr; MIRON 18 BUILDING
        </Link>
        <span className="text-blue-500">RESIDENCE 3</span> {/* כותרת נכונה */}
      </nav>

      <header className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-4 leading-none">
          AURA<br/><span className="text-blue-500">APARTMENT 3</span> {/* כותרת נכונה */}
        </h1>
        <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase">
          MINIMALIST STUDIO • SMART DESIGN • BACKYARD VIEW
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden cursor-pointer group" onClick={() => { setCurrentImg(src); setIsOpen(true); }}>
              <Image src={src} alt={`Aura Apartment 3 Image ${index + 1}`} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" unoptimized />
            </div>
          ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-zinc-800 pt-16">
        <div className="lg:col-span-2">
          <h2 className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-6">The Minimalist Space</h2>
          <p className="text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed italic mb-16 max-w-4xl">
            "Designed for efficiency and style. Our Minimalist Studio offers smart living in a quiet urban setting."
          </p>
          <h3 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">Premium Amenities</h3>
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-sm font-medium tracking-wide text-zinc-200 uppercase">
            <div className="flex items-center gap-4"><span className="text-2xl">📶</span> Fast Wi-Fi</div>
            <div className="flex items-center gap-4"><span className="text-2xl">☕</span> Nespresso</div>
            <div className="flex items-center gap-4"><span className="text-2xl">📺</span> Smart TV</div>
          </div>
        </div>
        <div className="bg-[#141414] p-10 rounded-2xl border border-zinc-800 sticky top-10 h-fit">
          <h3 className="text-center text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-10">Secure Your Stay</h3>
          <div className="flex flex-col gap-5">
            <a href="#" className="w-full py-4 bg-[#003580] hover:bg-[#002255] text-white text-center font-bold text-xs tracking-widest uppercase rounded-sm transition-colors">Reserve on Booking.com</a>
            <a href="#" className="w-full py-4 bg-[#FF5A5F] hover:bg-[#E04040] text-white text-center font-bold text-xs tracking-widest uppercase rounded-sm transition-colors">Book on Airbnb</a>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <button className="absolute top-6 right-8 text-zinc-500 hover:text-white text-5xl font-extralight transition-colors">&times;</button>
          <div className="relative w-full max-w-6xl h-[85vh]"><Image src={currentImg} alt="Enlarged" fill className="object-contain" unoptimized /></div>
        </div>
      )}
    </main>
  );
}