"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "../lib/business";
import Image from "next/image";

const LEFT_MENU = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/listings", label: "Listings" },
];

const RIGHT_MENU = [

  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="header">
      <div className="holder">
        <div className="header-block">
          <button 
            className={`mob-nav-icon ${isMobileNavOpen ? "active" : ""}`} 
            aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span className="mob-nav-block"></span>
          </button>
          <div className="header-logo">
            <Link href="/">
              <Image
                src="/images/RELIABLE-PROPERTIES-LOGO-WHITE.svg"
                alt={business.companyName}
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className={`header-nav ${isMobileNavOpen ? "vis" : ""}`}>
            <ul className="header-nav-list">
              {LEFT_MENU.map((item) => (
                <li
                  key={item.href}
                  className={isActive(item.href) ? "menu-item current-menu-item" : "menu-item"}
                >
                  <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setIsMobileNavOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="header-nav-list">
              {RIGHT_MENU.map((item) => (
                <li
                  key={item.href}
                  className={isActive(item.href) ? "menu-item current-menu-item" : "menu-item"}
                >
                  <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setIsMobileNavOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={business.phonePrimaryLink} className="header-phone">
              {business.phonePrimary}
            </a>
          </div>
          <a href={business.phonePrimaryLink} className="mob-phone-navbar">
            {business.phonePrimary}
          </a>
        </div>
      </div>
    </header>
  );
}
