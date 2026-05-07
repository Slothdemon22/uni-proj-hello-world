import type { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Nexvect to book a demo, discuss a pilot programme, or ask about our AI manufacturing solutions. We respond within one business day.',
  alternates: {
    canonical: 'https://nexvect.com/contact',
  },
  openGraph: {
    url: 'https://nexvect.com/contact',
    title: 'Contact Us | Nexvect',
    description:
      'Book a demo or discuss a pilot. Reach the Nexvect team at info@nexvect.com.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
