import type {
  ContactInfo,
  Experience,
  NavLink,
  Project,
  SkillCategory,
  Stat,
} from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#contact', label: 'CONTACT' },
];

export const HERO_DATA = {
  name: 'VISHAL SINGH',
  title: '// CONSULTANT & BACKEND DEVELOPER | IIT MADRAS ALUMNI',
  about: [
    'Backend Developer with expertise in scalable server-side applications & operations management.',
    'Proficient in strategic planning, data analysis & coordinating cross-functional teams.',
    'MERN/MEAN stack developer with hands-on AWS, PostgreSQL, MongoDB & RESTful API experience.',
    'IIT Madras alumni — bridging technology & real-world impact.',
  ],
  buttons: [
    { href: 'https://v-np.vercel.app/', label: '> VIEW_PROJECTS', primary: true },
    { href: '#contact', label: '> HIRE_ME', primary: false },
    { href: '#', label: '> DOWNLOAD_CV.PDF', primary: false },
  ],
};

export const STATS: Stat[] = [
  { value: 2, label: '// YEARS_EXP', suffix: '+' },
  { value: 16, label: '// PROJECTS_SHIPPED' },
  { value: 21, label: '// TECH_STACKS' },
  { value: 87, label: '// UPTIME_%', suffix: '%' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: '// FRONTEND & WEB',
    skills: [
      { name: 'HTML / CSS / JavaScript', percentage: 90 },
      { name: 'React.js (MERN)', percentage: 82 },
      { name: 'Angular (MEAN)', percentage: 75 },
      { name: 'WordPress / PHP', percentage: 78 },
      { name: 'SEO-Optimized UI', percentage: 80 },
    ],
  },
  {
    title: '// BACKEND & APIs',
    skills: [
      { name: 'Node.js / Express', percentage: 88 },
      { name: 'RESTful APIs / CRUD', percentage: 90 },
      { name: 'JWT Auth / Cookies', percentage: 85 },
      { name: 'NodeMailer SMTP', percentage: 82 },
      { name: 'POSTMAN / API Testing', percentage: 88 },
    ],
  },
  {
    title: '// DATABASE & CLOUD',
    skills: [
      { name: 'MongoDB', percentage: 87 },
      { name: 'PostgreSQL / MySQL', percentage: 85 },
      { name: 'SQLite', percentage: 78 },
      { name: 'AWS S3 / EC2 (SaaS)', percentage: 80 },
      { name: 'Cloud Hosting / IaaS', percentage: 75 },
    ],
  },
  {
    title: '// DATA & OTHER',
    skills: [
      { name: 'Python / Pandas', percentage: 83 },
      { name: 'Tableau / Data Viz', percentage: 80 },
      { name: 'AI Automation', percentage: 75 },
      { name: 'Git / Version Control', percentage: 88 },
      { name: 'Digital Campaign', percentage: 85 },
    ],
  },
];

