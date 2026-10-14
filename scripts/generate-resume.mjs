import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  unit: 'pt',
  format: 'letter'
});

const margin = 40;
let y = 45;

// Header
doc.setFont('helvetica', 'bold');
doc.setFontSize(18);
doc.setTextColor(30, 41, 59); // Slate-800
doc.text('Shruthi Muthuraman (Shruthi M.)', margin, y);

y += 18;
doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
doc.setTextColor(71, 85, 105);
doc.text('Madurai, Tamil Nadu, India  |  shruthim841@gmail.com  |  linkedin.com/in/shruthi16  |  github.com/shruthi1216', margin, y);

y += 12;
doc.setDrawColor(203, 213, 225);
doc.line(margin, y, 612 - margin, y);

// Profile
y += 18;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(37, 99, 235); // Blue-600
doc.text('PROFILE', margin, y);

y += 14;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(51, 65, 85);
const profileText = "Recent B.E. Electronics and Communication Engineering graduate with a strong interest in Data Analytics. Skilled in Python, SQL, Power BI, and Excel, with hands-on experience in data analysis, data cleaning, visualization, and developing data-driven insights. Familiar with analyzing datasets, creating interactive dashboards, and presenting insights effectively.";
const profileLines = doc.splitTextToSize(profileText, 612 - 2 * margin);
doc.text(profileLines, margin, y);
y += profileLines.length * 13 + 4;

// Skills
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(37, 99, 235);
doc.text('TECHNICAL & PROFESSIONAL SKILLS', margin, y);
y += 14;

const skills = [
  ['Data Analytics:', 'Data Cleaning, Data Analysis, Data Visualization, Exploratory Data Analysis (EDA)'],
  ['Business Intelligence:', 'Microsoft Power BI, DAX, KPI Dashboards, Interactive Slicers & Filters'],
  ['Databases:', 'SQL, Oracle SQL, PostgreSQL (Joins, Window Functions, Aggregations, Subqueries)'],
  ['Programming & Libraries:', 'Python, Pandas, NumPy, Matplotlib, Seaborn'],
  ['Spreadsheets & Tools:', 'Microsoft Excel, Git, GitHub, Visual Studio Code, Jupyter Notebook'],
  ['Soft Skills:', 'Analytical Thinking, Problem Solving, Communication, Teamwork, Adaptability, Time Management']
];

doc.setFontSize(9);
skills.forEach(([label, detail]) => {
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text(`• ${label}`, margin, y);
  const labelWidth = doc.getTextWidth(`• ${label} `);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(detail, margin + labelWidth, y);
  y += 13;
});

// Education
y += 6;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(37, 99, 235);
doc.text('EDUCATION', margin, y);
y += 14;

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 41, 59);
doc.text('Government College of Engineering, Erode', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text('2022 – 2026', 612 - margin - doc.getTextWidth('2022 – 2026'), y);

y += 12;
doc.text('Bachelor of Engineering (B.E.) in Electronics and Communication Engineering  |  CGPA: 8.2 / 10', margin, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.setTextColor(30, 41, 59);
doc.text('Thaai Matric Higher Secondary School', margin, y);
y += 12;
doc.setFont('helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text('Higher Secondary Certificate (12th Grade): 87.3%  |  Secondary School Certificate (10th Grade): 98.6%', margin, y);

// Projects
y += 18;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(37, 99, 235);
doc.text('PROJECTS', margin, y);
y += 14;

// Project 1
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 41, 59);
doc.text('Superstore Sales Dashboard | Power BI, DAX', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text('github.com/shruthi1216/superstore-sales-powerbi-dashboard', 612 - margin - doc.getTextWidth('github.com/shruthi1216/superstore-sales-powerbi-dashboard'), y);

y += 12;
const p1Points = [
  'Designed and delivered an interactive Power BI sales dashboard for a Superstore dataset to analyze sales performance, profitability, order metrics, customer segments, product categories, shipping methods, and monthly sales trends.',
  'Created DAX measures for Total Sales, Total Profit, Total Orders, and Profit Margin, along with KPI cards, monthly sales trends, and category analysis.',
  'Implemented interactive slicers, consistent formatting, and key business insights to present findings clearly and support data-driven decision-making.'
];
p1Points.forEach(pt => {
  const lines = doc.splitTextToSize(`• ${pt}`, 612 - 2 * margin);
  doc.text(lines, margin, y);
  y += lines.length * 11 + 2;
});

// Project 2
y += 4;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 41, 59);
doc.text('Swiggy / Zomato Food Delivery Data Analytics | Oracle SQL', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text('github.com/shruthi1216/swiggy-zomato-sql-data-analysis', 612 - margin - doc.getTextWidth('github.com/shruthi1216/swiggy-zomato-sql-data-analysis'), y);

y += 12;
const p2Points = [
  'Developed an end-to-end food delivery analytics case study using Oracle SQL to analyze customer, restaurant, order, and item-level data.',
  'Designed a relational database schema with 4 interconnected tables and applied primary/foreign key constraints.',
  'Applied Joins, GROUP BY, HAVING, CTEs, CASE statements, and Window Functions (DENSE_RANK(), LAG(), SUM() OVER()) to generate operational and business insights.'
];
p2Points.forEach(pt => {
  const lines = doc.splitTextToSize(`• ${pt}`, 612 - 2 * margin);
  doc.text(lines, margin, y);
  y += lines.length * 11 + 2;
});

// Project 3
y += 4;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 41, 59);
doc.text('Python Data Analysis & Risk Modeling | Python, Pandas, NumPy, Matplotlib, Seaborn', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text('github.com/shruthi1216/python-data-analysis-project', 612 - margin - doc.getTextWidth('github.com/shruthi1216/python-data-analysis-project'), y);

y += 12;
const p3Points = [
  'Created a collection of Python data analysis exercises (easy, intermediate, and expert levels) and loan risk analyses.',
  'Analyzed 1,000+ records using Python, Pandas, and NumPy for data cleaning, statistical analysis, EMI calculations, and default-rate evaluation.',
  'Created Matplotlib and Seaborn visualizations including correlation heatmaps, histograms, box plots, and scatter plots.'
];
p3Points.forEach(pt => {
  const lines = doc.splitTextToSize(`• ${pt}`, 612 - 2 * margin);
  doc.text(lines, margin, y);
  y += lines.length * 11 + 2;
});

// Certification
y += 6;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(37, 99, 235);
doc.text('CERTIFICATIONS', margin, y);
y += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 41, 59);
doc.text('Data Analytics Certification — Q Spiders (2026)', margin, y);

// Ensure public directory exists
const publicDir = path.resolve('./public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'resume.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(outputPath, pdfBuffer);
console.log('Successfully generated resume at:', outputPath);
