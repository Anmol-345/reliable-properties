"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SiteAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const init = () => {
      ctx = gsap.context(() => {
        // img float parallax
        gsap.utils.toArray<HTMLElement>(".img-float").forEach((el) => {
          const img = el.querySelector("img");
          if (!img) return;
          gsap.set(img, { yPercent: 0 });
          gsap.to(img, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              scrub: true,
            },
          });
        });

        // banner float parallax
        gsap.utils.toArray<HTMLElement>(".banner-float").forEach((el) => {
          const img = el.querySelector("img");
          if (!img) return;
          gsap.set(img, { yPercent: 0 });
          gsap.to(img, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top top",
              scrub: true,
            },
          });
        });

        // slogan line split + cover reveal
        document.querySelectorAll<HTMLElement>(".slogan-text").forEach((el) => {
          const text = el.textContent?.trim() ?? "";
          el.textContent = "";
          text.split(/\s+/).forEach((word) => {
            const line = document.createElement("span");
            line.className = "slogan-line";
            const cover = document.createElement("span");
            cover.className = "slogan-cover";
            cover.textContent = word + " ";
            line.appendChild(cover);
            el.appendChild(line);
          });
        });

        gsap.utils.toArray<HTMLElement>(".slogan-cover").forEach((cover) => {
          gsap.set(cover, { width: 0 });
          gsap.to(cover, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: cover,
              start: "top 90%",
              end: "top 40%",
              scrub: true,
            },
          });
        });

        // reveal scroll trigger
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              onEnter: () => el.classList.add("animate"),
            },
          });
        });

        // line reveal scroll trigger
        gsap.utils.toArray<HTMLElement>(".line-reveal").forEach((el) => {
          const line = el.querySelector(".line-dash");
          if (!line) return;
          gsap.to(line, {
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () => line.classList.add("animate"),
            },
          });
        });
      });
    };

    init();

    return () => {
      ctx?.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [pathname]);

  return null;
}
