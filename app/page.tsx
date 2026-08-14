import type { Metadata } from "next";
import BannerSlider from "./components/BannerSlider";
import JoinForm from "./components/JoinForm";
import { business } from "./lib/business";

export const metadata: Metadata = {
  title: "Reliable Properties - Real Estate Broker in Kundli, Haryana",
  description: `Find the best plots, flats, floors and commercial properties in Kundli and Delhi NCR with ${business.companyName}. Trusted real estate brokerage led by ${business.ownerName}.`,
  keywords: ["Plots in Kundli", "Flats in Sonipat", "Real Estate Broker Kundli", "Buy Flats", "Commercial Property Kundli"],
};

export default function Home() {
  return (
    <>
      <section className="banner">
        <BannerSlider />
      </section>
      <section className="main-wrap">
        <div className="holder">
          <div className="about-team">
            <div className="about-team-col reveal">
              <div className="key-wrap">
                <div className="key"></div>
              </div>
              <h2>
                <div className="text-wrap">
                  <div className="text-inner">
                    About<br />
                  </div>
                </div>
              </h2>
              <div className="subheading">
                <div className="text-wrap">
                  <div className="text-inner">
                    <span>{business.companyName}</span><br />
                    {business.servicesLine} in Kundli, Haryana
                  </div>
                </div>
              </div>
              <div className="about-team-text mob-hidden">
                {business.companyName} is a trusted real estate brokerage in
                Kundli, Haryana offering plots, flats, floors and commercial
                properties from reputed developers across Delhi NCR.
              </div>
            </div>
            <div className="about-team-col img-float">
              <img src="/images/Randy-portreit.jpg" alt="" />
            </div>
            <div className="about-team-col">
              <div className="about-team-text">
                <span className=" mob-hide">
                  {business.companyName} is a trusted real estate brokerage in
                  Kundli, Haryana offering plots, flats, floors and commercial
                  properties from reputed developers across Delhi NCR.
                </span>
                Led by {business.ownerName}, {business.companyName} helps
                families and investors find the right property at the right
                price. We deal in {business.servicesLine} with a focus on
                transparency, honest advice and complete support from site
                selection to registration. We are proud to be associated with
                developers like {business.builders.join(", ")}.
              </div>
              <a href="/about" className="link-flash">
                Learn More
              </a>
            </div>
          </div>
          <div className="slogan">
            <div className="slogan-text">
              At {business.companyName}, our promise is simple: find you the
              right plot, flat, floor or commercial space with complete
              transparency and the right price.
            </div>
          </div>
          <div className="info">
            <div className="info-bg img-float">
              <picture>
                <source srcSet="/images/main2-mob.jpg" media="(max-width: 1023px)" />
                <img src="/images/main2.jpeg" alt="" />
              </picture>
            </div>
            <div className="info-top reveal">
              <h2>
                <div className="text-wrap">
                  <div className="text-inner">
                    {business.companyName} Services
                  </div>
                </div>
              </h2>
              <div className="subheading">
                <div className="text-wrap">
                  <div className="text-inner">
                    {business.servicesLine}
                  </div>
                </div>
              </div>
            </div>
            <div className="info-content">
              <div className="line-wrap line-reveal">
                <div className="line-dash"></div>
              </div>
              <div className="info-block">
                <div className="info-text">
                  We help you buy, sell and rent residential and commercial
                  properties across Kundli and Delhi NCR. From affordable
                  residential plots and independent floors to premium apartments
                  and commercial spaces, our listings are verified and our advice
                  is honest. We handle every step &mdash; documentation, approvals
                  and registration &mdash; so your investment is safe and
                  hassle-free.
                </div>
                <a href="/services" className="link-flash">
                  {business.companyName} Services
                </a>
              </div>
              <div className="info-img img-float">
                <picture>
                  <source srcSet="/images/main3-mob.jpg" media="(max-width: 1023px)" />
                  <img src="/images/slide2.jpeg" alt="" />
                </picture>
              </div>
              <div className="invest-info">
                <div className="invest-info-top reveal">
                  <h2>
                    <div className="text-wrap">
                      <div className="text-inner">
                        Our Trusted Developer Partners
                      </div>
                    </div>
                  </h2>
                  <div className="subheading">
                    <div className="text-wrap">
                      <div className="text-inner">
                        {business.builders.join(" | ")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invest-info-block">
                  <div className="invest-info-img img-float">
                    <img src="/images/main4.png" alt="" />
                  </div>
                  <div className="invest-info-content">
                    <div className="invest-info-text">
                      We are proud to be associated with some of the most trusted
                      names in the industry. Our partner developers &mdash;{" "}
                      {business.builders.join(", ")} &mdash; are known for quality
                      construction, timely delivery and clear title. Buying
                      through us means you deal directly with reputed developers
                      with full documentation and complete peace of mind.
                    </div>
                    <a href="/services" className="link-flash">
                      Our Services
                    </a>
                  </div>
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
