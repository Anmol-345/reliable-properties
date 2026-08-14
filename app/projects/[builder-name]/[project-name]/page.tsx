import { Metadata } from 'next';
import { projects, builders, localities, propertyListings } from '../../../lib/data';
import PropertyGrid from '../../../components/PropertyGrid';
import StructuredData from '../../../components/StructuredData';
import Image from 'next/image';

interface Props {
  params: Promise<{ 'builder-name': string; 'project-name': string }>;
}

export async function generateStaticParams() {
  const params: any[] = [];
  projects.forEach(project => {
    params.push({ 'builder-name': project.builderSlug, 'project-name': project.slug });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'builder-name': builderSlug, 'project-name': projectSlug } = await params;
  
  const project = projects.find(p => p.slug === projectSlug);
  const builder = builders.find(b => b.slug === builderSlug);
  
  const projectName = project ? project.name : projectSlug;
  const builderName = builder ? builder.name : builderSlug;
  const locName = project ? localities.find(l => l.slug === project.localitySlug)?.name || project.localitySlug : 'Delhi NCR';

  const title = `${projectName} by ${builderName} in ${locName} | Reliable Properties`;
  const description = `Explore ${projectName} by ${builderName} in ${locName}. Find verified layouts, prices, and amenities. Contact Reliable Properties for site visits & RERA details.`;
  const canonicalUrl = `https://reliableproperty.in/projects/${builderSlug}/${projectSlug}`;

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

export default async function ProjectPage({ params }: Props) {
  const { 'builder-name': builderSlug, 'project-name': projectSlug } = await params;
  
  const project = projects.find(p => p.slug === projectSlug);
  const builder = builders.find(b => b.slug === builderSlug);
  const loc = project ? localities.find(l => l.slug === project.localitySlug) : null;
  
  const projectName = project ? project.name : projectSlug;
  const builderName = builder ? builder.name : builderSlug;
  const locName = loc ? loc.name : 'Delhi NCR';

  // Filter exact matches for this project
  const exactListings = propertyListings.filter(l => l.project === projectName);

  // Fallbacks
  const fallbackListings = propertyListings.filter(l => l.builder === builderName || (loc && l.localitySlug === loc.slug));

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://reliableproperty.in" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://reliableproperty.in/projects" },
      { "@type": "ListItem", "position": 3, "name": builderName, "item": `https://reliableproperty.in/projects/${builderSlug}` },
      { "@type": "ListItem", "position": 4, "name": projectName, "item": `https://reliableproperty.in/projects/${builderSlug}/${projectSlug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Where is ${projectName} located?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${projectName} is located in ${locName}.`
        }
      },
      {
        "@type": "Question",
        "name": `What property types are available in ${projectName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `This project offers ${project?.types.join(', ')} options.`
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
                  {projectName} by {builderName} in {locName}
                </div>
              </div>
            </h1>
            <div className="subheading" style={{ marginTop: '20px' }}>
              <div className="text-wrap">
                <div className="text-inner">
                  {project?.description || `Explore verified properties in ${projectName}.`}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', position: 'relative', width: '100%', height: '400px', borderRadius: '10px', overflow: 'hidden' }}>
             <Image src="/images/slide2.jpeg" alt={projectName} fill style={{ objectFit: 'cover' }} priority />
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Available Properties in {projectName}</h2>
            <PropertyGrid 
              initialListings={exactListings} 
              fallbackListings={fallbackListings}
              emptyMessage={`We don't have active listings in ${projectName} at this moment.`}
            />
          </div>

          <div className="accordion reveal">
            <div className="accordion-item">
              <div className="accordion-title">Project Overview & Amenities</div>
              <div className="accordion-content">
                <p>{project?.description}</p>
                <p style={{ marginTop: '10px' }}><strong>Property Types:</strong> {project?.types.map(t => t.toUpperCase()).join(', ')}</p>
                <p style={{ marginTop: '10px' }}><strong>Developer:</strong> {builderName}</p>
                <p style={{ marginTop: '10px' }}><strong>Location:</strong> {locName}</p>
              </div>
            </div>
            
            <div className="accordion-item">
              <div className="accordion-title">Frequently Asked Questions</div>
              <div className="accordion-content">
                <p><strong>Where is {projectName} located?</strong></p>
                <p style={{ marginBottom: '15px' }}>{projectName} is located in {locName}.</p>
                
                <p><strong>What property types are available in {projectName}?</strong></p>
                <p>This project offers {project?.types.join(', ')} options.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
