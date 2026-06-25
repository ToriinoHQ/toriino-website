import { PageHero } from '@/components/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy">
        <p>Placeholder privacy policy for early website launch. Have legal counsel review before public app launch.</p>
      </PageHero>
      <section className="pb-20 sm:pb-28">
        <div className="section-shell max-w-4xl space-y-8 text-softGray">
          <div>
            <h2 className="text-2xl font-bold text-warmWhite">1. Information We Collect</h2>
            <p className="mt-3 leading-7">Toriino may collect information you provide, such as your name, email address, role selection, learning interests, teaching interests, mentorship topics, and form responses.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-warmWhite">2. How We Use Information</h2>
            <p className="mt-3 leading-7">We may use information to manage early access, contact applicants, improve the platform, provide support, and communicate updates about Toriino.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-warmWhite">3. Data Sharing</h2>
            <p className="mt-3 leading-7">We do not sell personal information. We may share data with service providers that help us operate the website and platform.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-warmWhite">4. Contact</h2>
            <p className="mt-3 leading-7">Questions about this policy can be sent to hello@toriino.com.</p>
          </div>
        </div>
      </section>
    </>
  );
}
