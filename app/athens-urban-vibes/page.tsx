import Link from 'next/link';

const apartments = [
  { id: 1, name: "Urban Base No. 1", tagline: "Fully Renovated", image: "/miron18/apt1/cover.jpg", path: "/athens-urban-vibes/aura-apt1" },
  { id: 2, name: "Backyard Bliss #2", tagline: "Private Patio", image: "/miron18/apt2/cover.jpg", path: "/athens-urban-vibes/aura-apt2" },
  { id: 3, name: "Bright Front Apt #3", tagline: "Sun-Drenched", image: "/miron18/apt3/cover.jpg", path: "/athens-urban-vibes/aura-apt3" },
  { id: 4, name: "Quiet Balcony #4", tagline: "Total Serenity", image: "/miron18/apt4/cover.jpg", path: "/athens-urban-vibes/aura-apt4" },
  { id: 5, name: "Cozy Balcony #5", tagline: "Freshly Renovated", image: "/miron18/apt5/cover.jpg", path: "/athens-urban-vibes/aura-apt5" },
];

export default function AthensLobby() {
  return (
    <main style={{ backgroundColor: '#0e0e0e', minHeight: '100 screen', color: 'white', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>
          Athens <span style={{ color: '#D4AF37' }}>Urban Vibes</span>
        </h1>
        <p style={{ color: '#a1a1aa' }}>Five unique residences in the heart of Athens.</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {apartments.map((apt) => (
          <Link key={apt.id} href={apt.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: '#141414', borderRadius: '15px', overflow: 'hidden', border: '1px solid #27272a' }}>
              <img src={apt.image} alt={apt.name} style={{ width: '100%', h: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>{apt.tagline}</span>
                <h2 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{apt.name}</h2>
                <div style={{ color: '#D4AF37', fontWeight: 'bold', marginTop: '20px', borderTop: '1px solid #27272a', paddingTop: '15px' }}>
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