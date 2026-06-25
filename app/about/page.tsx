import { PageHero } from '@/components/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Toriino" title="A gateway for knowledge, mentorship, and opportunity.">
        <p>Toriino is built around a simple belief: everyone carries knowledge that could help someone else.</p>
      </PageHero>
      <section className="pb-20 sm:pb-28">
        <div className="section-shell max-w-4xl space-y-6 text-lg leading-8 text-softGray">
          <p>
            Toriino is a mentorship and learning platform for students, teachers, mentors, coaches, creators, and experts. It is designed to help people learn from real experience, teach structured knowledge, and guide others through live human connection.
          </p>
          <p>
            The name is inspired by the torii gate — a symbol of crossing into a new space and a higher path. It also carries the global, cultural feeling of Torino, Italy. Together, Toriino represents a gateway from potential to progress, from knowledge to action, and from ordinary to extraordinary.
          </p>
          <p>
            Our mission is to unlock what people know and turn it into connection, growth, income, and opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
