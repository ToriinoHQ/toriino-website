import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        vermillion: '#E34234',
        ink: '#120D0D',
        charcoal: '#1E1717',
        warmWhite: '#FFF7F2',
        softGray: '#B8AFAF',
        templeBrown: '#6B2A24',
        warmGold: '#D6A85B'
      },
      boxShadow: {
        redGlow: '0 0 40px rgba(227, 66, 52, 0.25)',
        softGlow: '0 0 80px rgba(227, 66, 52, 0.16)'
      }
    }
  },
  plugins: []
};

export default config;
