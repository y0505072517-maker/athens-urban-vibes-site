import Link from 'next/link';

const apartments = [
  { id: 1, name: "Urban Base No. 1", image: "/miron18/apt1/cover.jpg", path: "/athens-urban-vibes/aura-apt1" },
  { id: 2, name: "Backyard Bliss #2", image: "/miron18/apt2/cover.jpg", path: "/athens-urban-vibes/aura-apt2" },
  { id: 3, name: "Bright Front Apt #3", image: "/miron18/apt3/cover.jpg", path: "/athens-urban-vibes/aura-apt3" },
  { id: 4, name: "Quiet Balcony #4", image: "/miron18/apt4/cover.jpg", path: "/athens-urban-vibes/aura-apt4" },
  { id: 5, name: "Cozy Balcony #5", image: "/miron18/apt5/cover.jpg", path: "/athens-urban-vibes/aura-apt5" },
];

export default function LobbyPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-[#D4AF37] text-center mb-12">ATHENS URBAN VIBES</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {apartments.map((apt) => (
          <div key={apt.id} className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900">
            {/* שימוש בתגית img פשוטה במקום רכיב Image */}
            <img 
              src={apt.image} 
              alt={apt.name} 
              className="w-full h-64 object-cover"
              onError={(e) => {
                console.log("Failed to load image:", apt.image);
                e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
              }}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">{apt.name}</h2>
              <Link href={apt.path} className="text-[#D4AF37] font-bold">VIEW APARTMENT →</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}