export interface Locality {
  slug: string;
  name: string;
  city: string;
  description: string;
  landmarks: string[];
}

export interface Builder {
  slug: string;
  name: string;
}

export interface Project {
  slug: string;
  name: string;
  builderSlug: string;
  localitySlug: string;
  description: string;
  types: string[]; // e.g., ["flats", "plots"]
}

export type PropertyType = 'residential' | 'commercial' | 'plots';
export type PropertySubtype = 'flats' | 'shops' | 'office-space' | 'sco-plots' | 'warehouses' | 'residential-plots';
export type PropertyStatus = 'Ready to Move' | 'Under Construction' | 'Resale' | 'New Launch';

export interface PropertyListing {
  id: string;
  slug: string;
  title: string;
  builder: string;
  project: string;
  localitySlug: string;
  type: PropertyType;
  subtype: PropertySubtype;
  bhk?: '1-bhk' | '2-bhk' | '3-bhk' | '4-bhk';
  price: string;
  priceValue: number; // for sorting
  areaSqFt: string;
  status: PropertyStatus;
  isVerified: boolean;
  images: string[];
  description: string;
  features: string[];
}

export const localities: Locality[] = [
  {
    slug: "kundli",
    name: "Kundli",
    city: "Sonipat",
    description: "Kundli is a rapidly developing micro-market located on the Delhi-Haryana border, offering excellent connectivity via GT Karnal Road and the upcoming Metro extension.",
    landmarks: ["5 mins from Delhi Border", "Near KMP Expressway", "Close to Rajiv Gandhi Education City"]
  },
  {
    slug: "rai",
    name: "Rai",
    city: "Sonipat",
    description: "Rai is known for its industrial and residential growth, situated along National Highway 44.",
    landmarks: ["Near Rai Sports Complex", "Direct Highway Access"]
  },
  {
    slug: "murthal",
    name: "Murthal",
    city: "Sonipat",
    description: "Murthal is famous for its dhabas and is emerging as a prime real estate destination with new infrastructure.",
    landmarks: ["Deenbandhu Chhotu Ram University (DCRUST)", "Highway Connectivity"]
  },
  {
    slug: "sector-35-sonipat",
    name: "Sector 35",
    city: "Sonipat",
    description: "Sector 35 Sonipat is a premium planned residential area with high-end infrastructure.",
    landmarks: ["Global Corridor", "Top Schools Nearby"]
  },
  {
    slug: "gt-karnal-road",
    name: "GT Karnal Road",
    city: "Delhi NCR",
    description: "GT Karnal Road acts as a massive artery connecting Delhi to Haryana, featuring prime commercial and warehousing spaces.",
    landmarks: ["Industrial Hub", "Major Warehousing Clusters"]
  }
];

export const builders: Builder[] = [
  { slug: "tdi-infrastructure", name: "TDI Infrastructure" },
  { slug: "ansal-api", name: "Ansal API" },
  { slug: "maxheights", name: "Maxheights" },
];

export const projects: Project[] = [
  {
    slug: "tdi-city",
    name: "TDI City",
    builderSlug: "tdi-infrastructure",
    localitySlug: "kundli",
    description: "An expansive integrated township offering premium residential and commercial spaces with world-class amenities.",
    types: ["flats", "plots", "commercial"]
  },
  {
    slug: "sushant-city",
    name: "Sushant City",
    builderSlug: "ansal-api",
    localitySlug: "kundli",
    description: "A well-planned residential project featuring scenic landscapes, open spaces, and modern living.",
    types: ["plots", "flats"]
  },
  {
    slug: "park-city",
    name: "Park City",
    builderSlug: "maxheights",
    localitySlug: "sector-35-sonipat",
    description: "Modern living spaces with lush greenery.",
    types: ["flats"]
  }
];

