import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteAnimations from "./components/SiteAnimations";
import { business } from "./lib/business";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://reliableproperty.in'),
  title: {
    default: `Home - ${business.companyName}`,
    template: `%s - ${business.companyName}`,
  },
  description: `${business.companyName}, led by ${business.ownerName}, is a trusted real estate brokerage in Kundli, Haryana offering ${business.servicesLine}.`,
  keywords: ["Reliable Properties", "Plots in Kundli", "Flats in Sonipat", "Real Estate Broker", "Property Dealers", "Commercial Properties", "Buy Flat Kundli"],
  openGraph: {
    images: ['/images/key.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": business.companyName,
    "image": "https://reliableproperty.in/images/RELIABLE-PROPERTIES-LOGO-WHITE.svg",
    "@id": "https://reliableproperty.in",
    "url": "https://reliableproperty.in",
    "telephone": business.phonePrimary,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 3, Ansal Sector Road, Sushant City",
      "addressLocality": "Kundli",
      "addressRegion": "Haryana",
      "postalCode": "131029",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.857211,
      "longitude": 77.119047
    },
    "areaServed": ["Kundli", "Sonipat", "Rai", "Delhi NCR", "Murthal", "GT Karnal Road"],
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/all.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="icon" href="/images/cropped-favicon-32x32.png" sizes="32x32" />
        <link
          rel="icon"
          href="/images/cropped-favicon-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/images/cropped-favicon-180x180.png"
        />
        <StructuredData data={schema} />
      </head>
      <body>
        <SiteAnimations />
        <div id="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
