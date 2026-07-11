import './globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.athensurbanvibes.com'),
  title: 'Athens Urban Vibes | Boutique Hospitality',
  description: 'Making people smile through exceptional boutique stays in Athens.',
  openGraph: {
    siteName: 'Athens Urban Vibes',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - המעקב של גוגל */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZM40QEERZQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZM40QEERZQ');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}