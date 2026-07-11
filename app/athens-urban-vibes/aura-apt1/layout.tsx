import type { Metadata } from 'next'

const title = 'Urban Base No. 1 — Fully Renovated | Athens Urban Vibes'
const description =
  'Urban Base No. 1 is a fully renovated boutique apartment at Miron 18, Athens — a 7-minute walk from Victoria metro station. Self check-in, hosted by Airbnb Superhost Yuval.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/athens-urban-vibes/aura-apt1',
  },
  openGraph: {
    title,
    description,
    url: '/athens-urban-vibes/aura-apt1',
    type: 'website',
    siteName: 'Athens Urban Vibes',
    locale: 'en_US',
    images: ['/miron18/apt1/cover.jpg'],
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
      name: 'Aura Apartment 1',
      item: 'https://www.athensurbanvibes.com/athens-urban-vibes/aura-apt1',
    },
  ],
}

export default function AuraApt1Layout({
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
