export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://yoav-steel.vercel.app/#person',
        name: 'Yoav Zadikov',
        url: 'https://yoav-steel.vercel.app',
        image: 'https://yoav-steel.vercel.app/ABOUT.jpg',
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
        '@id': 'https://yoav-steel.vercel.app/#website',
        url: 'https://yoav-steel.vercel.app',
        name: 'Yoav Zadikov — Director & Producer',
        description:
          'Portfolio of Yoav Zadikov — music video director, producer and editor based in Israel.',
        publisher: { '@id': 'https://yoav-steel.vercel.app/#person' },
        inLanguage: 'en',
      },
      {
        '@type': 'CreativeWork',
        '@id': 'https://yoav-steel.vercel.app/#portfolio',
        name: 'Yoav Zadikov Portfolio',
        creator: { '@id': 'https://yoav-steel.vercel.app/#person' },
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
