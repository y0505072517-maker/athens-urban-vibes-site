import Image from 'next/image';

// שלב א': מערך נתונים שמתמקד אך ורק בטעינת התמונות לדירות השונות
const apartments = [
  { 
    id: 1, 
    name: "Aura Apartment 1", 
    image: "/miron18/apt1/Cover.jpg" 
  },
  { 
    id: 2, 
    name: "Aura Apartment 2", 
    image: "/miron18/apt2/Cover.jpg" 
  },
  { 
    id: 3, 
    name: "Aura Apartment 3", 
    image: "/miron18/apt3/Cover.jpg" 
  },
  { 
    id: 4, 
    name: "Aura Apartment 4", 
    image: "/miron18/apt4/Cover.jpg" 
  },
  { 
    id: 5, 
    name: "Aura Apartment 5", 
    image: "/miron18/apt5/Cover.jpg" 
  },
];

export default function MironBuildingLobbyPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white py-16 px-4">
      
      {/* כותרת זמנית לבדיקה */}
      <h1 className="text-4xl font-bold text-center text-[#D4AF37] mb-12">
        Athens Urban Vibes - בדיקת תמונות
      </h1>

      {/* גריד הדירות - מתמקד רק בתמונות כרגע */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apartments.map((apt) => (
          <div key={apt.id} className="bg-[#141414] rounded-2xl overflow-hidden border border-zinc-800 h-[350px] flex flex-col">
            
            {/* מיכל התמונה */}
            <div className="relative flex-grow w-full bg-zinc-900">
              <Image
                src={apt.image}
                alt={apt.name}
                fill
                unoptimized // מונע בעיות קאש בטעינה הראשונית
                className="object-cover"
              />
              
              {/* תווית קטנה לווידוא שאנחנו מסתכלים על הדירה הנכונה */}
              <div className="absolute top-4 left-4 bg-black/80 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold tracking-widest border border-[#D4AF37]/30">
                Res #0{apt.id}
              </div>
            </div>

            {/* כותרת הדירה (כדי שנוכל להבדיל ביניהן) */}
            <div className="p-4 text-center border-t border-zinc-800">
              <h2 className="text-xl font-bold">{apt.name}</h2>
            </div>

          </div>
        ))}
      </section>

    </main>
  );
}