"use client";

import { getCurrentYear } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {mounted && (
        <span className="absolute top-0 -translate-x-1/2 left-1/2">
          <svg
            width="1260"
            height="457"
            viewBox="0 0 1260 457"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_11105_867)">
              <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF" />
            </g>
            <defs>
              <filter
                id="filter0_f_11105_867"
                x="0"
                y="-803.299"
                width="1260"
                height="1260"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_11105_867"
                />
              </filter>
            </defs>
          </svg>
        </span>
      )}
      <div className="relative z-10 py-16 xl:py-24">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">
            <div className="lg:col-span-3 xl:col-span-4 flex flex-col justify-start">
              <div>
                <Link href="/" className="block mb-6 mt-1">
                  <Image
                    src="/logo-removebg-preview.png"
                    alt="Nexvect logo"
                    width={160}
                    height={40}
                    className="h-8 w-auto object-contain object-left"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </Link>
                <p className="block text-sm text-gray-400 mb-6">
                  Nexvect builds AI solutions to enhance workplace productivity,
                  ensure operational compliance, and strengthen facility security.
                </p>
                <a
                  href="mailto:info@nexvect.com"
                  className="inline-flex text-sm text-gray-400 hover:text-white/90 transition"
                >
                  info@nexvect.com
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <span className="block mb-6 text-sm text-gray-400">
                    Nexvect
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="/#solutions"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Solutions
                    </Link>
                    <Link
                      href="/#products"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Products
                    </Link>
                    <Link
                      href="/#leadership"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/#faq"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      FAQ
                    </Link>
                  </nav>
                </div>

                <div>
                  <span className="relative block mb-6 text-sm text-gray-400">
                    Company
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="/about"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      About
                    </Link>
                    <Link
                      href="/#leadership"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/#faq"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      FAQ
                    </Link>

                  </nav>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div>
                <span className="block mb-6 text-sm text-gray-400">
                  Stay In Touch
                </span>
                <p className="block mb-5 text-sm text-gray-400">
                  For partnerships and inquiries, email{" "}
                  <a className="underline hover:text-white" href="mailto:info@nexvect.com">
                    info@nexvect.com
                  </a>
                  .
                </p>
                <form>
                  <div className="flex flex-col items-center gap-2 w-full sm:max-w-64">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-12 p-4 text-sm text-white border border-gray-700 rounded-full placeholder:text-center placeholder:text-gray-400 placeholder:text-sm text-center placeholder:font-normal focus:outline-0"
                      required
                    />
                    <button className="w-full px-6 py-3 text-sm font-medium text-white transition rounded-full cursor-pointer bg-primary-500 hover:bg-primary-600">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 text-center">
            <p className="text-sm text-gray-500">
              &copy; {getCurrentYear()} Nexvect - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
