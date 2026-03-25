"use client";

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<any>(null);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden', fontFamily: 'sans-serif' }}>
      
      {/* Background Video using miron.mp4 */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Dark overlay for text clarity */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
        <video 
          ref={videoRef}
          autoPlay 
          muted={isMuted} 
          loop 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
        >
          {/* משיכת הוידאו miron.mp4 */}
          <source src="/miron.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Elegant Sound Toggle Button */}
      <button 
        onClick={toggleSound}
        style={{ position: 'absolute', top: '30px', right: '30px', zIndex: 50, background: 'rgba(0,0,0,0.4)', border: '1px solid #D4AF37', color: '#D4AF37', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', fontSize: '11px', letterSpacing: '2px', backdropFilter: 'blur(5px)', textTransform: 'uppercase' }}
      >
        {isMuted ? '🔈 SOUND ON' : '🔊 SOUND OFF'}
      </button>

      {/* Main Content Area */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '20px' }}>
        
        <header style={{ marginBottom: '60px' }}>
          {/* Refreshing and inviting title */}
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: '900', letterSpacing: '2px', textShadow: '2px 2px 15px rgba(0,0,0,0.8)', textTransform: 'uppercase' }}>
            Experience <span style={{ color: '#D4AF37' }}>Athens</span>
          </h1>
          <p style={{ color: '#eee', fontSize: '1.4rem', marginTop: '15px', letterSpacing: '1px', textShadow: '1px 1px 5px rgba(0,0,0,0.8)', fontStyle: 'italic' }}>
            Find your perfect stay in the heart of Greece
          </p>
        </header>

        {/* Choice Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', maxWidth: '1100px', width: '100%' }}>
          
          {/* Card 1: Athens Urban Vibes (Active Link) */}
          <Link href="/athens-urban-vibes" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid rgba(212,175,55,0.4)', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '50px 30px', borderRadius: '20px', height: '100%', transition: 'all 0.3s ease', cursor: 'pointer', boxShadow: '0 15px 40px rgba(0,0,0,0.6)' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px', color: '#fff', letterSpacing: '-1px' }}>
                Athens <span style={{color: '#D4AF37'}}>Urban Vibes</span>
              </h3>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6', marginBottom: '35px' }}>
                Curated city living at Miron 18. Modern, vibrant, and fully renovated boutique apartments.
              </p>
              <div style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #D4AF37', display: 'inline-block', paddingBottom: '3px' }}>
                Explore Collection →
              </div>
            </div>
          </Link>

          {/* Card 2: Athenian Sky Retreat (Coming Soon - using retreat.jpg) */}
          {/* שים לב: הכרטיס הזה משתמש בתמונה retreat.jpg כרקע יוקרתי */}
          <div style={{ 
            border: '1px solid rgba(255,255,255,0.15)', 
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(/retreat.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '50px 30px', 
            borderRadius: '20px', 
            height: '100%', 
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.6)'
          }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px', color: '#fff', letterSpacing: '-1px', textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}>
              Athenian <span style={{color: '#D4AF37'}}>Sky Retreat</span>
            </h3>
            <p style={{ color: '#eee', fontSize: '1rem', lineHeight: '1.6', marginBottom: '35px', textShadow: '1px 1px 5px rgba(0,0,0,0.8)' }}>
              Elevated luxury with breathtaking Acropolis views. Premium suites above the city.
            </p>
            <div style={{ 
              color: '#D4AF37', 
              fontWeight: 'bold', 
              fontSize: '13px', 
              letterSpacing: '2px', 
              textTransform: 'uppercase',
              background: 'rgba(0,0,0,0.5)',
              padding: '8px 15px',
              borderRadius: '10px',
              display: 'inline-block'
            }}>
              Coming Soon
            </div>
          </div>

        </div>

        {/* Elegant Footer with your custom text */}
        <footer style={{ marginTop: '90px' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.8rem', color: '#D4AF37', letterSpacing: '1.5px', textShadow: '1px 1px 5px rgba(0,0,0,0.8)' }}>
            "Making people smile"
          </p>
        </footer>

      </div>
    </main>
  );
}