export const propertyListings: PropertyListing[] = [
  // Kundli Flats
  {
    id: "f1",
    slug: "luxury-3bhk-tdi-city",
    title: "Luxury 3 BHK Flat in TDI City",
    builder: "TDI Infrastructure",
    project: "TDI City",
    localitySlug: "kundli",
    type: "residential",
    subtype: "flats",
    bhk: "3-bhk",
    price: "₹ 65 Lakhs",
    priceValue: 6500000,
    areaSqFt: "1800",
    status: "Ready to Move",
    isVerified: true,
    images: ["/images/slide2.jpeg"],
    description: "Spacious ready-to-move 3BHK apartment with modern amenities, 24/7 security, and park facing.",
    features: ["Gated Society", "Club House", "Park Facing"]
  },
  {
    id: "f2",
    slug: "premium-2bhk-sushant-city",
    title: "Premium 2 BHK in Sushant City",
    builder: "Ansal API",
    project: "Sushant City",
    localitySlug: "kundli",
    type: "residential",
    subtype: "flats",
    bhk: "2-bhk",
    price: "₹ 45 Lakhs",
    priceValue: 4500000,
    areaSqFt: "1200",
    status: "Resale",
    isVerified: true,
    images: ["/images/main2.jpeg"],
    description: "Well maintained 2BHK resale unit with open parking and easy access to market.",
    features: ["Near Market", "Open Parking", "Vaastu Compliant"]
  },
  {
    id: "f3",
    slug: "new-launch-4bhk-kundli",
    title: "New Launch 4 BHK Penthouse",
    builder: "Maxheights",
    project: "Maxheights Dream Homes",
    localitySlug: "kundli",
    type: "residential",
    subtype: "flats",
    bhk: "4-bhk",
    price: "₹ 1.2 Crores",
    priceValue: 12000000,
    areaSqFt: "2500",
    status: "Under Construction",
    isVerified: false,
    images: ["/images/slide3.jpeg"],
    description: "Ultra-luxury penthouse under construction with private terrace.",
    features: ["Private Terrace", "Smart Home", "Pool View"]
  },

  // Sonipat Sector 35 Flats
  {
    id: "f4",
    slug: "2bhk-park-city-sec35",
    title: "2 BHK Flat in Park City",
    builder: "Maxheights",
    project: "Park City",
    localitySlug: "sector-35-sonipat",
    type: "residential",
    subtype: "flats",
    bhk: "2-bhk",
    price: "₹ 55 Lakhs",
    priceValue: 5500000,
    areaSqFt: "1350",
    status: "Ready to Move",
    isVerified: true,
    images: ["/images/slide2.jpeg"],
    description: "Beautifully designed 2 BHK in the heart of Sector 35.",
    features: ["Gym", "Power Backup", "Near School"]
  },
  {
    id: "f5",
    slug: "3bhk-sec35-premium",
    title: "Premium 3 BHK Apartment",
    builder: "TDI Infrastructure",
    project: "TDI Kingsbury",
    localitySlug: "sector-35-sonipat",
    type: "residential",
    subtype: "flats",
    bhk: "3-bhk",
    price: "₹ 75 Lakhs",
    priceValue: 7500000,
    areaSqFt: "1750",
    status: "Under Construction",
    isVerified: true,
    images: ["/images/slide3.jpeg"],
    description: "Spacious 3 BHK with premium fittings.",
    features: ["High Rise", "Security", "Garden"]
  },

  // Commercial Shops
  {
    id: "c1",
    slug: "retail-shop-kundli",
    title: "Main Road Retail Shop",
    builder: "TDI Infrastructure",
    project: "TDI Mall",
    localitySlug: "kundli",
    type: "commercial",
    subtype: "shops",
    price: "₹ 40 Lakhs",
    priceValue: 4000000,
    areaSqFt: "300",
    status: "Ready to Move",
    isVerified: true,
    images: ["/images/main4.png"],
    description: "High visibility retail shop on ground floor.",
    features: ["Ground Floor", "High Footfall", "Parking"]
  },
  {
    id: "c2",
    slug: "office-space-rai",
    title: "Furnished Office Space",
    builder: "Ansal API",
    project: "Ansal Corporate Park",
    localitySlug: "rai",
    type: "commercial",
    subtype: "office-space",
    price: "₹ 65 Lakhs",
    priceValue: 6500000,
    areaSqFt: "800",
    status: "Ready to Move",
    isVerified: true,
    images: ["/images/main2.jpeg"],
    description: "Fully furnished office space with cabins and meeting rooms.",
    features: ["Furnished", "Central AC", "Cafeteria"]
  },
  {
    id: "c3",
    slug: "warehouse-gt-road",
    title: "Large Warehouse Facility",
    builder: "Independent",
    project: "Independent",
    localitySlug: "gt-karnal-road",
    type: "commercial",
    subtype: "warehouses",
    price: "₹ 3.5 Crores",
    priceValue: 35000000,
    areaSqFt: "5000",
    status: "Resale",
    isVerified: true,
    images: ["/images/main4.png"],
    description: "Excellent warehouse facility with heavy vehicle access.",
    features: ["Heavy Vehicle Access", "High Ceiling", "Loading Dock"]
  },
  
  // Plots
  {
    id: "p1",
    slug: "corner-plot-kundli",
    title: "250 Sq Yd Corner Plot",
    builder: "Ansal API",
    project: "Sushant City",
    localitySlug: "kundli",
    type: "plots",
    subtype: "residential-plots",
    price: "₹ 1.25 Crores",
    priceValue: 12500000,
    areaSqFt: "2250", // 250 sq yd ~ 2250 sqft
    status: "Resale",
    isVerified: true,
    images: ["/images/slide2.jpeg"],
    description: "Prime corner plot in fully developed sector.",
    features: ["Corner Plot", "Park Facing", "Freehold"]
  },
  {
    id: "p2",
    slug: "sco-plot-rai",
    title: "Commercial SCO Plot",
    builder: "TDI Infrastructure",
    project: "TDI Commercial",
    localitySlug: "rai",
    type: "commercial",
    subtype: "sco-plots",
    price: "₹ 2.5 Crores",
    priceValue: 25000000,
    areaSqFt: "1800",
    status: "New Launch",
    isVerified: false,
    images: ["/images/main2.jpeg"],
    description: "Shop-cum-office plot on main highway.",
    features: ["Main Highway", "High FAR", "Commercial Zoning"]
  },
  {
    id: "p3",
    slug: "residential-plot-murthal",
    title: "Affordable Residential Plot",
    builder: "Independent",
    project: "Independent",
    localitySlug: "murthal",
    type: "plots",
    subtype: "residential-plots",
    price: "₹ 35 Lakhs",
    priceValue: 3500000,
    areaSqFt: "900", // 100 sq yd
    status: "Ready to Move",
    isVerified: true,
    images: ["/images/slide3.jpeg"],
    description: "Good investment plot near upcoming university.",
    features: ["Boundary Wall", "Gated"]
  }
];

export const commercialCategories = ['shops', 'office-space', 'sco-plots', 'warehouses'];
export const residentialBhkOptions = ['1-bhk', '2-bhk', '3-bhk', '4-bhk'];
