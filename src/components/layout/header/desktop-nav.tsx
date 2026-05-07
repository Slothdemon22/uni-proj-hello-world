import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './nav-items';
import { useEffect } from 'react';

export default function DesktopNav() {
  const pathname = usePathname();

  useEffect(() => {
    // no-op, kept for future nav side-effects
  }, [pathname]);

  return (
    <nav className="hidden lg:flex lg:items-center rounded-full p-1 max-h-fit bg-white/5 border border-white/10">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-white/70 text-sm px-4 py-1.5 rounded-full hover:text-white font-medium',
            {
              'bg-white/10 font-medium text-white shadow-xs':
                pathname === item.href,
            }
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
