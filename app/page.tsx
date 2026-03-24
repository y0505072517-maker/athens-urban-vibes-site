import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-10">
      
      {/* כותרת האתר */}
      <header className="mb-12 text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">Athens Urban Vibes</h1>
        <p className="text-xl text-gray-600 italic">Experience Athens like a local</p>
      </header>

      {/* קונטיינר הדירות - מסודר אחד ליד השני במחשב, ואחד מעל השני בנייד */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        
        {/* --- דירה 1: מירון 18 (הריל) --- */}
        <Link href="/miron18" className="flex-1 group cursor-pointer block">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border hover:shadow-2xl transition-all duration-300">
            <div className="relative w-full aspect-square bg-black overflow-hidden">
              <video 
                src="/miron.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-white bg-black/60 px-8 py-3 rounded-full text-lg font-semibold border border-white/50 group-hover:bg-blue-600 transition-all duration-300">
                   Miron 18
                 </span>
              </div>
            </div>
          </div>
        </Link>

        {/* --- דירה 2: Athenian Sky Retreat (תמונה) --- */}
        <Link href="/sky-retreat" className="flex-1 group cursor-pointer block">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border hover:shadow-2xl transition-all duration-300">
            <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
              <Image 
                src="/sky-retreat/cover.jpg" 
                alt="Athenian Sky Retreat Cover"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-white bg-black/60 px-8 py-3 rounded-full text-lg font-semibold border border-white/50 group-hover:bg-blue-600 transition-all duration-300">
                   Athenian Sky Retreat
                 </span>
              </div>
            </div>
          </div>
        </Link>

      </div>

      {/* הפוטר החשוב שלך */}
      <footer className="mt-20 text-center pb-8">
        <p className="text-2xl text-blue-900 font-medium tracking-wide">Making people smile</p>
      </footer>
    </main>
  );
}