import type { ReactNode } from 'react';

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(227,66,52,0.22),transparent_35rem)]" />
      <div className="section-shell max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vermillion">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-warmWhite sm:text-6xl">{title}</h1>
        <div className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-softGray">{children}</div>
      </div>
    </section>
  );
}
