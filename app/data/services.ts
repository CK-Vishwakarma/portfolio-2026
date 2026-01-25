export const services = [
  {
    id: 1,
    value: 'business_web_app',
    label: 'Business Web Application',
  },
  {
    id: 2,
    value: 'web_mobile_app',
    label: 'Web + Mobile App (Android / iOS)',
  },
  {
    id: 3,
    value: 'saas_mvp',
    label: 'SaaS MVP Development',
  },
  {
    id: 4,
    value: 'ai_integration',
    label: 'AI Feature Integration',
  },
  {
    id: 5,
    value: 'performance_seo',
    label: 'Performance & SEO Optimization',
  },
  {
    id: 6,
    value: 'security_auth',
    label: 'Security & Authentication Setup',
  },
  {
    id: 7,
    value: 'consultation',
    label: 'Not sure – need consultation',
  },
] as const;

export type Service = (typeof services)[number];
