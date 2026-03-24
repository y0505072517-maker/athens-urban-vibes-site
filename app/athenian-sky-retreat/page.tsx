import Image from 'next/image';
import Link from 'next/link';

export default function SkyRetreatPage() {
  // נשתמש בתמונה אחת קיימת לבינתיים עד שתעלה את כל ה-10
  const images = ["/sky-retreat/cover.jpg", "/retreat.jpg"]; 

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37]">
      <nav className="p-8 absolute top-0 z-50">
        <Link href="/" className="text-[#D4AF37] hover:text-white transition-colors tracking-widest uppercase text-xs font-bold">
          &larr; Back to Lobby
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image src="/sky-retreat/cover.jpg" alt="Sky Retreat" fill className="object-cover opacity-60" priority />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.2em] text-[#D4AF37] mb-4 uppercase">Sky Retreat</h1>
          <p className="text-xl md:text-2xl text-white font-light tracking-widest uppercase italic">The Signature Suite</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-8">The Experience</h2>
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
          Perched high above the city, the Sky Retreat offers a sanctuary of peace with a panoramic view of the Athenian skyline. 
          Designed for the discerning traveler, every detail reflects excellence.
        </p>
        <div className="mt-16 flex justify-center gap-12 text-[#D4AF37] text-xs tracking-widest uppercase">
          <div>• 100sqm Terrace</div>
          <div>• Acropolis View</div>
          <div>• Private Elevator</div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-32 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
           {/* [מאומת מהתמונה] הצגת התמונות שקיימות ב-public */}
           <div className="relative h-[60vh] rounded-sm overflow-hidden border border-zinc-800">
              <Image src="/sky-retreat/cover.jpg" alt="Sky 1" fill className="object-cover" />
           </div>
           <div className="relative h-[60vh] rounded-sm overflow-hidden border border-zinc-800">
              <Image src="/retreat.jpg" alt="Sky 2" fill className="object-cover" />
           </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-zinc-900">
         <p className="text-[#D4AF37] tracking-[0.5em] uppercase text-[10px]">Making people smile</p>
      </footer>
    </main>
  );
}