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
    }
  | {
      type: "plinks";
      parts: Array<{ text: string } | { linkText: string; href: string }>;
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
  {
    slug: "temple-of-olympian-zeus",
    title:
      "The Temple of Olympian Zeus: Centuries of Ambition in the Heart of Athens",
    description:
      "Discover the Temple of Olympian Zeus, its long construction, monumental Corinthian columns and completion under Emperor Hadrian.",
    blocks: [
      {
        type: "p",
        text: `The Temple of Olympian Zeus, also known as the Olympieion, was dedicated to Zeus, king of the Olympian gods. Begun in the 6th century BC and completed many centuries later under the Roman emperor Hadrian, it is a powerful story of ambition, interruption and survival in the centre of Athens.`,
      },
      { type: "h2", text: "A Monument That Took Centuries to Complete" },
      {
        type: "p",
        text: `Construction began in the 6th century BC under the Athenian tyrant Peisistratos and his sons.`,
      },
      {
        type: "p",
        text: `The project did not continue for long. When the tyranny fell and Athenian democracy was established, construction was abandoned. For centuries, only the foundations remained in place.`,
      },
      {
        type: "p",
        text: `Work resumed in 174 BC under the Seleucid king Antiochos IV Epiphanes, who employed the Roman architect Cossutius. At this stage, the design was changed to the Corinthian order.`,
      },
      {
        type: "p",
        text: `The renewed effort also came to a halt. After the death of Antiochos IV, the temple remained unfinished for another long period.`,
      },
      {
        type: "p",
        text: `Its final completion came under the Roman emperor Hadrian, and the temple was formally dedicated around 132 AD. By that time, many centuries had passed since the first attempt to build it.`,
      },
      { type: "h2", text: "A Temple of Extraordinary Scale" },
      {
        type: "p",
        text: `When complete, the Olympieion was one of the largest temples ever built in the ancient world.`,
      },
      {
        type: "p",
        text: `It had 104 Corinthian columns, each rising to about 17 metres. Their scale created a vast setting for a temple dedicated to Zeus.`,
      },
      {
        type: "p",
        text: `Inside stood a colossal gold-and-ivory statue of Zeus. The statue reflected the scale and importance of the monument itself.`,
      },
      {
        type: "p",
        text: `Standing immediately beside the temple is Hadrian's Arch, a Roman triumphal arch. It marked a symbolic boundary between the old Greek city and the new Roman-era Athens built by Hadrian.`,
      },
      {
        type: "p",
        text: `Together, the temple and the arch represent different periods in the long history of Athens, brought together in the same part of the city.`,
      },
      { type: "h2", text: "Damage, Collapse and Survival" },
      {
        type: "p",
        text: `The temple suffered serious damage during the sack of Athens by the Heruli in AD 267.`,
      },
      {
        type: "p",
        text: `Over time, much of the original structure was lost. One dramatic reminder of its later history remains visible today: in 1852, one of the columns collapsed during a storm and still lies where it fell.`,
      },
      {
        type: "p",
        text: `Today, only 15 of the original 104 columns remain standing.`,
      },
      {
        type: "p",
        text: `Although only part of the temple survives, the height and spacing of the remaining columns still communicate the extraordinary scale of the original monument. The fallen column adds another layer to the experience, showing that the site continued to change long after the ancient period.`,
      },
      { type: "h2", text: "A Striking Stop in Central Athens" },
      {
        type: "p",
        text: `The Temple of Olympian Zeus stands in central Athens, close to the Acropolis and the National Garden.`,
      },
      {
        type: "p",
        text: `Its story brings together several different eras: its beginning under Peisistratos and his sons, its revival under Antiochos IV, and its eventual completion under Hadrian.`,
      },
      {
        type: "p",
        text: `For travellers, the Olympieion offers more than a view of surviving columns. It reveals how one monumental idea passed through centuries of delay before finally being completed.`,
      },
      {
        type: "p",
        text: `During their stay, Athens Urban Vibes guests can include the Temple of Olympian Zeus among the historic sites they visit while exploring Athens.`,
      },
      {
        type: "plink",
        before: "Continue your planning with our ",
        linkText: "Top 10 Athens Attractions guide",
        href: "/guides/top-athens-attractions",
        after: ".",
      },
    ],
  },
  {
    slug: "birth-of-democracy",
    title: "How Democracy Began in Ancient Athens",
    description:
      "Discover how Solon, Cleisthenes, the Assembly and the Council of 500 shaped the first known democracy in ancient Athens.",
    blocks: [
      {
        type: "p",
        text: `Ancient Athens developed a political system in which citizens could speak, vote and take part directly in public decisions. Its foundations were laid through early reforms associated with Solon, while the decisive transformation came under Cleisthenes in 508–507 BC. Historians widely regard the system that followed as the first known democracy in the world.`,
      },
      { type: "h2", text: "Before Democracy" },
      {
        type: "p",
        text: `Athenian democracy did not appear all at once. It emerged through a long process of reform, political struggle and changes in the organisation of public life.`,
      },
      {
        type: "p",
        text: `In the early 6th century BC, the Athenian statesman Solon introduced reforms that laid important groundwork for later democracy. He cancelled debts and freed citizens who had been enslaved because of debt. His reforms also strengthened citizen participation through the Assembly, known as the Ecclesia.`,
      },
      {
        type: "p",
        text: `These changes did not yet create the full democratic system later associated with Athens. The city subsequently came under the rule of tyrants, including Peisistratos and then his son Hippias.`,
      },
      {
        type: "p",
        text: `The movement towards democracy was therefore gradual. Solon helped prepare the ground, but the major political reorganisation came later.`,
      },
      { type: "h2", text: "Cleisthenes and the Democratic Turning Point" },
      {
        type: "p",
        text: `In 508–507 BC, the statesman Cleisthenes introduced sweeping reforms that are credited as the foundation of Athenian democracy.`,
      },
      {
        type: "p",
        text: `One of his most important changes was the reorganisation of citizens into ten tribes. These tribes were based on where people lived, in their local demes, rather than on family or clan ties.`,
      },
      {
        type: "p",
        text: `This change reduced the power of aristocratic families and created a political structure based more strongly on local communities.`,
      },
      {
        type: "p",
        text: `Cleisthenes also established the Boule, or Council of 500 citizens. Representatives were drawn from the ten tribes, and the council prepared matters for discussion and decision by the Assembly.`,
      },
      {
        type: "p",
        text: `Together, these reforms created a new framework for direct citizen participation in the government of Athens.`,
      },
      { type: "h2", text: "The Assembly and the Pnyx" },
      {
        type: "p",
        text: `The word "democracy" comes from the Greek words demos, meaning "the people," and kratos, meaning "power" or "rule." Its literal meaning is therefore "rule by the people."`,
      },
      {
        type: "p",
        text: `At the centre of the Athenian system stood the Assembly, or Ecclesia. It was the sovereign decision-making body of Athens and was open to adult male citizens.`,
      },
      {
        type: "p",
        text: `Eligible citizens could speak and vote on laws, war and public policy. Rather than leaving every decision to a small ruling group, the system allowed citizens to take part directly in public decision-making.`,
      },
      {
        type: "p",
        text: `Assembly meetings were held on the Pnyx, a hillside near the Acropolis. There, citizens gathered to hear arguments, speak and vote on matters affecting the city.`,
      },
      { type: "h2", text: "Why Athenian Democracy Still Matters" },
      {
        type: "p",
        text: `The Athenian system did not include everyone who lived in the city. Participation in the Assembly was limited to adult male citizens.`,
      },
      {
        type: "p",
        text: `Within that citizen body, however, Athens created a direct form of government in which eligible citizens could take part personally in political decisions. This system is widely regarded by historians as the first known democracy in the world.`,
      },
      {
        type: "p",
        text: `Solon's reforms helped lay the early foundations. Cleisthenes then reshaped the political structure, creating the system most closely connected with the birth of Athenian democracy.`,
      },
      {
        type: "p",
        text: `Athens Urban Vibes guests are staying in the city where these developments took place and where the idea of rule by citizens became part of political life.`,
      },
      {
        type: "plink",
        before: "Continue with our ",
        linkText: "Top 10 Athens Attractions guide",
        href: "/guides/top-athens-attractions",
        after:
          ", including the Acropolis and the Ancient Agora, where travellers can connect with the history of ancient Athens in person.",
      },
    ],
  },
  {
    slug: "modern-athens-history",
    title: "How Modern Athens Grew Around Its Ancient Past",
    description:
      "Discover how Athens grew from a small, war-damaged town into a modern European capital while preserving its powerful ancient legacy.",
    blocks: [
      {
        type: "p",
        text: `Athens has been inhabited for thousands of years, but the modern capital took shape mainly during the last two centuries. Chosen as Greece's capital when it was still a small, war-damaged town, Athens grew through urban planning, migration and major public works while its ancient monuments remained central to its identity.`,
      },
      { type: "h2", text: "From a Small Town to a National Capital" },
      {
        type: "p",
        text: `By the time of the Greek War of Independence in the early 19th century, Athens had declined into a small, war-damaged town clustered around the foot of the Acropolis.`,
      },
      {
        type: "p",
        text: `In 1834, Athens was selected as the capital of the newly independent Kingdom of Greece. The choice was strongly symbolic. The city's ancient significance gave it a special place in the identity of the new state, even though Athens then had only a few thousand residents.`,
      },
      {
        type: "p",
        text: `The decision transformed the city's future. Athens would no longer remain a small settlement beneath its ancient monuments. It would become the political and urban centre of the new kingdom.`,
      },
      { type: "h2", text: "Planning a Modern European City" },
      {
        type: "p",
        text: `Greece's first king, Otto of Bavaria, commissioned a modern plan for the capital. The architects involved included Stamatios Kleanthis and Eduard Schaubert.`,
      },
      {
        type: "p",
        text: `The plan helped guide the development of new streets and public spaces as Athens expanded. Neoclassical buildings, wide boulevards and public squares became part of an effort to create a modern European capital while maintaining a visible connection with the city's ancient legacy.`,
      },
      {
        type: "p",
        text: `Protecting that legacy was also part of the rebuilding process. Rules were introduced to safeguard ancient sites, including restrictions on quarrying near certain hills and orders to remove structures that encroached on archaeological areas.`,
      },
      {
        type: "p",
        text: `Modern Athens was therefore shaped by two ambitions at once: creating a functioning capital and protecting the remains of the ancient city.`,
      },
      {
        type: "p",
        text: `By the time Athens hosted the first modern Olympic Games in 1896, its population had grown dramatically, to roughly 140,000 residents.`,
      },
      { type: "h2", text: "Migration and Rapid Urban Growth" },
      {
        type: "p",
        text: `Athens continued to change during the 20th century.`,
      },
      {
        type: "p",
        text: `Following the Greco-Turkish War and the events of 1922, more than a million refugees from Asia Minor settled in Greece. The population of Athens rose sharply, and new neighbourhoods grew as the capital absorbed many new residents.`,
      },
      {
        type: "p",
        text: `This movement of people changed the scale of the city. Athens became larger and more varied, expanding far beyond the small town that had been chosen as the capital in 1834.`,
      },
      {
        type: "p",
        text: `Another important period of modernisation came when Athens hosted the Olympic Games in 2004. Preparations for the Games prompted major improvements to the city's transport and infrastructure.`,
      },
      {
        type: "p",
        text: `These changes helped shape the Athens visitors encounter today: an active modern capital whose streets and public spaces carry visible traces of different periods.`,
      },
      { type: "h2", text: "Ancient City and Modern Metropolis" },
      {
        type: "p",
        text: `Today, Athens is a large, cosmopolitan capital. Ancient monuments stand within a modern metropolitan area, rather than apart from everyday urban life.`,
      },
      {
        type: "p",
        text: `That contrast is one of the city's defining qualities. The Acropolis rises above streets shaped by modern planning, while neoclassical buildings and public squares form another layer between ancient Athens and the contemporary city.`,
      },
      {
        type: "p",
        text: `Athens Urban Vibes guests experience this layered capital today, where the remains of the ancient world exist alongside the life of a modern city.`,
      },
      {
        type: "plinks",
        parts: [
          { text: "Continue exploring with our " },
          {
            linkText: "Top 10 Athens Attractions guide",
            href: "/guides/top-athens-attractions",
          },
          { text: " and our detailed guides to the " },
          { linkText: "Parthenon", href: "/guides/parthenon-story" },
          { text: " and the " },
          { linkText: "Ancient Agora", href: "/guides/ancient-agora-athens" },
          { text: "." },
        ],
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
