import { faq } from '../data/faq';

export function FAQ() {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Got questions? Here are some common ones I get asked. If you
          don&apos;t see your answer here, feel free to reach out!
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faq.map((item, index) => (
          <details
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group transition-all duration-300"
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-xl">
              <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                {item.question}
              </span>
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-6 pb-6 transition-opacity duration-300 opacity-0 group-open:opacity-100">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
