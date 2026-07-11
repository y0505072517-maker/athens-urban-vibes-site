import type { Metadata } from 'next'

const title = 'Aura Apartment 3 — Sun-Drenched Front Apartment | Athens Urban Vibes'
const description =
  'The brightest apartment in the building — this front-facing home fills with golden light from morning to afternoon. A bold teal sofa, lush indoor plants and warm wood tones create a space that feels alive and welcoming. 4K Smart TV, espresso machine, fully equipped kitchen and a balcony make this equally perfect for a relaxed city break or a longer stay. 7 minutes on foot to the metro.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/athens-urban-vibes/aura-apt3',
  },
  openGraph: {
    title,
    description,
    url: '/athens-urban-vibes/aura-apt3',
    type: 'website',
    siteName: 'Athens Urban Vibes',
    locale: 'en_US',
    images: ['/miron18/apt3/cover.jpg'],
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.athensurbanvibes.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Miron 18',
      item: 'https://www.athensurbanvibes.com/athens-urban-vibes',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Aura Apartment 3',
      item: 'https://www.athensurbanvibes.com/athens-urban-vibes/aura-apt3',
    },
  ],
}

export default function AuraApt3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
