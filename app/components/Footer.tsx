import Image from 'next/image';
import { personal } from '../data/personal';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const quickLinks = [
    { name: 'Resume', href: personal.resumeLink },
    { name: 'GitHub', href: personal.socialLinks.github },
    { name: 'LinkedIn', href: personal.socialLinks.linkedin },
    { name: 'Twitter', href: personal.socialLinks.twitter },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-500/10 rounded-full blur-xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                    <Image
                      src="/assets/portfolio-logo-2.jpg"
                      alt="Chanchal Kumar Logo"
                      width={40}
                      height={40}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {personal.name.split(' ')[0]}
                  </h3>
                  <p className="text-sm text-gray-400">Fullstack Engineer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Building high-performance applications and scalable systems that
                deliver exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                <SocialLinks className="flex space-x-4" />
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">Phone</p>
                    <a
                      href={`tel:${personal.phone.replace(/-/g, '')}`}
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">
                      Location
                    </p>
                    <p className="text-sm text-gray-400">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-screen-xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>
                  © {currentYear} {personal.name}. All rights reserved.
                </span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="/sitemap.xml"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Sitemap
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://github.com/CK-Vishwakarma/portfolio-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
