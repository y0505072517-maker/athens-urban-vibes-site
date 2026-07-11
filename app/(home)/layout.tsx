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

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children
}
