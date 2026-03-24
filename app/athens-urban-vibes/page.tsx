import Link from 'next/link';

export default function MironBuildingPage() {
  const apartments = [
    { id: 1, name: "Aura Apartment 1", path: "/athens-urban-vibes/aura-apt1" },
    { id: 2, name: "Aura Apartment 2", path: "/athens-urban-vibes/aura-apt2" },
    { id: 3, name: "Aura Apartment 3", path: "/athens-urban-vibes/aura-apt3" },
    { id: 4, name: "Aura Apartment 4", path: "/athens-urban-vibes/aura-apt4" },
    { id: 5, name: "Aura Apartment 5", path: "/athens-urban-vibes/aura-apt5" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-10 font-sans">
      <nav className="w-full max-w-5xl mb-8">
        <Link href="/" className="text-[#1E3A8A] font-semibold hover:text-blue-600 flex items-center gap-2">
          <span>&larr; Back to Main Lobby</span>
        </Link>
      </nav>

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-3">Miron 18</h1>
        <p className="text-xl text-gray-500 italic">Select your luxury apartment</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {apartments.map((apt) => (
          <Link key={apt.id} href={apt.path} className="group block">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100 flex flex-col items-center justify-center h-48 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#1E3A8A] transition-colors">
                {apt.name}
              </h2>
              <span className="mt-4 inline-block px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium group-hover:bg-[#1E3A8A] group-hover:text-white transition-all">
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}