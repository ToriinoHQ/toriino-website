import Link from 'next/link';
import type { ReactNode } from 'react';

export function ButtonLink({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-vermillion/40';
  const styles = {
    primary: 'bg-vermillion text-warmWhite shadow-redGlow hover:-translate-y-0.5 hover:bg-[#f04b3d]',
    secondary: 'border border-vermillion/70 bg-vermillion/10 text-warmWhite hover:-translate-y-0.5 hover:bg-vermillion/20',
    ghost: 'text-softGray hover:text-warmWhite'
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
