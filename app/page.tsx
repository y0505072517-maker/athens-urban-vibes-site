import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white font-sans overflow-x-hidden">

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col items-center pt-20 pb-12 px-4 text-center">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-semibold">Athens, Greece</span>
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4 leading-none">
          Athens<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5d97a]">
            Urban Vibes
          </span>
        </h1>
        <p className="text-zinc-400 text-lg font-light tracking-widest uppercase mt-4">
          Curated Stays · Authentic Experiences
        </p>
      </header>

      {/* Property Cards */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Miron 18 */}
        <Link href="/athens-urban-vibes" className="group block">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl">
            <div className="relative aspect-[4/3] bg-black overflow-hidden">
              <video
                src="/miron.mp4"
                autoPlay loop muted playsInline
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-2 font-semibold">Miron 18 · 5 Apartments</div>
                <h2 className="text-3xl font-bold text-white mb-2">Aura Apartments</h2>
                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                  Five fully renovated apartments in the heart of Athens. 7 minutes from the metro.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase border border-white/30 px-5 py-2.5 rounded-full group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all duration-300 font-semibold">
                  Explore Apartments <span className="text-base">→</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Sky Retreat */}
        <Link href="/athenian-sky-retreat" className="group block">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl">
            <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
              <Image
                src="/sky-retreat/cover.jpg"
                alt="Athenian Sky Retreat"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-2 font-semibold">Signature Suite · Panoramic Views</div>
                <h2 className="text-3xl font-bold text-white mb-2">Athenian Sky Retreat</h2>
                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                  A private rooftop sanctuary with sweeping views over Athens and the surrounding mountains.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase border border-white/30 px-5 py-2.5 rounded-full group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all duration-300 font-semibold">
                  Discover the Retreat <span className="text-base">→</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Why section */}
      <section className="relative z-10 border-t border-zinc-800 py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { icon: '📍', label: '7 min from Metro' },
            { icon: '✨', label: 'Fully Renovated' },
            { icon: '🔑', label: 'Self Check-in' },
            { icon: '🌟', label: 'Superhost · Yuval' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-zinc-400 text-xs tracking-widest uppercase font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center border-t border-zinc-800">
        <p className="text-[#D4AF37] text-xs tracking-[0.5em] uppercase font-light">Making People Smile</p>
      </footer>
    </main>
  );
}