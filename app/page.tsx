"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  // ניהול ה-Lightbox (הגדלת התמונות)
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  // רשימת התמונות המתוקנת של מירון 18 (כולל התיקייה apt1 מהצילום מסך שלך)
  const mironImages = [
    '/miron18/apt1/img1.jpg',
    '/miron18/apt1/img2.jpg',
    '/miron18/apt1/img3.jpg',
    '/miron18/apt1/img4.jpg',
    '/miron18/apt1/img5.jpg',
    '/miron18/apt1/img6.jpg',
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* כותרת האתר - נקייה ויוקרתית */}
      <header className="bg-white shadow-sm py-8 px-4 text-center border-b border-gray-100">
        <h1 className="text-4xl font-bold text-blue-900">Athens Urban Vibes</h1>
        <p className="text-gray-600 mt-2 italic text-lg">Experience Athens like a local</p>
      </header>

      {/* --- מדור: MIRON 18 (עם הגלריה היוקרתית) --- */}
      <section id="miron18" className="max-w-6xl mx-auto py-12 px-4">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2 text-blue-950">Miron 18 - Luxury Apartment</h2>
          <p className="text-gray-600 max-w-2xl">A spacious and elegant retreat in the heart of Athens. Discover comfort and style.</p>
        </div>
        
        {/* גריד התמונות החדש והמתוקן */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mironImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-gray-100 border border-gray-200"
              onClick={() => { 
                setCurrentImg(src); 
                setIsOpen(true); 
              }}
            >
              <Image 
                src={src} 
                alt={`Miron 18 gallery picture ${index + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
              />
              {/* אפקט כהות בריחוף עם טקסט */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium border border-white px-5 py-2.5 rounded-full bg-black/20 backdrop-blur-sm">
                  View Large
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* מפריד עדין */}
      <div className="max-w-6xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* --- מדור: ATHENIAN SKY RETREAT (החזרנו אותו!) --- */}
      <section id="skyretreat" className="max-w-6xl mx-auto py-12 px-4">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2 text-blue-950">Athenian Sky Retreat</h2>
          <p className="text-gray-600 max-w-2xl">Your personal panoramic oasis with breathtaking views of the Acropolis. We will add the photos for this retreat in the next step!</p>
        </div>
        
        {/*placeholder for Sky Retreat pictures */}
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center text-gray-500">
          <p>We will add the photos for this retreat later.</p>
        </div>
      </section>

      {/* --- החלון הקופץ (Lightbox) - מוסתר/מוצג בלחיצה --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* כפתור סגירה (X) */}
          <button className="absolute top-8 right-8 text-white text-5xl font-light hover:text-blue-300 transition-colors">
            &times;
          </button>
          
          <div className="relative w-full max-w-6xl h-[85vh]">
            <Image 
              src={currentImg} 
              alt="Enlarged View" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
      )}

      {/* פוטר מקצועי */}
      <footer className="bg-blue-950 text-white py-12 mt-12 text-center">
        <p>© 2026 Athens Urban Vibes | Quality Stays in Athens</p>
      </footer>
    </main>
  );
}