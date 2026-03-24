import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 md:p-10">
      
      {/* כותרת האתר */}
      <header className="mb-12 text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">Athens Urban Vibes</h1>
        <p className="text-xl text-gray-600 italic">Experience Athens like a local</p>
      </header>

      {/* קונטיינר הדירות - מסודר אחד ליד השני במחשב, ואחד מעל השני בנייד */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        
        {/* דירה 1: מירון 18 (עם הריל/וידאו) */}
        {/* ברגע שניצור את עמוד הגלריה שלה, הלינק הזה יוביל אליו */}
        <Link href="#" className="flex-1 group cursor-pointer block">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="relative w-full aspect-[3/4] md:aspect-square bg-black overflow-hidden">
              {/* כאן נמצא הוידאו - שים לב לשם הקובץ */}
              <video 
                src="/miron18/reel.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-white bg-black/40 px-8 py-3 rounded-full text-lg font-semibold border border-white/50 group-hover:bg-blue-600/80 group-hover:border-blue-400 transition-all duration-300">
                   כנס למירון 18
                 </span>
              </div>
            </div>
            <div className="p-6 text-center bg-white">
              <h2 className="text-2xl font-bold text-gray-800">Miron 18</h2>
              <p className="text-gray-500 mt-2">Luxury Apartment</p>
            </div>
          </div>
        </Link>

        {/* דירה 2: Athenian Sky Retreat (עם תמונת הקאבר) */}
        <Link href="#" className="flex-1 group cursor-pointer block">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="relative w-full aspect-[3/4] md:aspect-square bg-gray-200 overflow-hidden">
              <Image 
                src="/sky-retreat/cover.jpg" 
                alt="Athenian Sky Retreat Cover"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-white bg-black/40 px-8 py-3 rounded-full text-lg font-semibold border border-white/50 group-hover:bg-blue-600/80 group-hover:border-blue-400 transition-all duration-300">
                   כנס ל-Sky Retreat
                 </span>
              </div>
            </div>
            <div className="p-6 text-center bg-white">
              <h2 className="text-2xl font-bold text-gray-800">Athenian Sky Retreat</h2>
              <p className="text-gray-500 mt-2">Panoramic Oasis</p>
            </div>
          </div>
        </Link>

      </div>
    </main>
  );
}