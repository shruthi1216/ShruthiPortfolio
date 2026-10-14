import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  Github, 
  FileText, 
  Check, 
  Copy, 
  ExternalLink, 
  Server, 
  Layers, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface PublishGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublishGuideModal: React.FC<PublishGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const shareableUrl = "https://ais-pre-cqqh56cvzck42unatgtfh2-27522777193.asia-east1.run.app";

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative flex flex-col w-full max-w-3xl max-h-[90vh] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-slate-50/80 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Free Website Publishing & Maintenance Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close guide"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          
          {/* Active Free Shareable URL */}
          <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/40 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                1. Your Live Web Links & Sharing
              </span>
              <span className="rounded-md bg-blue-100 dark:bg-blue-900/80 px-2 py-0.5 text-[10px] font-bold text-blue-800 dark:text-blue-300">
                Free Hosting
              </span>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                  Active Live Preview (Running Now):
                </span>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <div className="flex-1 overflow-x-auto rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2 font-mono text-[11px] text-slate-800 dark:text-slate-200">
                    https://ais-dev-cqqh56cvzck42unatgtfh2-27522777193.asia-east1.run.app
                  </div>
                  <a
                    href="https://ais-dev-cqqh56cvzck42unatgtfh2-27522777193.asia-east1.run.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shrink-0"
                  >
                    <span>Open Live</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-blue-100 dark:border-blue-900/50 text-xs text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Why did the Shared URL say "Not Found"?</strong>
                <p className="mt-1 leading-relaxed text-[11px] text-slate-500 dark:text-slate-400">
                  In Google AI Studio, the Shared URL is activated once you click the <strong>"Share"</strong> or <strong>"Publish"</strong> button in the upper right header of the AI Studio screen. Once clicked, Google deploys the public snapshot.
                </p>
              </div>
            </div>
          </div>

          {/* Section: How to Edit Content */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-950/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              2. How to Edit Text & Projects
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
              All portfolio data is isolated in a single, well-documented file: <code className="font-mono text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li><strong>Headlines & Bio:</strong> Edit the <code className="font-mono">PERSONAL_INFO</code> object.</li>
              <li><strong>Project Details:</strong> Edit the <code className="font-mono">PROJECTS</code> array to add new bullets or GitHub URLs.</li>
              <li><strong>Skills:</strong> Edit the <code className="font-mono">SKILL_CATEGORIES</code> list.</li>
            </ul>
          </div>

          {/* Section: Connecting Resume & LinkedIn */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-950/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              3. Connecting Your Resume PDF & LinkedIn
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
              You can connect your files in two simple ways:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <strong>In-App Instant Connection:</strong> Click the <span className="font-semibold text-slate-800 dark:text-slate-200">Sliders/Edit icon</span> in the top-right navbar to upload your PDF directly from your computer and edit your LinkedIn URL.
              </li>
              <li>
                <strong>Permanent Git File:</strong> Replace the file at <code className="font-mono text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 px-1 py-0.5 rounded">public/resume.pdf</code> with your actual resume PDF. When the site builds, the "Download Resume" button will automatically serve your uploaded file.
              </li>
            </ol>
          </div>

          {/* Section: Zero-Budget Free Publishing */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-950/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              4. 100% Free Permanent Hosting Options (Zero Cost)
            </h4>
            
            <div className="space-y-3 mt-3">
              {/* Option A: Vercel */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Server className="h-3.5 w-3.5 text-blue-600" />
                    Option A: Vercel (Recommended - 1 Click & Free SSL)
                  </strong>
                  <span className="text-[10px] font-semibold text-emerald-600">Free Tier</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  1. Push this project to your GitHub account (<code>github.com/shruthi1216</code>).<br />
                  2. Visit <strong>vercel.com</strong> and sign up with GitHub.<br />
                  3. Click "Add New Project", choose your repository, and click "Deploy".<br />
                  4. Your portfolio gets a free permanent URL (e.g., <code>https://shruthi-portfolio.vercel.app</code>) with free automatic HTTPS.
                </p>
              </div>

              {/* Option B: GitHub Pages */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Github className="h-3.5 w-3.5 text-slate-900 dark:text-white" />
                    Option B: GitHub Pages
                  </strong>
                  <span className="text-[10px] font-semibold text-emerald-600">Free Tier</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  1. Run <code>npm run build</code>.<br />
                  2. In your GitHub repository settings, navigate to <strong>Pages</strong>.<br />
                  3. Select the deployment branch or use GitHub Actions.<br />
                  4. Your site will be hosted directly under <code>https://shruthi1216.github.io/...</code> with zero fees.
                </p>
              </div>
            </div>

          </div>

          {/* FAQ: Watermark & Exporting */}
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/30 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
              5. Frequently Asked Questions
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="text-slate-900 dark:text-white block">
                  Does the published website contain any Google AI Studio watermark?
                </strong>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  <strong>No.</strong> There are absolutely no Google AI Studio watermarks, banners, badges, or platform logos anywhere on your website. Your site is 100% white-labeled with your own name, monogram, custom favicon, and your personal projects.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 dark:text-white block">
                  How do I download or export all the code to my computer?
                </strong>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  In Google AI Studio's top navigation bar, click the <strong>Export / Download</strong> icon (or "Export to GitHub"). You can download the complete project as a standard ZIP file with all files, components, and your resume PDF.
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800 px-6 py-3.5 bg-slate-50 dark:bg-slate-900 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
