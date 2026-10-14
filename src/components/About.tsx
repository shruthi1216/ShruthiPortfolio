import React from 'react';
import { 
  Lightbulb, 
  Workflow, 
  MessageSquare, 
  Users, 
  Sparkles,
  GraduationCap,
  Target
} from 'lucide-react';
import { PERSONAL_INFO, CORE_STRENGTHS } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "Analytical Thinking": <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    "Problem Solving": <Workflow className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    "Communication": <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    "Teamwork & Adaptability": <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
  };

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            About Me
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Aspiring Data Analyst Ready to Drive Business Value
          </h2>
        </div>

        {/* Foundation Narrative Card */}
        <div className="mt-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-6">
            
            {/* The exact foundation statement from user prompt */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              "{PERSONAL_INFO.aboutText}"
            </p>

            {/* Quick Context Chips (Unboxed, clean metadata) */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <strong className="text-slate-700 dark:text-slate-300">Degree:</strong> B.E. Electronics & Communication Engineering (2026)
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <strong className="text-slate-700 dark:text-slate-300">Target Roles:</strong> Data Analyst, Junior Data Analyst, BI Analyst
              </span>
            </div>

          </div>
        </div>

        {/* Core Analytical Strengths Grid */}
        <div className="mt-10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            Analytical & Professional Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_STRENGTHS.map((strength) => (
              <div 
                key={strength.title}
                className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs transition-all hover:border-blue-500/30"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60">
                    {iconMap[strength.title] || <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {strength.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
