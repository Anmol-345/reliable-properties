import type { Metadata } from "next";
import JoinForm from "../components/JoinForm";
import { business } from "../lib/business";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <>
      <section className="main">
        <div className="holder">
          <div className="top reveal">
            <h1>
              <div className="text-wrap">
                <div className="text-inner">{business.companyName} Services</div>
              </div>
            </h1>
            <div className="subheading">
              <div className="text-wrap">
                <div className="text-inner">
                  {business.servicesLine}
                </div>
              </div>
            </div>
          </div>
          <div className="invest-top">
            <div className="invest-top-img img-float">
              <picture>
                <source srcSet="/images/inv1-mob.jpg" media="(max-width: 1023px)" />
                <img src="/images/slide3.jpeg" alt="" />
              </picture>
            </div>
            <div className="line-mob"></div>
            <div className="invest-top-block">
              <div className="line-wrap line-reveal">
                <div className="line-dash"></div>
              </div>
              <div className="invest-top-col">
                <div className="invest-top-text">
                  Whether you are buying your first home, upgrading to a bigger
                  space or investing for growth, we make property buying simple
                  and safe. Our focus is on genuine deals with clear titles,
                  verified documentation and prices that are fair for both buyer
                  and seller.
                </div>
              </div>
              <div className="invest-top-col">
                <div className="invest-top-text">
                  <span className="invest-top-highliht">
                    We specialize in {business.servicesLine},
                  </span>{" "}
                  helping clients across Kundli and Delhi NCR find the right
                  property at the right price. From site visits and negotiation
                  to loan assistance and registration, we stay with you at every
                  single step.
                </div>
              </div>
            </div>
          </div>
          <div className="invest-form reveal">
            <h2>
              <div className="text-wrap">
                <div className="text-inner">
                  Join {business.companyName} Club
                </div>
              </div>
            </h2>
            <JoinForm withKey={false} />
          </div>
          <div className="invest-info">
            <div className="invest-info-img img-float mob-hidden">
              <img src="/images/inv2-mob.jpg" alt="" />
            </div>
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
                <img src="/images/slide3.jpeg" alt="" />
              </div>
              <div className="invest-info-content">
                <div className="invest-info-text">
                  We are proud to be associated with reputed builders including{" "}
                  {business.builders.join(", ")}. These partners are known for
                  quality construction, timely possession and clear title. When
                  you buy through us, you deal directly with trusted developers
                  with full legal documentation. It is our privilege to guide
                  potential homebuyers and investors, and we invite you to
                  explore how {business.companyName} can help you find the
                  perfect property.
                </div>
                <a href="/contact" className="link-flash">
                  {business.companyName} Services
                </a>
              </div>
            </div>
          </div>
          <div className="slogan">
            <div className="slogan-text">
              Our approach is simple &mdash; listen to what you need, verify
              every detail, negotiate the best price and make sure your property
              deal is safe, legal and complete.
            </div>
          </div>
          <div className="box team invest-box">
            <div className="line-wrap line-reveal">
              <div className="line-dash"></div>
            </div>
            <div className="box-col">
              <div className="box-text">
                As a buyer, you benefit from our market knowledge, verified
                listings and strong relationships with developers. As a seller,
                you get honest valuation, wide exposure and a quick, smooth deal.
                Whatever your requirement &mdash; a plot, a flat, a floor or a
                commercial space &mdash; we are partners with you at every step,
                and your satisfaction matters!
              </div>
            </div>
            <div className="box-col">
              <div className="box-img img-float">
                <picture>
                  <source srcSet="/images/inv3-mob.jpg" media="(max-width: 1023px)" />
                  <img src="/images/main2.jpeg" alt="" />
                </picture>
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
