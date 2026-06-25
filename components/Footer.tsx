import Link from 'next/link';

const mainLinks = [
  ['Home', '/'],
  ['Start Learning', '/start-learning'],
  ['Become a Teacher', '/become-a-teacher'],
  ['Become a Mentor', '/become-a-mentor'],
  ['About', '/about'],
  ['Contact', '/contact']
];

const legalLinks = [
  ['Privacy Policy', '/privacy'],
  ['Terms of Service', '/terms']
];

export function Footer() {
  return (
    <footer className="border-t border-vermillion/30 bg-[#090606]">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="text-2xl font-bold text-warmWhite">Toriino</div>
          <p className="mt-2 text-lg font-semibold text-vermillion">Enter Extraordinary.</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-softGray">
            The gateway where knowledge, mentorship, and opportunity meet.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-warmGold">Explore</h3>
          <div className="mt-4 grid gap-3">
            {mainLinks.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-softGray transition hover:text-warmWhite">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-warmGold">Company</h3>
          <div className="mt-4 grid gap-3">
            {legalLinks.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-softGray transition hover:text-warmWhite">
                {label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-softGray/70">Copyright © 2026 Toriino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
