'use client';
import { CloseIcon, MenuIcon } from '@/icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopNav from './desktop-nav';
import MainMobileNav from './main-mobile-nav';
import ThemeToggle from './theme-toggle';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-3 lg:py-4">
      <div className="px-4 sm:px-6 lg:px-7">
        <div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr] rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-2">
          <div className="flex items-center">
            <Link href="/" className="flex items-end gap-2 ml-10">
              <Image
                src="/logo-removebg-preview.png"
                className="block h-16 lg:h-20 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
                alt="Nexvect logo"
                width={300}
                height={80}
                priority
              />
            </Link>
          </div>

          <DesktopNav />

          <div className="flex items-center gap-4 justify-self-end">
            <ThemeToggle />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="order-last shrink-0 inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <Link
              href="/contact"
              className="lg:inline-flex items-center px-5 py-3 gradient-btn hidden text-sm text-white rounded-full button-bg h-11"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} />
    </header>
  );
}
