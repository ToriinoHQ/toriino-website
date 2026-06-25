import { PageHero } from '@/components/PageHero';
import { SignupForm } from '@/components/SignupForm';

const fields = [
  { label: 'Full Name', name: 'fullName', type: 'text', required: true },
  { label: 'Email Address', name: 'email', type: 'email', required: true },
  { label: 'What subject or skill do you want to teach?', name: 'subject', type: 'textarea', required: true },
  { label: 'What type of teaching experience do you want to offer?', name: 'teachingType', type: 'select', options: ['Course', 'Live class', 'Cohort-style program', 'Workshop', 'Digital product', 'Community-based learning', 'Not sure yet'] },
  { label: 'Do you already have students, clients, followers, or an audience?', name: 'audience', type: 'select', options: ['Yes', 'No', 'A small audience', 'I’m just starting'] },
  { label: 'What is your experience or background in this subject?', name: 'experience', type: 'textarea' },
  { label: 'Would you want to charge for your teaching?', name: 'charging', type: 'select', options: ['Yes', 'No', 'Maybe later'] },
  { label: 'What would your first course, class, or program be about?', name: 'firstOffer', type: 'textarea' },
  { label: 'Would you like to be considered for early teacher access?', name: 'earlyAccess', type: 'select', options: ['Yes', 'No'] },
  { label: 'Anything else you want us to know?', name: 'notes', type: 'textarea' }
] as const;

export default function BecomeTeacherPage() {
  return (
    <>
      <PageHero eyebrow="Teacher" title="Become a Teacher on Toriino">
        <p>Teach what you know. Lead structured learning. Build something extraordinary.</p>
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-warmWhite">Who this is for</h2>
              <p className="mt-4 text-sm leading-6 text-softGray">
                Become a teacher if you want to create structured courses, host live classes, run cohort-style programs, teach lessons around a subject, sell digital learning materials, and build a student community.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-warmWhite">Teacher examples</h2>
              <p className="mt-4 text-sm leading-6 text-softGray">
                Fitness, business, sports training, career skills, creative skills, technology, language learning, personal development, faith-based learning, financial education, or any skill that helps people grow.
              </p>
            </div>
          </div>

          <SignupForm
            role="Teacher"
            title="Apply to Become a Teacher"
            description="Tell us what you want to teach and how you would like to use Toriino."
            fields={fields as any}
          />
        </div>
      </section>
    </>
  );
}
