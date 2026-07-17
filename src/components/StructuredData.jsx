export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://yoavzadikov.com/#person',
        name: 'Yoav Zadikov',
        url: 'https://yoavzadikov.com',
        image: 'https://yoavzadikov.com/ABOUT.jpg',
        jobTitle: ['Director', 'Producer', 'Editor'],
        description:
          'Yoav Zadikov is a music video director, producer and editor based in Israel, specializing in visual storytelling, commercial productions and cinematic content.',
        knowsAbout: [
          'Music Video Direction',
          'Video Production',
          'Commercial Direction',
          'Film Editing',
          'Motion Graphics',
          'Cinematography',
          'Visual Storytelling',
        ],
        nationality: { '@type': 'Country', name: 'Israel' },
        sameAs: ['https://www.instagram.com/yoavzadikov/'],
        worksFor: {
          '@type': 'Organization',
          name: 'Yoav Zadikov Productions',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://yoavzadikov.com/#website',
        url: 'https://yoavzadikov.com',
        name: 'Yoav Zadikov — Director & Producer',
        description:
          'Portfolio of Yoav Zadikov — music video director, producer and editor based in Israel.',
        publisher: { '@id': 'https://yoavzadikov.com/#person' },
        inLanguage: 'en',
      },
      {
        '@type': 'CreativeWork',
        '@id': 'https://yoavzadikov.com/#portfolio',
        name: 'Yoav Zadikov Portfolio',
        creator: { '@id': 'https://yoavzadikov.com/#person' },
        about: [
          'Music Videos',
          'Commercial Productions',
          'Visual Storytelling',
          'Cinematography',
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
