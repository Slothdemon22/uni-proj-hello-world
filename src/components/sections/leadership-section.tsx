"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cubicBezier, motion } from "framer-motion";

const leaders = [
  {
    name: "Muhammad Raahim",
    role: "CEO",
    email: "raahim@nexvect.com",
    image: "/raahim kake.jpeg",
    linkedin: "https://www.linkedin.com/in/muhammad-raahim-080b84226?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Muhammad Taha Zahid",
    role: "COO",
    email: "taha@nexvect.com",
    image: "/taha skibidi.jpeg",
    linkedin: "https://www.linkedin.com/in/tahazahid114?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Muhammad Basil Saleem",
    role: "CTO",
    email: "basil@nexvect.com",
    image: "/basil.jpeg",
    linkedin: "https://www.linkedin.com/in/basil-saleem-889a3a229?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

export default function LeadershipSection() {
  return (
    <section id="leadership" className="bg-[#24283b] py-20 lg:py-32 overflow-hidden">
      <div className="wrapper max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) }}
            className="lg:w-1/3 flex flex-col justify-center"
          >
            <span className="text-xs font-bold tracking-widest text-white/60 uppercase mb-5 block">
              Our Leadership
            </span>
            <p className="text-2xl md:text-[28px] leading-snug font-medium text-white/90">
              Our commitment goes beyond serving our own business and clients as we strive to have a positive impact on people and communities.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {leaders.map((leader, index) => (
                <motion.div variants={itemVariants} key={index} className="flex flex-col">
                  {/* Image Box */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-white shadow-lg">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <h4 className="text-base font-semibold text-white mb-1">
                    {leader.name}
                  </h4>
                  <p className="text-xs text-white/60 mb-3">
                    {leader.role}
                  </p>

                  <a
                    href={`mailto:${leader.email}`}
                    className="text-xs text-white/60 hover:text-white/90 transition mb-3 w-max"
                  >
                    {leader.email}
                  </a>
                  
                  {/* LinkedIn Icon */}
                  <Link href={leader.linkedin} target="_blank" className="text-white/40 hover:text-white transition w-max">
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
