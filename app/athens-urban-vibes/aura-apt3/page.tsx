"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PremiumAuraApartment() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  // נתיבי התמונות (יש לעדכן בהתאם לדירה)
  const images = [
    '/miron18/apt1/img1.jpg', '/miron18/apt1/img2.jpg', '/miron18/apt1/img3.jpg',
    '/miron18/apt1/img4.jpg', '/miron18/apt1/img5.jpg', '/miron18/apt1/img6.jpg',
  ];

  return (
    <main className="min-h-screen bg-[#121212] text-white font-sans selection:bg-blue-500 selection:text-white pb-20">
      
      {/* תפריט ניווט עליון בסגנון הכהה */}
      <nav className="flex justify-between items-center p-6 border-b border-zinc-800 text-xs font-bold tracking-widest text-zinc-400 uppercase">
        <Link href="/athens-urban-vibes" className="hover:text-white transition-colors">
          &larr; BACK TO BUILDING
        </Link>
        <span className="text-blue-500">AURA NO. 3</span>
      </nav>

      {/* אזור כותרת - Hero */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 leading-none text-white">
          AURA<br/><span className="text-blue-500">APARTMENT 1</span>
        </h1>
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase">
          7 MINUTES FROM METRO • BACKYARD BLISS PATIO • FULLY RENOVATED
        </p>
      </header>

      {/* גלריית תמונות עליונה - ניתנת להגדלה! */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] bg-zinc-800 rounded-sm overflow-hidden cursor-pointer group"
              onClick={() => { setCurrentImg(src); setIsOpen(true); }}
            >
              <Image 
                src={src} 
                alt={`Aura Apartment Image ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* אזור תיאור ואמניטיז לעומת הזמנה */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-zinc-800 pt-16">
        
        {/* צד שמאל: טקסט ואמניטיז */}
        <div className="lg:col-span-2">
          <h2 className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-6">The Space</h2>
          <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed italic mb-16">
            "Find your peace in our Backyard Bliss. This ground-floor sanctuary features a private patio, blending urban living with a touch of nature, all designed to make you smile."
          </p>

          <h3 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">Premium Amenities</h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-sm font-medium tracking-wide text-zinc-300 uppercase">
            <div className="flex items-center gap-4"><span className="text-2xl">📶</span> Fast Wi-Fi</div>
            <div className="flex items-center gap-4"><span className="text-2xl">☕</span> Nespresso</div>
            <div className="flex items-center gap-4"><span className="text-2xl">❄️</span> Air Conditioning</div>
            <div className="flex items-center gap-4"><span className="text-2xl">📺</span> Smart TV</div>
            <div className="flex items-center gap-4"><span className="text-2xl">🪴</span> Private Patio</div>
          </div>
        </div>

        {/* צד ימין: קופסת הזמנה */}
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-zinc-800 h-fit sticky top-8">
          <h3 className="text-center text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-8">Secure Your Stay</h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="w-full py-4 bg-[#003580] hover:bg-[#002255] text-white text-center font-bold text-xs tracking-widest uppercase transition-colors rounded-sm">
              Reserve on Booking.com
            </a>
            <a href="#" className="w-full py-4 bg-[#FF5A5F] hover:bg-[#E04040] text-white text-center font-bold text-xs tracking-widest uppercase transition-colors rounded-sm">
              Book on Airbnb
            </a>
          </div>
          <div className="mt-8 text-center border-t border-zinc-800 pt-6">
            <p className="text-blue-500 text-[10px] font-bold tracking-widest uppercase mb-1">Coming Soon</p>
            <p className="text-zinc-600 text-[9px] tracking-widest uppercase">Direct booking engine is on its way.</p>
          </div>
        </div>
      </section>

      {/* חלון הגדלת התמונות (Lightbox) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <button className="absolute top-6 right-8 text-zinc-500 hover:text-white text-4xl transition-colors">&times;</button>
          <div className="relative w-full max-w-5xl h-[85vh]">
            <Image src={currentImg} alt="Enlarged" fill className="object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}