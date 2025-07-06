export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "R DISTRIB SOLUTIONS",
    "alternateName": "RDS Transport",
    "url": "https://rdistrib-solutions.fr",
    "logo": "https://rdistrib-solutions.fr/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service",
      "availableLanguage": ["French"],
      "areaServed": "FR",
      "contactOption": ["TollFree", "HearingImpairedSupported"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 Rue de Te",
      "addressLocality": "Tremblay-en-France",
      "postalCode": "93290",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rdistrib-solutions",
      "https://twitter.com/rdistribsolutions"
    ],
    "description": "R DISTRIB SOLUTIONS est votre partenaire de confiance pour des solutions de transport et logistique professionnelles en France.",
    "foundingDate": "2020",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "R DISTRIB SOLUTIONS",
    "image": "https://rdistrib-solutions.fr/hero-image.jpg",
    "@id": "https://rdistrib-solutions.fr",
    "url": "https://rdistrib-solutions.fr",
    "telephone": "+33123456789",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 Rue de Te",
      "addressLocality": "Tremblay-en-France",
      "postalCode": "93290",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.9967,
      "longitude": 2.5144
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "237"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transport et Logistique",
    "provider": {
      "@type": "Organization",
      "name": "R DISTRIB SOLUTIONS"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Transport",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transport National",
            "description": "Livraison de marchandises sur tout le territoire français"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logistique Urbaine",
            "description": "Solutions de distribution en centre-ville"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stockage",
            "description": "Entreposage sécurisé de marchandises"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}