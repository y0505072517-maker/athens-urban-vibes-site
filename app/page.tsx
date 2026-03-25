"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const APT = {
  number: 1,
  name: "Aura Apartment 1",
  tagline: "Backyard Bliss Patio",
  subtitle: "7 MIN FROM METRO · PRIVATE PATIO · SLEEPS 4 · FULLY RENOVATED",
  description: `A light-filled, modern apartment in the heart of Athens — steps from the metro and surrounded by the city's best cafés and restaurants. The standout feature: your own private patio, a rare urban oasis with natural greenery and ambient lighting. Renovated to a high standard with natural wood finishes, premium queen bed, full kitchen and fast Wi-Fi.`,
  guests: 4, beds: 1, baths: 1, sleeps: "1 Queen Bed",
  airbnbUrl: "https://he.airbnb.com/rooms/1457080095293779783",
  amenities: [
    { icon: "📶", label: "Fast Wi-Fi" },
    { icon: "☕", label: "Nespresso" },
    { icon: "❄️", label: "Air Conditioning" },
    { icon: "🪴", label: "Private Patio" },
    { icon: "🍳", label: "Full Kitchen" },
    { icon: "🧺", label: "Washing Machine" },
    { icon: "📺", label: "HD Smart TV" },
    { icon: "🔑", label: "Self Check-in" },
  ],
  images: [
    '/miron18/apt1/img1.jpg',
    '/miron18/apt1/img2.jpg',
    '/miron18/apt1/img3.jpg',
    '/miron18/apt1/img4.jpg',
    '/miron18/apt1/img5.jpg',
    '/miron18/apt1/img6.jpg',
  ],
};

export default function AuraApt1Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  return (
    <main style={{ backgroundColor: '#0e0e0e', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif', paddingBottom: '80px' }}>

      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', borderBottom: '1px solid #27272a' }}>
        <Link href="/athens-urban-vibes" style={{ color: '#aaa', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>← Miron 18</Link>
        <span style={{ color: '#D4AF37', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>Residence {APT.number}</span>
        <div style={{ width: '80px' }} />
      </nav>

      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 30px 30px' }}>
        <div style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>{APT.tagline}</div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '900', margin: '0 0 12px', textTransform: 'uppercase', lineHeight: 1 }}>
          Aura <span style={{ color: '#D4AF37' }}>Apartment 1</span>
        </h1>
        <p style={{ color: '#71717a', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>{APT.subtitle}</p>
        <div style={{ display: 'flex', gap: '24px', marginTop: '20px', color: '#a1a1aa', fontSize: '14px' }}>
          <span>👥 {APT.guests} guests</span>
          <span>🛏 {APT.beds} bed</span>
          <span>🚿 {APT.baths} bath</span>
          <span>🛌 {APT.sleeps}</span>
        </div>
      </header>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px 50px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {APT.images.map((src, i) => (
          <div key={i} onClick={() => { setCurrentImg(src); setLightboxOpen(true); }} style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #27272a' }}>
            <Image src={src} alt={`Photo ${i + 1}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '50px', borderTop: '1px solid #27272a', paddingTop: '50px' }}>

        <div>
          <h2 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>About This Space</h2>
          <p style={{ fontSize: '1.2rem', color: '#d4d4d8', fontWeight: '300', lineHeight: '1.8', marginBottom: '40px' }}>{APT.description}</p>

          <h3 style={{ color: '#71717a', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>Amenities</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
            {APT.amenities.map((a) => (
              <div key={a.label} style={{ backgroundColor: '#141414', border: '1px solid #27272a', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{a.icon}</div>
                <div style={{ color: '#d4d4d8', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{a.label}</div>
              </div>
            ))}
          </div>

          <h3 style={{ color: '#71717a', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Good to Know</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', color: '#a1a1aa', fontSize: '14px' }}>
            <div>🔑 Self check-in · Smart lock</div>
            <div>🚗 Free street parking</div>
            <div>🚇 7 min walk to Metro</div>
            <div>🧯 Fire extinguisher on site</div>
          </div>
        </div>

        <div style={{ position: 'sticky', top: '30px', height: 'fit-content', backgroundColor: '#141414', border: '1px solid #3f3f46', borderRadius: '20px', padding: '32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Secure Your Stay</div>
            <div style={{ color: '#fff', fontSize: '18px', fontWeight: '700' }}>{APT.name}</div>
            <div style={{ color: '#71717a', fontSize: '12px', marginTop: '4px' }}>{APT.tagline}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href={APT.airbnbUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '16px', backgroundColor: '#FF5A5F', color: '#fff', textAlign: 'center', fontWeight: '700', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '12px', textDecoration: 'none' }}>
              🏠 Book on Airbnb
            </a>
            <div style={{ padding: '16px', backgroundColor: '#1c1c1e', border: '1px solid #3f3f46', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ color: '#71717a', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px' }}>Booking.com</div>
              <div style={{ color: '#D4AF37', fontSize: '11px', marginTop: '4px' }}>Coming Soon</div>
            </div>
          </div>
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #27272a', textAlign: 'center' }}>
            <div style={{ color: '#52525b', fontSize: '12px' }}>Hosted by <span style={{ color: '#a1a1aa', fontWeight: '600' }}>Yuval</span> · Superhost</div>
            <div style={{ color: '#52525b', fontSize: '12px', marginTop: '4px' }}>Self check-in · Free cancellation</div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div onClick={() => setLightboxOpen(false)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.97)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <button onClick={() => setLightboxOpen(false)} style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer' }}>×</button>
          <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '80vh' }}>
            <Image src={currentImg} alt="Enlarged" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </main>
  );
}
```

**Ctrl+S → סגור**

---
```
git add .
git commit -m "Fix homepage and apt1"
git push