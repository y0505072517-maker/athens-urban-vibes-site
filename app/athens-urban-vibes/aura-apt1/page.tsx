"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MironGalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  // התמונות מהתיקייה שלך
  const mironImages = [
    '/miron18/apt1/img1.jpg',
    '/miron18/apt1/img2.jpg',
    '/miron18/apt1/img3.jpg',
    '/miron18/apt1/img4.jpg',
    '/miron18/apt1/img5.jpg',
    '/miron18/apt1/img6.jpg',
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      
      {/* כפתור חזרה ללובי */}
      <nav className="p-6 border-b border-gray-100">
        <Link href="/" className="text-[#1E3A8A] font-semibold hover:text-blue-600 flex items-center gap-2 transition-colors">
          <span>&larr; Back to Lobby</span>
        </Link>
      </nav>

      {/* כותרת הדף */}
      <header className="max-w-6xl mx-auto pt-12 px-4 mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">Miron 18</h1>
        <p className="text-xl text-gray-500 italic">Luxury Apartment Gallery</p>
      </header>

      {/* גריד התמונות עם אפקט ה-Lightbox */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mironImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-lg border border-gray-100"
              onClick={() => { 
                setCurrentImg(src); 
                setIsOpen(true); 
              }}
            >
              <Image 
                src={src} 
                alt={`Miron 18 Gallery ${index + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium border border-white px-6 py-2 rounded-full backdrop-blur-md">
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* חלון התמונה המוגדלת */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button className="absolute top-6 right-6 text-white text-5xl hover:text-gray-400 transition-colors">
            &times;
          </button>
          <div className="relative w-full max-w-6xl h-[85vh]">
            <Image 
              src={currentImg} 
              alt="Enlarged view" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
      )}
    </main>
  );
}