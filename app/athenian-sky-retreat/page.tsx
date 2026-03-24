import Image from 'next/image';
import Link from 'next/link';

export default function SkyRetreatFullPage() {
  // 10 מקומות לתמונות הגלריה שתוסיף בהמשך לתיקיית sky-retreat
  const galleryPlaceholders = Array.from({ length: 10 }).map((_, i) => `/sky-retreat/img${i + 1}.jpg`);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* ניווט חזרה */}
      <nav className="absolute top-0 left-0 p-6 z-50">
        <Link href="/" className="text-[#D4AF37] font-semibold hover:text-white flex items-center gap-2 transition-colors">
          <span>&larr; Back to Main Lobby</span>
        </Link>
      </nav>

      {/* תמונת נושא ענקית וכותרת */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image 
          src="/sky-retreat/cover.jpg" 
          alt="Sky Retreat Panoramic View" 
          fill 
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest text-[#D4AF37] mb-6 uppercase">Athenian Sky Retreat</h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide uppercase">The Signature Suite</p>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-8"></div>
        </div>
      </section>

      {/* אזור הזמנה (Airbnb / Booking) */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-light mb-8 text-white">Book Your Stay</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase tracking-widest font-semibold text-sm">
            Book on Airbnb
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase tracking-widest font-semibold text-sm">
            Book on Booking.com
          </a>
        </div>
      </section>

      {/* גלריה - 10 תמונות */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-light mb-12 text-center text-[#D4AF37] tracking-widest uppercase">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryPlaceholders.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden bg-zinc-900 group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-light text-sm z-0">
                Image {index + 1}
              </div>
              {/* כאשר יהיו לך התמונות בתיקייה, ה-Image הזה יעבוד */}
              <Image 
                src={src} 
                alt={`Sky Retreat View ${index + 1}`} 
                fill 
                className="object-cover opacity-0 transition-opacity duration-500" 
                // הערה: ברגע שהתמונות קיימות, תמחק את ה-opacity-0 למעלה
              />
            </div>
          ))}
        </div>
      </section>
      
      <footer className="py-12 text-center border-t border-zinc-900">
        <p className="text-[#D4AF37] font-light tracking-widest uppercase text-sm">Klisovou 4, Athens | Making people smile</p>
      </footer>
    </main>
  );
}