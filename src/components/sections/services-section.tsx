"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["innovation", "possibilities", "impact"];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const servicesListRef = useRef<HTMLDivElement>(null);
  const phase3TextRef = useRef<HTMLDivElement>(null);
  const dynamicWordRef = useRef<HTMLSpanElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Dynamic text cycling
    const interval = setInterval(() => {
      gsap.to(dynamicWordRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          gsap.fromTo(
            dynamicWordRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        },
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions as {
          isMobile: boolean;
          isDesktop: boolean;
        };

        // Safety check to ensure all refs exist before running GSAP
        if (!titleRef.current || !phase3TextRef.current || !servicesListRef.current) return;

        // Clear all previously set GSAP inline properties
        gsap.set(
          [
            titleRef.current,
            phase3TextRef.current,
            servicesListRef.current,
          ],
          { clearProps: "all" }
        );
        
        if (imagesRef.current) {
          gsap.set(Array.from(imagesRef.current.children), { clearProps: "all" });
        }

        if (isDesktop) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=2000",
              scrub: 1,
              pin: true,
            },
          });

          // Set initial states explicitly
          gsap.set(titleRef.current, {
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50,
            transformOrigin: "left center",
          });

          // Phase 1 -> Phase 2
          tl.to(imagesRef.current!.children, {
            opacity: 0,
            scale: 0.8,
            y: (i) => (i % 2 === 0 ? 100 : -100),
            rotation: (i) => (i % 2 === 0 ? 15 : -15),
            duration: 2,
            stagger: 0.2,
          });

          // Move Title
          tl.to(
            titleRef.current,
            {
              left: "14%",
              top: "35%",
              xPercent: 0,
              yPercent: -50,
              scale: 0.5,
              duration: 2,
              ease: "power2.inOut",
            },
            "<"
          );

          tl.fromTo(
            servicesListRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 2 },
            "<1"
          );

          tl.fromTo(
            phase3TextRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 2 },
            "<"
          );

          tl.to({}, { duration: 1.5 });
        } else if (isMobile) {
          // Mobile Simple Fade Ins
          gsap.fromTo(titleRef.current,
            { y: 30, opacity: 0 },
            {
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 85%",
              },
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            }
          );

          gsap.fromTo(phase3TextRef.current,
            { y: 30, opacity: 0 },
            {
              scrollTrigger: {
                trigger: phase3TextRef.current,
                start: "top 85%",
              },
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            }
          );

          gsap.fromTo(gsap.utils.toArray(".service-item"),
            { y: 30, opacity: 0 },
            {
              scrollTrigger: {
                trigger: servicesListRef.current,
                start: "top 85%",
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
            }
          );
        }
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen md:h-screen bg-[#f5f5f5] text-gray-900 overflow-hidden font-sans z-[100] flex flex-col md:block py-16 md:py-0"
    >
      {/* Title */}
      <h2
        ref={titleRef}
        className="relative md:absolute mt-8 md:mt-0 text-center md:text-left text-[3rem] sm:text-[4rem] md:text-[8rem] lg:text-[10rem] font-medium tracking-tighter whitespace-nowrap z-20 w-full md:w-auto"
      >
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600">
          Solutions
        </span>
      </h2>

      {/* Phase 1 Images */}
      <div ref={imagesRef} className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10">
        <Image
          src="/images/services/img1.png"
          className="absolute top-[10%] left-[5%] w-32 md:w-72 h-auto object-cover rounded-2xl shadow-2xl rotate-[-8deg] border-4 border-white/10"
          alt="Service abstract"
          width={300}
          height={400}
        />
        <Image
          src="/images/services/img2.png"
          className="absolute top-[15%] right-[5%] w-24 md:w-56 h-auto object-cover rounded-2xl shadow-2xl rotate-[12deg] border-4 border-white/10"
          alt="Service abstract"
          width={300}
          height={400}
        />
        <Image
          src="/images/services/img3.png"
          className="absolute bottom-[10%] left-[8%] w-20 md:w-48 h-auto object-cover rounded-2xl shadow-2xl rotate-[6deg] border-4 border-white/10"
          alt="Service abstract"
          width={300}
          height={400}
        />
        <Image
          src="/images/services/img4.png"
          className="absolute bottom-[5%] right-[10%] w-40 md:w-80 h-auto object-cover rounded-2xl shadow-2xl rotate-[-12deg] border-4 border-white/10"
          alt="Service abstract"
          width={300}
          height={400}
        />
      </div>

      {/* Phase 3 Text */}
      <div
        ref={phase3TextRef}
        className="relative md:absolute mt-6 md:mt-0 md:top-[48%] md:left-[14%] flex flex-col items-center md:items-start opacity-100 md:opacity-0 md:pointer-events-none z-10 w-full px-6 md:px-0 text-center md:text-left"
      >
        <div className="max-w-xl md:pr-4">
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1.1] text-gray-900 tracking-tighter break-words mb-4 md:mb-16">
            Redefining
            <br />
            <span
              ref={dynamicWordRef}
              className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600"
            >
              {words[currentWordIndex]}
            </span>
            <br />
            across the globe
          </h2>
          <a
            href="/contact"
            className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase hover:underline pointer-events-auto"
          >
            GET IN TOUCH →
          </a>
        </div>
      </div>

      {/* Phase 2 Services List */}
      <div
        ref={servicesListRef}
        className="relative md:absolute mt-16 mb-16 md:mt-0 md:mb-0 md:inset-0 w-full h-auto md:h-full flex justify-center md:justify-end items-center px-6 md:px-0 md:pr-[10%] xl:pr-[14%] opacity-100 md:opacity-0 pointer-events-auto md:pointer-events-none z-10"
      >
        <div className="w-full sm:w-[80%] md:w-[45%] max-w-xl flex flex-col gap-8 md:gap-4 lg:gap-6 pt-0 md:pt-10 lg:pt-20 text-center md:text-left">
          <div className="service-item group">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-2 text-gray-800 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600">
              Computer Vision
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-2 md:mb-2 leading-relaxed">
              We deploy advanced computer vision systems that enable machines to interpret
              and act on visual data — from real-time object detection to behavioral
              analysis and quality inspection at scale.
            </p>
            <a
              href="#"
              className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase hover:underline pointer-events-auto inline-block mt-1"
            >
              LEARN MORE →
            </a>
          </div>

          <div className="service-item group">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-2 text-gray-800 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600">
              IoT
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-2 md:mb-2 leading-relaxed">
              Our IoT solutions connect your physical infrastructure to intelligent
              digital systems, enabling real-time monitoring, predictive maintenance,
              and smarter operational decision-making.
            </p>
            <a
              href="#"
              className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase hover:underline pointer-events-auto inline-block mt-1"
            >
              LEARN MORE →
            </a>
          </div>

          <div className="service-item group">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-2 text-gray-800 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600">
              Cloud
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-2 md:mb-2 leading-relaxed">
              We architect and manage scalable cloud environments tailored to your
              business needs — ensuring high availability, security, and cost efficiency
              across hybrid and multi-cloud infrastructures.
            </p>
            <a
              href="#"
              className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase hover:underline pointer-events-auto inline-block mt-1"
            >
              LEARN MORE →
            </a>
          </div>

          <div className="service-item group">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-2 text-gray-800 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600">
              Cyber Security
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-2 md:mb-2 leading-relaxed">
              We safeguard your digital assets with end-to-end cybersecurity strategies —
              from threat detection and vulnerability assessment to incident response
              and compliance enforcement.
            </p>
            <a
              href="#"
              className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest uppercase hover:underline pointer-events-auto inline-block mt-1"
            >
              LEARN MORE →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
