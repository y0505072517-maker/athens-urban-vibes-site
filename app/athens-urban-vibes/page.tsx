import React from 'react';

export default function BuildingLobby() {
  const apartments = [
    { id: 1, name: "Aura 1", tag: "Modern Loft", img: "/miron18/apt1/cover.jpg" },
    { id: 2, name: "Aura 2", tag: "Backyard Bliss", img: "/miron18/apt2/cover.jpg" },
    { id: 3, name: "Aura 3", tag: "Bright Sunny", img: "/miron18/apt3/cover.jpg" },
    { id: 4, name: "Aura 4", tag: "Quiet Balcony", img: "/miron18/apt4/cover.jpg" },
    { id: 5, name: "Aura 5", tag: "Cozy Renovated", img: "/miron18/apt5/cover.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans text-left">
      <nav className="p-6 border-b border-white/10 flex justify-between items-center text-[10px] uppercase tracking-widest sticky top-0 bg-[#1A1A1A]/90 backdrop-blur-sm z-50">
        <a href="/" className="text-gray-500 no-underline hover:text-white transition">← Back to Main</a>
        <span className="text-blue-400 font-bold uppercase tracking-widest italic tracking-[0.3em]">Aura Boutique Building</span>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">Aura <span className="text-blue-400 block">Miron 18</span></h1>
          <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] italic">Fully Renovated Boutique Building • 7 Minutes from Metro</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {apartments.map((apt) => (
            <a key={apt.id} href={`/athens-urban-vibes/aura-apt${apt.id}`} className="group no-underline relative aspect-square bg-[#111] overflow-hidden rounded-lg border border-white/5 shadow-xl transition-all hover:border-blue-400/30">
              <img src={apt.img} className="object-cover w-full h-full opacity-90 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <p className="text-[9px] uppercase tracking-widest text-blue-400 font-bold">{apt.tag}</p>
                <h3 className="text-2xl font-bold uppercase">{apt.name}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* Google Map Section */}
        <section className="pt-20 border-t border-white/5">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-10 text-blue-400">Our Location</h2>
          <div className="w-full h-[400px] bg-white/5 rounded-xl overflow-hidden border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.123!2d23.727!3d37.994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3a2e3f5f5f%3A0x0!2zMzfCsDU5JzM4LjQiTiAyM8KwNDMnMzcuMiJF!5e0!3m2!1sen!2sgr!4v1711030000000!5m2!1sen!2sgr" 
              className="w-full h-full border-0" 
              loading="lazy">
            </iframe>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center opacity-60">
         <h2 className="text-2xl font-medium mb-4 uppercase tracking-[0.2em] italic text-white/90">Making people smile</h2>
      </footer>
    </div>
  );
}