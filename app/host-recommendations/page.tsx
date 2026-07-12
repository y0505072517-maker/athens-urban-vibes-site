import type { Metadata } from "next";
import Link from "next/link";

const title = "Host Recommendations — Athens Urban Vibes";
const description =
  "Real, personal recommendations from your Athens Urban Vibes host — favorite cafés, restaurants, and bars we genuinely return to in Athens.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/host-recommendations",
  },
  openGraph: {
    title,
    description,
    url: "/host-recommendations",
    type: "website",
    siteName: "Athens Urban Vibes",
    locale: "en_US",
    images: ["/logo.png"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.athensurbanvibes.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Host Recommendations",
      item: "https://www.athensurbanvibes.com/host-recommendations",
    },
  ],
};

const introParas = [
  `These aren't sponsored recommendations or places copied from a travel guide. They're simply the cafés, restaurants, and bars that I genuinely enjoy and regularly recommend to friends and guests staying with Athens Urban Vibes.`,
  `Some are close to Miron 18, while others are places I believe are worth visiting during your time in Athens. Rather than trying to create a "Top 100" list, I'd rather share a small collection of places that have consistently delivered a great experience.`,
  `Opening hours can change, so it's always worth checking before you visit.`,
];

const closingParas = [
  `Looking for something specific?`,
  `Vegetarian restaurants? The best souvlaki? A family-friendly dinner? A romantic evening? A great place for cocktails? Hidden local favorites?`,
  `Just ask us.`,
  `We're always happy to share more personal recommendations and help you discover the Athens that we enjoy ourselves.`,
];

const categories = [
  {
    id: "coffee",
    emoji: "☕",
    title: "Coffee, Breakfast & Bakeries",
    jumpLabel: "Coffee & Breakfast",
    venues: [
      {
        emoji: "☕",
        heading: "Cupaki — Specialty Coffee",
        mapName: "Cupaki",
        desc: `If I only had one coffee recommendation in Athens, this would probably be it. Their espresso is consistently excellent, the prices are fair, and the freddo espresso is exactly how I like to start the day. Whether you're grabbing a quick coffee before sightseeing or looking for a quiet place to recharge, Cupaki rarely disappoints.`,
        label: "Nearest location",
        address: "Emmanouil Benaki 9",
      },
      {
        emoji: "🥐",
        heading: "Ergon House — Breakfast & Brunch",
        mapName: "Ergon House",
        desc: `Part bakery, part deli, part restaurant—and one of my favorite breakfast stops in central Athens. Everything feels fresh, the coffee is consistently good, and it's a great place to slow down before exploring the city.`,
        label: "Address",
        address: "Mitropoleos 23",
      },
      {
        emoji: "🥖",
        heading: "72H Artisanal Bakery",
        mapName: "72H Artisanal Bakery",
        desc: `If you enjoy great bread and pastries, don't skip this bakery. Long-fermented doughs, excellent croissants, and some of the best baked goods you'll find in central Athens.`,
        label: "Address",
        address: "Mitropoleos 27 & Patroou 9",
      },
    ],
  },
  {
    id: "restaurants",
    emoji: "🍽️",
    title: "Restaurants",
    jumpLabel: "Restaurants",
    venues: [
      {
        emoji: "🐟",
        heading: "Thinalos — Seafood Restaurant",
        mapName: "Thinalos",
        desc: `One of the restaurants I recommend most often to guests looking for authentic seafood without unnecessary formality. Fresh fish, generous portions, friendly service, and a relaxed local atmosphere make this an easy recommendation.`,
        label: "Address",
        address: "Chiou 7",
      },
      {
        emoji: "🥩",
        heading: "Sta Kala Kathoumena — Greek Steakhouse",
        mapName: "Sta Kala Kathoumena",
        desc: `Whenever I'm craving grilled meat, this is one of the places I happily return to. The quality has always been consistently good, the portions are generous, and it's the kind of restaurant where locals and visitors comfortably sit side by side.`,
        label: "Address",
        address: "Iera Odos 25-29",
      },
      {
        emoji: "🍽️",
        heading: "Nolan — Contemporary Greek Fusion",
        mapName: "Nolan",
        desc: `If you're looking for something beyond traditional Greek cuisine, Nolan offers an interesting combination of Greek and Asian influences. It's creative without feeling complicated, and every visit feels a little different.`,
        label: "Address",
        address: "Voulis 31-33",
      },
      {
        emoji: "🍝",
        heading: "Brigante — Italian Trattoria",
        mapName: "Brigante",
        desc: `A small Italian restaurant that has impressed both me and many of our guests. Fresh handmade pasta, warm hospitality, and the kind of place you'll probably want to return to after your first visit.`,
        label: "Address",
        address: "Xenofontos 6",
      },
      {
        emoji: "🍕",
        heading: "Granello — Pizza Italiana",
        mapName: "Granello",
        desc: `Simple, authentic, and consistently reliable. When I want proper Italian pizza in central Athens without overthinking it, Granello is one of my favorite choices.`,
        label: "Address",
        address: "Perikleous 18",
      },
    ],
  },
  {
    id: "bars",
    emoji: "🍸",
    title: "Bars & Rooftops",
    jumpLabel: "Bars & Rooftops",
    venues: [
      {
        emoji: "🍸",
        heading: "Baba Au Rum — Cocktail Bar",
        mapName: "Baba Au Rum",
        desc: `One of Athens' best-known cocktail bars for good reason. Creative drinks, experienced bartenders, and an atmosphere that works equally well whether you're starting the evening or ending it.`,
        label: "Address",
        address: "Klitiou 6",
      },
      {
        emoji: "🌇",
        heading: "Ermou 18 Beyond the Horizon — Rooftop Bar & Restaurant",
        mapName: "Ermou 18 Beyond the Horizon",
        desc: `One of my favorite places to take visitors who want a memorable Athens evening. The rooftop offers a beautiful panoramic view over the city, and arriving close to sunset makes the experience even more special.`,
        label: "Address",
        address: "Ermou 18",
      },
    ],
  },
  {
    id: "wine",
    emoji: "🍷",
    title: "Wine",
    jumpLabel: "Wine",
    venues: [
      {
        emoji: "🍷",
        heading: "Cinque Wine & Deli — Greek Wine Bar & Deli",
        mapName: "Cinque Wine Deli",
        desc: `A warm, family-run wine bar in the heart of Monastiraki, and an excellent place to discover Greek wine. They pour a wide range of Greek labels by the glass, paired with artisan cheeses and charcuterie, and the sommelier-led tastings are a genuinely friendly introduction to Greek varieties — whether you know wine well or are just starting out.`,
        label: "Address",
        address: "Voreou 10",
      },
    ],
  },
  {
    id: "sweets",
    emoji: "🍫",
    title: "Sweets & Traditional",
    jumpLabel: "Sweets",
    venues: [
      {
        emoji: "🥣",
        heading: "Stani — Traditional Greek Dairy & Desserts",
        mapName: "Stani",
        desc: `One of Athens' historic dairy shops and a place that has been part of the city for generations. If you want to experience authentic Greek dairy products and traditional desserts, this is an easy recommendation.`,
        label: "Address",
        address: "Marika Kotopouli 10",
      },
      {
        emoji: "🍫",
        heading: "CHOUREAL — Fresh Profiterole & Choux Pastry",
        mapName: "CHOUREAL",
        desc: `This is my favorite dessert stop in central Athens. Everything is prepared fresh, but if it's your first visit, order the profiterole. Warm choux pastry, rich chocolate, fresh cream, and a dessert that's absolutely worth saving room for.`,
        label: "Address",
        address: "Ermou 18 & Diomeias 2",
      },
    ],
  },
];

