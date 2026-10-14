import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Code2, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close project modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5">
            <span>{project.category} Case Study</span>
            <span aria-hidden="true">·</span>
            <span>2026 Portfolio</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          
          {/* Tools */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tools.map((t) => (
              <span 
                key={t}
                className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>{project.description}</p>
          {project.additionalDetails?.overview && (
            <p className="text-slate-600 dark:text-slate-400">
              {project.additionalDetails.overview}
            </p>
          )}
        </div>

        {/* Highlights */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            Core Project Highlights
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Code Snippets / Queries */}
        {project.additionalDetails?.sampleQueriesOrMetrics && project.additionalDetails.sampleQueriesOrMetrics.length > 0 && (
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Analytical Implementation Snippets</span>
            </h4>
            
            {project.additionalDetails.sampleQueriesOrMetrics.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {item.title}
                </div>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-[11px] font-mono text-slate-100 leading-normal">
                  <code>{item.codeSnippet}</code>
                </pre>
                <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>View Repository on GitHub</span>
            <ExternalLink className="h-3 w-3 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
