import Link from 'next/link';

export default function Apartment1Page() {
  return (
    <main style={{ backgroundColor: '#0e0e0e', minHeight: '100vh', color: 'white', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#D4AF37' }}>Urban Base No. 1</h1>
      <p>This page is under construction. Coming soon!</p>
      <Link href="/athens-urban-vibes" style={{ color: '#D4AF37', textDecoration: 'underline' }}>
        Back to Lobby
      </Link>
    </main>
  );
}