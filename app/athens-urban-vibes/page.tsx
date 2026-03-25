import Link from 'next/link';

const apartments = [
  { id: 1, name: "Urban Base No. 1", tagline: "Fully Renovated", image: "/miron18/apt1/cover.jpg", path: "/athens-urban-vibes/aura-apt1" },
  { id: 2, name: "Backyard Bliss #2", tagline: "Private Patio", image: "/miron18/apt2/cover.jpg", path: "/athens-urban-vibes/aura-apt2" },
  { id: 3, name: "Bright Front Apt #3", tagline: "Sun-Drenched", image: "/miron18/apt3/cover.jpg", path: "/athens-urban-vibes/aura-apt3" },
  { id: 4, name: "Quiet Balcony #4", tagline: "Total Serenity", image: "/miron18/apt4/cover.jpg", path: "/athens-urban-vibes/aura-apt4" },
  { id: 5, name: "Cozy Balcony #5", tagline: "Freshly Renovated", image: "/miron18/apt5/cover.jpg", path: "/athens-urban-vibes/aura-apt5" },
];

export default function AthensLobby() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white font-sans pb-24">
      {/* Header */}
      <header className="text-center py-16 px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
          Athens <span className="text-[#D4AF37]">Urban Vibes</span>
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto">Five unique residences in the heart of Athens.</p>
      </header>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {apartments.map((apt) => (
          <Link key={apt.id} href={apt.path} className="group block">
            <div className="bg-[#141414] rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37]/50 transition-all shadow-2xl">
              <div className="relative h-64 w-full">
                <img 
                  src={apt.image} 
                  alt={apt.name} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all"
                />
              </div>
              <div className="p-6">
                <span className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-bold">{apt.tagline}</span>
                <h2 className="text-2xl font-bold mt-1">{apt.name}</h2>
                <div className="mt-4 pt-4 border-t border-zinc-800 text-[#D4AF37] text-xs font-black uppercase tracking-widest">
                  Explore Residence →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <footer className="mt-24 border-t border-zinc-800 py-12 text-center text-zinc-600 text-[10px] tracking-[0.3em] uppercase">
        Athens Urban Vibes · 2026
      </footer>
    </main>
  );
}