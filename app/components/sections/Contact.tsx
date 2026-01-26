import { ContactForm, ContactInfo } from '../index';
import { FAQ } from './FAQ';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 min-[376px]:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 left-8 w-24 h-24 bg-green-200 dark:bg-green-900 rounded-full opacity-10"></div>
      <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-orange-200 dark:bg-orange-900 rounded-full opacity-10"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always excited to connect with fellow developers, discuss
            new opportunities, and collaborate on innovative projects.
            Let&apos;s build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <ContactInfo />
        </div>

        <FAQ />
      </div>
    </section>
  );
}
