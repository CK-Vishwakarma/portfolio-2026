import Image from 'next/image';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'React', icon: '/assets/react.svg' },
      { name: 'Next.js', icon: '/assets/next.svg' },
      { name: 'TypeScript', icon: '/assets/typescript.svg' },
      { name: 'Redux Toolkit', icon: '/assets/redux.svg' },
      { name: 'Tailwind CSS', icon: '/assets/tailwind.svg' },
      { name: 'Material-UI', icon: '/assets/mui.svg' },
      { name: 'React Query', icon: '/assets/reactQuery.svg' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: '/assets/node.svg' },
      { name: 'NestJS', icon: '/assets/nestjs.svg' },
      { name: 'Express', icon: '/assets/express.svg' },
      { name: 'REST APIs', icon: '/assets/rest-api.svg' },
      { name: 'GraphQL', icon: '/assets/graphql.svg' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS', icon: '/assets/aws.svg' },
      { name: 'Docker', icon: '/assets/docker.svg' },
      { name: 'Jenkins', icon: '/assets/jenkins.svg' },
      { name: 'GitHub Actions', icon: '⚡' },
      { name: 'CI/CD', icon: '🔄' },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', icon: '/assets/mongodb.svg' },
      { name: 'MySQL', icon: '/assets/mySql.svg' },
      { name: 'PostgreSQL', icon: '/assets/postgres.svg' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'WebSockets', icon: '🔌' },
      { name: 'Socket.IO', icon: '📡' },
      { name: 'PWA', icon: '📱' },
      { name: 'Security', icon: '🔒' },
      { name: 'Stripe', icon: '/assets/stripe.png' },
      { name: 'Razorpay', icon: '/assets/razorpay.png' },
      { name: 'Git', icon: '/assets/git.svg' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_40%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(147,51,234,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_60%_70%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-10"></div>
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-green-200 dark:bg-green-900 rounded-full opacity-10"></div>

      <div className="relative z-10 max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build scalable, high-performance
            applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group cursor-pointer"
                    style={{
                      animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                    }}
                  >
                    {skill.icon.startsWith('/assets/') ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-lg mr-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resume Download CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Want to know more about my experience?
            </h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Download my detailed resume to see my complete professional
              journey, certifications, and project achievements.
            </p>
            <a
              href="/fullstack_Chanchal_Kumar_Resume.pdf"
              download="Chanchal_Kumar_Vishvakarma_Resume.pdf"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
