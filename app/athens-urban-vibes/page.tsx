import Link from "next/link";
import type { Metadata } from "next";

const title = "Miron 18 | Five Boutique Apartments — Athens Urban Vibes";
const description =
  "Five fully renovated, self check-in apartments at Miron 18, Athens — a 7-minute walk from Victoria metro station. Modern boutique city living hosted by Superhost Yuval.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/athens-urban-vibes",
  },
  openGraph: {
    title,
    description,
    url: "/athens-urban-vibes",
    type: "website",
    siteName: "Athens Urban Vibes",
    locale: "en_US",
    images: ["/miron18/apt1/cover.jpg"],
  },
};

const apartments = [
  {
    id: 1,
    name: "Urban Base No. 1",
    tagline: "Fully Renovated",
    image: "/miron18/apt1/cover.jpg",
    path: "/athens-urban-vibes/aura-apt1",
  },
  {
    id: 2,
    name: "Backyard Bliss #2",
    tagline: "Private Patio",
    image: "/miron18/apt2/cover.jpg",
    path: "/athens-urban-vibes/aura-apt2",
  },
  {
    id: 3,
    name: "Bright Front Apt #3",
    tagline: "Sun-Drenched",
    image: "/miron18/apt3/cover.jpg",
    path: "/athens-urban-vibes/aura-apt3",
  },
  {
    id: 4,
    name: "Quiet Balcony #4",
    tagline: "Total Serenity",
    image: "/miron18/apt4/cover.jpg",
    path: "/athens-urban-vibes/aura-apt4",
  },
  {
    id: 5,
    name: "Cozy Balcony #5",
    tagline: "Freshly Renovated",
    image: "/miron18/apt5/cover.jpg",
    path: "/athens-urban-vibes/aura-apt5",
  },
];

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
      name: "Miron 18",
      item: "https://www.athensurbanvibes.com/athens-urban-vibes",
    },
  ],
};

const lodgingLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Athens Urban Vibes — Miron 18",
  url: "https://www.athensurbanvibes.com/athens-urban-vibes",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Miron 18",
    addressLocality: "Athens",
    postalCode: "104 34",
    addressCountry: "GR",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Athens Urban Vibes",
    url: "https://www.athensurbanvibes.com",
  },
  sameAs: [
    "https://he.airbnb.com/rooms/1457080095293779783",
    "https://he.airbnb.com/rooms/1457082891737996951",
    "https://www.booking.com/hotel/gr/athens-urban-vibes-2-backyard-bliss-patio.he.html",
    "https://he.airbnb.com/rooms/1457136143596427521",
    "https://www.booking.com/hotel/gr/athens-urban-vibes-3-bright-front-apt-sunny.he.html",
    "https://he.airbnb.com/rooms/1457139500098527364",
    "https://www.booking.com/hotel/gr/athens-urban-vibes-4-quiet-balcony-peaceful.he.html",
    "https://he.airbnb.com/rooms/1457142085700844192",
    "https://www.booking.com/hotel/gr/athens-urban-vibes-5-cozy-balcony-renovated.he.html",
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I check in late at night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Self check-in via smart lock is available 24/7, so you can arrive at any hour — including late-night flights.",
      },
    },
    {
      "@type": "Question",
      name: "How does self check-in work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll receive entry instructions before arrival and let yourself in with a smart lock. No key pickup or meeting required.",
      },
    },
    {
      "@type": "Question",
      name: "Which apartments are best for couples?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apartments 4 and 5 each sleep two guests with one double bed — a good fit for couples. All apartments are fully renovated with self check-in.",
      },
    },
    {
      "@type": "Question",
      name: "Which apartments fit a family or group of four?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apartments 1, 2 and 3 each sleep up to four guests. Apartment 2 has two beds; Apartments 1 and 3 have a double bed plus a sofa bed.",
      },
    },
    {
      "@type": "Question",
      name: "How close is the metro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Victoria metro station is a 7-minute walk from Miron 18.",
      },
    },
  ],
};

