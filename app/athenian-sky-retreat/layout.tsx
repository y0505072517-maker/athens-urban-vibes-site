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

export default function SkyRetreatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
