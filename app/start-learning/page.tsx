import { PageHero } from '@/components/PageHero';
import { SignupForm } from '@/components/SignupForm';

const fields = [
  { label: 'Full Name', name: 'fullName', type: 'text', required: true },
  { label: 'Email Address', name: 'email', type: 'email', required: true },
  { label: 'What do you want to learn?', name: 'learningInterest', type: 'textarea', required: true, placeholder: 'Example: baseball hitting, fitness, business, language practice, AI tools...' },
  { label: 'What type of learning are you most interested in?', name: 'learningType', type: 'select', options: ['Courses', 'Live classes', 'Mentorship', '1-on-1 coaching', 'Language or conversation practice', 'Digital resources', 'Not sure yet'] },
  { label: 'What is your current level?', name: 'level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
  { label: 'What are your goals?', name: 'goals', type: 'textarea', placeholder: 'Tell us what you are trying to accomplish.' },
  { label: 'Would you like early access when Toriino launches?', name: 'earlyAccess', type: 'select', options: ['Yes', 'No'] },
  { label: 'Anything else you want us to know?', name: 'notes', type: 'textarea' }
] as const;

export default function StartLearningPage() {
  return (
    <>
      <PageHero eyebrow="Student" title="Start Learning with Toriino">
        <p>Enter the gateway to new skills, real guidance, and personal growth.</p>
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-warmWhite">Who this is for</h2>
              <p className="mt-4 text-sm leading-6 text-softGray">
                Start as a student if you want to learn something new, join live courses, book mentorship sessions, practice language or conversation skills, get guidance from real people, and track your progress over time.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-warmWhite">What you can do</h2>
              <ul className="mt-4 grid gap-3 text-sm text-softGray">
                {['Join courses and live cohorts', 'Book mentorship sessions', 'Ask questions and get guidance', 'Practice conversations or language skills', 'Access digital learning resources', 'Track progress over time'].map((item) => (
                  <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-vermillion" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <SignupForm
            role="Student"
            title="Join the Student Waitlist"
            description="Tell us what you want to learn and we’ll keep you updated as Toriino prepares for early access."
            fields={fields as any}
          />
        </div>
      </section>
    </>
  );
}
