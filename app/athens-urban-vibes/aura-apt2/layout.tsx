import type { Metadata } from 'next'

const title = 'Aura Apartment 2 — Backyard Garden Retreat | Athens Urban Vibes'
const description =
  'Your own private garden in the middle of Athens. Glass doors open directly onto a secluded patio with artificial grass and LED lighting — ideal for morning coffee, evening wine or a romantic dinner under the stars. Inside: minimalist design with black metal accents and natural wood, espresso machine, full kitchen and a quiet queen bed with premium linen. A rare find in the city.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/athens-urban-vibes/aura-apt2',
  },
  openGraph: {
    title,
    description,
    url: '/athens-urban-vibes/aura-apt2',
    type: 'website',
    images: ['/miron18/apt2/cover.jpg'],
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
      name: 'Aura Apartment 2',
      item: 'https://www.athensurbanvibes.com/athens-urban-vibes/aura-apt2',
    },
  ],
}

export default function AuraApt2Layout({
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
