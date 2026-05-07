import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BenefitsGrid() {
  return (
    <section id="products" className="relative z-[200] bg-gray-900 py-14 md:py-28">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="max-w-lg mx-auto mb-3 font-bold text-center text-white dark:text-white/90 text-3xl md:text-title-lg">
            Our Core Products
          </h2>
          <p className="max-w-2xl mx-auto text-base font-normal leading-6 text-white/50">
            Comprehensive AI solutions designed to enhance workplace productivity, ensure operational compliance, and maximize facility security.
          </p>
        </div>
        <div className="max-w-[1008px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative flex flex-col justify-between bg-primary-500 rounded-[20px] p-9 md:p-13 h-full min-h-[400px]">
                <div className="max-w-sm mb-6">
                  <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                    Smart Workforce Monitoring
                  </h3>
                  <ul className="list-disc list-inside text-base text-white/70 space-y-2">
                    <li>Track employee activity and productivity</li>
                    <li>Detect idle time and inefficiencies</li>
                    <li>Ensure safety compliance (helmets, gear, etc.)</li>
                  </ul>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col">
              <div className="benefits-bg rounded-[20px] p-9 overflow-hidden h-full min-h-[400px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold max-w-xs text-white text-2xl md:text-3xl mb-4">
                    Process Compliance System
                  </h3>
                  <ul className="list-disc list-inside text-base max-w-sm text-white/70 space-y-2">
                    <li>Verify if SOPs are followed correctly</li>
                    <li>Detect deviations in real-time</li>
                    <li>Reduce operational errors</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-12">
              <div className="lg:px-12 p-8 bg-[#2D0B70] pb-12 lg:p-12 relative rounded-[20px] overflow-hidden h-full lg:flex lg:flex-row justify-between bg-cover flex-col gap-5">
                <div className="max-w-sm relative z-10">
                  <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                    Intelligent Surveillance & Security
                  </h3>
                  <ul className="list-disc list-inside text-base text-white/70 mb-8 space-y-2">
                    <li>AI-based anomaly detection</li>
                    <li>Unauthorized access detection</li>
                    <li>Integrated cybersecurity layers</li>
                  </ul>
                  <Link
                    href="#contact"
                    className="font-medium inline-block text-sm text-white rounded-full bg-primary-500 hover:bg-primary-600 transition py-3 px-6 shadow-lg shadow-black/20"
                  >
                    Learn More
                  </Link>
                </div>
                <div>
                </div>
                <Image
                  src="/images/benefits/blur-shape.png"
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full -z-10"
                  width={399}
                  height={399}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
