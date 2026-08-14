import { Metadata } from 'next';
import { localities, propertyListings, residentialBhkOptions } from '../../../../lib/data';
import PropertyGrid from '../../../../components/PropertyGrid';
import StructuredData from '../../../../components/StructuredData';

interface Props {
  params: Promise<{ bhk: string; locality: string }>;
}

export async function generateStaticParams() {
  const params: any[] = [];
  residentialBhkOptions.forEach(bhk => {
    localities.forEach(loc => {
      params.push({ bhk, locality: loc.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bhk, locality } = await params;
  const loc = localities.find(l => l.slug === locality);
  const locName = loc ? loc.name : locality;
  const formattedBhk = bhk.replace('-bhk', ' BHK').toUpperCase();
  
  const title = `${formattedBhk} Flats for Sale in ${locName}, Sonipat | Reliable Properties`;
  const description = `Looking for verified ${formattedBhk} flats in ${locName}? Explore prime residential options with Reliable Properties. Call now for site visits & RERA details.`;
  const canonicalUrl = `https://reliableproperty.in/property/flats/${bhk}/${locality}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    }
  };
}

export default async function FlatsPage({ params }: Props) {
  const { bhk, locality } = await params;
  const loc = localities.find(l => l.slug === locality);
  const locName = loc ? loc.name : locality;
  const formattedBhk = bhk.replace('-bhk', ' BHK').toUpperCase();

  // Filter exact matches
  const exactListings = propertyListings.filter(l => 
    l.subtype === 'flats' && 
    l.bhk === bhk && 
    l.localitySlug === locality
  );

  // Fallbacks: Flats in the same locality OR flats in general
  let fallbackListings = propertyListings.filter(l => l.subtype === 'flats' && l.localitySlug === locality);
  if (fallbackListings.length === 0) {
    fallbackListings = propertyListings.filter(l => l.subtype === 'flats');
  }

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://reliableproperty.in" },
      { "@type": "ListItem", "position": 2, "name": "Property", "item": "https://reliableproperty.in/property" },
      { "@type": "ListItem", "position": 3, "name": "Flats", "item": `https://reliableproperty.in/property/flats` },
      { "@type": "ListItem", "position": 4, "name": `${formattedBhk} Flats in ${locName}`, "item": `https://reliableproperty.in/property/flats/${bhk}/${locality}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Are there ready to move ${formattedBhk} flats in ${locName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, Reliable Properties offers verified ready-to-move ${formattedBhk} options in ${locName}. Contact us for site visits.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the price of ${formattedBhk} flats in ${locName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Prices vary depending on the exact project and amenities. Please browse our listings or contact us for the most updated pricing.`
        }
      }
    ]
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      
      <section className="main" style={{ padding: '40px 20px', minHeight: '80vh' }}>
        <div className="holder">
          <div className="top reveal">
            <h1>
              <div className="text-wrap">
                <div className="text-inner" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                  {formattedBhk} Flats for Sale in {locName}, {loc?.city || 'Delhi NCR'}
                </div>
              </div>
            </h1>
            <div className="subheading" style={{ marginTop: '20px' }}>
              <div className="text-wrap">
                <div className="text-inner">
                  Explore verified {formattedBhk} residential flats in {locName}. {loc?.description}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <PropertyGrid 
              initialListings={exactListings} 
              fallbackListings={fallbackListings}
              emptyMessage={`We couldn't find exact ${formattedBhk} flats in ${locName} right now.`}
            />
          </div>

          <div className="accordion reveal">
            <div className="accordion-item">
              <div className="accordion-title">Price Trends & Locality Overview</div>
              <div className="accordion-content">
                <p>{loc?.description}</p>
                <p style={{ marginTop: '10px' }}><strong>Connectivity:</strong> Excellent road networks connecting to major hubs.</p>
              </div>
            </div>
            {loc?.landmarks && loc.landmarks.length > 0 && (
              <div className="accordion-item">
                <div className="accordion-title">Top Landmarks near {locName}</div>
                <div className="accordion-content">
                  <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                    {loc.landmarks.map((lm, i) => <li key={i} style={{ marginBottom: '5px' }}>{lm}</li>)}
                  </ul>
                </div>
              </div>
            )}
            <div className="accordion-item">
              <div className="accordion-title">Frequently Asked Questions</div>
              <div className="accordion-content">
                <p><strong>Are there ready to move {formattedBhk} flats in {locName}?</strong></p>
                <p style={{ marginBottom: '15px' }}>Yes, Reliable Properties offers verified ready-to-move {formattedBhk} options in {locName}. Contact us for site visits.</p>
                
                <p><strong>What is the price of {formattedBhk} flats in {locName}?</strong></p>
                <p>Prices vary depending on the exact project and amenities. Please browse our listings or contact us for the most updated pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
