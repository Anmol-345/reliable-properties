import { Metadata } from 'next';
import { localities, propertyListings, commercialCategories } from '../../../../lib/data';
import PropertyGrid from '../../../../components/PropertyGrid';
import StructuredData from '../../../../components/StructuredData';

interface Props {
  params: Promise<{ category: string; locality: string }>;
}

export async function generateStaticParams() {
  const params: any[] = [];
  commercialCategories.forEach(category => {
    localities.forEach(loc => {
      params.push({ category, locality: loc.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, locality } = await params;
  const loc = localities.find(l => l.slug === locality);
  const locName = loc ? loc.name : locality;
  
  const formattedCategory = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const title = `Commercial ${formattedCategory} for Sale in ${locName}, Sonipat | Reliable Properties`;
  const description = `Looking for verified commercial ${formattedCategory.toLowerCase()} in ${locName}? Explore prime commercial options with Reliable Properties. Call now for site visits & RERA details.`;
  const canonicalUrl = `https://reliableproperty.in/property/commercial/${category}/${locality}`;

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

export default async function CommercialPage({ params }: Props) {
  const { category, locality } = await params;
  const loc = localities.find(l => l.slug === locality);
  const locName = loc ? loc.name : locality;
  const formattedCategory = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Filter exact matches
  const exactListings = propertyListings.filter(l => 
    l.type === 'commercial' &&
    l.subtype === category && 
    l.localitySlug === locality
  );

  // Fallbacks
  let fallbackListings = propertyListings.filter(l => l.type === 'commercial' && l.localitySlug === locality);
  if (fallbackListings.length === 0) {
    fallbackListings = propertyListings.filter(l => l.type === 'commercial');
  }

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://reliableproperty.in" },
      { "@type": "ListItem", "position": 2, "name": "Commercial Property", "item": "https://reliableproperty.in/property/commercial" },
      { "@type": "ListItem", "position": 3, "name": formattedCategory, "item": `https://reliableproperty.in/property/commercial/${category}` },
      { "@type": "ListItem", "position": 4, "name": `${formattedCategory} in ${locName}`, "item": `https://reliableproperty.in/property/commercial/${category}/${locality}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Are there ready to move ${formattedCategory} in ${locName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, Reliable Properties offers verified ready-to-move commercial options in ${locName}. Contact us for site visits.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the price of ${formattedCategory} in ${locName}?`,
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
                  Commercial {formattedCategory} for Sale in {locName}, {loc?.city || 'Delhi NCR'}
                </div>
              </div>
            </h1>
            <div className="subheading" style={{ marginTop: '20px' }}>
              <div className="text-wrap">
                <div className="text-inner">
                  Explore verified {formattedCategory.toLowerCase()} in {locName}. {loc?.description}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <PropertyGrid 
              initialListings={exactListings} 
              fallbackListings={fallbackListings}
              emptyMessage={`We couldn't find exact ${formattedCategory.toLowerCase()} in ${locName} right now.`}
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
                <p><strong>Are there ready to move {formattedCategory} in {locName}?</strong></p>
                <p style={{ marginBottom: '15px' }}>Yes, Reliable Properties offers verified ready-to-move commercial options in {locName}. Contact us for site visits.</p>
                
                <p><strong>What is the price of {formattedCategory} in {locName}?</strong></p>
                <p>Prices vary depending on the exact project and amenities. Please browse our listings or contact us for the most updated pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
