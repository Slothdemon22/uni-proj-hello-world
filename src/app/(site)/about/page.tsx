import type { Metadata } from "next";
import Link from "next/link";
import LeadershipSection from "@/components/sections/leadership-section";

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Nexvect—our mission to build practical AI for manufacturing, the products we make, and the leadership team behind them.',
  alternates: {
    canonical: 'https://nexvect.com/about',
  },
  openGraph: {
    url: 'https://nexvect.com/about',
    title: 'About Us | Nexvect',
    description:
      'Our mission: help manufacturing teams make faster decisions with trustworthy signals from cameras, sensors, and operational systems.',
  },
};

const stats = [
  { value: "Real-time", label: "Detect issues as they happen—reduce downtime and incidents." },
  { value: "Audit-ready", label: "Build evidence trails for SOP compliance and safety programs." },
  { value: "Deployable", label: "On-prem, hybrid, or cloud—designed for industrial environments." },
];

const products = [
  {
    title: "Smart Workforce Monitoring",
    description:
      "Visibility into utilization and bottlenecks—privacy-aware and focused on flow, not micromanagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Process Compliance System",
    description:
      "SOP verification with evidence capture, escalation paths, and audit-ready reports.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Intelligent Surveillance {'&'} Security",
    description:
      "Detect anomalies, unauthorized access, and risky activity in real time—integrated with your security workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Precision over complexity",
    description: "We build what actually works on the shopfloor—not demos that look good in boardrooms.",
  },
  {
    title: "Measurable outcomes",
    description: "Every product is tied to a clear metric: incidents reduced, deviations caught, time saved.",
  },
  {
    title: "Privacy by design",
    description: "Our workforce tools are built to surface operational insights without compromising individual privacy.",
  },
  {
    title: "Industrial-grade reliability",
    description: "We design for the harshest environments—dusty floors, poor lighting, unreliable networks.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-gray-50 dark:bg-[#101828] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-primary-500/10 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute top-20 -right-20 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-3xl" />
        </div>

        <div className="wrapper">
          <div className="mx-auto max-w-[820px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary-500 dark:text-primary-400 mb-6">
              About Nexvect
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.08] tracking-tight">
              AI-enabled ecosystems for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-[#7B8CFF]">
                safer, faster manufacturing
              </span>
              .
            </h1>

            <p className="mt-7 mx-auto max-w-[680px] text-gray-600 dark:text-white/60 text-base sm:text-lg leading-relaxed">
              We build practical AI that connects vision, IoT signals, and workflows—so
              teams can run operations with clarity, compliance, and confidence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-600 transition-all duration-200 px-8 py-3.5 text-white font-semibold text-sm shadow-lg shadow-primary-500/25"
              >
                Book a demo
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-200 px-8 py-3.5 text-gray-800 dark:text-white font-semibold text-sm"
              >
                Explore products →
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.value}
                className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm p-7 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300"
              >
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {s.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 sm:py-28">
        <div className="wrapper">
          <div className="grid gap-16 lg:grid-cols-12 items-start">

            {/* Left */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-500 dark:text-primary-400 mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Clarity for teams on the floor
              </h2>
              <p className="mt-5 text-gray-600 dark:text-white/60 leading-relaxed text-base">
                Help manufacturing teams make faster decisions with trustworthy
                signals—from cameras, sensors, and operational systems—without adding
                complexity to the shopfloor.
              </p>
              <p className="mt-4 text-gray-600 dark:text-white/60 leading-relaxed text-base">
                We focus on measurable outcomes: fewer safety incidents, fewer process
                deviations, and higher operational consistency across sites.
              </p>
              <Link
                href="/#products"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                View all products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Right — product cards */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {products.map((p) => (
                <div
                  key={p.title}
                  className="group flex gap-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-6 hover:border-primary-500/30 dark:hover:border-primary-500/20 hover:shadow-sm dark:hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-500/10 dark:bg-primary-500/15 flex items-center justify-center text-primary-500 dark:text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 sm:py-28 bg-white dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5">
        <div className="wrapper">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-500 dark:text-primary-400 mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Our values
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-6 hover:border-primary-500/30 dark:hover:border-primary-500/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 dark:bg-primary-500/15 flex items-center justify-center mb-4">
                  <span className="text-primary-500 dark:text-primary-400 font-bold text-sm">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <LeadershipSection />

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28">
        <div className="wrapper">
          <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-10 sm:p-14">
            {/* BG glow */}
            <div className="pointer-events-none absolute inset-0 -z-0">
              <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-primary-500/8 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between">
              <div className="max-w-[580px]">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Ready to pilot in your facility?
                </h2>
                <p className="mt-4 text-gray-600 dark:text-white/60 text-base leading-relaxed">
                  Tell us what you want to monitor and what data you already have.
                  We&apos;ll propose a scoped pilot with clear success metrics.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-600 transition-all duration-200 px-8 py-3.5 text-white font-semibold text-sm shadow-lg shadow-primary-500/25 whitespace-nowrap"
                >
                  Contact us
                </Link>
                <a
                  href="mailto:info@nexvect.com"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 px-8 py-3.5 text-gray-800 dark:text-white font-semibold text-sm whitespace-nowrap"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
