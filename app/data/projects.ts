export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // {
  //   id: "1",
  //   title: "Patient Health Portal",
  //   description: "A comprehensive healthcare SaaS platform built with Next.js 14 and SSR/ISR capabilities. Features REST + GraphQL APIs, secure JWT + OAuth2 authentication, and AI-powered health insights. Optimized for performance with significant improvements in load times and Lighthouse scores.",
  //   image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5IZWFsdGhjYXJlIFNhYVM8L3RleHQ+Cjwvc3ZnPg==",
  //   technologies: ["Next.js", "React", "TypeScript", "GraphQL", "REST APIs", "JWT", "OAuth2", "Python"],
  //   githubUrl: "https://github.com/chanchalkumarv/health-portal",
  //   liveUrl: "https://health-portal-demo.vercel.app",
  //   featured: true,
  // },
  {
    id: "1",
    title: "Patient Health Portal",
    description: "A comprehensive healthcare SaaS platform built with Next.js 14 and SSR/ISR capabilities. Features REST + GraphQL APIs, secure JWT + OAuth2 authentication, and AI-powered health insights. Optimized for performance with significant improvements in load times and Lighthouse scores.",
    image: "data:image/svg+xmlyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtPkFJICsgUFdBIEFwcDwvdGV4dD4KPC9zdmc+",
    technologies: ["Next.js", "React", "TypeScript", "GraphQL", "REST APIs", "JWT", "OAuth2", "Python"],
    githubUrl: "https://github.com/chanchalkumarv/smart-color-styler",
    liveUrl: "https://smart-color-styler.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Smart Color Styler",
    description: "An innovative AI-powered PWA and native mobile app for intelligent color styling. Managed complete product lifecycle with automated CI/CD pipelines, improved API response times by 30%, and delivered cross-platform builds via Capacitor. Features machine learning algorithms for personalized color recommendations and styling suggestions.",
    image: "data:image/svg+xmlyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtPkFJICsgUFdBIEFwcDwvdGV4dD4KPC9zdmc+",
    technologies: ["React", "Next.js", "PWA", "Capacitor", "Node.js", "AI/ML", "CI/CD", "Mobile"],
    githubUrl: "https://github.com/chanchalkumarv/smart-color-styler",
    liveUrl: "https://smart-color-styler.vercel.app",
    featured: true,
  },
  {
    id: "3",
    title: "EdTech Communication Platform",
    description: "A scalable edtech platform with role-based dashboards for seamless collaboration between administrators, teachers, and students. Built with real-time messaging via WebSockets and Socket.IO, handling 10K+ concurrent users. Migrated from Firebase to MongoDB for enhanced performance and scalability.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtPkVkVGVjaCBQbGF0Zm9ybTwvdGV4dD4KPC9zdmc+",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebSockets", "Socket.IO", "Real-time", "Role-based Access"],
    githubUrl: "https://github.com/chanchalkumarv/edtech-platform",
    liveUrl: "https://edtech-platform-demo.vercel.app",
    featured: true,
  },
  {
    id: "4",
    title: "Digital KYC & Mutual Funds Platform",
    description: "A comprehensive financial platform handling digital KYC processes (Digi Locker + e-Mudra integration) and mutual fund operations including Switch, STP, and SWP transactions. Led a team of 5 engineers, improved SEO scores from 72% to 94%, and optimized load times from 4.5s to 1.5s. Architected with RSA+AES encryption for secure financial workflows serving 1M+ users.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtPkZpbmFuY2lhbCBQbGF0Zm9ybTwvdGV4dD4KPC9zdmc+",
    technologies: ["Next.js", "Node.js", "AWS", "RSA+AES", "SSR", "SEO", "CI/CD"],
    githubUrl: "https://github.com/chanchalkumarv/financial-platform",
    liveUrl: "https://financial-platform-demo.vercel.app",
    featured: true,
  },
];