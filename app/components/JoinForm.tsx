"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function JoinForm({
  withKey = true,
}: {
  withKey?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      // roughly 2 lines of text (approx 50-60px max)
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 60)}px`;
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const msg = searchParams.get('message');
    if (msg) {
      setMessage(msg);
      setTimeout(adjustTextareaHeight, 0);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get("text-100")?.toString() || "";
    const email = formData.get("email-251")?.toString() || "";
    const phone = formData.get("tel-591")?.toString() || "";
    const msg = formData.get("text-101")?.toString() || "";

    const whatsappMessage = `*New Inquiry*\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${msg}`;
    const targetPhone = "919813199892";
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="thanks">
        <h2>Thanks for Joining!</h2>
        <div className="subheading">Your inquiry has been sent to our WhatsApp.</div>
        <Link href="/" className="button">
          Back to Home Page
        </Link>
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
                  placeholder="FULL NAME"
                  type="text"
                  name="text-100"
                  required
                  disabled={loading}
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif', textTransform: 'none' }}
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
                  placeholder="EMAIL"
                  type="email"
                  name="email-251"
                  required
                  disabled={loading}
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif', textTransform: 'none' }}
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
                  placeholder="PHONE"
                  type="tel"
                  name="tel-591"
                  disabled={loading}
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif', textTransform: 'none' }}
                />
              </span>
            </span>
            <span className="wpcf7-form-control-wrap input-item">
              <span className="wpcf7-form-control-wrap" data-name="text-101">
                <textarea
                  ref={textareaRef}
                  className="wpcf7-form-control wpcf7-textarea"
                  aria-invalid="false"
                  placeholder="MESSAGE"
                  name="text-101"
                  disabled={loading}
                  rows={1}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    adjustTextareaHeight();
                  }}
                  style={{ width: '100%', padding: '0 0 11px', background: 'transparent', border: 'none', borderBottom: '0.5px solid var(--c1)', color: 'var(--c1)', fontFamily: 'system-ui, -apple-system, sans-serif', textTransform: 'none', fontSize: '16px', resize: 'none', overflow: 'hidden', boxSizing: 'border-box' }}
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
