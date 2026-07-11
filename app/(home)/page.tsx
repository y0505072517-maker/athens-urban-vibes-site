"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<any>(null);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <Image src="/logo.png" alt="Athens Urban Vibes" width={140} height={140} style={{ objectFit: 'contain', marginBottom: '20px' }} />
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
          Experience <span style={{ color: '#D4AF37' }}>Athens</span>
        </h1>
        <p style={{ color: '#aaa', fontSize: '1.1rem', marginTop: '10px', fontStyle: 'italic' }}>
          Find your perfect stay in the heart of Greece
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        <Link href="/athens-urban-vibes" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.4)', position: 'relative', height: '520px', cursor: 'pointer' }}>
            <video ref={videoRef} autoPlay muted={isMuted} loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/miron.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.3) 100%)' }} />
            <button onClick={toggleSound} style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: '1px solid #D4AF37', color: '#D4AF37', padding: '8px 16px', borderRadius: '30px', cursor: 'pointer', fontSize: '11px', letterSpacing: '2px', backdropFilter: 'blur(5px)', textTransform: 'uppercase' }}>
              {isMuted ? '🔇 Sound On' : '🔊 Sound Off'}
            </button>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 35px' }}>
              <div style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>Miron 18 · 5 Apartments</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '900', margin: '0 0 12px 0' }}>Athens <span style={{ color: '#D4AF37' }}>Urban Vibes</span></h2>
              <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px' }}>Curated city living at Miron 18. Modern, vibrant, and fully renovated boutique apartments.</p>
              <div style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #D4AF37', display: 'inline-block', paddingBottom: '3px' }}>Explore Collection →</div>
            </div>
          </div>
        </Link>

        <Link href="/athenian-sky-retreat" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.4)', position: 'relative', height: '520px', cursor: 'pointer' }}>
            <Image src="/sky-retreat/cover.jpg" alt="Athenian Sky Retreat" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.3) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 35px' }}>
              <div style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>Signature Suite · Panoramic Views</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '900', margin: '0 0 12px 0' }}>Athenian <span style={{ color: '#D4AF37' }}>Sky Retreat</span></h2>
              <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px' }}>A private rooftop sanctuary with sweeping views over Athens and the surrounding mountains.</p>
              <div style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #D4AF37', display: 'inline-block', paddingBottom: '3px' }}>Discover the Retreat →</div>
            </div>
          </div>
        </Link>
      </div>

      <div style={{ maxWidth: '900px', margin: '60px auto 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
        {[
          { icon: '📍', label: '7 min from Metro' },
          { icon: '✨', label: 'Fully Renovated' },
          { icon: '🔑', label: 'Self Check-in' },
          { icon: '🌟', label: 'Superhost · Yuval' },
        ].map((item) => (
          <div key={item.label}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
            <div style={{ color: '#aaa', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>{item.label}</div>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '60px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.5rem', color: '#D4AF37' }}>"Making people smile"</p>
      </footer>
    </main>
  );
}