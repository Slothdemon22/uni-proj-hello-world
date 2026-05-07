import type { Metadata } from 'next';
import BenefitsGrid from '@/components/sections/benefits-grid';
import LeadershipSection from '@/components/sections/leadership-section';
import FaqAccordion from '@/components/sections/faq-accordion';
import HeroSection from '@/components/sections/hero-section';
import { CoreFeatures } from '@/components/sections/core-features';
import ServicesSection from '@/components/sections/services-section';

export const metadata: Metadata = {
  title: 'Nexvect | AI-Powered Manufacturing Intelligence',
  description:
    'Nexvect builds AI-enabled ecosystems for manufacturing—workforce monitoring, process compliance, and intelligent surveillance. Deploy on-prem, hybrid, or cloud.',
  alternates: {
    canonical: 'https://nexvect.com',
  },
  openGraph: {
    url: 'https://nexvect.com',
    title: 'Nexvect | AI-Powered Manufacturing Intelligence',
    description:
      'AI-enabled ecosystems for manufacturing—workforce monitoring, process compliance, and intelligent surveillance.',
  },
};


export default async function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CoreFeatures />
      <BenefitsGrid />
      <LeadershipSection />
      <FaqAccordion />
    </>
  );
}
