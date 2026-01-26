import { personal } from '../../data/personal';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 min-[376px]:px-6 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20"></div>

      <div className="relative z-10 max-w-screen-lg mx-auto text-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              {personal.name}
            </h1>
          </div>

          <div>
            <p className="text-xl sm:text-3xl text-gray-600 dark:text-gray-300 font-light">
              {personal.title}
            </p>
          </div>

          <div>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {personal.valueProposition}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold text-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-[scroll_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
