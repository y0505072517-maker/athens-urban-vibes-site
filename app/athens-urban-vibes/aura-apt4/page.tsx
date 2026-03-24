"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const APT = {
  number: 4,
  name: "Aura Apartment 4",
  tagline: "Quiet Balcony Serenity",
  subtitle: "PRIVATE BALCONY · BRAND NEW QUEEN BED · ROMANTIC STUDIO",
  description: `Newly renovated and designed for couples. A bright open-plan studio with a brand new queen bed, memory foam mattress and a private balcony for quiet mornings or evening wine. Located in a calm, safe neighbourhood — yet just 7 minutes from the metro and all of Athens. Everything here is fresh, clean and thoughtfully curated. The perfect romantic base.`,
  guests: 2,
  beds: 1,
  baths: 1,
  sleeps: "1 Queen Bed (Memory Foam)",
  bookingUrl: "https://www.booking.com/hotel/gr/athens-urban-vibes-4-quiet-balcony-peaceful.he.html",
  airbnbUrl: "https://he.airbnb.com/rooms/1457139500098527364",
  amenities: [
    { icon: "🌇", label: "Private Balcony" },
    { icon: "🛏", label: "Queen Bed" },
    { icon: "❄️", label: "Air Conditioning" },
    { icon: "📶", label: "Fast Wi-Fi" },
    { icon: "☕", label: "Coffee Machine" },
    { icon: "🧺", label: "Washing Machine" },
    { icon: "📺", label: "Smart TV" },
    { icon: "🔑", label: "Smart Lock" },
  ],
  images: [
    '/miron18/apt4/img1.jpg',
    '/miron18/apt4/img2.jpg',
    '/miron18/apt4/img3.jpg',
    '/miron18/apt4/img4.jpg',
    '/miron18/apt4/img5.jpg',
    '/miron18/apt4/img6.jpg',
  ],
};

export default function AuraApt4Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const openLightbox = (src: string) => { setCurrentImg(src); setLightboxOpen(true); };

  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white font-sans pb-24 selection:bg-[#D4AF37] selection:text-black">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E3A8A]/15 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/8 blur-[120px] rounded-full" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-zinc-800">
        <Link href="/athens-urban-vibes" className="text-zinc-400 hover:text-[#D4AF37] transition-colors text-xs tracking-widest uppercase font-semibold flex items-center gap-2">
          ← Miron 18
        </Link>
        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold">Residence {APT.number}</span>
        <div className="w-20" />
      </nav>

      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-semibold mb-4">{APT.tagline}</div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-4">
          Aura<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5d97a]">
            Apartment 4
          </span>
        </h1>
        <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-semibold mt-2">{APT.subtitle}</p>
        <div className="flex gap-6 mt-8 text-zinc-400 text-sm">
          <span>👥 {APT.guests} guests</span>
          <span>🛏 {APT.beds} bedroom</span>
          <span>🚿 {APT.baths} bath</span>
          <span>🛌 {APT.sleeps}</span>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {APT.images.map((src, i) => (
            <div key={i} onClick={() => openLightbox(src)} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer group border border-zinc-800 hover:border-[#D4AF37]/50 transition-all">
              <Image src={src} alt={`${APT.name} photo ${i + 1}`} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-zinc-800 pt-16">
        <div className="lg:col-span-2">
          <h2 className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold mb-6">About This Space</h2>
          <p className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed mb-12 max-w-3xl">{APT.description}</p>
          <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-zinc-500 mb-8">Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {APT.amenities.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-2 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center">
                <span className="text-2xl">{a.icon}</span>
                <span className="text-zinc-300 text-xs uppercase tracking-wider font-semibold">{a.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-zinc-800 pt-10">
            <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-zinc-500 mb-6">Good to Know</h3>
            <div className="grid grid-cols-2 gap-4 text-zinc-400 text-sm">
              <div>🔑 Self check-in · Smart lock</div>
              <div>🚗 Free street parking</div>
              <div>🚇 7 min walk to Metro</div>
              <div>🧳 Long stays welcome</div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-[#141414] border border-zinc-700 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold mb-1">Secure Your Stay</div>
              <h3 className="text-white text-xl font-bold">{APT.name}</h3>
              <p className="text-zinc-500 text-xs mt-1">{APT.tagline}</p>
            </div>
            <div className="flex flex-col gap-4">
              {APT.airbnbUrl && (
                <a href={APT.airbnbUrl} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#FF5A5F] hover:bg-[#e04040] text-white text-center font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <span>🏠</span> Book on Airbnb
                </a>
              )}
              {APT.bookingUrl && (
                <a href={APT.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#003580] hover:bg-[#002255] text-white text-center font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <span>📅</span> Reserve on Booking.com
                </a>
              )}
            </div>
            <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
              <p className="text-zinc-600 text-xs">Hosted by <span className="text-zinc-400 font-semibold">Yuval</span> · Superhost</p>
              <p className="text-zinc-600 text-xs mt-1">Self check-in · Free cancellation</p>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/97 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-6 right-8 text-zinc-500 hover:text-white text-5xl font-thin transition-colors">×</button>
          <div className="relative w-full max-w-5xl h-[85vh]">
            <Image src={currentImg} alt="Enlarged view" fill className="object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}