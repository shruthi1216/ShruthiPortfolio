import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  Sliders,
  Send
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  linkedInUrl: string;
  onOpenSettings: () => void;
}

export const Contact: React.FC<ContactProps> = ({ linkedInUrl, onOpenSettings }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Get In Touch
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Connect for Data Analyst Opportunities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            I am actively exploring entry-level and junior Data Analyst, Business Intelligence Analyst, and analytics roles. Feel free to reach out directly via email or LinkedIn.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Email Card (Direct action & copy) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs hover:border-blue-500/40 transition-colors">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Email
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 break-all">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-2 px-3 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Email Me</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 py-1.5 px-3 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs hover:border-blue-500/40 transition-colors">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 mb-4">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  LinkedIn
                </h3>
                <button
                  onClick={onOpenSettings}
                  className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  title="Edit LinkedIn URL"
                >
                  <Sliders className="h-3 w-3" />
                  <span>Edit</span>
                </button>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 truncate">
                {linkedInUrl.replace('https://', '')}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 py-2 px-3 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-blue-600" />
                <span>Open LinkedIn</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs hover:border-blue-500/40 transition-colors">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 mb-4">
                <Github className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                GitHub
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 truncate">
                github.com/shruthi1216
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 py-2 px-3 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Visit Repositories</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs hover:border-blue-500/40 transition-colors">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Location
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {PERSONAL_INFO.location}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              Open to on-site, hybrid, and remote opportunities across India.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
