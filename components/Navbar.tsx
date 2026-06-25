import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from './ButtonLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/start-learning', label: 'Start Learning' },
  { href: '/become-a-teacher', label: 'Teacher' },
  { href: '/become-a-mentor', label: 'Mentor' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-templeBrown/35 bg-ink/80 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/toriino-logo.png" alt="Toriino logo" width={42} height={42} className="h-10 w-10 object-contain" priority />
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-wide text-warmWhite">Toriino</div>
            <div className="text-xs text-softGray">Enter Extraordinary.</div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-softGray transition hover:text-warmWhite">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <ButtonLink href="/start-learning" variant="secondary">Start Learning</ButtonLink>
          <ButtonLink href="/become-a-teacher">Join Early Access</ButtonLink>
        </div>
      </nav>
    </header>
  );
}
