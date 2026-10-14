import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  Building2, 
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { EDUCATION_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Academic Background
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Strong foundational engineering background coupled with specialized training in data analytics.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-500/20">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 dark:bg-blue-950/70 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2">
                    Undergraduate Degree
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {EDUCATION_INFO.degree}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <Building2 className="h-4 w-4 text-slate-400" />
                    <span>{EDUCATION_INFO.institution}</span>
                  </div>
                </div>
              </div>

              {/* Graduation & CGPA Badges */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5 shrink-0">
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Class of {EDUCATION_INFO.graduationYear}</span>
                </div>
                <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/70 dark:border-emerald-800/60 px-2.5 py-1 text-xs font-bold font-mono text-emerald-700 dark:text-emerald-400">
                  CGPA: {EDUCATION_INFO.cgpa}
                </div>
              </div>
            </div>

            {/* Core Analytical Foundations */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Relevant Analytical & Computational Foundations</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EDUCATION_INFO.courseworkHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Education / Schooling */}
            <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Higher Secondary School Performance
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION_INFO.schooling.map((school, i) => (
                  <div 
                    key={i} 
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 text-xs"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {school.institution}
                    </div>
                    <div className="mt-1 flex items-center justify-between text-slate-500 dark:text-slate-400">
                      <span>{school.level}</span>
                      <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{school.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certification Card (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Specialized Training
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Professional Certification
                </h3>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                <span>{EDUCATION_INFO.certification.title}</span>
                <span className="font-mono text-slate-500">{EDUCATION_INFO.certification.year}</span>
              </div>
              <div className="mt-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
                {EDUCATION_INFO.certification.issuer}
              </div>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {EDUCATION_INFO.certification.focus}
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 p-4 text-xs text-slate-600 dark:text-slate-300">
              <strong className="block font-semibold text-blue-900 dark:text-blue-300 mb-1">
                Recruiter Takeaway:
              </strong>
              Combines systematic analytical training in SQL querying, Python automation, and Power BI dashboards with rigorous B.E. engineering disciplines.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
