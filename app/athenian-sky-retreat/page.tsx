"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RETREAT = {
  bookingUrl: "https://www.booking.com/hotel/gr/athenian-sky-retreat.he.html",
  airbnbUrl: "https://he.airbnb.com/rooms/1335381285857416232",
  images: [
    '/sky-retreat/img1.jpg',
    '/sky-retreat/img2.jpg',
    '/sky-retreat/img3.jpg',
    '/sky-retreat/img4.jpg',
    '/sky-retreat/img5.jpg',
    '/sky-retreat/img6.jpg',
    '/sky-retreat/img7.jpg',
    '/sky-retreat/img8.jpg',
    '/sky-retreat/img9.jpg',
    '/sky-retreat/img10.jpg',
  ],
};

export default function SkyRetreatPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const openLightbox = (src: string) => { setCurrentImg(src); setLightboxOpen(true); };

  return (
    <main className="min-h-screen bg-[#080808] text-white font-sans pb-32 selection:bg-[#D4AF37] selection:text-black">

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4AF37]/8 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1E3A8A]/10 blur-[150px] rounded-full" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6">
        <Link href="/" className="text-[#D4AF37] hover:text-white transition-colors text-xs tracking-widest uppercase font-semibold flex items-center gap-2">
          ← Main Lobby
        </Link>
        <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase">Signature Suite</span>
        <div className="w-24" />
      </nav>

      {/* Hero */}
      <section className="relative h-[90vh] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
        <Image
          src="/sky-retreat/cover.jpg"
          alt="Athenian Sky Retreat"
          fill
          className="object-cover opacity-75"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-semibold">Signature Suite · Athens</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none text-white mb-4">
            Athenian<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f5d97a] to-[#D4AF37]">
              Sky Retreat
            </span>
          </h1>
          <p className="text-zinc-300 text-lg font-light tracking-widest uppercase">
            Private Terrace · Panoramic Views · Athens
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="relative z-10 border-y border-zinc-800 bg-[#0e0e0e]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center md:justify-between gap-6 text-center">
          {[
            { icon: "👥", label: "2 Guests" },
            { icon: "🛏", label: "1 Bedroom" },
            { icon: "🚿", label: "1 Bathroom" },
            { icon: "🌇", label: "Large Private Terrace" },
            { icon: "🚇", label: "Public Transport Nearby" },
            { icon: "🔑", label: "Self Check-in" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-zinc-400 text-sm">
              <span>{s.icon}</span>
              <span className="text-xs uppercase tracking-wider font-semibold">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <section className="relative z-10 max-w-5xl mx-auto py-24 px-6 text-center">
        <div className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-bold mb-10">The Experience</div>
        <p className="text-3xl md:text-4xl font-light leading-relaxed text-white mb-8">
          A fully renovated apartment perched above Athens, with a sweeping private terrace and open views over the city and surrounding mountains.
        </p>
        <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
          The Sky Retreat is the kind of place you'll talk about long after you leave. Wake up to mountain views, brew coffee on your private terrace, spend the day exploring ancient Athens, and return to a space that genuinely feels like home. Induction hob, Nespresso, L-shaped sofa, king bed, renovated bathroom and washing machine — everything is here. Cafés, bakeries and a supermarket are 5 minutes on foot.
        </p>
      </section>

      {/* Highlights */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🌇", title: "Sweeping Terrace", desc: "A spacious private terrace with panoramic views over Athens and the mountains — perfect for morning coffee or evening wine." },
            { icon: "🍳", title: "Modern Kitchen", desc: "Induction hob, built-in oven, large fridge, kettle and Nespresso machine. Clean, modern and ready for cooking." },
            { icon: "🛋️", title: "Bright Living Room", desc: "Large L-shaped sofa, Smart TV and oversized windows flooding the space with natural light." },
            { icon: "🛏", title: "Quiet Bedroom", desc: "Comfortable double bed, soft linen and large wardrobes. Ideal for extended stays." },
            { icon: "🚿", title: "Renovated Bathroom", desc: "Modern shower, elegant fixtures and a washing machine for your convenience." },
            { icon: "📶", title: "Fast Wi-Fi", desc: "High-speed internet suitable for remote work, video calls and streaming." },
          ].map((h) => (
            <div key={h.title} className="bg-[#111] border border-zinc-800 hover:border-[#D4AF37]/40 rounded-2xl p-8 transition-all duration-300">
              <div className="text-3xl mb-4">{h.icon}</div>
              <h3 className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">{h.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <div className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-bold mb-3">Gallery</div>
          <h2 className="text-3xl font-light text-white">The Space</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {RETREAT.images.map((src, i) => (
            <div key={i} onClick={() => openLightbox(src)} className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900 cursor-pointer group border border-zinc-800 hover:border-[#D4AF37]/50 transition-all">
              <Image src={src} alt={`Sky Retreat photo ${i + 1}`} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" unoptimized />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="bg-[#111] border border-zinc-700 rounded-3xl p-10 text-center shadow-2xl">
          <div className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-bold mb-4">Book Your Stay</div>
          <h2 className="text-3xl font-light text-white mb-2">Athenian Sky Retreat</h2>
          <p className="text-zinc-500 text-sm mb-8">Hosted by Yuval · Self check-in · Free cancellation</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={RETREAT.airbnbUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#FF5A5F] hover:bg-[#e04040] text-white text-center font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
              <span>🏠</span> Book on Airbnb
            </a>
            <a href={RETREAT.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#003580] hover:bg-[#002255] text-white text-center font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
              <span>📅</span> Reserve on Booking.com
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-3 gap-4 text-center">
            <div><p className="text-zinc-600 text-xs uppercase tracking-wider">Parking</p><p className="text-zinc-300 text-xs mt-1">Free Street</p></div>
            <div><p className="text-zinc-600 text-xs uppercase tracking-wider">Check-in</p><p className="text-zinc-300 text-xs mt-1">Self · Smart Lock</p></div>
            <div><p className="text-zinc-600 text-xs uppercase tracking-wider">Safety</p><p className="text-zinc-300 text-xs mt-1">Camera · Fire Kit</p></div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mt-20 py-10 text-center border-t border-zinc-800">
        <p className="text-[#D4AF37] text-xs tracking-[0.5em] uppercase font-light">Making People Smile</p>
      </footer>

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
```

---

## 🎉 סיימת את כל 8 הקבצים!

עכשיו פתח את ה-Terminal ב-VS Code (תפריט `Terminal` → `New Terminal`) והרץ:
```
git add .
git commit -m "Full website redesign with real booking links"
git push