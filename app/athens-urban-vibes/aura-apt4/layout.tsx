import type { Metadata } from 'next'

const title = 'Aura Apartment 4 — Quiet Balcony Serenity | Athens Urban Vibes'
const description =
  'Newly renovated and designed for couples. A bright open-plan studio with a brand new queen bed, memory foam mattress and a private balcony for quiet mornings or evening wine. Located in a calm, safe neighbourhood — yet just 7 minutes from the metro and all of Athens. Everything here is fresh, clean and thoughtfully curated. The perfect romantic base.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/athens-urban-vibes/aura-apt4',
  },
  openGraph: {
    title,
    description,
    url: '/athens-urban-vibes/aura-apt4',
    type: 'website',
    images: ['/miron18/apt4/cover.jpg'],
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
      name: 'Aura Apartment 4',
      item: 'https://www.athensurbanvibes.com/athens-urban-vibes/aura-apt4',
    },
  ],
}

export default function AuraApt4Layout({
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
