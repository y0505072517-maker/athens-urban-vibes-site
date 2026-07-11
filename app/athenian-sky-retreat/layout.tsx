import type { Metadata } from 'next'

const title =
  'Athenian Sky Retreat | Rooftop Suite with Panoramic Views — Athens Urban Vibes'
const description =
  'A private rooftop suite with sweeping panoramic views over Athens and the surrounding mountains. Fully renovated with self check-in, hosted by Superhost Yuval.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/athenian-sky-retreat',
  },
  openGraph: {
    title,
    description,
    url: '/athenian-sky-retreat',
    type: 'website',
    images: ['/sky-retreat/cover.jpg'],
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
      name: 'Athenian Sky Retreat',
      item: 'https://www.athensurbanvibes.com/athenian-sky-retreat',
    },
  ],
}

export default function SkyRetreatLayout({
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
