"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PropertyListing } from '../lib/data';
import { business } from '../lib/business';
import StructuredData from './StructuredData';

interface PropertyGridProps {
  initialListings: PropertyListing[];
  fallbackListings: PropertyListing[];
  emptyMessage: string;
}

export default function PropertyGrid({ initialListings, fallbackListings, emptyMessage }: PropertyGridProps) {
  const [sortBy, setSortBy] = useState<string>('default');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Decide which listings to show
  const isFallback = initialListings.length === 0;
  const sourceListings = isFallback ? fallbackListings : initialListings;

  // Apply filters
  let displayedListings = sourceListings.filter(listing => {
    if (statusFilter === 'all') return true;
    return listing.status === statusFilter;
  });

  // Apply sorting
  if (sortBy === 'price-low') {
    displayedListings.sort((a, b) => a.priceValue - b.priceValue);
  } else if (sortBy === 'price-high') {
    displayedListings.sort((a, b) => b.priceValue - a.priceValue);
  }

  // Schema Generation
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": displayedListings.map((listing, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": listing.type === 'residential' ? "SingleFamilyResidence" : "RealEstateListing",
        "name": listing.title,
        "description": listing.description,
        "url": `https://reliableproperty.in/property/${listing.type}/${listing.bhk || listing.subtype}/${listing.localitySlug}`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": listing.priceValue
        }
      }
    }))
  };

  return (
    <div>
      <StructuredData data={itemListSchema} />

      {isFallback && (
        <div style={{ marginBottom: '20px', padding: '15px', background: '#332b1a', borderLeft: '4px solid #cba153', borderRadius: '4px' }}>
          <p style={{ fontWeight: 'bold' }}>{emptyMessage}</p>
          <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>Showing similar properties in this location.</p>
        </div>
      )}

      {/* Filters and Sorting */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '8px 15px', background: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '5px' }}
        >
          <option value="default">Sort by: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>

        <select 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: '8px 15px', background: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '5px' }}
        >
          <option value="all">Status: All</option>
          <option value="Ready to Move">Ready to Move</option>
          <option value="Under Construction">Under Construction</option>
          <option value="Resale">Resale</option>
          <option value="New Launch">New Launch</option>
        </select>
      </div>

      <div className="history-col">
        {displayedListings.length > 0 ? displayedListings.map(listing => {
          const enquiryMessage = encodeURIComponent(`Hi, I'm interested in the ${listing.title} (${listing.type}) located at ${listing.project || listing.localitySlug}. Price: ${listing.price}. Please provide more details.`);
          
          return (
            <div key={listing.id} className="history-item reveal" style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="img-float" style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', height: '300px', width: '100%' }}>
                <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '5px', zIndex: 10 }}>
                  {listing.isVerified && <span className="badge" style={{ background: '#25D366', color: '#fff', fontSize: '12px', padding: '4px 8px', borderRadius: '3px', fontWeight: 'bold' }}>✓ Verified</span>}
                  <span className="badge" style={{ background: '#cba153', color: '#000', fontSize: '12px', padding: '4px 8px', borderRadius: '3px', fontWeight: 'bold' }}>{listing.status}</span>
                </div>
                <Image 
                  src={listing.images[0] || "/images/slide2.jpeg"} 
                  alt={listing.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 768px) 100vw, 80vw" 
                />
              </div>
              <div>
                <div className="history-year" style={{ fontSize: '24px', marginBottom: '10px' }}>
                  {listing.title}
                </div>
                <div style={{ color: '#cba153', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {listing.subtype.replace('-', ' ')} | {listing.project || listing.builder} | {listing.price}
                </div>
                <div className="history-text" style={{ marginBottom: '15px' }}>
                  {listing.description}
                </div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', fontSize: '0.85rem' }}>
                  <span style={{ background: '#222', padding: '4px 8px', borderRadius: '4px' }}>📏 {listing.areaSqFt} Sq.Ft.</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {listing.features.map(f => (
                    <span key={f} style={{ fontSize: '0.8rem', border: '1px solid #444', padding: '2px 6px', borderRadius: '3px', color: '#ddd' }}>
                      {f}
                    </span>
                  ))}
                </div>
                <a href={`/contact?message=${enquiryMessage}`} className="link-flash" style={{ marginTop: '10px', display: 'inline-block' }}>
                  Enquire Now
                </a>
              </div>
            </div>
          );
        }) : (
          <p style={{ padding: '20px 0' }}>No properties found matching the selected filters.</p>
        )}
      </div>
    </div>
  );
}
