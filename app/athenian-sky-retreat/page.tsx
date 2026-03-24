import Image from 'next/image';
import Link from 'next/link';

export default function SkyRetreatFullPage() {
  // רשימת 10 מקומות לתמונות הגלריה שתוסיף בהמשך לתיקיית sky-retreat
  // הנתיבים מוגדרים: /sky-retreat/img1.jpg וכן הלאה.
  const galleryPlaceholders = Array.from({ length: 10 }).map((_, i) => `/sky-retreat/img${i + 1}.jpg`);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#D4AF37] selection:text-black pb-32">
      
      {/* ניווט חזרה */}
      <nav className="absolute top-0 left-0 p-6 z-50">
        <Link href="/" className="text-[#D4AF37] font-semibold hover:text-white flex items-center gap-2 transition-colors uppercase tracking-widest text-xs">
          <span>&larr; Back to Main Lobby</span>
        </Link>
      </nav>

      {/* תמונת נושא ענקית וכותרת (Hero Section) */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* תמונת הקאבר - שים לב לנתיב הקובץ! */}
        <Image 
          src="/sky-retreat/cover.jpg" 
          alt="Sky Retreat Panoramic View" 
          fill 
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest text-[#D4AF37] mb-6 uppercase">Athenian Sky Retreat</h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide uppercase italic">The Signature Suite</p>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-8"></div>
        </div>
      </section>

      {/* אזור תיאור שיווקי חזק */}
      <section className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-10 font-bold">The Experience</h2>
        <p className="text-3xl md:text-4xl font-light leading-relaxed text-white">
          Perched on the highest floor, where the ancient winds of Athens whisper tales of eternity.
        </p>
        <p className="text-xl text-gray-400 font-light mt-8 leading-relaxed max-w-3xl mx-auto">
          Sky Retreat isn't just a place to stay; it's a sanctuary. Enjoy private panoramic views of the city, a sprawling 100sqm terrace, and minimalist luxury that redefines comfort. This is your personal oasis in the heart of Athens.
        </p>
        <div className="mt-16 flex justify-center gap-12 text-[#D4AF37] text-xs tracking-widest uppercase font-bold border-t border-zinc-800 pt-12">
          <div>• 100sqm Private Terrace</div>
          <div>• Panoramic Acropolis View</div>
          <div>• High-Speed Wi-Fi</div>
          <div>• Air Conditioning</div>
        </div>
      </section>

      {/* אזור גלריה - 10 תמונות */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-light mb-16 text-center text-[#D4AF37] tracking-widest uppercase">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryPlaceholders.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden bg-zinc-900 group rounded-sm border border-zinc-800 transition-all hover:border-[#D4AF37]">
              {/* placeholder text directly inside, not needing an Image component for now */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-light text-sm z-10 pointer-events-none group-hover:text-[#D4AF37] transition-colors">
                 Image {index + 1}
              </div>
              
              {/* [זמני] placeholder background */}
              <div className="absolute inset-0 bg-zinc-900 group-hover:bg-zinc-800 transition-colors"></div>

              {/* [הערה לעתיד] ברגע שתעלה את התמונות לתיקיית public/sky-retreat, 
                  תבטל את ה-placeholder text ותשתמש בקוד הזה:
              <Image 
                src={src} 
                alt={`Sky Retreat View ${index + 1}`} 
                fill 
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
              />
              */}
            </div>
          ))}
        </div>
      </section>
      
      <footer className="py-16 text-center border-t border-zinc-900 mt-20">
        <p className="text-[#D4AF37] font-light tracking-widest uppercase text-xs">Making people smile</p>
      </footer>
    </main>
  );
}