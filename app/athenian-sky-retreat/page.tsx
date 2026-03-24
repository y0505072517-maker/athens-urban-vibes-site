import React from 'react';

export default function SkyRetreat() {
  const images = [
    "/sky-retreat/cover.jpg",
    "/sky-retreat/img1.jpg", "/sky-retreat/img2.jpg", "/sky-retreat/img3.jpg",
    "/sky-retreat/img4.jpg", "/sky-retreat/img5.jpg", "/sky-retreat/img6.jpg",
    "/sky-retreat/img7.jpg", "/sky-retreat/img8.jpg", "/sky-retreat/img9.jpg"
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] font-sans text-left">
      <nav className="p-6 border-b border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] sticky top-0 bg-[#0F0F0F]/90 backdrop-blur-sm z-50">
        <a href="/" className="text-gray-500 no-underline hover:text-white transition-all">← Main Portfolio</a>
        <span className="text-orange-400 font-bold italic">Signature Suite</span>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-16 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 leading-none text-white">
            Athenian <span className="text-orange-400 block">Sky Retreat</span>
          </h1>
          <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] mb-8 italic">Ultimate Luxury • Panoramic Views • Acropolis Area</p>
        </header>

        {/* גלריה רחבה */}
        <div className="space-y-4 mb-24">
          <div className="aspect-[21/9] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
            <img src={images[0]} className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.slice(1).map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-sm border border-white/5 group shadow-lg">
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-all duration-700 grayscale-0 md:grayscale md:hover:grayscale-0 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start border-t border-white/10 pt-16">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-orange-400">The Signature Experience</h2>
              <p className="text-xl text-gray-300 leading-relaxed italic mt-6">
                "A sanctuary above the clouds. Designed for the traveler who demands excellence, the Athenian Sky Retreat offers a blend of high-end aesthetics and a warm Mediterranean soul. We promise to make you smile from the moment you step in."
              </p>
            </section>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-white/5">
                <div><p className="text-[10px] text-gray-500 uppercase mb-2 tracking-widest">Type</p><p className="font-bold text-lg text-white">Penthouse</p></div>
                <div><p className="text-[10px] text-gray-500 uppercase mb-2 tracking-widest">Sleeps</p><p className="font-bold text-lg text-white">Premium 2</p></div>
                <div><p className="text-[10px] text-gray-500 uppercase mb-2 tracking-widest">Views</p><p className="font-bold text-lg text-white">City View</p></div>
                <div><p className="text-[10px] text-gray-500 uppercase mb-2 tracking-widest">Service</p><p className="font-bold text-lg text-white">VIP Access</p></div>
            </div>
          </div>

          {/* קופסת הזמנה יוקרתית */}
          <div className="sticky top-28 bg-white/5 p-8 rounded-sm border border-white/10 text-center backdrop-blur-sm shadow-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-orange-400 mb-6 font-bold">Secure Your Stay</p>
            <div className="space-y-4">
              <a href="https://www.booking.com/hotel/gr/athenian-sky-retreat.he.html" target="_blank" className="block w-full bg-[#003580] text-white py-4 rounded font-bold uppercase text-[11px] tracking-widest no-underline hover:opacity-90 transition-all">
                Reserve on Booking.com
              </a>
              <a href="https://he.airbnb.com/rooms/1335381285857416232" target="_blank" className="block w-full bg-[#FF5A5F] text-white py-4 rounded font-bold uppercase text-[11px] tracking-widest no-underline hover:opacity-90 transition-all">
                Book on Airbnb
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mb-1 italic">Coming Soon</p>
              <p className="text-[9px] text-gray-500 uppercase leading-relaxed tracking-tighter">Exclusive direct booking is on its way.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center border-t border-white/5 mt-20 opacity-60">
        <h2 className="text-2xl md:text-4xl font-medium mb-4 uppercase tracking-[0.2em] italic text-white/90">Making people smile</h2>
        <p className="text-[10px] uppercase tracking-[0.6em] text-gray-500">Athens Urban Vibes Hospitality Group</p>
      </footer>
    </div>
  );
}