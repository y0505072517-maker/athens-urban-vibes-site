"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuraApt1Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const mironImages = [
    '/miron18/apt1/img1.jpg', '/miron18/apt1/img2.jpg', '/miron18/apt1/img3.jpg',
    '/miron18/apt1/img4.jpg', '/miron18/apt1/img5.jpg', '/miron18/apt1/img6.jpg',
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-20 font-sans">
      <nav className="p-6 border-b border-gray-100">
        <Link href="/athens-urban-vibes" className="text-[#1E3A8A] font-semibold hover:text-blue-600 flex items-center gap-2">
          <span>&larr; Back to Miron 18</span>
        </Link>
      </nav>
      
      <header className="max-w-6xl mx-auto pt-12 px-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">Aura Apartment 1</h1>
        <p className="text-xl text-gray-500 italic">Luxury Gallery</p>
      </header>
      
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mironImages.map((src, index) => (
            <div key={index} className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-lg border border-gray-100" onClick={() => { setCurrentImg(src); setIsOpen(true); }}>
              <Image src={src} alt={`Aura Apt 1 Image ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <button className="absolute top-6 right-6 text-white text-5xl">&times;</button>
          <div className="relative w-full max-w-6xl h-[85vh]"><Image src={currentImg} alt="Enlarged" fill className="object-contain" /></div>
        </div>
      )}
    </main>
  );
}