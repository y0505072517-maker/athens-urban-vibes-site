import type { Metadata } from 'next'

const title = 'Aura Apartment 5 — Cozy Balcony Studio | Athens Urban Vibes'
const description =
  'Clean, calm and completely renovated — a minimalist studio that gets everything right. Natural light all day, a private balcony with quiet city views, and an orthopedic queen bed with memory foam for genuinely great sleep. Smart lock self check-in, fast Wi-Fi, full kitchen and outdoor furniture included. Works just as well for a 2-night city break as it does for a month-long stay.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/athens-urban-vibes/aura-apt5',
  },
  openGraph: {
    title,
    description,
    url: '/athens-urban-vibes/aura-apt5',
    type: 'website',
    images: ['/miron18/apt5/cover.jpg'],
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
      name: 'Aura Apartment 5',
      item: 'https://www.athensurbanvibes.com/athens-urban-vibes/aura-apt5',
    },
  ],
}

export default function AuraApt5Layout({
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
