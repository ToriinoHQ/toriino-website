import { ButtonLink } from './ButtonLink';

export function RoleCard({
  label,
  headline,
  body,
  items,
  href,
  button,
  accent = false
}: {
  label: string;
  headline: string;
  body: string;
  items: string[];
  href: string;
  button: string;
  accent?: boolean;
}) {
  return (
    <div className={`card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-vermillion/65 ${accent ? 'shadow-redGlow' : ''}`}>
      <div className="mb-5 inline-flex w-fit rounded-full border border-vermillion/40 bg-vermillion/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-vermillion">
        {label}
      </div>
      <h3 className="text-2xl font-bold text-warmWhite">{headline}</h3>
      <p className="mt-4 text-sm leading-6 text-softGray">{body}</p>
      <ul className="mt-6 grid gap-3 text-sm text-softGray">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vermillion" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-2">
        <ButtonLink href={href} variant={accent ? 'primary' : 'secondary'}>{button}</ButtonLink>
      </div>
    </div>
  );
}
