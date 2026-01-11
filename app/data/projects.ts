export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;

  // Added for enterprise / NDA-safe projects
  confidential?: boolean;
  githubDescription?: string;
  liveDescription?: string;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  // ---------------------------
  // 1. Patient Health Portal (Coming Soon)
  // ---------------------------
  {
    id: "1",
    title: "Patient Health Portal",
    description:
      "A comprehensive healthcare SaaS platform with SSR/ISR, GraphQL, secure authentication, and AI-driven health insights. This project is currently being prepared for a portfolio-friendly case study.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtPkNvbWluZyBTb29uPC90ZXh0Pgo8L3N2Zz4=",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "REST APIs",
      "JWT",
      "OAuth2",
      "Python",
    ],
    featured: true,
    confidential: true,
    comingSoon: true,
    githubDescription: "Enterprise healthcare product — repository cannot be shared.",
    liveDescription: "Internal SaaS application deployed in a private healthcare environment.",
  },

  // ---------------------------
  // 2. Digital KYC & Mutual Funds Platform (Moved here)
  // ---------------------------
  {
    id: "4",
    title: "Digital KYC & Mutual Funds Platform",
    description:
      "A full-scale financial platform handling digital KYC (DigiLocker + e-Mudra) and complex mutual fund workflows like Switch, STP, and SWP. Architected secure RSA+AES encrypted flows and optimized performance & SEO for 1M+ users. Also developing and handling the complete user onboarding journey.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtPkZpbmFuY2lhbCBQbGF0Zm9ybTwvdGV4dD4KPC9zdmc+",
    technologies: ["Next.js", "Node.js", "AWS", "RSA+AES", "SSR", "SEO", "CI/CD"],
    featured: true,
    confidential: true,
    githubDescription: "Enterprise BFSI product — repository cannot be shared.",
    liveDescription: "Deployed on a private bank infrastructure — not publicly accessible.",
  },

  // ---------------------------
  // 3. Smart Color Styler (Public Project)
  // ---------------------------
  {
    id: "2",
    title: "Smart Color Styler",
    description:
      "AI-powered PWA and native mobile app for intelligent color styling. Delivered cross-platform builds via Capacitor, improved API speed by 30%, and automated the CI/CD pipeline.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtPkFJICsgUFdBIEFwcDwvdGV4dD4KPC9zdmc+",
    technologies: [
      "React",
      "Next.js",
      "PWA",
      "Capacitor",
      "Node.js",
      "AI/ML",
      "CI/CD",
      "Mobile",
    ],
    githubUrl: "https://github.com/chanchalkumarv/smart-color-styler",
    liveUrl: "https://smart-color-styler.vercel.app",
    featured: true,
  },

  // ---------------------------
  // 4. EdTech Communication Platform
  // ---------------------------
  {
    id: "3",
    title: "EdTech Communication Platform",
    description:
      "A real-time EdTech collaboration platform with dashboards for Admins, Teachers, and Students. Handles 10K+ concurrent users using WebSockets and optimized APIs after migrating from Firebase → MongoDB.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtPkVkVGVjaCBQbGF0Zm9ybTwvdGV4dD4KPC9zdmc+",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "Socket.IO",
      "Real-time",
      "Role-based Access",
    ],
    featured: true,
    confidential: true,
    githubDescription: "EdTech enterprise product — source cannot be shared.",
    liveDescription: "Internal deployment — not publicly accessible.",
  },
];
