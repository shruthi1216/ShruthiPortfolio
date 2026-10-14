import React from 'react';
import { 
  ArrowDown, 
  FileDown, 
  Mail, 
  Github, 
  Database, 
  BarChart3, 
  Code2, 
  CheckCircle2,
  TableProperties
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  githubUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, githubUrl }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Subtle background ambient radial gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 dark:opacity-20"
      >
        <div className="h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/15" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Persona & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Identity & Status */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 mb-3 uppercase">
              <span>{PERSONAL_INFO.name}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>{PERSONAL_INFO.title}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 dark:text-slate-400 lowercase first-letter:uppercase">{PERSONAL_INFO.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
              {PERSONAL_INFO.headline}
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Core Competencies Quick Summary */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                SQL Querying & Data Modeling
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                Power BI & DAX Dashboards
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                Python Data Wrangling
              </span>
            </div>

            {/* The 4 Required Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* 1. View My Projects */}
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowDown className="h-4 w-4" />
              </button>

              {/* 2. Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all active:scale-[0.98]"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Resume</span>
              </button>

              {/* 3. Contact Me */}
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </button>

              {/* 4. View GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Recruiter Trust Note */}
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Open to full-time Data Analyst, Junior Data Analyst, and Business Intelligence roles.
            </p>
          </div>

          {/* Right Column: Clean Data Analytics Architecture Card (Authentic, No Stock Photo) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-blue-500/30">
              
              {/* Card Header: Data Stack Summary */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Analytics Toolkit
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  SQL · Power BI · Python
                </span>
              </div>

              {/* 3 Real Technical Workflows */}
              <div className="mt-4 space-y-3.5 text-xs">
                
                {/* 1. Power BI & DAX */}
                <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 p-3.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                      <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Business Intelligence & DAX</span>
                    </div>
                    <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400">Power BI</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[12px] leading-relaxed">
                    Interactive dashboards, star-schema data modeling, KPI tracking, and time-intelligence sales trend analysis.
                  </p>
                </div>

                {/* 2. SQL & Relational Databases */}
                <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 p-3.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                      <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Relational Databases & SQL</span>
                    </div>
                    <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400">Oracle SQL</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[12px] leading-relaxed">
                    Multi-table schemas, complex joins, aggregations with GROUP BY & HAVING, CTEs, and window functions (<code className="font-mono text-[11px] text-slate-800 dark:text-slate-300">DENSE_RANK()</code>, <code className="font-mono text-[11px] text-slate-800 dark:text-slate-300">LAG()</code>).
                  </p>
                </div>

                {/* 3. Python Data Wrangling */}
                <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 p-3.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                      <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Data Wrangling & Visualization</span>
                    </div>
                    <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400">Python</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[12px] leading-relaxed">
                    Exploratory Data Analysis (EDA) with Pandas & NumPy; statistical plots and heatmaps with Matplotlib & Seaborn.
                  </p>
                </div>

              </div>

              {/* Card Footer: Verified Credentials */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Education: B.E. ECE (2026)</span>
                <span className="font-mono font-medium text-slate-700 dark:text-slate-300">CGPA 8.2 / 10</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
