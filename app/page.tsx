"use client";

import React from 'react';

export default function Home() {
  const handleComingSoon = () => {
    alert("We are working on our direct booking engine to bring you the best rates! For now, please use the Booking.com or Airbnb links on our apartment pages. Thank you for your patience!");
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans text-left">
      {/* תפריט עליון מעודכן */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10 sticky top-0 bg-[#1A1A1A]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold tracking-tighter uppercase">Urban Vibes</span>
        </div>
        
        {/* כפתור סטטוס בקרוב */}
        <button 
          onClick={handleComingSoon}
          className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold border border-white/10 px-4 py-2 rounded text-gray-500 hover:text-blue-400 hover:border-blue-400/30 transition-all"
        >
          Direct Booking: Coming Soon
        </button>
      </nav>

      {/* כותרת מרכזית */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">
          Boutique <span className="text-blue-400">Stays.</span>
        </h1>
        <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px]">Athens, Greece</p>
      </section>

      {/* כרטיסי ניווט */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <a href="/athens-urban-vibes" className="group no-underline relative aspect-[3/4] bg-[#111] overflow-hidden rounded-md border border-white/10 shadow-2xl">
          <video src="/miron.mp4" autoPlay loop muted playsInline className="object-cover w-full h-full opacity-80 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
             <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-2">Building One</p>
             <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Aura Apartments</h3>
          </div>
        </a>

        <a href="/athenian-sky-retreat" className="group no-underline relative aspect-[3/4] bg-[#111] overflow-hidden rounded-md border border-white/10 shadow-2xl">
          <img src="/retreat.jpg" alt="Retreat" className="object-cover w-full h-full opacity-80 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
             <p className="text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-2">Signature Suite</p>
             <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Sky Retreat</h3>
          </div>
        </a>
      </section>

      {/* הסיפור שלנו */}
      <section className="py-32 px-6 max-w-3xl mx-auto text-center border-t border-white/5">
        <h2 className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Our Story</h2>
        <p className="text-2xl md:text-4xl font-light leading-snug italic text-gray-200">
          "At Athens Urban Vibes, our mission is simple: **we create spaces designed to make people smile.** Every detail of our boutique renovations is crafted to turn your stay into a joyful memory."
        </p>
      </section>

      {/* פוטר */}
      <footer className="py-20 text-center border-t border-white/5 mt-20 opacity-60">
        <h2 className="text-2xl md:text-4xl font-medium mb-4 uppercase tracking-[0.2em] italic text-white/90">Making people smile</h2>
        <p className="text-[10px] uppercase tracking-[0.6em] text-gray-500">Athens Urban Vibes Hospitality Group</p>
      </footer>
    </div>
  );
}