import type { Metadata } from "next";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  blocks: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: "getting-to-miron-18",
    title:
      "Getting to Miron 18 from Athens Airport — and Why Victoria Works as an Athens Base",
    description:
      "A practical guide to reaching Miron 18 from Athens Airport, the verified 7-minute walk from Victoria metro, and what to expect from this lived-in, multicultural Athens neighbourhood.",
    blocks: [
      {
        type: "p",
        text: `**Miron 18 is located at 18 Miron Street, Athens 104 34, in the Victoria area of central-north Athens. The property is a verified 7-minute walk from Victoria Metro Station on Line 1, and it is well connected to Athens Airport by public transport.**`,
      },
      {
        type: "p",
        text: `This guide is written by us, the hosts of **Athens Urban Vibes**, about our own apartments. It is not an independent neighbourhood review. Our aim is to explain the location clearly, including both what makes Victoria useful and what kind of traveller is most likely to appreciate staying there.`,
      },
      { type: "h2", text: "Getting from Athens Airport to the Victoria Area" },
      {
        type: "p",
        text: `Miron 18 is well connected to Athens Airport by public transport. Victoria Metro Station sits on Line 1, while the airport is served by Line 3, so the rail journey involves a transfer — for example, taking Line 3 toward the centre and changing onto Line 1. Many guests prefer to take a taxi from the airport instead, which runs on a fixed airport fare and can be more convenient after a flight, especially with luggage.`,
      },
      {
        type: "p",
        text: `From Victoria Metro Station, Miron 18 is a **verified 7-minute walk**.`,
      },
      { type: "h2", text: "What Kind of Area Is Victoria?" },
      {
        type: "p",
        text: `Victoria is a real, lived-in, multicultural neighbourhood in central-north Athens. It is residential rather than a tourist-focused district. For many visitors that means experiencing everyday Athens while still having a practical metro connection.`,
      },
      { type: "h2", text: "Why the Metro Connection Matters" },
      {
        type: "p",
        text: `The most useful verified transport fact is the 7-minute walk to Victoria Metro Station on Line 1. Rather than publishing journey times that may change, we prefer to state only verified information — and the short, level walk to the metro is what makes Miron 18 practical to reach and easy to get around from.`,
      },
      { type: "h2", text: "About Miron 18" },
      { type: "p", text: `Miron 18 includes:` },
      {
        type: "ul",
        items: [
          "Five fully renovated apartments.",
          "One rooftop suite called **Athenian Sky Retreat**.",
          "Self check-in, available 24/7 via a smart lock.",
          "Apartment 1 sleeps up to four guests.",
          "Apartment 2 sleeps up to four guests (two beds, suitable for families).",
          "Apartment 3 sleeps up to four guests.",
          "Apartments 4 and 5 each sleep two guests (suitable for couples).",
        ],
      },
      {
        type: "p",
        text: `The rooftop suite features a fully private rooftop terrace with lounge seating, a pergola with string lights, a planted garden and panoramic views over the city, the mountains and towards Piraeus.`,
      },
      {
        type: "p",
        text: `Across Athens Urban Vibes, verified guest ratings range from **4.86 to 5.0**, and the brand is hosted by an **Airbnb Superhost**.`,
      },
      {
        type: "p",
        text: `Athens Urban Vibes is a growing network, with a third location currently in development.`,
      },
    ],
  },
  {
    slug: "athenian-sky-retreat-rooftop",
    title:
      "A Private Rooftop in Athens: What Makes the Athenian Sky Retreat Different",
    description:
      "An honest look at the private rooftop terrace at the Athenian Sky Retreat, including who it's best for and why it is the signature feature of Athens Urban Vibes.",
    blocks: [
      {
        type: "p",
        text: `**The defining feature of the Athenian Sky Retreat isn't inside the apartment — it's above it. The apartment includes a fully private rooftop terrace with lounge seating, a pergola illuminated by string lights, a planted garden and panoramic views across Athens, the surrounding mountains and towards Piraeus.**`,
      },
      {
        type: "p",
        text: `This article is written by us, the hosts of **Athens Urban Vibes**, about one of our own apartments.`,
      },
      { type: "h2", text: "A Rooftop That's Part of the Stay" },
      { type: "p", text: `The rooftop includes:` },
      {
        type: "ul",
        items: [
          "Comfortable lounge seating.",
          "A pergola with string lights.",
          "A planted garden.",
          "Panoramic views across Athens, the mountains and towards Piraeus.",
        ],
      },
      {
        type: "p",
        text: `Rather than treating the terrace as an extra feature, we think of it as part of the accommodation itself.`,
      },
      { type: "h2", text: "What Does It Feel Like?" },
      {
        type: "p",
        text: `During the day the rooftop feels open beneath the Athenian sky. In the evening, the pergola lights create a warmer atmosphere while the city gradually changes below. The planted garden softens the rooftop and the panoramic views stretch across Athens instead of focusing on a single landmark.`,
      },
      { type: "h2", text: "Who Is It Best For?" },
      { type: "p", text: `The rooftop is especially suitable for:` },
      {
        type: "ul",
        items: [
          "Couples.",
          "Guests who value outdoor living space.",
          "Visitors who enjoy panoramic city views.",
          "Travellers who see their accommodation as part of the overall experience.",
        ],
      },
      { type: "h2", text: "Remote Work" },
      {
        type: "p",
        text: `We've personally worked from the rooftop with a laptop, including video calls, and the Wi-Fi held up well throughout — a genuine plus if you'd like to combine your stay with some remote work.`,
      },
      {
        type: "p",
        text: `Athens Urban Vibes is hosted by an **Airbnb Superhost**. Across the apartments, verified guest ratings range from **4.86 to 5.0**. Athens Urban Vibes is a growing network, with a third location currently in development.`,
      },
    ],
  },
  {
    slug: "which-apartment",
    title:
      "Miron 18 or the Athenian Sky Retreat? How to Choose the Right Athens Urban Vibes Apartment",
    description:
      "Not sure which Athens Urban Vibes apartment to book? This honest guide compares Miron 18 and the Athenian Sky Retreat based on group size, travel style and priorities.",
    blocks: [
      {
        type: "p",
        text: `**If you're choosing between Miron 18 and the Athenian Sky Retreat, the answer depends less on the apartment itself and more on how you travel.** Couples, families and small groups have different priorities, and each accommodation within Athens Urban Vibes is designed for a different type of stay.`,
      },
      {
        type: "p",
        text: `This guide is written by us, the hosts of **Athens Urban Vibes**, about our own apartments.`,
      },
      { type: "h2", text: "At a Glance" },
      {
        type: "ul",
        items: [
          "Couples: Apartments 4 and 5",
          "Families: Apartment 2",
          "Up to four guests: Apartments 1, 2 or 3",
          "Private rooftop experience: Athenian Sky Retreat",
        ],
      },
      { type: "h2", text: "Choose Miron 18 If..." },
      {
        type: "p",
        text: `Miron 18 consists of five fully renovated apartments with self check-in, available 24/7 via a smart lock.`,
      },
      {
        type: "ul",
        items: [
          "Apartment 1: up to four guests.",
          "Apartment 2: up to four guests, two beds, suitable for families.",
          "Apartment 3: up to four guests.",
          "Apartments 4 and 5: two guests, suitable for couples.",
        ],
      },
      { type: "h2", text: "Choose the Athenian Sky Retreat If..." },
      {
        type: "p",
        text: `Its defining feature is a **fully private rooftop terrace** with:`,
      },
      {
        type: "ul",
        items: [
          "Lounge seating.",
          "Pergola with string lights.",
          "Planted garden.",
          "Panoramic views across Athens, the mountains and towards Piraeus.",
        ],
      },
      { type: "h2", text: "What Every Apartment Shares" },
      {
        type: "ul",
        items: [
          "Fully renovated.",
          "Self check-in, available 24/7 via a smart lock.",
          "Hosted by an Airbnb Superhost.",
          "Verified guest ratings from 4.86 to 5.0.",
        ],
      },
      {
        type: "p",
        text: `Athens Urban Vibes is a growing network, with a third location currently in development.`,
      },
    ],
  },
  {
    slug: "car-free-athens",
    title:
      "Staying in Athens Without a Car: A Practical Base Near Victoria Metro",
    description:
      "A practical guide to staying at Miron 18 without renting a car, including the verified 7-minute walk to Victoria Metro and what to expect from the neighbourhood.",
    blocks: [
      {
        type: "p",
        text: `**Miron 18 can work well as a car-free Athens base because it is a verified 7-minute walk from Victoria Metro Station on Line 1.**`,
      },
      {
        type: "p",
        text: `This guide is written by us, the hosts of **Athens Urban Vibes**, about our own apartments.`,
      },
      { type: "h2", text: "Staying Without a Car" },
      { type: "p", text: `Miron 18 is:` },
      {
        type: "ul",
        items: [
          "A verified 7-minute walk from Victoria Metro Station (Line 1).",
          "Located in a real, lived-in, multicultural neighbourhood.",
        ],
      },
      {
        type: "p",
        text: `The short, level walk to Victoria Metro is the practical anchor: from there you can move around the city without needing to rent or park a car.`,
      },
      { type: "h2", text: "Airport Connection" },
      {
        type: "p",
        text: `Miron 18 is well connected to Athens Airport by public transport. Victoria Metro Station sits on Line 1, while the airport is served by Line 3, so the rail journey involves a transfer — for example, taking Line 3 toward the centre and changing onto Line 1. Many guests prefer to take a taxi from the airport instead, which runs on a fixed airport fare and can be more convenient after a flight, especially with luggage.`,
      },
      { type: "h2", text: "Self Check-in" },
      {
        type: "p",
        text: `Self check-in is available 24/7 via a smart lock, which makes arrivals straightforward whatever time your flight lands.`,
      },
      { type: "h2", text: "Apartment Options" },
      {
        type: "ul",
        items: [
          "Apartment 1: up to four guests.",
          "Apartment 2: up to four guests, two beds.",
          "Apartment 3: up to four guests.",
          "Apartments 4 and 5: two guests.",
          "Athenian Sky Retreat: fully private rooftop terrace with lounge seating, pergola with string lights, planted garden and panoramic views.",
        ],
      },
      {
        type: "p",
        text: `Guests can communicate directly with the Athens Urban Vibes hosting team through the official website.`,
      },
      {
        type: "p",
        text: `Athens Urban Vibes is a growing network, with a third location currently in development.`,
      },
    ],
  },
];

export function articleBySlug(slug: string): Article {
  const found = ARTICLES.find((a) => a.slug === slug);
  if (!found) throw new Error(`Unknown guide article: ${slug}`);
  return found;
}

export function guideMetadata(article: Article): Metadata {
  const title = `${article.title} — Athens Urban Vibes`;
  return {
    title,
    description: article.description,
    alternates: {
      canonical: `/guides/${article.slug}`,
    },
    openGraph: {
      title,
      description: article.description,
      url: `/guides/${article.slug}`,
      type: "website",
      siteName: "Athens Urban Vibes",
      locale: "en_US",
      images: ["/logo.png"],
    },
  };
}