export const PROJECTS: Project[] = [
    {
      name: 'THIS_PORTFOLIO',
      badge: 'FULLSTACK',
      description: 'This very portfolio — interactive animations, minimalist design & an admin dashboard for end-to-end content management. Edit fields & add new points without touching the code directly.',
      metrics: [
        { label: 'DB', value: 'Neon PostgreSQL' },
        { label: 'Stack', value: 'Next.js + TypeScript' },
      ],
      tech: ['Next.js', 'TypeScript', 'Shadcn/UI', 'Canvas', 'Neon(PostgreSQL)'],
      links: [
        { type: 'github', href: 'https://github.com/bs15b032' },
        { type: 'live', href: 'https://linkedin.com/in/vishal11786' },
      ],
    },
    {
      name: 'DCX1: AI_ENGAGEMENT_PLATFORM',
      badge: 'AI / SAAS',
      description: 'Revolutionizing creator & marketer visibility via automated AI commenting. 🎯 Targeted discovery, 🔄 GenAI shuffling (4 comment variants), ⏱ Smart random timing, 🔒 Secure auth.',
      metrics: [
        { label: 'AI', value: 'GenAI Agent' },
        { label: 'Timing', value: 'Random 10-min' },
      ],
      tech: ['Next.js', 'TypeScript', 'Shadcn/UI', 'Tailwind', 'Neon(PostgreSQL)'],
      links: [
        { type: 'github', href: 'https://github.com/bs15b032' },
        { type: 'live', href: 'https://v-dcx1.vercel.app/' },
      ],
    },
    {
      name: 'MOVIE_RECOMMENDATION_SYSTEM',
      badge: 'ML / DATA',
      description: 'Personalized movie recommendation engine combining product ratings, genre/director/cast specs & keyword search. Generates top-10 tailored matches per user via ML algorithms.',
      metrics: [
        { label: 'Output', value: 'Top 10 matches' },
        { label: 'Method', value: 'Collaborative Filter' },
      ],
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'API Integration'],
      links: [
        { type: 'github', href: 'https://github.com/bs15b032/Movie_Recommendation_System' },
        { type: 'live', href: 'https://v-np.vercel.app/#projects' },
      ],
    },
    {
        name: 'NIPPON_NIFTY_ETF_ANALYSIS',
        badge: 'FINTECH',
        description: 'Python program analysing Nippon India ETF Nifty 50 BeES performance. Fetches historical data via yfinance, calculates yearly & cumulative returns, visualizes trends for investor decisions.',
        metrics: [
          { label: 'Source', value: 'Yahoo Finance' },
          { label: 'Output', value: 'Charts + Tables' },
        ],
        tech: ['Python', 'yfinance', 'Pandas', 'Matplotlib', 'Seaborn'],
        links: [
          { type: 'github', href: 'https://github.com/bs15b032/Nipoon_Niifty_ETF_BeES' },
          { type: 'live', href: 'https://v-np.vercel.app/#projects' },
        ],
      },
      {
        name: 'NIKOLA_STOCK_ANALYSIS',
        badge: 'FINTECH',
        description: 'Detailed analysis of Nikola Corporation stock for investor decision-making. Evaluates short & long-term trends, supports low-risk/high-risk strategy selection, compares with EV sector peers.',
        metrics: [
          { label: 'Sector', value: 'EV / Electric Vehicle' },
          { label: 'Risk', value: 'Low → High profiles' },
        ],
        tech: ['Python', 'yfinance', 'Pandas', 'Matplotlib', 'Seaborn'],
        links: [
          { type: 'github', href: 'https://github.com/bs15b032' },
          { type: 'live', href: 'https://v-np.vercel.app/#projects' },
        ],
      },
      {
        name: 'COVID-19_DASHBOARD',
        badge: 'DATA VIZ',
        description: 'Visualization dashboard analysing Covid-19 data up to June 2022 (scalable for real-time). Web scraped from WHO/gov sources, processed via SQL, visualized with Tableau — cases, deaths & recovery by region.',
        metrics: [
          { label: 'Data', value: 'WHO / Gov Sources' },
          { label: 'Tool', value: 'Tableau Public' },
        ],
        tech: ['Python', 'BeautifulSoup', 'SQL', 'MySQL/PostgreSQL', 'Tableau'],
        links: [
          { type: 'github', href: 'https://github.com/bs15b032/COVID-DATA-ANALYSIS' },
          { type: 'live', href: 'https://public.tableau.com/app/profile/vishal7325/viz/CovidDashboard_16561616744560/Dashboard1' },
        ],
      },
      {
        name: 'RICE_FINANCIAL_MODEL',
        badge: 'DATA / OPS',
        description: 'Sales performance analysis for ABC Company (rice seller). Examines pricing, quantities, costs & tax rates — identifies seasonal patterns & provides price optimization & inventory strategies.',
        metrics: [
          { label: 'Domain', value: 'FMCG / Rice Market' },
          { label: 'Output', value: 'BI Recommendations' },
        ],
        tech: ['Python', 'Pandas', 'NumPy', 'Excel', 'Tableau'],
        links: [
          { type: 'github', href: 'https://github.com/bs15b032/Rice_FM-Model' },
          { type: 'live', href: 'https://drive.google.com/drive/folders/1N1dw3nOF0AiN5iLpjPvM8q8ABBVi6gLY' },
        ],
      },
      {
        name: 'AQUAPONICS_FINANCIAL_MODEL',
        badge: 'SUSTAINABILITY',
        description: 'Feasibility study & ROI analysis for a sustainable aquaponics system. Models integrated aquaculture + hydroponics, calculates setup/operational costs, assesses risk & long-term viability.',
        metrics: [
          { label: 'System', value: 'Fish + Hydroponics' },
          { label: 'Focus', value: 'ROI + Risk Mgmt' },
        ],
        tech: ['Excel', 'Python', 'Pandas', 'Tableau', 'Financial Modeling'],
        links: [
          { type: 'github', href: 'https://github.com/bs15b032/Aquaponics-System-FM' },
          { type: 'live', href: 'https://drive.google.com/drive/folders/1i-d-mvCYj50HAkcTfi4Ekvls_yXr-2K4' },
        ],
      },
      {
        name: 'CHESS_ENGINE_YT_STRATEGY',
        badge: 'AI / GAME',
        description: 'Python chess engine for AI vs AI & player vs AI gameplay using Pygame + python-chess. Designed for YouTube creators to live-stream competitive chess matches with real-time strategic commentary.',
        metrics: [
          { label: 'Mode', value: 'AI vs AI / Human' },
          { label: 'Use', value: 'YouTube Live Content' },
        ],
        tech: ['Python', 'Machine Learning', 'AI-Powered', 'Pygame', 'Vue.js'],
        links: [
          { type: 'github', href: 'https://github.com/bs15b032' },
          { type: 'live', href: 'https://chessglory.vercel.app/' },
        ],
      },
      {
        name: 'FLEA_MARKET_PHP_APP',
        badge: 'FULLSTACK',
        description: 'Dynamic e-commerce platform connecting buyers & sellers with inventory management (upload video/poster + pricing) and real-time chat for direct buyer-seller communication. Secure auth included.',
        metrics: [
          { label: 'Chat', value: 'Real-time' },
          { label: 'Hosting', value: 'Infinity Free Server' },
        ],
        tech: ['PHP', 'phpMyAdmin', 'HTML', 'Tailwind', 'Infinity Free'],
        links: [
          { type: 'github', href: 'https://github.com/bs15b032' },
          { type: 'live', href: 'https://buyers8.42web.io' },
        ],
      },
      {
        name: 'E-COMMERCE_PLATFORM',
        badge: 'E-COMMERCE',
        description: 'Full-featured e-commerce site with product listings, shopping cart, secure Stripe checkout & buyer-seller chat functionality for seamless transactions and direct communication.',
        metrics: [
          { label: 'Payment', value: 'Stripe' },
          { label: 'Chat', value: 'Integrated' },
        ],
        tech: ['Next.js', 'React', 'Stripe', 'Chat'],
        links: [
          { type: 'github', href: '#' },
          { type: 'live', href: 'https://v-n-7.vercel.app/' },
        ],
      },
];

