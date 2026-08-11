"use client";

import { useEffect, useState } from "react";
import { business } from "../lib/business";

const SLIDES = [
  {
    img: "/images/slide1.jpeg",
    mob: "/images/slide1-mob.jpg",
    alt: "",
  },
  {
    img: "/images/slide2-1.jpeg",
    mob: "/images/slide2-mob.jpg",
    alt: "",
  },
  {
    img: "/images/slide3-1.jpeg",
    mob: "/images/slide3-mob.jpg",
    alt: "",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [bannerVis, setBannerVis] = useState(false);

  // Loader animation (matches all.js timing)
  useEffect(() => {
    document.body.classList.add("is-loader");
    const t1 = setTimeout(() => {
      document.querySelector(".loader")?.classList.add("animate");
    }, 2000);
    const t2 = setTimeout(() => {
      document.body.classList.remove("is-loader");
      document.querySelector(".loader")?.classList.add("hide");
      setLoaded(true);
      setBannerVis(true);
    }, 4000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.classList.remove("is-loader");
    };
  }, []);

  // Autoplay
  useEffect(() => {
    if (!loaded) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(id);
  }, [loaded]);

  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);

  return (
    <>
      <div className="loader">
        <div className="loader-bg"></div>
        <div className="loader-box">
          <div className="line">
            <div className="line-inner">Unlock the True Potential of your</div>
          </div>
          <div className="line">
            <div className="line-inner">{business.servicesLine} Property</div>
          </div>
          <div className="loader-key-wrap">
            <div className="loader-key"></div>
          </div>
        </div>
      </div>
      <div className="banner-slider">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.img}
            className={`banner-slide banner-float${index === current ? " active" : ""}`}
          >
            <picture>
              <source srcSet={slide.mob} media="(max-width: 768px)" />
              <img src={slide.img} alt={slide.alt} />
            </picture>
          </div>
        ))}
        <button className="slick-arrow slick-prev" onClick={prev} aria-label="Previous slide">
          Previous
        </button>
        <button className="slick-arrow slick-next" onClick={next} aria-label="Next slide">
          Next
        </button>
      </div>
      <div className="banner-main">
        <div className="holder">
          <div className={`banner-block${bannerVis ? " vis" : ""}`}>
            <h1 className="banner-h1">
              {business.companyName} <br />
              Expert Approach
            </h1>
            <div className="subheading">
              {business.servicesLine} Properties in Kundli, Haryana
            </div>
            <a href="/services" className="button">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
