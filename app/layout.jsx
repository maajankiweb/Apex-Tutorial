import './globals.css';

export const metadata = {
  metadataBase: new URL('https://apextutorialbettiah.com'),
  title: {
    default: 'Apex Tutorial Bettiah | Premier BSEB 11th & 12th Science Coaching',
    template: '%s | Apex Tutorial Bettiah'
  },
  description: 'Apex Tutorial Bettiah - 4.7★ Rated coaching institute exclusively for Bihar Board (BSEB) Class 11th & 12th Science in Physics, Chemistry, Maths & Biology. Located at Supriya Main Road, Chawani, Bettiah.',
  keywords: [
    'Apex Tutorial Bettiah',
    'Apex Tutorial 11th 12th Science',
    'Bihar Board 12th Science Coaching Bettiah',
    'Best Science Coaching in Bettiah',
    'Physics Chemistry Coaching Bettiah',
    'Class 12th Maths Biology Coaching Chawani Bettiah',
    'BSEB 11th 12th Morning 6 AM Batches Bettiah',
    'BSEB Science Model Test Series Bettiah',
    'Coaching Institute Supriya Main Road Bettiah'
  ],
  authors: [{ name: 'Apex Tutorial Bettiah Academic Desk' }],
  creator: 'Apex Tutorial Bettiah',
  publisher: 'MaaJanki Web Tech',
  formatDetection: {
    telephone: true,
    address: true,
    email: false
  },
  openGraph: {
    title: 'Apex Tutorial Bettiah | Premier BSEB 11th & 12th Science Coaching',
    description: '4.7★ Rated Bihar Board 11th & 12th Science Coaching in Bettiah. Early morning 6:00 AM batches, Smart Board classrooms, and 50% MCQ pattern mastery.',
    url: 'https://apextutorialbettiah.com',
    siteName: 'Apex Tutorial Bettiah',
    images: [
      {
        url: '/apex-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Tutorial Bettiah Smart Board Classroom'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Tutorial Bettiah | Premier BSEB 11th & 12th Science Coaching',
    description: '4.7★ Rated Bihar Board 11th & 12th Science Coaching in Bettiah, Bihar.',
    images: ['/apex-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://apextutorialbettiah.com'
  }
};

export default function RootLayout({ children }) {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': 'https://apextutorialbettiah.com/#organization',
        'name': 'Apex Tutorial',
        'legalName': 'Apex Tutorial Bettiah',
        'alternateName': ['Apex Tutorial Chawani', 'Apex Coaching Bettiah'],
        'url': 'https://apextutorialbettiah.com',
        'logo': 'https://apextutorialbettiah.com/apex-hero.jpg',
        'image': 'https://apextutorialbettiah.com/apex-hero.jpg',
        'description': 'Bettiah premier coaching institute exclusively dedicated to Bihar Board (BSEB) Class 11th & 12th Science stream across Physics, Chemistry, Mathematics & Biology.',
        'telephone': '+919852002500',
        'priceRange': '₹₹',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Supriya Main Road, INDRAPURI COLONY, Chawani',
          'addressLocality': 'Bettiah',
          'addressRegion': 'Bihar',
          'postalCode': '845438',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '26.8016',
          'longitude': '84.5022'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'opens': '06:00',
            'closes': '19:00'
          }
        ],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.7',
          'reviewCount': '329',
          'bestRating': '5',
          'worstRating': '1'
        },
        'sameAs': [
          'https://www.facebook.com/Apextutorialbth/',
          'https://www.google.com/maps/search/?api=1&query=Apex+Tutorial+Supriya+Main+Road+Bettiah'
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('error', function(e) {
                  if (e.target && (e.target.tagName === 'SCRIPT' || e.target.tagName === 'LINK')) {
                    var src = e.target.src || e.target.href;
                    if (src && src.indexOf('/_next/static/') !== -1) {
                      window.location.reload();
                    }
                  }
                }, true);
              }
            `
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
