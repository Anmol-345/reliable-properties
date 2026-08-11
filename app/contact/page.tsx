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
          <div className="contacts-info">
            mobile: {business.phonePrimary} / {business.phoneSecondary}
            <br />
            {business.email}
            <br />
            {business.address}
          </div>
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
