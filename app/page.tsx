"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  // ניהול ה-Lightbox (הגדלת התמונות)
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  // רשימת התמונות של מירון 18 (תוודא שהן נמצאות בתיקייה public/miron18)
  const mironImages = [
    '/miron18/img1.jpg',
    '/miron18/img2.jpg',
    '/miron18/img3.jpg',
    '/miron18/img4.jpg',
    '/miron18/img5.jpg',
    '/miron18/img6.jpg',
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* כותרת האתר */}
      <header className="bg-white shadow-sm py-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Athens Urban Vibes</h1>
        <p className="text-gray-600 mt-2 italic text-lg">Experience Athens like a local</p>
      </header>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-blue-200 pb-2">Miron 18 - Luxury Apartment</h2>
        
        {/* גריד התמונות החדש */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mironImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-md bg-gray-200"
              onClick={() => { 
                setCurrentImg(src); 
                setIsOpen(true); 
              }}
            >
              <Image 
                src={src} 
                alt={`Miron 18 gallery ${index + 1}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium border border-white px-4 py-2 rounded-full">
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- החלון הקופץ (Lightbox) --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* כפתור סגירה (X) */}
          <button className="absolute top-8 right-8 text-white text-5xl font-light hover:text-blue-400 transition-colors">
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

      {/* פוטר פשוט */}
      <footer className="bg-blue-900 text-white py-12 mt-12 text-center">
        <p>© 2026 Athens Urban Vibes | Quality Stays in Athens</p>
      </footer>
    </main>
  );
}