import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Shruthi M.",
  fullNameOnResume: "Shruthi Muthuraman (Shruthi M.)",
  title: "Data Analyst",
  headline: "Turning Data into Meaningful Insights",
  supportingText: "A B.E. ECE graduate passionate about data analytics, business intelligence, and data-driven decision-making.",
  location: "Tamil Nadu, India",
  email: "shruthim841@gmail.com",
  githubUrl: "https://github.com/shruthi1216",
  defaultLinkedInUrl: "https://www.linkedin.com/in/shruthi16",
  resumePath: "/resume.pdf",
  aboutText: "I am a B.E. Electronics and Communication Engineering graduate from Government College of Engineering, Erode, with a strong interest in data analytics and business intelligence. I enjoy exploring datasets, identifying patterns, and transforming raw data into meaningful insights. Through my projects, I have practiced using SQL, Power BI, Python, and data analysis libraries to work with data and present findings clearly. I am eager to apply my analytical thinking, problem-solving, communication, teamwork, and adaptability skills in a full-time Data Analyst role."
};

export const CORE_STRENGTHS = [
  {
    title: "Analytical Thinking",
    description: "Breaking down complex datasets into logical components to identify patterns, outliers, and trends."
  },
  {
    title: "Problem Solving",
    description: "Approaching data discrepancies and business questions with structured logic and validated queries."
  },
  {
    title: "Communication",
    description: "Translating technical data findings and metrics into intuitive visual dashboards for decision-makers."
  },
  {
    title: "Teamwork & Adaptability",
    description: "Collaborating across diverse disciplines, quickly learning new technical tools, and adjusting to requirements."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Analysis",
    description: "Core analytical processes for data examination and interpretation",
    skills: ["Data Analysis", "Data Cleaning", "Data Visualization"]
  },
  {
    title: "Programming and Data Analysis Libraries",
    description: "Scripting, numerical manipulation, and statistical visualization",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    title: "Business Intelligence and Visualization",
    description: "Interactive reporting, metric design, and dashboard architecture",
    skills: ["Microsoft Power BI", "DAX"]
  },
  {
    title: "Database Management",
    description: "Relational modeling, query authoring, and data manipulation",
    skills: ["SQL", "Oracle SQL"]
  },
  {
    title: "Spreadsheet Analysis",
    description: "Tabular modeling, formulas, and preliminary data assessment",
    skills: ["Microsoft Excel"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "superstore-sales-dashboard",
    title: "Superstore Sales Dashboard",
    tools: ["Microsoft Power BI", "DAX"],
    category: "Power BI",
    description: "Developed an interactive Power BI dashboard using a Superstore dataset to analyze sales performance, profitability, order metrics, customer segments, product categories, shipping methods, and monthly sales trends.",
    highlights: [
      "KPI cards for important business metrics.",
      "Interactive slicers and filters.",
      "Monthly sales trend visualization.",
      "Sales and profit comparisons.",
      "Business-focused dashboard design."
    ],
    githubUrl: "https://github.com/shruthi1216/superstore-sales-powerbi-dashboard",
    additionalDetails: {
      overview: "This project provides an executive-level overview of multi-regional sales operations. By modeling raw transactional records into an organized star-schema and authoring specialized DAX measures, the dashboard enables stakeholders to isolate profit leakages, monitor seasonal order spikes, and compare customer segment margins.",
      keySkillsPracticed: [
        "Data transformation and cleanup in Power Query",
        "Authoring DAX measures: Total Sales, Total Profit, Profit Margin %",
        "Configuring dynamic time-intelligence measures for MoM trends",
        "Building cross-filtering slicers by Region, Category, and Segment"
      ],
      sampleQueriesOrMetrics: [
        {
          title: "Total Profit Margin DAX Measure",
          codeSnippet: "Profit Margin = \nDIVIDE(\n    SUM(Orders[Profit]),\n    SUM(Orders[Sales]),\n    0\n)",
          explanation: "Calculates overall profitability percentage while safely handling division by zero across selected filters."
        },
        {
          title: "Sales Growth Calculation",
          codeSnippet: "YoY Sales Growth = \nVAR CurrentSales = [Total Sales]\nVAR PriorYearSales = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Calendar'[Date]))\nRETURN\nDIVIDE(CurrentSales - PriorYearSales, PriorYearSales, 0)",
          explanation: "Compares current period performance against historical intervals for trend detection."
        }
      ]
    }
  },
  {
    id: "food-delivery-data-analysis",
    title: "Food Delivery Data Analysis",
    tools: ["Oracle SQL"],
    category: "SQL",
    description: "Created a food-delivery database analysis project inspired by Swiggy and Zomato to explore restaurant, customer, order, and order-detail data using SQL.",
    highlights: [
      "Relational database tables and constraints.",
      "Business-oriented SQL queries.",
      "Aggregations, joins, subqueries, and window functions.",
      "Analysis of food-delivery operations and order data."
    ],
    githubUrl: "https://github.com/shruthi1216/swiggy-zomato-sql-data-analysis",
    additionalDetails: {
      overview: "Built an end-to-end relational data model representing real-world food-delivery workflows (customers, restaurants, delivery orders, and line items). Applied constraints to maintain integrity and wrote analytical SQL queries answering critical business questions such as restaurant order volume, high-value repeat customers, and peak delivery hours.",
      keySkillsPracticed: [
        "Relational schema design with primary and foreign key constraints",
        "Complex multi-table JOINs (INNER, LEFT, FULL)",
        "Aggregations with GROUP BY and HAVING filters",
        "Advanced window functions: DENSE_RANK(), LAG(), SUM() OVER()"
      ],
      sampleQueriesOrMetrics: [
        {
          title: "Top 3 Restaurants by Revenue per Cuisine (Window Function)",
          codeSnippet: "SELECT \n    cuisine_type,\n    restaurant_name,\n    total_revenue,\n    DENSE_RANK() OVER (PARTITION BY cuisine_type ORDER BY total_revenue DESC) as rank_in_cuisine\nFROM (\n    SELECT \n        r.cuisine_type,\n        r.restaurant_name,\n        SUM(o.order_amount) as total_revenue\n    FROM restaurants r\n    JOIN orders o ON r.restaurant_id = o.restaurant_id\n    WHERE o.order_status = 'DELIVERED'\n    GROUP BY r.cuisine_type, r.restaurant_name\n)\nWHERE rank_in_cuisine <= 3;",
          explanation: "Ranks top-performing restaurants within each cuisine category using partitioned window ranking."
        },
        {
          title: "Customer Repeat Order Interval (LAG)",
          codeSnippet: "SELECT \n    customer_id,\n    order_id,\n    order_date,\n    LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) as prev_order_date,\n    order_date - LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) as days_since_last_order\nFROM orders;",
          explanation: "Analyzes customer retention and average re-order cadence across time."
        }
      ]
    }
  },
  {
    id: "python-data-analysis-projects",
    title: "Python Data Analysis Projects",
    tools: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    category: "Python",
    description: "Created a collection of Python data analysis exercises organized into easy, intermediate, and expert levels, practicing data manipulation, numerical operations, and data visualization.",
    highlights: [
      "NumPy operations and numerical analysis.",
      "Pandas data manipulation.",
      "Data exploration and cleaning exercises.",
      "Visualizations using Matplotlib and Seaborn."
    ],
    githubUrl: "https://github.com/shruthi1216/python-data-analysis-project",
    additionalDetails: {
      overview: "A structured portfolio repository demonstrating progressive mastery of Python's data stack. Includes exploratory data analysis (EDA), data wrangling, missing-value imputation, outlier detection, and statistical visualizations on structured datasets including loan records.",
      keySkillsPracticed: [
        "NumPy array operations, masking, and vectorization",
        "Pandas dataframes: filtering, groupby aggregations, pivot tables",
        "Handling missing values and data type conversions",
        "Chart creation with Matplotlib & Seaborn (heatmaps, box plots, histograms)"
      ],
      sampleQueriesOrMetrics: [
        {
          title: "Pandas Data Aggregation & Outlier Filtering",
          codeSnippet: "import pandas as pd\nimport numpy as np\n\n# Calculate Interquartile Range (IQR) for outlier clipping\nQ1 = df['loan_amount'].quantile(0.25)\nQ3 = df['loan_amount'].quantile(0.75)\nIQR = Q3 - Q1\n\nfiltered_df = df[(df['loan_amount'] >= Q1 - 1.5 * IQR) & (df['loan_amount'] <= Q3 + 1.5 * IQR)]\nrisk_summary = filtered_df.groupby('risk_category')['default_flag'].agg(['count', 'mean']).rename(columns={'mean': 'default_rate'})",
          explanation: "Removes statistical outliers and calculates default rate distributions by risk tiers."
        },
        {
          title: "Feature Correlation Heatmap with Seaborn",
          codeSnippet: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\nplt.figure(figsize=(10, 6))\ncorrelation_matrix = df.select_dtypes(include=[np.number]).corr()\nsns.heatmap(correlation_matrix, annot=True, cmap='Blues', fmt='.2f', cbar=True)\nplt.title('Correlation Matrix of Quantitative Features')\nplt.tight_layout()\nplt.show()",
          explanation: "Generates correlation matrix to spot multicollinearity and feature associations."
        }
      ]
    }
  }
];

export const EDUCATION_INFO = {
  degree: "B.E. Electronics and Communication Engineering (ECE)",
  institution: "Government College of Engineering, Erode",
  graduationYear: "2026",
  cgpa: "8.2 / 10",
  courseworkHighlights: [
    "Analytical Thinking & Engineering Mathematics",
    "Computer Programming & Algorithmic Problem Solving",
    "Database Management Systems Concepts",
    "Signals, Systems & Statistical Processing"
  ],
  schooling: [
    {
      institution: "Thaai Matric Higher Secondary School",
      level: "12th Grade (HSC)",
      score: "87.3%"
    },
    {
      institution: "Thaai Matric Higher Secondary School",
      level: "10th Grade (SSLC)",
      score: "98.6%"
    }
  ],
  certification: {
    title: "Data Analytics Certification",
    issuer: "Q Spiders",
    year: "2026",
    focus: "SQL, Python, Power BI, Advanced Excel, and Real-World Analytics Case Studies"
  }
};
