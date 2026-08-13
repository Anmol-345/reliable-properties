"use client";

import { useState } from "react";

export default function JoinForm({
  withKey = true,
}: {
  withKey?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("text-100"),
      email: formData.get("email-251"),
      phone: formData.get("tel-591"),
      message: formData.get("text-101"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="thanks">
        <h2>Thanks for Joining!</h2>
        <div className="subheading">Your inquiry has been sent to our WhatsApp.</div>
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
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </span>
            </span>
          </div>
          <div className="form-button">
            <button className="button" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </div>
          <div className="wpcf7-response-output" aria-hidden="true"></div>
        </form>
      </div>
    </div>
  );
}
