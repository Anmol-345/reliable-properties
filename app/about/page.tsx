import type { Metadata } from "next";
import JoinForm from "../components/JoinForm";
import { business } from "../lib/business";

export const metadata: Metadata = {
  title: `About Us - ${business.companyName}`,
  description: `Learn about ${business.companyName} and our founder ${business.ownerName}. We are trusted property dealers providing the best deals in plots, flats, and commercial properties.`,
  keywords: ["About Reliable Properties", "Property Dealers Kundli", "Rajesh Kumar Broker", "Real Estate Consultants"],
};

export default function About() {
  return (
    <>
      <section className="main">
        <div className="holder">
          <div className="top reveal">
            <h1>
              <div className="text-wrap">
                <div className="text-inner">
                  About <br />
                  {business.companyName}
                </div>
              </div>
            </h1>
            <div className="subheading">
              <div className="text-wrap">
                <div className="text-inner">
                  {business.servicesLine} <br />
                  Your Trusted Real Estate Partner in Kundli
                </div>
              </div>
            </div>
          </div>
          <div className="about-top-img img-float">
            <picture>
              <source srcSet="/images/about1-mob.jpg" media="(max-width: 1023px)" />
              <img src="/images/slide2.jpeg" alt="" />
            </picture>
          </div>
          <div className="line-mob"></div>
          <div className="about-top reveal">
            <h2>
              <div className="text-wrap">
                <div className="text-inner">
                  {business.companyName} is a Property Dealers
                  &amp; Consultants Firm
                </div>
              </div>
            </h2>
            <div className="about-top-text">
              <div className="text-wrap">
                <div className="text-inner">
                  providing the best deals in {business.servicesLine} across
                  Kundli, Sonipat and the Delhi NCR region. Founded by{" "}
                  {business.ownerName}, we have years of experience helping
                  families and investors make confident property decisions with
                  honest advice and complete transparency.
                </div>
              </div>
            </div>
          </div>
          <div className="about-team">
            <div className="about-team-col reveal">
              <h2>
                <div className="text-wrap">
                  <div className="text-inner">About </div>
                </div>
              </h2>
              <div className="subheading">
                <div className="text-wrap">
                  <div className="text-inner">
                    The Founder of {business.companyName}
                  </div>
                </div>
              </div>
              <div className="about-team-text mob-hidden">
                {business.ownerName}, the Founder of {business.companyName}, has
                deep knowledge of the local property market and a long record of
                guiding clients to safe, profitable real estate investments.
              </div>
            </div>
            <div className="about-team-col img-float">
              <img src="/images/Randy-portreit.jpg" alt="" />
            </div>
            <div className="about-team-col">
              <div className="about-team-text">
                <span className="mob-hide">
                  {business.ownerName}, the Founder of {business.companyName}, has
                  deep knowledge of the local property market and a long record of
                  guiding clients to safe, profitable real estate investments.
                </span>{" "}
                {business.ownerName} personally verifies every property we list,
                ensuring clear titles, legal documentation and genuine deals. He
                believes every client deserves honest guidance and complete
                support &mdash; from site visit to possession. That service
                continues to be applied to every plot, flat, floor and commercial
                property we offer.
              </div>
              <a href="/team" className="link-flash">
                Meet {business.ownerName}
              </a>
            </div>
          </div>
          <div className="history">
            <div className="history-col">
              <div className="history-title">
                <h2>What We Offer</h2>
                <div className="subheading">
                  Plots, Flats, Floors &amp; Commercial Properties
                </div>
              </div>
            </div>
            <div className="history-col">
              <div className="history-item">
                <div className="history-year">Plots</div>
                <div className="history-text">
                  Residential and commercial plots in prime locations, ideal for
                  building your dream home or investing for growth. We guide you
                  through location, legality and documentation at every step.
                </div>
              </div>
              <div className="history-item">
                <div className="history-year">Flats &amp; Apartments</div>
                <div className="history-text">
                  Ready-to-move and under-construction apartments from reputed
                  builders. We help you compare options and negotiate the best
                  price with complete transparency.
                </div>
              </div>
              <div className="history-item">
                <div className="history-year">Floors</div>
                <div className="history-text">
                  Independent builder floors with private entrances, ideal for
                  families who want space and privacy. We help you choose the
                  right floor with clear title and verified documentation.
                </div>
              </div>
              <div className="history-item">
                <div className="history-year">Commercial</div>
                <div className="history-text">
                  Shops, offices and commercial spaces in high-footfall
                  locations. We assist with site selection, pricing and rental or
                  sales deals that suit your business goals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join">
        <div className="holder reveal">
          <h2>
            <div className="text-wrap">
              <div className="text-inner">
                Join {business.companyName} Club
              </div>
            </div>
          </h2>
          <JoinForm />
        </div>
      </section>
    </>
  );
}
