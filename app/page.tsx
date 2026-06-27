import Image from 'next/image';
import { ButtonLink } from '@/components/ButtonLink';
import { RoleCard } from '@/components/RoleCard';

const pillars = ['Learners', 'Teachers', 'Mentors', 'Coaches', 'Creators', 'Experts'];

const featureCards = [
  [
    'Live Sessions',
    'Real-time teaching, mentorship, Q&A, coaching, and conversation-based learning.',
  ],
  [
    'Structured Courses',
    'Teachers can create organized lessons, cohorts, workshops, and digital learning paths.',
  ],
  [
    'AI Support',
    'AI-powered notes, summaries, insights, progress tracking, and follow-up learning.',
  ],
];

const faqItems = [
  [
    'What is Toriino?',
    'Toriino is a mentorship and learning platform where people connect through live sessions, courses, digital resources, conversation-based learning, and AI-powered support.',
  ],
  [
    'Who is Toriino for?',
    'Toriino is for students, teachers, mentors, coaches, creators, entrepreneurs, language learners, and anyone with knowledge to share or a skill to learn.',
  ],
  [
    'What is the difference between a teacher and a mentor?',
    'A teacher usually offers structured learning, such as courses, lessons, live classes, or cohorts. A mentor offers more personal guidance, Q&A, coaching, conversation practice, or real-world advice.',
  ],
  [
    'Can teachers and mentors earn money on Toriino?',
    'Yes. Toriino is designed to help teachers, mentors, coaches, and creators earn through live sessions, mentorship, courses, coaching, and digital products.',
  ],
  ['Is Toriino available now?', 'Toriino is currently in development and preparing for early access.'],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(239,68,56,0.22),transparent_38%),radial-gradient(circle_at_25%_20%,rgba(239,68,56,0.08),transparent_30%)]" />

        <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-vermillion/45 bg-vermillion/10 px-5 py-3 text-sm font-semibold text-vermillion">
              The gateway where knowledge becomes opportunity.
            </div>

            <h1 className="mt-10 text-6xl font-black tracking-tight text-warmWhite sm:text-7xl lg:text-8xl">
              Enter
              <span className="block text-vermillion">Extraordinary.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-softGray">
              Toriino is the gateway where knowledge, mentorship, and opportunity meet.
              Learn from real people. Teach what you know. Mentor through experience.
              Build your path beyond ordinary.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/start-learning">Start Learning</ButtonLink>

              <ButtonLink href="/become-a-teacher" variant="secondary">
                Become a Teacher
              </ButtonLink>

              <ButtonLink href="/become-a-mentor" variant="secondary">
                Become a Mentor
              </ButtonLink>
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-warmWhite/80">
              Learn. Teach. Mentor. Grow beyond ordinary.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-vermillion/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-vermillion/25 bg-[#160c0b]/80 p-5 shadow-[0_0_80px_rgba(239,68,56,0.14)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-vermillion/20 bg-black/30">
                <Image
                  src="/hero-torii-city.png"
                  alt="A red torii gate overlooking a thriving city at sunset"
                  width={900}
                  height={650}
                  priority
                  className="h-[320px] w-full object-cover sm:h-[360px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#120807] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-vermillion">
                      Enter through the gate
                    </p>

                    <p className="mt-1 text-sm text-warmWhite/85">
                      Where learning opens the path to opportunity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-vermillion/25 bg-black/25 p-5">
                <div>
                  <p className="text-lg font-bold text-warmWhite">
                    Choose How You’ll Enter
                  </p>

                  <p className="mt-2 text-sm leading-6 text-softGray">
                    Step into Toriino as a learner, teacher, or mentor.
                  </p>
                </div>

                <div className="mt-5 grid gap-3">
                  <a
                    href="/start-learning"
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-vermillion/50 hover:bg-vermillion/10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-warmWhite">Student</p>

                        <p className="mt-1 text-sm leading-5 text-softGray">
                          Discover courses, live sessions, and guided growth.
                        </p>
                      </div>

                      <span className="shrink-0 text-sm font-semibold text-vermillion transition group-hover:translate-x-1">
                        Learn →
                      </span>
                    </div>
                  </a>

                  <a
                    href="/become-a-teacher"
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-vermillion/50 hover:bg-vermillion/10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-warmWhite">Teacher</p>

                        <p className="mt-1 text-sm leading-5 text-softGray">
                          Share your knowledge and build meaningful programs.
                        </p>
                      </div>

                      <span className="shrink-0 text-sm font-semibold text-vermillion transition group-hover:translate-x-1">
                        Teach →
                      </span>
                    </div>
                  </a>

                  <a
                    href="/become-a-mentor"
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-vermillion/50 hover:bg-vermillion/10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-warmWhite">Mentor</p>

                        <p className="mt-1 text-sm leading-5 text-softGray">
                          Guide others through experience, insight, and wisdom.
                        </p>
                      </div>

                      <span className="shrink-0 text-sm font-semibold text-vermillion transition group-hover:translate-x-1">
                        Guide →
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-templeBrown/35 bg-charcoal/35 py-6">
        <div className="section-shell flex flex-wrap items-center justify-center gap-3">
          {pillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-full border border-templeBrown/60 bg-ink/60 px-4 py-2 text-sm text-softGray"
            >
              {pillar}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vermillion">
              What is Toriino?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-warmWhite sm:text-5xl">
              A new gateway for learning and mentorship.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-softGray">
              Toriino is a mentorship and learning platform built for people who want
              to learn, teach, mentor, coach, create, and grow.
            </p>

            <p className="mt-5 text-lg leading-8 text-softGray">
              Through live sessions, structured courses, cohort-style learning, personal
              mentorship, conversation-based sessions, digital resources, and AI-powered
              support, Toriino helps people connect through knowledge.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {featureCards.map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-templeBrown/45 bg-charcoal/70 p-5"
                >
                  <h3 className="font-bold text-warmWhite">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-softGray">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="paths" className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vermillion">
              Choose your path
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-warmWhite sm:text-5xl">
              Start as a student, teacher, or mentor.
            </h2>

            <p className="mt-6 text-lg leading-8 text-softGray">
              Toriino gives every user a clear path based on how they want to grow
              or share knowledge.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <RoleCard
              label="Student"
              headline="Learn, grow, practice, and improve."
              body="For people who want to learn, ask questions, build skills, and receive guidance from real people."
              href="/start-learning"
              button="Start Learning"
              items={[
                'Join courses and live cohorts',
                'Book mentorship sessions',
                'Practice language or conversations',
                'Track growth and progress',
              ]}
            />

            <RoleCard
              label="Teacher"
              headline="Teach structured lessons and cohorts."
              body="For people who want to create courses, host live classes, lead workshops, and guide students through organized learning."
              href="/become-a-teacher"
              button="Become a Teacher"
              accent
              items={[
                'Create courses',
                'Host live classes',
                'Run cohort-style sessions',
                'Sell digital learning materials',
              ]}
            />

            <RoleCard
              label="Mentor"
              headline="Guide through experience and conversation."
              body="For people who want to offer personal guidance, Q&A, coaching, feedback, or language practice."
              href="/become-a-mentor"
              button="Become a Mentor"
              items={[
                'Offer 1-on-1 sessions',
                'Host live Q&A',
                'Give personal feedback',
                'Build trust through direct connection',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vermillion">
              Live learning + AI support
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-warmWhite sm:text-5xl">
              Human mentorship, powered by AI.
            </h2>

            <p className="mt-6 text-lg leading-8 text-softGray">
              Live sessions create trust, accountability, and personal guidance. AI helps
              organize the learning experience by supporting notes, summaries, insights,
              progress tracking, and follow-up learning.
            </p>

            <p className="mt-6 text-lg font-semibold text-warmWhite">
              The goal is simple: help people learn faster, stay focused, and keep
              growing after every session.
            </p>
          </div>

          <div className="card p-6">
            <div className="rounded-2xl border border-templeBrown/50 bg-ink/80 p-5">
              <div className="flex items-center justify-between border-b border-templeBrown/45 pb-4">
                <div>
                  <p className="text-sm text-softGray">AI Session Summary</p>

                  <h3 className="text-xl font-bold text-warmWhite">
                    Mentorship Session
                  </h3>
                </div>

                <span className="rounded-full bg-vermillion/15 px-3 py-1 text-xs font-semibold text-vermillion">
                  In Review
                </span>
              </div>

              <div className="mt-5 grid gap-4">
                {[
                  'Key insights captured',
                  'Progress notes organized',
                  'Next steps recommended',
                  'Follow-up learning suggested',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-templeBrown/40 bg-charcoal/70 p-4 text-sm text-softGray"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="card relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-vermillion/20 blur-3xl" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vermillion">
              The meaning behind Toriino
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-warmWhite sm:text-5xl">
              More than a name. A gateway.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-softGray">
              Toriino is inspired by the torii gate — a symbol of crossing into a new
              space, a new path, and a higher version of yourself. It also carries the
              energy of Torino, Italy — giving the name a global, cultural, and timeless
              feeling.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'Potential → Progress',
                'Knowledge → Action',
                'Experience → Opportunity',
                'Ordinary → Extraordinary',
              ].map((phrase) => (
                <div
                  key={phrase}
                  className="rounded-2xl border border-vermillion/30 bg-vermillion/10 p-5 text-sm font-semibold text-warmWhite"
                >
                  {phrase}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center sm:py-28">
        <div className="section-shell max-w-4xl">
          <h2 className="text-4xl font-black tracking-tight text-warmWhite sm:text-5xl">
            Everyone carries knowledge that could help someone else.
          </h2>

          <p className="mt-6 text-lg leading-8 text-softGray">
            Toriino exists to unlock what people know and turn it into connection,
            growth, income, and opportunity. Learning should feel personal. Teaching
            should feel accessible. Mentorship should feel human. Growth should feel
            possible.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="rounded-[2rem] border border-vermillion/40 bg-gradient-to-br from-vermillion/25 via-charcoal to-ink p-8 text-center shadow-redGlow sm:p-12">
            <h2 className="text-4xl font-black tracking-tight text-warmWhite sm:text-5xl">
              Toriino is preparing for early access.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-softGray">
              We are building for students, teachers, mentors, coaches, creators, and
              early community members who believe knowledge can change lives.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/start-learning">Start Learning</ButtonLink>

              <ButtonLink href="/become-a-teacher" variant="secondary">
                Apply to Become a Teacher
              </ButtonLink>

              <ButtonLink href="/become-a-mentor" variant="secondary">
                Apply to Become a Mentor
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell max-w-4xl">
          <h2 className="text-center text-4xl font-black tracking-tight text-warmWhite sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 grid gap-4">
            {faqItems.map(([question, answer]) => (
              <div
                key={question}
                className="rounded-2xl border border-templeBrown/45 bg-charcoal/65 p-6"
              >
                <h3 className="font-bold text-warmWhite">{question}</h3>

                <p className="mt-2 text-sm leading-6 text-softGray">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}