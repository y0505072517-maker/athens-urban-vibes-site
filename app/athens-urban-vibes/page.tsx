import Link from 'next/link';
import Image from 'next/image';

const apartments = [
  {
    id: 1,
    name: "Aura Apartment 1",
    tagline: "Backyard Bliss Patio",
    description: "A light-filled loft with a rare private patio — your own urban garden in the heart of Athens.",
    guests: 4, beds: 1, baths: 1,
    highlights: ["Private Patio", "Sleeps 4", "Nespresso", "7 min Metro"],
    // [מאומת] תקין, C גדולה.
    image: "/miron18/apt1/Cover.jpg",
    path: "/athens-urban-vibes/aura-apt1",
  },
  {
    id: 2,
    name: "Aura Apartment 2",
    tagline: "Backyard Garden Retreat",
    description: "Glass doors open onto a secluded garden patio with LED lighting. Perfect for couples.",
    guests: 4, beds: 2, baths: 1,
    highlights: ["Private Garden", "Espresso Machine", "Queen Bed", "Romantic"],
    // [תיקון] שונה ל-C גדולה כדי להתאים לצילום המסך!
    image: "/miron18/apt2/Cover.jpg",
    path: "/athens-urban-vibes/aura-apt2",
  },
  {
    id: 3,
    name: "Aura Apartment 3",
    tagline: "Sun-Drenched Front Apartment",
    description: "The brightest apartment in the building. Bold teal sofa, lush plants, 4K Smart TV and a balcony.",
    guests: 4, beds: 1, baths: 1,
    highlights: ["4K Smart TV", "Balcony", "Espresso Machine", "Max Light"],
    // [תיקון] שונה ל-C גדולה
    image: "/miron18/apt3/Cover.jpg",
    path: "/athens-urban-vibes/aura-apt3",
  },
  {
    id: 4,
    name: "Aura Apartment 4",
    tagline: "Quiet Balcony Serenity",
    description: "Newly renovated romantic studio. Brand new queen bed with memory foam and private balcony.",
    guests: 2, beds: 1, baths: 1,
    highlights: ["Private Balcony", "Memory Foam Bed", "Romantic", "Quiet"],
    // [תיקון] שונה ל-C גדולה
    image: "/miron18/apt4/Cover.jpg",
    path: "/athens-urban-vibes/aura-apt4",
  },
  {
    id: 5,
    name: "Aura Apartment 5",
    tagline: "Cozy Balcony Studio",
    description: "Minimalist, freshly renovated and flooded with natural light. Great for long stays.",
    guests: 2, beds: 1, baths: 1,
    highlights: ["Private Balcony", "Orthopedic Bed", "Long Stays OK", "Smart Lock"],
    // [תיקון] שונה ל-C גדולה
    image: "/miron18/apt5/Cover.jpg",
    path: "/athens-urban-vibes/aura-apt5",
  },
];

export default function MironBuildingLobbyPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white font-sans pb-24 selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1E3A8A]/15 blur-[150px] rounded-full" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-zinc-800">
        <Link href="/" className="text-zinc-400 hover:text-[#D4AF37] transition-colors text-xs tracking-widest uppercase font-semibold flex items-center gap-2">
          ← Back to Main Lobby
        </Link>
        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold">Athens Urban Vibes · Klisovou 4</span>
        <div className="w-20" />
      </nav>

      {/* Header */}
      <header className="relative z-10 text-center py-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-semibold">Athens, Greece · 5 Residences</span>
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-4">
          Athens{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5d97a]">
            Urban Vibes
          </span>
        </h1>
        <p className="text-zinc-400 text-base font-light max-w-xl mx-auto mt-4 leading-relaxed">
          Five fully renovated apartments. Each one unique — all designed to make you smile.
        </p>
      </header>

      {/* Apartments Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apartments.map((apt) => (
          <Link key={apt.id} href={apt.path} className="group block h-full">
            <div className="bg-[#141414] h-full rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:-translate-y-1 flex flex-col">
              
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-900 flex-shrink-0">
                <Image
                  src={apt.image}
                  alt={apt.name}
                  fill
                  unoptimized // דרוש כדי למנוע שגיאות Cache בשרת
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm text-[#D4AF37] text-xs px-3 py-1 rounded-full tracking-widest uppercase font-semibold border border-[#D4AF37]/30">
                    Res #0{apt.id}
                  </span>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-semibold mb-1">{apt.tagline}</div>
                <h2 className="text-2xl font-bold text-white mb-2">{apt.name}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{apt.description}</p>
                
                {/* Specs */}
                <div className="flex gap-4 text-zinc-500 text-xs mb-5 border-t border-zinc-800 pt-5">
                  <span>👤 {apt.guests} guests</span>
                  <span>🛌 {apt.beds} bed</span>
                  <span>🚿 {apt.baths} bath</span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {apt.highlights.map((h) => (
                    <span key={h} className="text-zinc-400 bg-zinc-800/80 text-xs px-2.5 py-1 rounded-full">{h}</span>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-xs tracking-widest uppercase font-bold text-[#D4AF37] flex items-center gap-2 mt-auto border-t border-zinc-800 pt-5">
                  View Apartment →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-zinc-800 py-12 text-center">
        <p className="text-zinc-600 text-xs tracking-widest uppercase font-light">
          Athens Urban Vibes · Klisovou 4, Athens · superhost
        </p>
      </footer>
    </main>
  );
}