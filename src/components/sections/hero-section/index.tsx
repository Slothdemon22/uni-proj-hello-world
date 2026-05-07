"use client";

import { useEffect, useState } from "react";

const WORDS = ["seamless", "secure", "easy"] as const;

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/eye.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-black/35" />

      <div className="relative z-10 h-full">
        <div className="wrapper h-full">
          <div className="flex h-full items-center pt-16 sm:pt-20 lg:pt-24">
            <div className="max-w-[720px] pl-4 sm:pl-8 md:pl-12 lg:pl-16">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <span className="inline-block h-4 w-px bg-white/30" />
                <span className="tracking-wide">Shaping Smarter Manufacturing</span>
              </div>

              <h1 className="mt-4 sm:mt-6 font-bold leading-[1.1] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
                AI-enabled ecosystems
                <br />
                that make manufacturing
                <br />
                <span className="text-[#4E6EFF]" aria-live="polite">
                  {WORDS[wordIndex]}
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 max-w-[560px] text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
                We build AI-enabled systems that connect people, processes, and
                operations—so manufacturing stays efficient and reliable.
              </p>

              <a
                href="/contact"
                className="mt-8 sm:mt-10 inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-[#1677FF] hover:bg-[#0F6AE6] transition px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-semibold shadow-theme-sm"
              >
                Get in touch
                <span className="inline-flex items-center justify-center size-8 sm:size-9 rounded-lg bg-white/15">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
