import React from 'react';
import { 
  X, 
  FileDown, 
  Printer, 
  Upload, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSettings: () => void;
  customResumeDataUrl?: string;
  linkedInUrl: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenSettings,
  customResumeDataUrl,
  linkedInUrl
}) => {
  if (!isOpen) return null;

  const downloadUrl = customResumeDataUrl || PERSONAL_INFO.resumePath;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Shruthi_M_Data_Analyst_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative flex flex-col w-full max-w-3xl max-h-[92vh] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 py-3.5 bg-slate-50/80 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Resume Preview · Shruthi M.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-2xs"
              title="Download PDF file"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              title="Print resume"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenSettings();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              title="Upload your own PDF resume"
            >
              <Upload className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">Upload / Replace PDF</span>
            </button>

            <button
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable & ATS-Friendly Resume Content Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.fullNameOnResume}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                Madurai, Tamil Nadu, India
              </span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-blue-600">
                <Mail className="h-3.5 w-3.5 text-blue-600" />
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                <Linkedin className="h-3.5 w-3.5 text-blue-600" />
                linkedin.com/in/shruthi16
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                <Github className="h-3.5 w-3.5 text-blue-600" />
                github.com/shruthi1216
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5">
              Professional Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Recent B.E. Electronics and Communication Engineering graduate with a strong interest in Data Analytics. Skilled in Python, SQL, Power BI, and Excel, with hands-on experience in data analysis, data cleaning, visualization, and developing data-driven insights. Familiar with analyzing datasets, creating interactive dashboards, and presenting insights effectively.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Technical & Professional Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <p><strong>• Programming Languages:</strong> Python</p>
              <p><strong>• Data Analytics:</strong> Data Cleaning, Data Analysis, Data Visualization</p>
              <p><strong>• Databases:</strong> SQL, Oracle SQL, PostgreSQL</p>
              <p><strong>• Business Intelligence & Visualization:</strong> Microsoft Power BI, DAX, Excel</p>
              <p><strong>• Data Analysis Libraries:</strong> NumPy, Pandas, Matplotlib, Seaborn</p>
              <p><strong>• Tools & Practices:</strong> Git, Visual Studio Code, Jupyter Notebook</p>
              <p><strong>• Soft Skills:</strong> Team Collaboration, Quick Learning, Communication, Problem Solving, Time Management, Attention to Detail</p>
              <p><strong>• Languages:</strong> English, Tamil</p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong>Government College of Engineering, Erode</strong> — B.E. in Electronics and Communication Engineering
                </div>
                <span className="font-mono text-slate-500">2026</span>
              </div>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold">• CGPA: 8.2 / 10</p>
              
              <div className="mt-2 text-[11px] text-slate-600 dark:text-slate-400">
                <p>• Thaai Matric Higher Secondary School — 12th Grade: <strong>87.3%</strong></p>
                <p>• Thaai Matric Higher Secondary School — 10th Grade: <strong>98.6%</strong></p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Projects
            </h2>
            <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
              
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white">
                  <span>Superstore Sales Dashboard | Microsoft Power BI, DAX</span>
                  <span className="font-mono text-[11px] text-slate-500">2026</span>
                </div>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400 text-[11px]">
                  <li>Designed and delivered an interactive Power BI sales dashboard for a Superstore dataset to analyze sales performance, profitability, order metrics, and category trends.</li>
                  <li>Created DAX measures for Total Sales, Total Profit, and Profit Margin, along with KPI cards and monthly trends.</li>
                  <li>Implemented interactive slicers and consistent formatting to support data-driven decision-making.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white">
                  <span>Swiggy / Zomato Food Delivery Data Analytics | Oracle SQL</span>
                  <span className="font-mono text-[11px] text-slate-500">2026</span>
                </div>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400 text-[11px]">
                  <li>Developed an end-to-end food delivery analytics case study using Oracle SQL to analyze customer, restaurant, order, and item-level data.</li>
                  <li>Designed a relational database schema with 4 interconnected tables and primary/foreign key constraints.</li>
                  <li>Applied Joins, GROUP BY, HAVING, CTEs, and Window Functions (DENSE_RANK(), LAG(), SUM() OVER()) to extract business insights.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white">
                  <span>Fintech Loan Risk & Python Data Analysis | Python, Pandas, NumPy, Matplotlib, Seaborn</span>
                  <span className="font-mono text-[11px] text-slate-500">2026</span>
                </div>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400 text-[11px]">
                  <li>Analyzed 1,000+ records using Python, Pandas, and NumPy for data cleaning, statistical evaluation, and risk calculations.</li>
                  <li>Performed outlier detection, EMI calculations, and default-rate analysis.</li>
                  <li>Created Matplotlib and Seaborn visualizations including correlation heatmaps, box plots, and histograms.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Certification Section */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5">
              Certifications
            </h2>
            <div className="flex justify-between items-baseline text-xs text-slate-700 dark:text-slate-300">
              <span><strong>Data Analytics Certification</strong> — Q Spiders</span>
              <span className="font-mono text-slate-500">2026</span>
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 px-5 py-3 bg-slate-50 dark:bg-slate-900 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Official ATS-Friendly Resume</span>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            <FileDown className="h-4 w-4" />
            <span>Download PDF File Now</span>
          </button>
        </div>

      </div>
    </div>
  );
};
