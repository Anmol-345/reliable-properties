import type { Metadata } from "next";
import JoinForm from "../components/JoinForm";
import { business } from "../lib/business";
import Image from "next/image";

export const metadata: Metadata = {
  title: "New Listings & Properties",
  description: `Explore the latest plots, flats, and commercial properties in Kundli and Delhi NCR from ${business.companyName}. Verified deals with clear titles.`,
  keywords: ["Properties in Kundli", "Buy Flats Kundli", "Plots in Sonipat", "Real Estate Listings", "Commercial Properties", "Reliable Properties"],
};

const LISTINGS = [
  {
    id: 1,
    title: "Luxury 3BHK Flat in TDI City",
    type: "Flat",
    location: "TDI City, Kundli",
    price: "₹ 65 Lakhs",
    description: "Spacious ready-to-move 3BHK apartment with modern amenities, 24/7 security, and park facing.",
    image: "/images/slide2.jpeg"
  },
  {
    id: 2,
    title: "Prime Residential Plot",
    type: "Plot",
    location: "Ansal Sushant City, Kundli",
    price: "₹ 1.2 Crores",
    description: "250 sq. yards corner plot in a fully developed sector, ideal for building your dream home.",
    image: "/images/main2.jpeg"
  },
  {
    id: 3,
    title: "Independent Builder Floor",
    type: "Floor",
    location: "Maxheights, Kundli",
    price: "₹ 55 Lakhs",
    description: "Newly constructed 2BHK independent floor with private terrace and premium fittings.",
    image: "/images/slide3.jpeg"
  },
  {
    id: 4,
    title: "High-Footfall Commercial Shop",
    type: "Commercial",
    location: "Sector 15, Sonipat",
    price: "₹ 85 Lakhs",
    description: "Ground floor commercial space perfect for retail or office setup with excellent visibility.",
    image: "/images/main4.png"
  }
];

export default function Listings() {
  return (
    <>
      <section className="main">
        <div className="holder">
          <div className="top reveal">
            <h1>
              <div className="text-wrap">
                <div className="text-inner">
                  Latest Properties
                </div>
              </div>
            </h1>
            <div className="subheading">
              <div className="text-wrap">
                <div className="text-inner">
                  Plots, Flats, Floors &amp; Commercial
                </div>
              </div>
            </div>
          </div>
          
          <div className="history" style={{ marginTop: '50px' }}>
            <div className="history-col">
              <div className="history-title">
                <h2>Our Listings</h2>
                <div className="subheading">
                  Verified &amp; Transparent Deals
                </div>
              </div>
            </div>
            
            <div className="history-col">
              {LISTINGS.map((listing) => (
                <div key={listing.id} className="history-item reveal" style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="img-float" style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', height: '250px' }}>
                    <Image src={listing.image} alt={listing.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div>
                    <div className="history-year" style={{ fontSize: '24px', marginBottom: '10px' }}>
                      {listing.title}
                    </div>
                    <div style={{ color: '#cba153', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {listing.type} | {listing.location} | {listing.price}
                    </div>
                    <div className="history-text">
                      {listing.description}
                    </div>
                    <a href="/contact" className="link-flash" style={{ marginTop: '15px', display: 'inline-block' }}>
                      Enquire Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="join">
        <div className="holder reveal">
          <h2>
            <div className="text-wrap">
              <div className="text-inner">
                Interested in a Property?
              </div>
            </div>
          </h2>
          <JoinForm />
        </div>
      </section>
    </>
  );
}
