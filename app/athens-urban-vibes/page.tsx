import Link from 'next/link';
import Image from 'next/image';

export default function MironBuildingPage() {
  const apartments = [
    { id: 1, name: "Aura Apartment 1", description: "Elegant 1-bedroom suite with modern amenities and city views.", image: "/miron18/apt1/cover.jpg", path: "/athens-urban-vibes/aura-apt1" },
    { id: 2, name: "Aura Apartment 2", description: "Spacious luxury stay, perfect for couples seeking comfort.", image: "https://via.placeholder.com/600x400/121212/3b82f6?text=Aura+Apt+2", path: "/athens-urban-vibes/aura-apt2" },
    { id: 3, name: "Aura Apartment 3", description: "Minimalist design meets Athenian charm.", image: "https://via.placeholder.com/600x400/121212/3b82f6?text=Aura+Apt+3", path: "/athens-urban-vibes/aura-apt3" },
    { id: 4, name: "Aura Apartment 4", description: "Bright and airy, located on the upper floors.", image: "https://via.placeholder.com/600x400/121212/3b82f6?text=Aura+Apt+4", path: "/athens-urban-vibes/aura-apt4" },
    { id: 5, name: "Aura Apartment 5", description: "Premium executive suite with high-end finishes.", image: "https://via.placeholder.com/600x400/121212/3b82f6?text=Aura+Apt+5", path: "/athens-urban-vibes/aura-apt5" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20 font-sans">
      <nav className="p-6 bg-white border-b">
        <Link href="/" className="text-blue-900 font-medium hover:underline tracking-tight">
          &larr; Back to Main Lobby
        </Link>
      </nav>

      <header className="py-16 px-4 text-center">
        {/* הכותרת תוקנה לבקשתך */}
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4 tracking-tight">Athens Urban Vibes</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto italic">
          A boutique building featuring five uniquely designed apartments, combining modern luxury with the vibrant spirit of Athens.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {apartments.map((apt) => (
          <Link key={apt.id} href={apt.path} className="group cursor-pointer">
            <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="relative h-64 w-full bg-gray-100">
                <Image src={apt.image} alt={apt.name} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{apt.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden">{apt.description}</p>
                <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider border-b-2 border-blue-900 pb-1 group-hover:bg-blue-900 group-hover:text-white transition-all group-hover:px-4 group-hover:py-2 group-hover:rounded-full group-hover:border-0">
                  View Gallery
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}