"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const APT = {
  number: 1,
  name: "Aura Apartment 1",
  tagline: "Backyard Bliss Patio",
  subtitle: "7 MIN FROM METRO · PRIVATE PATIO · SLEEPS 4 · FULLY RENOVATED",
  description: `A light-filled, modern apartment in the heart of Athens — steps from the metro and surrounded by the city's best cafés and restaurants. The standout feature: your own private patio, a rare urban oasis with natural greenery and ambient lighting. Renovated to a high standard with natural wood finishes, premium queen bed, full kitchen and fast Wi-Fi.`,
  guests: 4,
  beds: 1,
  baths: 1,
  sleeps: "1 Queen Bed",
  bookingUrl: "",
  airbnbUrl: "https://he.airbnb.com/rooms/1457080095293779783",
  amenities: [
    { icon: "📶", label: "Fast Wi-Fi" },
    { icon: "☕", label: "Nespresso" },
    { icon: "❄️", label: "Air Conditioning" },
    { icon: "🪴", label: "Private Patio" },
    { icon: "🍳", label: "Full Kitchen" },
    { icon: "🧺", label: "Washing Machine" },
    { icon: "📺", label: "HD Smart TV" },
    { icon: "🔑", label: "Self Check-in" },
  ],
  images: [
    '/miron18/apt1/img1.jpg',
    '/miron18/apt1/img2.jpg',
    '/miron18/apt1/img3.jpg',
    '/miron18/apt1/img4.jpg',
    '/miron18/apt1/img5.jpg',
    '/miron18/apt1/img6.jpg',
  ],
};

export default function AuraApt1Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const openLightbox = (src: string) => { setCurrentImg(src); setLightboxOpen(true); };

  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white font-sans pb-24 selection:bg-[#D4AF37] selection:text-black">

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E3A8A]/15 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/8 blur-[120px] rounded-full" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-zinc-800">
        <Link href="/athens-urban-vibes" className="text-zinc-400 hover:text-[#D4AF37] transition-colors text-xs tracking-widest uppercase font-semibold flex items-center gap-2">
          ← Miron 18
        </Link>
        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold">Residence {APT.number}</span>
        <div className="w-20" />
      </nav>

      {/* Hero Header — קומפקטי */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-semibold mb-3">{APT.tagline}</div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none mb-3">
              Aura <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5d97a]">Apartment 1</span>
            </h1>
            <p className="text-zinc-500 text-xs tracking-[0.15em] uppercase font-semibold">{APT.subtitle}</p>
          </div>
          <div className="flex gap-5 text-zinc-400 text-sm shrink-0">
            <span>👥 {APT.guests}</span>
            <span>🛏 {APT.beds} bed</span>
            <span>🚿 {APT.baths} bath</span>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {APT.images.map((src, i) => (
            <div
              key={i}
              onClick={() => openLightbox(src)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer group border border-zinc-800 hover:border-[#D4AF37]/50 transition-all"
            >
              <Image src={src} alt={`${APT.name} photo ${i + 1}`} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Details + Booking */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 border-t border-zinc-800 pt-12">

        {/* Left */}
        <div className="lg:col-span-2 space-y-10">

          {/* Description */}
          <div>
            <h2 className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold mb-4">About This Space</h2>
            <p className="text-lg text-zinc-300 font-light leading-relaxed">{APT.description}</p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-zinc-500 mb-6">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {APT.amenities.map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-2 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center hover:border-[#D4AF37]/30 transition-colors">
                  <span className="text-2xl">{a.icon}</span>
                  <span className="text-zinc-300 text-xs uppercase tracking-wider font-semibold">{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Good to know */}
          <div className="border-t border-zinc-800 pt-8">
            <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-zinc-500 mb-5">Good to Know</h3>
            <div className="grid grid-cols-2 gap-3 text-zinc-400 text-sm">
              <div>🔑 Self check-in · Smart lock</div>
              <div>🚗 Free street parking</div>
              <div>🚇 7 min walk to Metro</div>
              <div>🧯 Fire extinguisher on site</div>
            </div>
          </div>
        </div>

        {/* Right — Booking Box */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-[#141414] border border-zinc-700 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold mb-1">Secure Your Stay</div>
              <h3 className="text-white text-lg font-bold">{APT.name}</h3>
              <p className="text-zinc-500 text-xs mt-1">{APT.tagline}</p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Airbnb — לינק אמיתי */}
              
                href={APT.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#FF5A5F] hover:bg-[#e04040] text-white text-center font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                🏠 Book on Airbnb
              </a>

              {/* Booking — Coming Soon */}
              <div className="w-full py-4 bg-zinc-800/60 border border-zinc-700 text-center rounded-xl cursor-not-allowed">
                <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase">Booking.com</p>
                <p className="text-[#D4AF37] text-xs mt-1 tracking-wider">Coming Soon</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
              <p className="text-zinc-600 text-xs">Hosted by <span className="text-zinc-400 font-semibold">Yuval</span> · Superhost</p>
              <p className="text-zinc-600 text-xs mt-1">Self check-in · Free cancellation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/97 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <button className="absolute top-6 right-8 text-zinc-500 hover:text-white text-5xl font-thin transition-colors">×</button>
          <div className="relative w-full max-w-5xl h-[85vh]">
            <Image src={currentImg} alt="Enlarged view" fill className="object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}
```

---

**הרץ:**
```
git add .
git commit -m "Apt1: fix layout, booking links, coming soon"
git push