import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { SettingsModal } from './components/SettingsModal';
import { PublishGuideModal } from './components/PublishGuideModal';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  // Theme state with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // LinkedIn URL state with localStorage persistence
  const [linkedInUrl, setLinkedInUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_linkedin');
      if (saved) return saved;
    }
    return PERSONAL_INFO.defaultLinkedInUrl;
  });

  // Custom uploaded resume state (data URL)
  const [customResumeDataUrl, setCustomResumeDataUrl] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio_custom_resume') || undefined;
    }
    return undefined;
  });

  const [customResumeFileName, setCustomResumeFileName] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio_custom_resume_name') || undefined;
    }
    return undefined;
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [publishGuideModalOpen, setPublishGuideModalOpen] = useState(false);

  // Sync dark mode class with <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const handleUpdateLinkedIn = (url: string) => {
    setLinkedInUrl(url);
    localStorage.setItem('portfolio_linkedin', url);
  };

  const handleUploadResume = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setCustomResumeDataUrl(dataUrl);
        setCustomResumeFileName(file.name);
        try {
          localStorage.setItem('portfolio_custom_resume', dataUrl);
          localStorage.setItem('portfolio_custom_resume_name', file.name);
        } catch {
          // If storage limit exceeded, state is still set for session
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetDefaults = () => {
    setLinkedInUrl(PERSONAL_INFO.defaultLinkedInUrl);
    setCustomResumeDataUrl(undefined);
    setCustomResumeFileName(undefined);
    localStorage.removeItem('portfolio_linkedin');
    localStorage.removeItem('portfolio_custom_resume');
    localStorage.removeItem('portfolio_custom_resume_name');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenSettings={() => setSettingsModalOpen(true)}
        onOpenPublishGuide={() => setPublishGuideModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero / Homepage Section */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          githubUrl={PERSONAL_INFO.githubUrl}
        />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact
          linkedInUrl={linkedInUrl}
          onOpenSettings={() => setSettingsModalOpen(true)}
        />
      </main>

      {/* Minimal Footer */}
      <Footer
        linkedInUrl={linkedInUrl}
        onOpenPublishGuide={() => setPublishGuideModalOpen(true)}
        onOpenSettings={() => setSettingsModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onOpenSettings={() => setSettingsModalOpen(true)}
        customResumeDataUrl={customResumeDataUrl}
        linkedInUrl={linkedInUrl}
      />

      <SettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        linkedInUrl={linkedInUrl}
        onUpdateLinkedInUrl={handleUpdateLinkedIn}
        customResumeFileName={customResumeFileName}
        onUploadResume={handleUploadResume}
        onResetDefaults={handleResetDefaults}
      />

      <PublishGuideModal
        isOpen={publishGuideModalOpen}
        onClose={() => setPublishGuideModalOpen(false)}
      />

    </div>
  );
}