const guestReviews = [
  {
    quote: `"Yuval was an excellent and gracious host, quick to respond to my inquiries. Within walking distance there were 2+ grocery stores, coffee shops, the Victoria metro station, restaurants, banks, and a pharmacy — everything one could need."`,
    attribution: "— Gem, Airbnb guest, 2026",
  },
  {
    quote: `"Very large and clean apartment, the air conditioner works great and the washing machine is a huge plus. The kitchen is fully stocked and clean, which I also appreciated."`,
    attribution: "— Katherine, Airbnb guest, 2025",
  },
  {
    quote: `"This apartment is wonderful! It is clean and has all the amenities you need for a nice city visit in Athens. It's very close to the Viktoria metro station. I arrived early and could check in early — that's the service that makes a stay extra nice!"`,
    attribution: "— Jelle, Airbnb guest, 2026",
  },
  {
    quote: `"I loved staying at this cozy, modern and beautiful apartment. It's a walkable distance from both the trains and trolley buses, and it also has a beautiful balcony. Yuval was helpful and understanding — I would highly recommend staying here."`,
    attribution: "— Elvyn, Airbnb guest, 2025",
  },
  {
    quote: `"The studio apartment was clean, with modern and fresh renovations. It was clear that the host took great care of every detail. The neighborhood is quiet and cozy — lovely atmosphere and excellent location. Highly recommended!"`,
    attribution: "— Veaceslav, Airbnb guest, 2025",
  },
  {
    quote: `"Best host ever — he made his lovely apartment feel like home, from the coffee to a bottle of wine to the cookies with your tea. I recommend everyone to stay here when you visit Athens!"`,
    attribution: "— Carla, Airbnb guest, 2025",
  },
];

export default function UrbanVibesLobby() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lodgingLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
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
            Athens <span style={{ color: "#D4AF37" }}>Urban Vibes</span>
          </h1>

          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            Five unique residences in the heart of Athens
          </p>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {apartments.map((apt) => (
            <Link
              key={apt.id}
              href={apt.path}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div
                style={{
                  backgroundColor: "#141414",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #27272a",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={apt.image}
                  alt={apt.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "11px",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {apt.tagline}
                  </span>

                  <h2
                    style={{
                      fontSize: "1.5rem",
                      margin: "12px 0",
                      lineHeight: 1.2,
                    }}
                  >
                    {apt.name}
                  </h2>

                  <div
                    style={{
                      color: "#D4AF37",
                      fontWeight: "bold",
                      marginTop: "auto",
                      borderTop: "1px solid #27272a",
                      paddingTop: "15px",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Explore Residence →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Self check-in — reuses the header/card typography (card h2 + subtitle p styles); no new styles */}
        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            Self Check-In, Any Hour
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {"Every apartment has self check-in with a smart lock — available 24/7. Whether your flight lands in the afternoon or at 2 AM, you can let yourself in at any hour. You'll receive simple entry instructions before you arrive, so there's no waiting and no key handover."}
          </p>
        </section>

        {/* FAQ — reuses the self check-in section pattern (card h2 + subtitle p); no new styles */}
        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            Which apartments are best for couples?
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {"Apartments 4 and 5 each sleep two guests with one double bed — a good fit for couples. All apartments are fully renovated with self check-in."}
          </p>
        </section>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            Which apartments fit a family or group of four?
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {"Apartments 1, 2 and 3 each sleep up to four guests. Apartment 2 has two beds; Apartments 1 and 3 have a double bed plus a sofa bed."}
          </p>
        </section>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            How close is the metro?
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {"Victoria metro station is a 7-minute walk from Miron 18."}
          </p>
        </section>

        {/* Neighbourhood guide link — reuses the subtitle p + gold link styling; no new styles */}
        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <p style={{ color: "#a1a1aa", fontSize: "1.1rem" }}>
            {"New to the area? "}
            <Link
              href="/victoria-athens-guide"
              style={{
                color: "#D4AF37",
                textDecoration: "none",
                borderBottom: "1px solid #D4AF37",
                paddingBottom: "3px",
              }}
            >
              Read our honest Victoria neighbourhood guide.
            </Link>
          </p>
        </section>

        {/* Guest Reviews — reuses the self check-in / FAQ section pattern (card h2 + subtitle p; attribution reuses the back-link #888/12px values); no new styles */}
        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            Guest Reviews
          </h2>
          {guestReviews.map((r, i) => (
            <div key={i} style={{ marginTop: "30px" }}>
              <p style={{ color: "#a1a1aa", fontSize: "1.1rem" }}>{r.quote}</p>
              <p style={{ color: "#888", fontSize: "12px", letterSpacing: "1px" }}>
                {r.attribution}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}