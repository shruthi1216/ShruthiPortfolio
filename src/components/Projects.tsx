import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  BarChart3, 
  Database, 
  Code2, 
  Layers,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Power BI' | 'SQL' | 'Python'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const getToolIcon = (tool: string) => {
    if (tool.includes('Power BI') || tool.includes('DAX')) {
      return <BarChart3 className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />;
    }
    if (tool.includes('SQL')) {
      return <Database className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />;
    }
    return <Code2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />;
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              Featured Work
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Data Analytics Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Practical portfolio projects highlighting real-world data pipelines, business intelligence dashboards, and SQL analytics.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1 shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setActiveFilter('Power BI')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === 'Power BI'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Power BI
            </button>
            <button
              onClick={() => setActiveFilter('SQL')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === 'SQL'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              SQL
            </button>
            <button
              onClick={() => setActiveFilter('Python')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === 'Python'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Python
            </button>
          </div>
        </div>

        {/* 3 Projects Grid (Desktop: 3 side by side; Mobile: stacked) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md"
            >
              {/* Card Top */}
              <div>
                
                {/* Category & Order Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    <Layers className="h-3.5 w-3.5" />
                    <span>Project 0{index + 1}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
                  {project.title}
                </h3>

                {/* Technology Badges */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      {getToolIcon(tool)}
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Key Highlights:
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                
                {/* Primary Button: View Project on GitHub */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Github className="h-4 w-4" />
                  <span>View Project on GitHub</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>

                {/* Secondary Button: Inspect Key Queries / Details */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Inspect Queries & Details</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
