import type { Metadata } from "next";
import JoinForm from "../components/JoinForm";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function TermsAndConditions() {
  return (
    <>
      <section className="privacy">
        <div className="holder min-holder">
          <h1>Terms and Conditions</h1>
          <div className="content-privacy">
            <p>Dated: October __, 2024</p>
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using this Website, you acknowledge that you have
              read, understood, and agree to be bound by these Terms and
              Conditions, as well as our Privacy Policy. If you do not agree with
              any of these terms, you should not access or use the Website.
            </p>
            <h3>2. Eligibility and Restrictions</h3>
            <p>
              <em>Eligibility:</em> To use this Website, you must be at least 18
              years old or the legal age of majority in your jurisdiction. By
              using this Website, you represent and warrant that you meet these
              eligibility requirements.
            </p>
            <p>
              <em>Restrictions:</em> We do not permit individuals from the United
              States or any countries under sanctions by the United Nations,
              European Union, or relevant authorities to use our services or
              become liquidity providers (LPs). It is your responsibility to
              ensure that your use of the Website and participation in our
              services complies with applicable laws and regulations in your
              jurisdiction. Violations of this provision will result in immediate
              suspension or termination of your account.
            </p>
            <h3>3. Use of the Website</h3>
            <p>
              You agree to use the Website for lawful purposes only and in a
              manner consistent with applicable laws and regulations. You must
              not:
              <br />
              &ndash; Engage in any unlawful or fraudulent activities.
              <br />
              &ndash; Distribute viruses, malware, or any harmful code.
              <br />
              &ndash; Attempt to gain unauthorized access to our systems or
              services.
              <br />
              &ndash; Interfere with the operation of the Website or connected
              servers.
            </p>
            <h3>4. Intellectual Property Rights</h3>
            <p>
              All content on this Website, including but not limited to text,
              graphics, logos, icons, and software, is the property of Reliable
              Properties or its licensors and is protected by intellectual
              property laws. You may not copy, reproduce, modify, distribute, or
              display any part of the Website without our prior written consent.
            </p>
            <h3>5. Personal Data and Privacy</h3>
            <p>
              We take the privacy of your data seriously. Our handling of your
              personal data is governed by our Privacy Policy. By using the
              Website, you consent to the collection, storage, and processing of
              your data as outlined in our Privacy Policy.
            </p>
            <h3>6. Third-Party Links</h3>
            <p>
              Our Website may contain links to third-party websites. We provide
              these links for your convenience, but we are not responsible for the
              content or privacy practices of these external sites. Your use of
              any third-party websites is at your own risk.
            </p>
            <h3>7. Disclaimer of Warranties</h3>
            <p>
              The Website is provided on an &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; basis. We do not guarantee that the
              Website will be error-free or uninterrupted, nor do we make any
              warranties regarding the accuracy, reliability, or availability of
              the Website.
            </p>
            <h3>8. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, Reliable Properties shall
              not be liable for any direct, indirect, incidental, consequential,
              or punitive damages arising from your use of the Website or
              services, including but not limited to loss of profits, data, or
              goodwill.
            </p>
            <h3>9. Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless Reliable Properties, its
              affiliates, and employees from any claims, liabilities, damages,
              losses, or expenses arising from your use of the Website, violation
              of these Terms, or infringement of any rights of another party.
            </p>
            <h3>10. Governing Law</h3>
            <p>
              These Terms and Conditions are governed by the laws of the State of
              California. Any disputes arising from the use of this Website or
              services will be subject to the exclusive jurisdiction of the courts
              in California.
            </p>
            <h3>11. Termination</h3>
            <p>
              We reserve the right to terminate or suspend your access to the
              Website at our discretion, without notice, for any violation of
              these Terms and Conditions or other reasons we deem appropriate.
            </p>
            <h3>12. Entire Agreement</h3>
            <p>
              These Terms and Conditions, along with our Privacy Policy,
              constitute the entire agreement between you and Reliable Properties
              regarding your use of the Website and services.
            </p>
            <h3>13. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. Any changes will be effective immediately upon posting. Your
              continued use of the Website after any changes are posted
              constitutes your acceptance of the modified Terms and Conditions.
            </p>
            <h3>14. Contact Information</h3>
            <p>
              If you have any questions or concerns regarding these Terms and
              Conditions, please contact us at rkumarr1982@gmail.com or
              +91 9813199892 / +91 8168373817.
            </p>
          </div>
        </div>
      </section>
      <section className="join">
        <div className="holder reveal">
          <h2>
            <div className="text-wrap">
              <div className="text-inner">Join Reliable Properties Club</div>
            </div>
          </h2>
          <JoinForm />
        </div>
      </section>
    </>
  );
}
