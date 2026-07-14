import type { Metadata } from "next";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "plink";
      before: string;
      linkText: string;
      href: string;
      after: string;
    };

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
        text: `If you'd prefer to arrange a driver in advance, we're happy to recommend Nectarius — a courteous, reliable driver we personally use, especially for airport pick-ups.`,
      },
      {
        type: "p",
        text: `Nectarius — +30 698 081 6461`,
      },
      {
        type: "p",
        text: `Once you're in the city, the FREE NOW and Uber apps both work well in Athens for getting around — both connect you to licensed taxis.`,
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
  {
    slug: "parthenon-story",
    title: "The Parthenon: The Story Behind the Symbol of Athens",
    description:
      "Discover the verified story of the Parthenon, its architecture, purpose and remarkable journey through the history of Athens.",
    blocks: [
      {
        type: "p",
        text: `The Parthenon is an ancient temple dedicated to Athena, the patron goddess of Athens. Standing on the Acropolis, the ancient citadel on a limestone hill above the city, it remains one of the best-known symbols of Athens. Understanding its story adds a deeper meaning to every visit.`,
      },
      { type: "h2", text: "A Temple Dedicated to Athena" },
      {
        type: "p",
        text: `The Parthenon stands on the Acropolis, overlooking Athens from its limestone hill. It was built as a temple dedicated to Athena, the patron goddess of the city.`,
      },
      {
        type: "p",
        text: `Construction began in 447 BC under the Athenian statesman Pericles as part of a major rebuilding programme following the Greco-Persian Wars.`,
      },
      {
        type: "p",
        text: `The project was designed by the architects Ictinus and Callicrates, while the sculptor Phidias supervised the sculptural decoration. The main structure was largely completed by 438 BC, with work on its decoration continuing until around 432 BC.`,
      },
      {
        type: "p",
        text: `Inside the temple stood a large gold-and-ivory statue of Athena, created by Phidias. For a time, the building also served as a treasury associated with the Delian League and the Athenian empire.`,
      },
      { type: "h2", text: "A Remarkable Achievement in Architecture" },
      {
        type: "p",
        text: `The Parthenon was built from Pentelic marble, quarried from Mount Pentelicus, roughly 10 miles (about 16 km) from Athens.`,
      },
      {
        type: "p",
        text: `It is a Doric-order temple with some Ionic elements, featuring 8 columns on each end and 17 along each side.`,
      },
      {
        type: "p",
        text: `Its builders also introduced subtle architectural refinements. The columns lean slightly inward and swell gently near the middle, a technique known as entasis, while the base curves upward. Together, these carefully planned features contribute to the building's balanced appearance and demonstrate the extraordinary precision of its design.`,
      },
      { type: "h2", text: "A Monument That Survived Centuries of Change" },
      {
        type: "p",
        text: `The Parthenon has witnessed many chapters of history.`,
      },
      {
        type: "p",
        text: `Over the centuries, it was converted into a Christian church and later into a mosque under Ottoman rule.`,
      },
      {
        type: "p",
        text: `In 1687, a Venetian bombardment ignited Ottoman munitions stored inside, causing severe damage to the building. Even after this destruction, the Parthenon has remained standing at the heart of one of Athens' best-known ancient sites.`,
      },
      {
        type: "p",
        text: `Today, the Acropolis is one of Athens' best-known ancient sites, welcoming visitors who wish to experience one of history's most remarkable architectural achievements.`,
      },
      { type: "h2", text: "Visiting the Parthenon" },
      {
        type: "p",
        text: `A visit to the Parthenon is more than an opportunity to admire an ancient building. It is a chance to experience a place where architecture, craftsmanship and centuries of history come together in a single monument.`,
      },
      {
        type: "p",
        text: `During their stay, Athens Urban Vibes guests can include the Acropolis and its ancient monuments as part of their exploration of Athens, discovering the stories that have shaped the city for centuries.`,
      },
      {
        type: "plink",
        before: "To continue planning your trip, explore ",
        linkText: "our Top 10 Athens Attractions guide",
        href: "/guides/top-athens-attractions",
        after: ".",
      },
    ],
  },
  {
    slug: "ancient-agora-athens",
    title: "The Ancient Agora of Athens: Where Ancient Athens Came to Life",
    description:
      "Discover the Ancient Agora of Athens — the city's historic gathering place, birthplace of democracy, still telling its story today.",
    blocks: [
      {
        type: "p",
        text: `The Ancient Agora of Athens lies below the Acropolis and was the heart of public life in ancient Athens. More than a marketplace, it was a gathering place where citizens traded, talked and participated in civic life. Today, its remarkable monuments offer visitors a deeper understanding of the people and ideas that shaped the city.`,
      },
      { type: "h2", text: "The Heart of Public Life" },
      {
        type: "p",
        text: `The word "agora" means "gathering place," and for ancient Athenians, it truly was the centre of everyday public life.`,
      },
      {
        type: "p",
        text: `Citizens came here to trade, meet one another, exchange ideas and take part in civic life. The Agora became a public civic space early in the 6th century BC, during the time of the lawgiver Solon.`,
      },
      {
        type: "p",
        text: `It is widely described as a birthplace of democracy, reflecting its close connection with public discussion and civic participation in ancient Athens.`,
      },
      {
        type: "p",
        text: `The Agora is also associated with some of history's greatest thinkers, including Socrates, whose name remains closely linked with this remarkable place.`,
      },
      { type: "h2", text: "The Temple of Hephaestus" },
      {
        type: "p",
        text: `Rising on the hill of Kolonos Agoraios on the western side of the Agora stands the Temple of Hephaestus.`,
      },
      {
        type: "p",
        text: `The temple was dedicated to Hephaestus, the god of craftsmen and metalworking, and to Athena. It is one of the best-preserved Doric temples in Greece, allowing visitors to appreciate the elegance of ancient Greek architecture.`,
      },
      {
        type: "p",
        text: `Its remarkable state of preservation is partly due to its later conversion into a Christian church, which helped protect the building through the centuries.`,
      },
      {
        type: "p",
        text: `For many years, the temple was mistakenly known as the "Theseion," after the hero Theseus, although this attribution was incorrect.`,
      },
      { type: "h2", text: "The Stoa of Attalos" },
      {
        type: "p",
        text: `On the eastern side of the Agora stands the Stoa of Attalos, a two-storey covered colonnade with rows of shops on both floors.`,
      },
      {
        type: "p",
        text: `In many ways, it functioned like an ancient shopping arcade, combining sheltered walkways with places for trade and daily activity.`,
      },
      {
        type: "p",
        text: `The Stoa was a gift to Athens from King Attalos II of Pergamon, who ruled between 159 and 138 BC.`,
      },
      {
        type: "p",
        text: `It was destroyed by the invading Herulians in AD 267 before being reconstructed between 1953 and 1956 by the American School of Classical Studies at Athens.`,
      },
      {
        type: "p",
        text: `Today, the reconstructed Stoa houses the Museum of the Ancient Agora, helping preserve and present the history of this extraordinary site.`,
      },
      { type: "h2", text: "A Place That Endures" },
      {
        type: "p",
        text: `The Agora experienced many changes over the centuries. It suffered damage during the Persian attacks of 480/479 BC and later during the invasion of the Herulians in AD 267.`,
      },
      {
        type: "p",
        text: `Within the site stands the Church of the Holy Apostles, an 11th-century Byzantine church that remains an important part of the Agora's historic landscape.`,
      },
      {
        type: "p",
        text: `Today, the Ancient Agora invites visitors to experience the setting where public life, philosophy and civic traditions came together beneath the Acropolis.`,
      },
      {
        type: "p",
        text: `During their stay, Athens Urban Vibes guests can include the Ancient Agora and other historic sites in their plans while exploring Athens and discovering the city's remarkable past.`,
      },
      {
        type: "plink",
        before: "To discover even more unforgettable places, continue with ",
        linkText: "our Top 10 Athens Attractions guide",
        href: "/guides/top-athens-attractions",
        after: ".",
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
