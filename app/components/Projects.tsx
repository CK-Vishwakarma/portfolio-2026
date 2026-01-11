'use client';

import { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const [filter, setFilter] = useState<string>('all');

  // Get unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Filter projects based on selected technology
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full opacity-10"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-green-200 dark:bg-green-900 rounded-full opacity-10"></div>
      <div className="absolute bottom-1/3 left-10 w-20 h-20 bg-orange-200 dark:bg-orange-900 rounded-full opacity-10"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions built with modern technologies,
            delivering exceptional user experiences and business value.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            All Projects
          </button>
          {allTechnologies.slice(0, 6).map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tech
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Project Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Delivering measurable results across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">1M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Users Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">94%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                SEO Score
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">80%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Performance Boost
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Delivered
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project. I bring expertise in
              modern web technologies and a proven track record of delivering
              high-impact solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start a Project
              </a>
              <a
                href="https://github.com/chanchalkumarv"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
