import { PageHero } from '@/components/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch with Toriino.">
        <p>For early access, partnership, mentor, teacher, or support questions, contact the Toriino team.</p>
      </PageHero>
      <section className="pb-20 sm:pb-28">
        <div className="section-shell max-w-2xl">
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold text-warmWhite">Contact Email</h2>
            <p className="mt-4 text-softGray">Replace this email with your official company email when ready.</p>
            <a href="mailto:hello@toriino.com" className="mt-6 inline-flex rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-warmWhite shadow-redGlow transition hover:-translate-y-0.5">
              hello@toriino.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
