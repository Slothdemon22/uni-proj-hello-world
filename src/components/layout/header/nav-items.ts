export const navItems = [
  {
    type: 'link',
    href: '/',
    label: 'Home',
  },
  {
    type: 'link',
    label: 'About',
    href: '/about',
  },
  {
    type: 'link',
    label: 'Products',
    href: '/#products',
  },
  {
    type: 'link',
    label: 'Leadership',
    href: '/#leadership',
  },
  {
    type: 'link',
    label: 'FAQ',
    href: '/#faq',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact',
  },
] satisfies NavItem[];

type NavItem =
  | {
      type: 'link';
      href: string;
      label: string;
    }
  | {
      type: 'dropdown';
      label: string;
      items: Array<{
        href: string;
        label: string;
      }>;
    };
