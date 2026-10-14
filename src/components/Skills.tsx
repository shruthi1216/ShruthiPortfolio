import React from 'react';
import { 
  BarChart3, 
  Code2, 
  PieChart, 
  Database, 
  FileSpreadsheet, 
  CheckCircle 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const categoryIconMap: Record<string, React.ReactNode> = {
    "Data Analysis": <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    "Programming and Data Analysis Libraries": <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    "Business Intelligence and Visualization": <PieChart className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    "Database Management": <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    "Spreadsheet Analysis": <FileSpreadsheet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Technical Stack
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Skills & Tools
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Practical skills applied across real-world datasets, dashboards, and analytical workflows.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 transition-all hover:border-blue-500/40 hover:shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-start gap-3.5 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                  {categoryIconMap[category.title] || <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List: Clean, accessible unboxed badges */}
              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs transition-colors hover:border-blue-400/60 dark:hover:border-blue-500/40"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine proficiency */}
        <div className="mt-8 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 px-4 py-3 text-center text-xs text-slate-500 dark:text-slate-400">
          Skills verified through hands-on portfolio projects and database case studies. No arbitrary progress bars or fabricated percentages.
        </div>

      </div>
    </section>
  );
};
