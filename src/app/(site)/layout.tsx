"use client";

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header/header';
import { usePathname } from 'next/navigation';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="dark:bg-[#101828] flex flex-col flex-1">
      <Header />
      <div className="isolate flex-1 flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}
