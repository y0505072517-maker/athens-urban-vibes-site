import Link from 'next/link';
import Image from 'next/image';

const apartments = [
  {
    id: 1,
    name: "Aura Apartment 1",
    tagline: "Backyard Bliss Patio",
    description: "A light-filled loft with a rare private patio — your own urban garden in the heart of Athens. Designed for those who seek tranquility without leaving the city buzz.",
    guests: 4, beds: 1, baths: 1,
    highlights: ["Private Patio", "Sleeps 4", "Nespresso", "7 min Metro"],
    // מושך מהתיקייה המדויקת שהראית לי עם c קטנה
    image: "/miron18/apt1/cover.jpg",
    path: "/athens-urban-vibes/aura-apt1",
  },
  {
    id: 2,
    name: "Aura Apartment 2",
    tagline: "Backyard Garden Retreat",
    description: "Glass doors open onto a secluded garden patio with custom LED lighting. A romantic sanctuary perfect for couples looking for a stylish escape.",
    guests: 4, beds: 2, baths: 1,
    highlights: ["Private Garden", "Espresso Machine", "Queen Bed", "Romantic Glow"],
    image: "/miron18/apt2/cover.jpg",
    path: "/athens-urban-vibes/aura-apt2",
  },
  {
    id: 3,
    name: "Aura Apartment 3",
    tagline: "Sun-Drenched Front View",
    description: "The brightest gem in the building. Featuring a bold teal sofa, lush indoor plants, and a private balcony overlooking the local vibe.",
    guests: 4, beds: 1, baths: 1,
    highlights: ["4K Smart TV", "Balcony", "Max Natural Light", "Modern Art"],
    image: "/miron18/apt3/cover.jpg",
    path: "/athens-urban-vibes/aura-apt3",
  },
  {
    id: 4,
    name: "Aura Apartment 4",
    tagline: "Quiet Balcony Serenity",
    description: "Newly renovated romantic studio. Features a brand new queen bed with memory foam and a private balcony for your morning Greek coffee.",
    guests: 2, beds: 1, baths: 1,
    highlights: ["Private Balcony", "Memory Foam Bed", "Quiet Side", "Minimalist"],
    image: "/miron18/apt4/cover.jpg",
    path: "/athens-urban-vibes/aura-apt4",
  },
  {
    id: 5,
    name: "Aura Apartment 5",
    tagline: "Cozy Balcony Studio",
    description: "Minimalist, freshly renovated and flooded with natural light. An efficient and stylish space designed for digital nomads or solo travelers.",
    guests: 2, beds: 1, baths: 1,
    highlights: ["Private Balcony", "Orthopedic Bed", "Work-Friendly", "Smart Lock"],
    image: "/miron18/apt5/cover.jpg",
    path: "/athens-urban-vibes/aura-apt5",
  },
];

export default function AthensUrbanVibesLobby() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white font-sans pb-24 selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Glow Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1E3A8A]/10 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-zinc-800 bg-black/20 backdrop-blur-md">
        <Link href="/" className="text-zinc-400 hover:text-[#D4AF37] transition-colors text-xs tracking-widest uppercase font-semibold flex items-center gap-2">
          ← Back to Main
        </Link>
        <span className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">Athens Urban Vibes</span>
        <div className="hidden md:block w-20" />
      </nav>

      {/* Header Section */}
      <header className="relative z-10 text-center py-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-bold">Athens, Greece</span>
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-6">
          Athens{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5d97a]">
            Urban Vibes
          </span>
        </h1>
        <p className="text-zinc-400 text-base font-light max-w-xl mx-auto leading-relaxed">
          Five fully renovated residences. Each one a unique story — all designed for your ultimate Athenian stay.
        </p>
      </header>

      {/* Apartments Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apartments.map((apt) => (
          <Link key={apt.id} href={apt.path} className="group block h-full">
            <div className="bg-[#141414] h-full rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] hover:-translate-y-1 flex flex-col">
              
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={apt.image}
                  alt={apt.name}
                  fill
                  unoptimized
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 backdrop-blur-md text-[#D4AF37] text-[10px] px-3 py-1 rounded-full tracking-widest uppercase font-bold border border-[#D4AF37]/30">
                    RES #0{apt.id}
                  </span>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase font-bold mb-1">{apt.tagline}</div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{apt.name}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{apt.description}</p>
                
                {/* Icons / Specs */}
                <div className="flex gap-4 text-zinc-500 text-[11px] mb-5 border-t border-zinc-800/50 pt-5 font-medium">
                  <span className="flex items-center gap-1.5">👤 {apt.guests} guests</span>
                  <span className="flex items-center gap-1.5">🛌 {apt.beds} {apt.beds > 1 ? 'beds' : 'bed'}</span>
                  <span className="flex items-center gap-1.5">🚿 {apt.baths} bath</span>
                </div>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {apt.highlights.map((h) => (
                    <span key={h} className="text-zinc-400 bg-zinc-800/50 text-[10px] px-2.5 py-1 rounded-full border border-zinc-700/30">
                      {h}
                    </span>
                  ))}
                </div>

                {/* View Button (Visual) */}
                <div className="text-[11px] tracking-widest uppercase font-black text-[#D4AF37] flex items-center gap-2 mt-auto border-t border-zinc-800/50 pt-5">
                  Explore Residence <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-zinc-800 py-12 text-center">
        <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase font-light">
          Athens Urban Vibes · Athens, Greece
        </p>
      </footer>
    </main>
  );
}