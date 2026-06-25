import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Toriino | Enter Extraordinary',
  description: 'Toriino is the gateway where knowledge, mentorship, and opportunity meet.',
  openGraph: {
    title: 'Toriino | Enter Extraordinary',
    description: 'Learn from real people. Teach what you know. Mentor through experience.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
