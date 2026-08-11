"use client";

import { useState } from "react";

export default function JoinForm({
  withKey = true,
}: {
  withKey?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="thanks">
        <h2>Thanks for Joining!</h2>
        <div className="subheading">Check your email to verify your application.</div>
        <a href="/" className="button">
          Back to Home Page
        </a>
      </div>
    );
  }

  return (
    <div className="join-form">
      {withKey && (
        <div className="key-wrap">
          <div className="key"></div>
        </div>
      )}
      <div className="formwrap_cf7">
        <form
          onSubmit={handleSubmit}
          className="wpcf7-form init"
          aria-label="Contact form"
          noValidate
          data-status="init"
        >
          <div className="input-box">
            <span className="wpcf7-form-control-wrap input-item">
              <span className="wpcf7-form-control-wrap" data-name="text-100">
                <input
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control wpcf7-text"
                  aria-invalid="false"
                  placeholder="full name"
                  type="text"
                  name="text-100"
                  required
                />
              </span>
            </span>
            <span className="wpcf7-form-control-wrap input-item">
              <span className="wpcf7-form-control-wrap" data-name="email-251">
                <input
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="email"
                  type="email"
                  name="email-251"
                  required
                />
              </span>
            </span>
            <span className="wpcf7-form-control-wrap input-item">
              <span className="wpcf7-form-control-wrap" data-name="tel-591">
                <input
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control wpcf7-tel wpcf7-text wpcf7-validates-as-tel"
                  aria-invalid="false"
                  placeholder="phone"
                  type="tel"
                  name="tel-591"
                />
              </span>
            </span>
            <span className="wpcf7-form-control-wrap input-item">
              <span className="wpcf7-form-control-wrap" data-name="text-101">
                <input
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control wpcf7-text"
                  aria-invalid="false"
                  placeholder="message"
                  type="text"
                  name="text-101"
                />
              </span>
            </span>
          </div>
          <div className="form-button">
            <button className="button" type="submit">
              Send Inquiry
            </button>
          </div>
          <div className="wpcf7-response-output" aria-hidden="true"></div>
        </form>
      </div>
    </div>
  );
}