function mapsUrl(mapName: string, address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${mapName} ${address} Athens`
  )}`;
}

export default function HostRecommendationsPage() {
  return (
    <main
      style={{
        backgroundColor: "#0e0e0e",
        minHeight: "100vh",
        color: "white",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />

      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "50px" }}>
          <Link
            href="/"
            style={{
              color: "#888",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            ← BACK TO MAIN PAGE
          </Link>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "900",
              margin: 0,
            }}
          >
            Host Recommendations — Our Favorite Spots
          </h1>
        </header>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          {introParas.map((p, i) => (
            <p
              key={i}
              style={{
                color: "#a1a1aa",
                marginTop: i === 0 ? "0" : "14px",
                fontSize: "1.1rem",
              }}
            >
              {p}
            </p>
          ))}

          <div style={{ marginTop: "14px", fontSize: "1.1rem" }}>
            {categories.map((c, i) => (
              <span key={c.id}>
                {i > 0 && <span style={{ color: "#888" }}> · </span>}
                <a
                  href={`#${c.id}`}
                  style={{
                    color: "#D4AF37",
                    textDecoration: "none",
                    borderBottom: "1px solid #D4AF37",
                    paddingBottom: "3px",
                  }}
                >
                  {c.jumpLabel}
                </a>
              </span>
            ))}
          </div>
        </section>

        {categories.map((c) => (
          <section
            key={c.id}
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            <h2
              id={c.id}
              style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}
            >
              <span aria-hidden="true">{c.emoji}</span> {c.title}
            </h2>

            {c.venues.map((v, vi) => (
              <div key={vi} style={{ marginTop: "30px" }}>
                <h3
                  style={{
                    color: "#D4AF37",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    margin: "12px 0",
                    lineHeight: 1.2,
                  }}
                >
                  <span aria-hidden="true">{v.emoji}</span> {v.heading}
                </h3>
                <p style={{ color: "#a1a1aa", fontSize: "1.1rem" }}>{v.desc}</p>
                <p
                  style={{
                    color: "#a1a1aa",
                    fontSize: "1.1rem",
                    marginTop: "8px",
                  }}
                >
                  {v.label}:{" "}
                  <a
                    href={mapsUrl(v.mapName, v.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#D4AF37",
                      textDecoration: "none",
                      borderBottom: "1px solid #D4AF37",
                      paddingBottom: "3px",
                    }}
                  >
                    {v.address}
                  </a>
                </p>
              </div>
            ))}
          </section>
        ))}

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          {closingParas.map((p, i) => (
            <p
              key={i}
              style={{
                color: "#a1a1aa",
                marginTop: i === 0 ? "0" : "14px",
                fontSize: "1.1rem",
              }}
            >
              {p}
            </p>
          ))}
        </section>
      </div>

      <footer style={{ marginTop: "60px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "1.5rem",
            color: "#D4AF37",
          }}
        >
          "Making people smile"
        </p>
      </footer>
    </main>
  );
}
