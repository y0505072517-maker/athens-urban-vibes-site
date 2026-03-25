import Link from 'next/link';

const apartments = [
  { id: 1, name: "Urban Base No. 1", tagline: "Fully Renovated", image: "/miron18/apt1/cover.jpg", path: "/athens-urban-vibes/aura-apt1" },
  { id: 2, name: "Backyard Bliss #2", tagline: "Private Patio", image: "/miron18/apt2/cover.jpg", path: "/athens-urban-vibes/aura-apt2" },
  { id: 3, name: "Bright Front Apt #3", tagline: "Sun-Drenched", image: "/miron18/apt3/cover.jpg", path: "/athens-urban-vibes/aura-apt3" },
  { id: 4, name: "Quiet Balcony #4", tagline: "Total Serenity", image: "/miron18/apt4/cover.jpg", path: "/athens-urban-vibes/aura-apt4" },
  { id: 5, name: "Cozy Balcony #5", tagline: "Freshly Renovated", image: "/miron18/apt5/cover.jpg", path: "/athens-urban-vibes/aura-apt5" },
];

export default function UrbanVibesLobby() {
  return (
    <main style={{ backgroundColor: '#0e0e0e', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'sans-serif' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        {/* חיבור חזרה לדף הבית הראשי */}
        <Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
          ← BACK TO MAIN
        </Link>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginTop: '20px', letterSpacing: '-1px', textTransform: 'uppercase' }}>
          Athens <span style={{ color: '#D4AF37' }}>Urban Vibes</span>
        </h1>
        <p style={{ color: '#a1a1aa', marginTop: '10px' }}>Five unique residences in the heart of Athens.</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {apartments.map((apt) => (
          <Link key={apt.id} href={apt.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: '#141414', borderRadius: '15px', overflow: 'hidden', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              <img 
                src={apt.image} 
                alt={apt.name} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
              />
              
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {apt.tagline}
                </span>
                <h2 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{apt.name}</h2>
                <div style={{ color: '#D4AF37', fontWeight: 'bold', marginTop: 'auto', borderTop: '1px solid #27272a', paddingTop: '15px', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Explore Residence →
                </div>
              </div>

            </div>
          </Link>
        ))}
      </section>

    </main>
  );
}