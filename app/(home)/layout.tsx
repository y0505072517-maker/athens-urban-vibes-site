import type { Metadata } from 'next'

const title = 'Athens Urban Vibes | Boutique Apartments & Rooftop Suite in Athens'
const description =
  'Fully renovated boutique apartments in Athens with self check-in, hosted by Airbnb Superhost Yuval. Five apartments at Miron 18, a 7-minute walk from Victoria metro station, plus a rooftop suite with panoramic views over the city.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
    type: 'website',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Athens Urban Vibes',
  url: 'https://www.athensurbanvibes.com',
  logo: 'https://www.athensurbanvibes.com/logo.png',
  description:
    'Fully renovated boutique apartments and a rooftop suite in Athens, with self check-in, hosted by Airbnb Superhost Yuval.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Miron 18',
    addressLocality: 'Athens',
    addressCountry: 'GR',
  },
  areaServed: 'Athens, Greece',
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
