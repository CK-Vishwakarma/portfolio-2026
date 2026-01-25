// Constants used throughout the application

export const SITE_CONFIG = {
  name: 'Chanchal Kumar Vishvakarma',
  title: 'Senior Fullstack Engineer | Tech Lead',
  description:
    'Building high-performance frontend architectures and scalable backend systems that deliver exceptional user experiences at scale',
  url: 'https://chanchalkumar.dev', // Update with your actual domain
  ogImage: '/assets/portfolio-logo-2.jpg',
} as const;

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/CK-Vishwakarma',
  linkedin: 'https://www.linkedin.com/in/chanchal-kumar-vishvakarma-0954991ba/',
  twitter: 'https://x.com/chanchal_kv',
} as const;

export const SCROLL_THRESHOLD = {
  SHOW_SCROLL_TOP: 300,
  HERO_HEIGHT: 100,
} as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;
