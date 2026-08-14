import { Metadata } from 'next';
import { localities, propertyListings } from '../../../lib/data';
import PropertyGrid from '../../../components/PropertyGrid';
import StructuredData from '../../../components/StructuredData';

interface Props {
  params: Promise<{ locality: string }>;
}

export async function generateStaticParams() {
  return localities.map(loc => ({
    locality: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locality } = await params;
  const loc = localities.find(l => l.slug === locality);
  const locName = loc ? loc.name : locality;
  
  const title = `Residential & Commercial Plots for Sale in ${locName}, Sonipat | Reliable Properties`;
  const description = `Looking for verified plots in ${locName}? Explore prime residential & commercial plots with Reliable Properties. Call now for site visits & RERA details.`;
  const canonicalUrl = `https://reliableproperty.in/property/plots/${locality}`;

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

export default async function PlotsPage({ params }: Props) {
  const { locality } = await params;
  const loc = localities.find(l => l.slug === locality);
  const locName = loc ? loc.name : locality;

  // Filter exact matches
  const exactListings = propertyListings.filter(l => l.type === 'plots' && l.localitySlug === locality);

  // Fallbacks
  let fallbackListings = propertyListings.filter(l => l.type === 'plots');

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://reliableproperty.in" },
      { "@type": "ListItem", "position": 2, "name": "Property", "item": "https://reliableproperty.in/property" },
      { "@type": "ListItem", "position": 3, "name": "Plots", "item": `https://reliableproperty.in/property/plots` },
      { "@type": "ListItem", "position": 4, "name": `Plots in ${locName}`, "item": `https://reliableproperty.in/property/plots/${locality}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Are there RERA approved plots in ${locName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, Reliable Properties offers verified and approved plot options in ${locName}. Contact us for details.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the price of plots in ${locName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Prices depend on the size and exact location. Please browse our listings or contact us for the most updated pricing.`
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
                  Plots for Sale in {locName}, {loc?.city || 'Delhi NCR'}
                </div>
              </div>
            </h1>
            <div className="subheading" style={{ marginTop: '20px' }}>
              <div className="text-wrap">
                <div className="text-inner">
                  Explore verified residential and commercial plots in {locName}. {loc?.description}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <PropertyGrid 
              initialListings={exactListings} 
              fallbackListings={fallbackListings}
              emptyMessage={`We couldn't find exact plots in ${locName} right now.`}
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
                <p><strong>Are there RERA approved plots in {locName}?</strong></p>
                <p style={{ marginBottom: '15px' }}>Yes, Reliable Properties offers verified and approved plot options in {locName}. Contact us for details.</p>
                
                <p><strong>What is the price of plots in {locName}?</strong></p>
                <p>Prices depend on the size and exact location. Please browse our listings or contact us for the most updated pricing.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