export const EXPERIENCE: Experience[] = [
  {
    date: '07/2024 — 03/2025',
    role: 'CONSULTANT',
    company: 'JOGGF: Jan Suraaj — Patna, Bihar',
    tasks: [
      'Collaborated with senior leadership including Prashant Kishore to manage Bihar project operations, overseeing daily meetings and regulatory compliance',
      'Analysed caste composition data across Panchayat to District levels (PRI System) to optimize leader selection, maintaining data integrity and scalability',
      'Organized district & state-level events, securing financial support from leaders and increasing community engagement',
      'Conducted interviews to assess Assembly Constituency Coordinators (ACCs), selecting post-holders for various committee levels',
      'Reported on political, geographical, demographical & criminal aspects of leaders\' popularity to inform strategic decisions',
    ],
  },
  {
    date: '01/2023 — 09/2023',
    role: 'BACKEND DEVELOPER',
    company: 'RTBi; IITM Research Park — Chennai',
    tasks: [
      'Led daily test operations, ensuring seamless functionality of backend systems and applications',
      'Implemented secure authentication using JSON Web Tokens, cookies & NodeMailer SMTP for robust access control',
      'Developed and tested RESTful APIs with CRUD operations, ensuring reliable and efficient services',
      'Designed a multi-jobseeker search engine, enhancing user experience through research-driven development',
      'Created SEO-optimized landing pages and UI forms using HTML, CSS & Canva, improving user engagement',
      'Architected database systems to connect jobseekers and recruiters, optimizing candidate matching processes',
    ],
  },
  {
    date: 'EDUCATION',
    role: 'B.Sc & M.Sc — BIOTECHNOLOGY {JEE; Full Time}',
    company: 'Indian Institute of Technology, Madras (IIT Madras)',
    tasks: [
      'Post-Graduation: Bachelor of Science & Master of Science in Biotechnology',
      'One of India\'s premier technical institutions — fostered analytical thinking & research-driven problem solving',
    ],
  },
];

export const CONTACT_INFO: ContactInfo[] = [
    { icon: '@', label: 'EMAIL', value: 'vishal.iitm.11@gmail.com', sub: '(24 hr response time)', href: 'mailto:vishal.iitm.11@gmail.com' },
    { icon: '☎', label: 'PHONE', value: '+91 9102133916', sub: '(emergency only)', href: 'tel:+919102133916'},
    { icon: '💬', label: 'WHATSAPP', value: '+91 8789217534', sub: '(emergency only)', href: 'https://wa.me/918789217534'},
    { icon: '#', label: 'GITHUB', value: 'github.com/bs15b032', href: 'https://github.com/bs15b032' },
    { icon: '$', label: 'LINKEDIN', value: 'linkedin.com/in/vishal11786', href: 'https://linkedin.com/in/vishal11786' },
    { icon: '🎓', label: 'ALUMNI', value: 'IIT Madras — Biotechnology' },
]

export const CONTACT_INTRO = [
    '> Available for Backend / Fullstack / Consulting roles.',
    '> Open to remote, hybrid & on-site opportunities.',
    '> Response time: < 24 hours.'
]

export const TICKER_TEXT = '⬛ ACCESS GRANTED // RUNNING DIAGNOSTICS... // FULLSTACK DEVELOPER READY FOR DEPLOYMENT // AVAILABLE FOR HIRE // It\'s not a bug, it\'s an undocumented feature. // 418: I\'m a teapot // There\'s no place like 127.0.0.1 // 01001000 01000101 01001100 01001100 01001111 00100000 01010111 01001111 01010010 01001100 01000101 // Warning: Caffeinated life form. // ⬛';
