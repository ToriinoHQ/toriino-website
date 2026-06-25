import { PageHero } from '@/components/PageHero';

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service">
        <p>Placeholder terms for early website launch. Have legal counsel review before public app launch.</p>
      </PageHero>
      <section className="pb-20 sm:pb-28">
        <div className="section-shell max-w-4xl space-y-8 text-softGray">
          <div>
            <h2 className="text-2xl font-bold text-warmWhite">1. Use of Toriino</h2>
            <p className="mt-3 leading-7">By using this website, you agree to use Toriino only for lawful purposes and in a way that does not harm the platform, users, or community.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-warmWhite">2. Early Access</h2>
            <p className="mt-3 leading-7">Toriino is currently in development. Submitting an early access form does not guarantee access, approval, or availability of services.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-warmWhite">3. Content and Conduct</h2>
            <p className="mt-3 leading-7">Users are responsible for the information they provide and must not submit misleading, harmful, unlawful, or abusive content.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-warmWhite">4. Contact</h2>
            <p className="mt-3 leading-7">Questions about these terms can be sent to hello@toriino.com.</p>
          </div>
        </div>
      </section>
    </>
  );
}
