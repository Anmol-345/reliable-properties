import type { Metadata } from "next";
import JoinForm from "../components/JoinForm";
import { business } from "../lib/business";

export const metadata: Metadata = {
  title: `Our Team - ${business.companyName}`,
  description: `Meet the team behind ${business.companyName}, led by our founder ${business.ownerName}. We are dedicated real estate professionals in Kundli.`,
  keywords: ["Real Estate Agents", "Property Consultants Team", "Reliable Properties Staff", "Rajesh Kumar"],
};

export default function Team() {
  return (
    <>
      <section className="main">
        <div className="holder">
          <div className="top reveal">
            <h1>
              <div className="text-wrap">
                <div className="text-inner">Meet {business.ownerName}</div>
              </div>
            </h1>
            <div className="subheading">
              <div className="text-wrap">
                <div className="text-inner">
                  Founder of {business.companyName}
                </div>
              </div>
            </div>
          </div>
          <div className="box team">
            <div className="line-wrap line-reveal">
              <div className="line-dash"></div>
            </div>
            <div className="box-col">
              <div className="box-text">
                {business.ownerName} founded {business.companyName} to bring
                trust and transparency to the property market in Kundli and Delhi
                NCR. With deep experience in {business.servicesLine}, he has
                helped countless families and investors find the right property
                with clear title, legal safety and fair pricing.
                <span className="mob-hide">
                  His philosophy is simple: understand what the client needs,
                  verify every detail of the property, and never compromise on
                  honesty. This approach has earned {business.companyName} a
                  loyal base of buyers, sellers and repeat investors.
                </span>
              </div>
            </div>
            <div className="box-col">
              <div className="box-img img-float">
                <img src="/images/Randy-portreit.jpg" alt="" />
              </div>
              <div className="box-text mob-hidden">
                His philosophy is simple: understand what the client needs,
                verify every detail of the property, and never compromise on
                honesty. This approach has earned {business.companyName} a loyal
                base of buyers, sellers and repeat investors.
              </div>
              <div className="box-text">
                Every single property we recommend is personally inspected and
                documented before it reaches you. We are associated with reputed
                developers including {business.builders.join(", ")}, and we
                support you through site selection, negotiation, loan assistance
                and registration &mdash; so your investment is safe from start to
                finish.
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
