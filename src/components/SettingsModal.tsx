import React, { useState } from 'react';
import { 
  X, 
  Upload, 
  Linkedin, 
  FileText, 
  Check, 
  Info, 
  RotateCcw,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  linkedInUrl: string;
  onUpdateLinkedInUrl: (url: string) => void;
  customResumeFileName?: string;
  onUploadResume: (file: File) => void;
  onResetDefaults: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  linkedInUrl,
  onUpdateLinkedInUrl,
  customResumeFileName,
  onUploadResume,
  onResetDefaults
}) => {
  const [tempLinkedIn, setTempLinkedIn] = useState(linkedInUrl);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let finalUrl = tempLinkedIn.trim();
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
      finalUrl = `https://${finalUrl}`;
    }
    onUpdateLinkedInUrl(finalUrl);
    setSuccessMessage('Settings updated successfully!');
    setTimeout(() => {
      setSuccessMessage(null);
      onClose();
    }, 1200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please select a valid PDF file.');
        return;
      }
      onUploadResume(file);
      setSuccessMessage(`Connected resume: ${file.name}`);
      setTimeout(() => setSuccessMessage(null), 2500);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close settings"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            <span>Portfolio Customizer</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Connect Resume & LinkedIn
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Easily update your public profile links and connect your actual PDF resume. Changes are saved automatically.
          </p>
        </div>

        {successMessage && (
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 p-3 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <Check className="h-4 w-4" />
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSave} className="mt-6 space-y-6">
          
          {/* LinkedIn URL Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              LinkedIn Profile URL
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <Linkedin className="h-4 w-4" />
              </div>
              <input
                type="text"
                value={tempLinkedIn}
                onChange={(e) => setTempLinkedIn(e.target.value)}
                placeholder="https://www.linkedin.com/in/shruthi16"
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              Identifier: <strong className="text-slate-700 dark:text-slate-300">shruthi16</strong>. Pre-filled with your LinkedIn profile.
            </p>
          </div>

          {/* Resume PDF Connection */}
          <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Connect PDF Resume
            </label>
            
            <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 p-4 text-center">
              <FileText className="mx-auto h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
              
              <div className="text-xs font-semibold text-slate-900 dark:text-white mb-1">
                {customResumeFileName ? (
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
                    <Check className="h-3.5 w-3.5" />
                    Custom resume connected: {customResumeFileName}
                  </span>
                ) : (
                  <span>Default verified PDF resume is currently active</span>
                )}
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                Upload your updated PDF resume to instantly test or serve it from this browser session.
              </p>

              <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors">
                <Upload className="h-3.5 w-3.5" />
                <span>Upload PDF File</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Permanent Code Instructions */}
            <div className="mt-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 p-3 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 mb-1">
                <Info className="h-3.5 w-3.5 text-blue-600" />
                <span>Permanent Production Note:</span>
              </div>
              To permanently publish your own PDF to GitHub or hosting providers, place your file at <code className="rounded bg-slate-200 dark:bg-slate-700 px-1 py-0.5 font-mono text-[10px] text-slate-900 dark:text-slate-100">/public/resume.pdf</code>.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={onResetDefaults}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-2xs"
              >
                Save Settings
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
