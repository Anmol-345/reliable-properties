import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteAnimations from "./components/SiteAnimations";
import { business } from "./lib/business";

export const metadata: Metadata = {
  title: {
    default: `Home - ${business.companyName}`,
    template: `%s - ${business.companyName}`,
  },
  description: `${business.companyName}, led by ${business.ownerName}, is a trusted real estate brokerage in Kundli, Haryana offering ${business.servicesLine}.`,
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
