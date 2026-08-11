"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "../lib/business";

const LEFT_MENU = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

const RIGHT_MENU = [
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="header">
      <div className="holder">
        <div className="header-block">
          <a href="#" className="mob-nav-icon" aria-label="Open menu">
            <span className="mob-nav-block"></span>
          </a>
          <div className="header-logo">
            <Link href="/">
              <img
                src="/images/RELIABLE-PROPERTIES-LOGO-WHITE.svg"
                alt={business.companyName}
              />
            </Link>
          </div>
          <div className="header-nav">
            <ul className="header-nav-list">
              {LEFT_MENU.map((item) => (
                <li
                  key={item.href}
                  className={isActive(item.href) ? "menu-item current-menu-item" : "menu-item"}
                >
                  <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
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
                  <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={business.phonePrimaryLink} className="header-phone">
              {business.phonePrimary}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
