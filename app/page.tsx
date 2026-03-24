import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] flex flex-col items-center py-16 px-4 sm:px-8">
      
      {/* Header */}
      <header className="mb-16 text-center mt-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1E3A8A] mb-4 tracking-tight">Athens Urban Vibes</h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light italic">Experience Athens like a local</p>
      </header>

      {/* Properties Container */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        
        {/* --- Property 1: Miron 18 --- */}
        <Link href="/miron18" className="group relative flex-1 aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer block">
          
          {/* VIDEO BACKGROUND - הכתובת תוקנה למה שמופיע אצלך במחשב! */}
          <video 
            src="/miron.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:bg-black/40"></div>
          
          {/* Text & Button */}
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Miron 18</h2>
            <p className="text-white/80 text-lg mb-6">Luxury Apartment</p>
            <span className="inline-block px-8 py-3 bg-white/20 backdrop-blur-md text-white border border-white/50 rounded-full font-semibold group-hover:bg-white group-hover:text-[#1E3A8A] transition-colors duration-300">
              Explore
            </span>
          </div>
        </Link>

        {/* --- Property 2: Athenian Sky Retreat --- */}
        <Link href="/sky-retreat" className="group relative flex-1 aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer block">
          
          {/* IMAGE BACKGROUND */}
          <Image 
            src="/sky-retreat/cover.jpg" 
            alt="Athenian Sky Retreat"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:bg-black/40"></div>
          
          {/* Text & Button */}
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Athenian Sky Retreat</h2>
            <p className="text-white/80 text-lg mb-6">Panoramic Oasis</p>
            <span className="inline-block px-8 py-3 bg-white/20 backdrop-blur-md text-white border border-white/50 rounded-full font-semibold group-hover:bg-white group-hover:text-[#1E3A8A] transition-colors duration-300">
              Explore
            </span>
          </div>
        </Link>

      </div>
    </main>
  );
}