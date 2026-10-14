export interface Project {
  id: string;
  title: string;
  tools: string[];
  category: 'Power BI' | 'SQL' | 'Python';
  description: string;
  highlights: string[];
  githubUrl: string;
  additionalDetails?: {
    overview: string;
    keySkillsPracticed: string[];
    sampleQueriesOrMetrics?: {
      title: string;
      codeSnippet: string;
      explanation: string;
    }[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface PortfolioSettings {
  linkedInUrl: string;
  resumeFileName: string;
  customResumeDataUrl?: string; // Stored if user uploads a custom PDF in browser
}
