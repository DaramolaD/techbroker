export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tech Brokers",
    "url": "https://techbrokersglobal.com/",
    "logo": "https://techbrokersglobal.com/logo_1.svg",
    "description": "Tech Brokers operates as a catalyst for digital transformation and innovation. We partner with businesses, industries, and government entities to navigate technology adoption and drive measurable impact.",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@techbrokersglobal.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/techbrokersglobal",
      "https://twitter.com/techbrokers"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    },
    "areaServed": ["Africa", "Global"],
    "serviceType": [
      "Digital Transformation",
      "Technology Consulting",
      "Software Development",
      "Enterprise Solutions",
      "Government Technology Solutions"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tech Brokers",
    "url": "https://techbrokersglobal.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://techbrokersglobal.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

