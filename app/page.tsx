import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-4 md:p-10 font-sans">
      
      {/* Header */}
      <header className="mb-12 text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-3">Athens Urban Vibes</h1>
        <p className="text-xl text-gray-500 italic">Experience Athens like a local</p>
      </header>

      {/* Properties Container */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        
        {/* --- Miron 18 (Aura Apt 1) --- */}
        <Link href="/athens-urban-vibes/aura-apt1" className="flex-1 group cursor-pointer block">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="relative w-full aspect-square bg-black overflow-hidden">
              <video 
                src="/miron.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white bg-black/50 backdrop-blur-sm px-8 py-3 rounded-full text-lg font-semibold border border-white/30 group-hover:bg-[#1E3A8A] transition-all">
                   Explore Miron 18
                 </span>
              </div>
            </div>
          </div>
        </Link>

        {/* --- Athenian Sky Retreat --- */}
        <Link href="/athenian-sky-retreat" className="flex-1 group cursor-pointer block">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
              <Image 
                src="/sky-retreat/cover.jpg" 
                alt="Athenian Sky Retreat"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-white bg-black/50 backdrop-blur-sm px-8 py-3 rounded-full text-lg font-semibold border border-white/30 group-hover:bg-[#1E3A8A] transition-all">
                   Explore Sky Retreat
                 </span>
              </div>
            </div>
          </div>
        </Link>

      </div>

      {/* Footer - Your signature touch */}
      <footer className="mt-24 text-center pb-10">
        <p className="text-3xl text-[#1E3A8A] font-light tracking-widest uppercase">Making people smile</p>
      </footer>
    </main>
  );
}