import { personal } from '../data/personal';

export function About() {
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 right-16 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-10"></div>
      <div className="absolute bottom-16 left-16 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 left-8 w-16 h-16 bg-pink-200 dark:bg-pink-900 rounded-full opacity-10"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting exceptional digital experiences through
            innovative technology solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  👨‍💻
                </span>
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>{personal.bio}</p>
                <p>
                  My journey in software engineering has been driven by a
                  relentless pursuit of excellence and innovation. With over 5
                  years of hands-on experience, I&apos;ve evolved from a curious
                  developer into a technical leader who bridges the gap between
                  complex business requirements and elegant technical solutions.
                </p>
                <p>
                  I believe in the power of technology to transform businesses
                  and improve lives. Whether it&apos;s optimizing financial
                  workflows for millions of users or creating intuitive
                  healthcare platforms, I approach every challenge with
                  meticulous attention to detail and a user-first mindset.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Achievements */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">5.2+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-purple-100">Users Served</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-green-100">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">80%</div>
                <div className="text-orange-100">Performance Boost</div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  🏆
                </span>
                Key Achievements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Led a team of 5 engineers delivering digital KYC solutions
                    for 1M+ users
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Improved SEO scores from 72% to 94% and reduced load times
                    by 70%
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Architected enterprise applications serving 500K+ combined
                    users
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Optimized CI/CD pipelines reducing deployment time by 80%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
            <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
              🎓
            </span>
            Education & Professional Journey
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h4>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    {personal.education.degree}
                  </h5>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-6">
                  {personal.education.university}
                </p>
                <p className="text-gray-600 dark:text-gray-300 ml-6">
                  {personal.education.location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 ml-6 mt-2">
                  Graduated: {personal.education.graduation}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Certifications
                  </h5>
                </div>
                <ul className="space-y-2 ml-6">
                  {personal.certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience Highlights
              </h4>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Neosoft (2025 - Present)
                  </h5>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-6 mb-2">
                  Senior Software Engineer
                </p>
                <ul className="space-y-1 ml-6 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Digital KYC & Mutual Funds for 1M+ users</li>
                  <li>• SEO optimization: 72% → 94%</li>
                  <li>• Performance: 4.5s → 1.5s load time</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Tatvasoft (2021 - 2025)
                  </h5>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-6 mb-2">
                  Senior Software Engineer
                </p>
                <ul className="space-y-1 ml-6 text-sm text-gray-600 dark:text-gray-300">
                  <li>• 3+ enterprise applications</li>
                  <li>• 500K+ combined users</li>
                  <li>• AWS infrastructure & CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate
              on innovative projects. Whether you have a project in mind or just
              want to connect, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
