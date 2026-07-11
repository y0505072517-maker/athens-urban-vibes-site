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
