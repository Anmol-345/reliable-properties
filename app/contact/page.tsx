import type { Metadata } from "next";
import JoinForm from "../components/JoinForm";
import { business } from "../lib/business";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <section className="main">
      <div className="holder">
        <div className="contacts">
          <div className="top reveal">
            <h1>
              <div className="text-wrap">
                <div className="text-inner">
                  Join {business.companyName} Club
                </div>
              </div>
            </h1>
          </div>
          <div className="contacts-layout">
            <div className="contacts-left">
              <div className="contacts-info">
                mobile: {business.phonePrimary} / {business.phoneSecondary}
                <br />
                {business.email}
                <br />
                {business.address}
              </div>
              <JoinForm withKey={false} />
            </div>
            <div className="contacts-right" style={{ position: 'relative' }}>
              <div className="map-loader"></div>
              <iframe
                src="https://maps.google.com/maps?q=28.9077072,77.1209106&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ 
                  border: '2px solid var(--c2)', 
                  minHeight: '350px', 
                  borderRadius: '8px',
                  position: 'relative',
                  zIndex: 1
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
