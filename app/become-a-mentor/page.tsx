import { PageHero } from '@/components/PageHero';
import { SignupForm } from '@/components/SignupForm';

const fields = [
  { label: 'Full Name', name: 'fullName', type: 'text', required: true },
  { label: 'Email Address', name: 'email', type: 'email', required: true },
  { label: 'What topics can you mentor people on?', name: 'topics', type: 'textarea', required: true },
  { label: 'What type of mentorship would you like to offer?', name: 'mentorshipType', type: 'select', options: ['1-on-1 sessions', 'Live Q&A', 'Conversation practice', 'Language practice', 'Coaching', 'Feedback sessions', 'Group mentoring', 'Not sure yet'] },
  { label: 'Who would you like to help?', name: 'audience', type: 'textarea' },
  { label: 'What is your experience or background?', name: 'experience', type: 'textarea' },
  { label: 'Would you want to charge per session, per hour, or offer free sessions at first?', name: 'pricing', type: 'select', options: ['Per session', 'Per hour', 'Free at first', 'Not sure yet'] },
  { label: 'What would someone gain from booking a session with you?', name: 'value', type: 'textarea' },
  { label: 'Would you like to be considered for early mentor access?', name: 'earlyAccess', type: 'select', options: ['Yes', 'No'] },
  { label: 'Anything else you want us to know?', name: 'notes', type: 'textarea' }
] as const;

export default function BecomeMentorPage() {
  return (
    <>
      <PageHero eyebrow="Mentor" title="Become a Mentor on Toriino">
        <p>Share your experience. Guide real people. Help someone step into their next level.</p>
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-warmWhite">Who this is for</h2>
              <p className="mt-4 text-sm leading-6 text-softGray">
                Become a mentor if you want to offer 1-on-1 guidance, host Q&A, help people practice language or conversations, give feedback, coach people through real situations, and share experience that helps others grow.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-warmWhite">Mentor examples</h2>
              <p className="mt-4 text-sm leading-6 text-softGray">
                Career advice, business guidance, fitness, sports training, mindset, faith-based encouragement, language practice, communication skills, creative feedback, entrepreneurship, and accountability.
              </p>
            </div>
          </div>

          <SignupForm
            role="Mentor"
            title="Apply to Become a Mentor"
            description="Tell us what kind of guidance you want to offer and who you want to help."
            fields={fields as any}
          />
        </div>
      </section>
    </>
  );
}
