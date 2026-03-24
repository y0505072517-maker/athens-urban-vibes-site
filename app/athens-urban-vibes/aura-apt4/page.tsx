import React from 'react';

export default function ApartmentFour() {
  const images = ["/miron18/apt4/cover.jpg", "/miron18/apt4/img1.jpg", "/miron18/apt4/img2.jpg", "/miron18/apt4/img3.jpg", "/miron18/apt4/img4.jpg", "/miron18/apt4/img5.jpg", "/miron18/apt4/img6.jpg"];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans text-left">
      <nav className="p-6 border-b border-white/10 flex justify-between items-center text-[10px] uppercase tracking-widest sticky top-0 bg-[#1A1A1A]/90 backdrop-blur-sm z-50">
        <a href="/athens-urban-vibes" className="text-gray-500 no-underline hover:text-white transition">← Back to Building</a>
        <span className="text-blue-400 font-bold uppercase tracking-widest italic">Aura No.4</span>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 leading-none text-white">Aura <span className="text-blue-400 block">Apartment 4</span></h1>
          <p className="text-gray-400 uppercase tracking-widest text-[10px] italic">7 Minutes from Metro • Quiet Balcony • Fully Renovated</p>
        </header>

        {/* גלריית תמונות */}
        <div className="space-y-4 mb-24">
          <div className="aspect-video overflow-hidden rounded-lg border border-white/10 shadow-2xl">
            <img src={images[0]} className="w-full h-full object-cover opacity-95" alt="Aura 4 Main" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.slice(1).map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg border border-white/5 group">
                <img src={img} className="w-full h-full object-cover transition-all duration-700 grayscale-0 md:grayscale md:hover:grayscale-0 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16 items-start">
          <div className="md:col-span-2 space-y-12">
            <section>
                <h2 className="text-xl font-bold uppercase tracking-widest mb-6 text-blue-400 border-b border-blue-400/20 pb-2 inline-block">The Space</h2>
                <p className="text-xl text-gray-300 leading-relaxed italic">"Your peaceful urban retreat. Enjoy your morning coffee on the quiet balcony, knowing you are just steps away from the vibrant heart of Athens. A space designed to make you smile."</p>
            </section>
            
            <section>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-bold">Premium Amenities</h3>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                    <div className="flex items-center gap-3"><span className="text-blue-400 text-xl">📶</span> <span className="text-xs uppercase tracking-widest">Fast Wi-Fi</span></div>
                    <div className="flex items-center gap-3"><span className="text-blue-400 text-xl">☕</span> <span className="text-xs uppercase tracking-widest">Nespresso</span></div>
                    <div className="flex items-center gap-3"><span className="text-blue-400 text-xl">❄️</span> <span className="text-xs uppercase tracking-widest">Air Conditioning</span></div>
                    <div className="flex items-center gap-3"><span className="text-blue-400 text-xl">📺</span> <span className="text-xs uppercase tracking-widest">Smart TV</span></div>
                    <div className="flex items-center gap-3"><span className="text-blue-400 text-xl">🤫</span> <span className="text-xs uppercase tracking-widest">Quiet Balcony</span></div>
                </div>
            </section>
          </div>

          {/* קופסת הזמנה */}
          <div className="sticky top-28 bg-white/5 p-8 rounded-xl border border-white/10 text-center shadow-2xl backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-bold">Secure Your Stay</p>
            <div className="space-y-4">
              <a href="https://www.booking.com/hotel/gr/athens-urban-vibes-4-quiet-balcony-peaceful.he.html" target="_blank" className="block w-full bg-[#003580] text-white py-4 rounded font-bold uppercase text-[11px] tracking-widest no-underline hover:opacity-90 transition-all">
                Reserve on Booking.com
              </a>
              <a href="https://he.airbnb.com/rooms/1457139500098527364" target="_blank" className="block w-full bg-[#FF5A5F] text-white py-4 rounded font-bold uppercase text-[11px] tracking-widest no-underline hover:opacity-90 transition-all">
                Book on Airbnb
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1 italic">Coming Soon</p>
              <p className="text-[9px] text-gray-500 uppercase leading-relaxed tracking-tighter">Direct booking engine is on its way.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center opacity-60 border-t border-white/5 mt-20">
        <h2 className="text-2xl md:text-4xl font-medium mb-4 uppercase tracking-[0.2em] italic text-white/90">Making people smile</h2>
      </footer>
    </div>
  );
}