import Link from "next/link";
import { business } from "../lib/business";

const FOOTER_MENU = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="holder">
        <div className="footer-top">
          <div className="footer-logo">
            <img
              src="/images/RELIABLE-PROPERTIES-LOGO-WHITE.svg"
              alt={business.companyName}
            />
          </div>
          <ul className="footer-nav">
            {FOOTER_MENU.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-text">
          <p>
            {business.companyName} is a real estate brokerage serving Kundli,
            Sonipat and the Delhi NCR region. We deal in {business.servicesLine}
            from trusted developers including {business.builders.join(", ")}. All
            information on this website is provided in good faith for general
            information purposes only and does not constitute an offer or
            solicitation to buy or sell any property.
          </p>
          <p>
            Property details, prices and availability are subject to change and
            should be verified directly with the developer or with us before any
            transaction. We are not liable for any inaccuracies, and you should
            rely on the project documentation and agreements for all final terms.
          </p>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            <div className="copyright">
              Copyright © 2026 {business.companyName}® All rights reserved.
            </div>
            <div className="privacy">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </div>
          </div>
          <div className="footer-studio">
            Created with ♡ by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dd.nyc/?utm_source=tref.digitaldesignnyc.co&utm_medium=referral&utm_campaign=tref-footer-link"
            >
              DD.NYC®
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
