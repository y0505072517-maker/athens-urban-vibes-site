import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Walks, Waves & Workouts — Parks, Beaches & Gyms in Athens";
const description =
  "Parks, beaches and gyms near your Athens Urban Vibes stay — walks, day trips to the Athenian Riviera, and where to work out, from your host.";
const title = `${pageTitle} — Athens Urban Vibes`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guides/parks-beaches-gyms",
  },
  openGraph: {
    title,
    description,
    url: "/guides/parks-beaches-gyms",
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
      name: "Guides",
      item: "https://www.athensurbanvibes.com/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: pageTitle,
      item: "https://www.athensurbanvibes.com/guides/parks-beaches-gyms",
    },
  ],
};

type Place = { name: string; desc: string; linkText: string; url: string };

const parks: Place[] = [
  {
    name: "National Garden",
    desc: "A peaceful park in the city centre with shady paths and small ponds.",
    linkText: "Open in Google Maps",
    url: "https://maps.app.goo.gl/SSFyKPDcFFUCznAe7",
  },
  {
    name: "Philopappos Hill",
    desc: "A scenic hill with beautiful views of the Acropolis, especially at sunset.",
    linkText: "Open in Google Maps",
    url: "https://maps.app.goo.gl/tjBAMgGiiowwRHZZ6",
  },
  {
    name: "Zappeion & Panathenaic Stadium Walk",
    desc: "A relaxing 45–60 minute loop connecting iconic landmarks.",
    linkText: "Route Map",
    url: "https://maps.app.goo.gl/qgubMXm7HAx3Mzzw8",
  },
];

const beaches: Place[] = [
  {
    name: "Glyfada Beach",
    desc: "An urban beach with cafés, restaurants and sunbeds along the Athenian Riviera.",
    linkText: "Open in Google Maps",
    url: "https://maps.app.goo.gl/ctnoXV1NN4JJSigF9",
  },
  {
    name: "Vouliagmeni Beach",
    desc: "Clear waters and organised facilities — a good fit for couples and families.",
    linkText: "Open in Google Maps",
    url: "https://maps.app.goo.gl/SPp1NKU2dDLTWEyE9",
  },
  {
    name: "Lake Vouliagmeni",
    desc: "A natural thermal lake with warm water all year round.",
    linkText: "Open in Google Maps",
    url: "https://maps.app.goo.gl/xk7W8QWoSwkAUW71A",
  },
];

const gyms: Place[] = [
  {
    name: "Bodyshape Athens",
    desc: "A well-equipped gym with flexible daily and monthly passes.",
    linkText: "Open in Google Maps",
    url: "https://maps.app.goo.gl/VCRCMzUyK4NZNBpu8",
  },
  {
    name: "Body House Gym",
    desc: "A convenient option for cardio and strength workouts.",
    linkText: "Open in Google Maps",
    url: "https://maps.app.goo.gl/ffFJ8hDm9uRK2CZa6",
  },
];

const tips = [
  "Bring water, a hat and sunscreen — the Athenian sun is strong.",
  "Some beaches have pebbles; water shoes can help.",
  "For taxis, the FREE NOW and Uber apps both work well in Athens (both connect you to licensed taxis).",
];

const bodyP = {
  color: "#a1a1aa",
  fontSize: "1.1rem",
  marginTop: "14px",
  textAlign: "center" as const,
};
const h2Style = {
  fontSize: "1.5rem",
  margin: "50px 0 0",
  lineHeight: 1.2,
  textAlign: "center" as const,
};
const goldLink = {
  color: "#D4AF37",
  textDecoration: "none",
  borderBottom: "1px solid #D4AF37",
  paddingBottom: "3px",
};

function PlaceItem({ place }: { place: Place }) {
  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <p style={{ color: "#a1a1aa", fontSize: "1.1rem" }}>
        <strong>{place.name}</strong> — {place.desc}
      </p>
      <p style={{ color: "#a1a1aa", fontSize: "1.1rem", marginTop: "8px" }}>
        <a
          href={place.url}
          target="_blank"
          rel="noopener noreferrer"
          style={goldLink}
        >
          {place.linkText}
        </a>
      </p>
    </div>
  );
}

export default function ParksBeachesGymsPage() {
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
            href="/guides"
            style={{
              color: "#888",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            ← ALL GUIDES
          </Link>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "900",
              margin: 0,
            }}
          >
            {pageTitle}
          </h1>

          <p style={bodyP}>
            {
              "A quick guide from us, your Athens Urban Vibes hosts — the parks, beaches and gyms we point guests to when they ask."
            }
          </p>
        </header>

        <h2 style={h2Style}>
          <span aria-hidden="true">🏞</span> Parks & Walks
        </h2>
        {parks.map((p) => (
          <PlaceItem key={p.name} place={p} />
        ))}

        <h2 style={h2Style}>
          <span aria-hidden="true">🏖</span> Beaches (Day Trips)
        </h2>
        {beaches.map((p) => (
          <PlaceItem key={p.name} place={p} />
        ))}

        <h2 style={h2Style}>
          <span aria-hidden="true">🏋️</span> Gyms & Fitness
        </h2>
        <p style={bodyP}>
          {
            "If you like to train while travelling, these are the two gyms we usually suggest. Please contact the gym directly to confirm that daily passes are currently available."
          }
        </p>
        {gyms.map((p) => (
          <PlaceItem key={p.name} place={p} />
        ))}
        <p style={bodyP}>
          {"For a wider overview, this independent local guide is useful: "}
          <a
            href="https://johnnyafrica.com/best-gym-athens/"
            target="_blank"
            rel="noopener noreferrer"
            style={goldLink}
          >
            Best Gyms in Athens
          </a>
          .
        </p>

        <h2 style={h2Style}>
          <span aria-hidden="true">✨</span> Tips
        </h2>
        <ul
          style={{
            listStyle: "none",
            margin: "14px 0 0",
            padding: 0,
            textAlign: "center",
          }}
        >
          {tips.map((t, i) => (
            <li
              key={i}
              style={{
                color: "#a1a1aa",
                fontSize: "1.1rem",
                marginTop: i === 0 ? "0" : "8px",
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link href="/guides" style={goldLink}>
            More guides
          </Link>
        </div>
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
