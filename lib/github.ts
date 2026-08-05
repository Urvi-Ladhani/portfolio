export interface Project {
  name: string;
  title: string;
  description: string;
  language: string;
  topics: string[];
  html_url: string;
  homepage: string | null;
  stars: number;
  isFeatured: boolean;
  mockupType: 'dashboard' | 'ledger' | 'esg' | 'detective' | 'hrms' | 'marketplace' | 'erp' | 'simulator' | 'password' | 'portfolio';
}

const STATIC_PROJECTS: Record<string, Omit<Project, 'stars' | 'description' | 'homepage'>> = {
  'Student-Stack': {
    name: 'Student-Stack',
    title: 'Student Stack',
    language: 'TypeScript',
    topics: ['Next.js', 'React', 'MongoDB', 'Node.js', 'Express', 'Productivity', 'DSA Tracker'],
    html_url: 'https://github.com/Urvi-Ladhani/Student-Stack',
    isFeatured: true,
    mockupType: 'dashboard',
  },
  'Family-Ledger': {
    name: 'Family-Ledger',
    title: 'Family Ledger',
    language: 'TypeScript',
    topics: ['Next.js', 'React', 'TailwindCSS', 'PostgreSQL', 'Financial Ledger', 'Collaborative'],
    html_url: 'https://github.com/Urvi-Ladhani/Family-Ledger',
    isFeatured: true,
    mockupType: 'ledger',
  },
  'EcoSphere': {
    name: 'EcoSphere',
    title: 'EcoSphere ESG Platform',
    language: 'TypeScript',
    topics: ['ESG Analytics', 'Next.js', 'Vercel', 'AI Insights', 'Compliance', 'Gamification'],
    html_url: 'https://github.com/Urvi-Ladhani/EcoSphere',
    isFeatured: false,
    mockupType: 'esg',
  },
  'Investigation-game': {
    name: 'Investigation-game',
    title: 'Detective Investigation Game',
    language: 'JavaScript',
    topics: ['HTML5', 'CSS3', 'DOM Manipulation', 'Interactive Webpage', 'Crime Mystery'],
    html_url: 'https://github.com/Urvi-Ladhani/Investigation-game',
    isFeatured: false,
    mockupType: 'detective',
  },
  'Dayflow': {
    name: 'Dayflow',
    title: 'Dayflow HRMS',
    language: 'TypeScript',
    topics: ['Employee Management', 'HRMS', 'React', 'Node.js', 'Attendance', 'Payroll'],
    html_url: 'https://github.com/Urvi-Ladhani/Dayflow',
    isFeatured: false,
    mockupType: 'hrms',
  },
  'Print-Stack': {
    name: 'Print-Stack',
    title: 'Print Stack',
    language: 'TypeScript',
    topics: ['Next.js', 'Stripe', 'Print Marketplace', 'TailwindCSS', 'Full Stack'],
    html_url: 'https://github.com/Urvi-Ladhani/Print-Stack',
    isFeatured: false,
    mockupType: 'marketplace',
  },
  'Rental-Management-System': {
    name: 'Rental-Management-System',
    title: 'Rental ERP System',
    language: 'TypeScript',
    topics: ['Next.js', 'Supabase', 'ERP', 'Inventory Control', 'Invoicing'],
    html_url: 'https://github.com/Urvi-Ladhani/Rental-Management-System',
    isFeatured: false,
    mockupType: 'erp',
  },
  'Page-Replacement-Algorithm-Simulator': {
    name: 'Page-Replacement-Algorithm-Simulator',
    title: 'Page Replacement Simulator',
    language: 'JavaScript',
    topics: ['Operating Systems', 'Simulation', 'Algorithms', 'FIFO', 'LRU', 'Optimal'],
    html_url: 'https://github.com/Urvi-Ladhani/Page-Replacement-Algorithm-Simulator',
    isFeatured: false,
    mockupType: 'simulator',
  },
  'random-password-generator': {
    name: 'random-password-generator',
    title: 'Secure Password Generator',
    language: 'JavaScript',
    topics: ['Security', 'HTML5', 'CSS3', 'Password Generator', 'Web Crypto'],
    html_url: 'https://github.com/Urvi-Ladhani/random-password-generator',
    isFeatured: false,
    mockupType: 'password',
  },
  'portfolio-html-css': {
    name: 'portfolio-html-css',
    title: 'Classic HTML/CSS Portfolio',
    language: 'HTML',
    topics: ['HTML', 'CSS', 'Responsive Design', 'Legacy Portfolio'],
    html_url: 'https://github.com/Urvi-Ladhani/portfolio-html-css',
    isFeatured: false,
    mockupType: 'portfolio',
  },
};

const FALLBACK_DESCRIPTIONS: Record<string, { description: string; homepage: string | null }> = {
  'Student-Stack': {
    description: 'A full-stack student productivity platform for task management, DSA tracking, internship tracking, notes, and analytics.',
    homepage: null,
  },
  'Family-Ledger': {
    description: 'Family Ledger is a collaborative family finance management platform that helps families track expenses, manage shared budgets, and maintain transparent financial records in one centralized system.',
    homepage: null,
  },
  'EcoSphere': {
    description: 'An ESG management platform for tracking environmental, social, governance performance with analytics, compliance, gamification, and AI-powered insights.',
    homepage: 'https://eco-sphere-esg-ms.vercel.app/',
  },
  'Investigation-game': {
    description: 'A dark-themed interactive detective investigation web app where users solve mystery crime cases by investigating suspects, analyzing clues, interrogating characters, and identifying the criminal.',
    homepage: '',
  },
  'Dayflow': {
    description: 'Dayflow is a Human Resource Management System (HRMS) designed to digitize and streamline employee management, attendance, leave, and payroll workflows.',
    homepage: '',
  },
  'Print-Stack': {
    description: 'Upload. Configure. Pay. Collect. A full-stack printing marketplace connecting students and local print shops — no queues, no cash, no confusion.',
    homepage: 'https://print-stack.vercel.app',
  },
  'Rental-Management-System': {
    description: 'Comprehensive Rental ERP solution handling orders, inventory, and invoicing. Stack: Next.js + Supabase.',
    homepage: '',
  },
  'Page-Replacement-Algorithm-Simulator': {
    description: 'An interactive simulator for OS page replacement algorithms (FIFO, LRU, Optimal) visualising page faults and memory frames.',
    homepage: null,
  },
  'random-password-generator': {
    description: 'Secure random password generator built with JavaScript for authentication and account security settings.',
    homepage: null,
  },
  'portfolio-html-css': {
    description: 'My first portfolio built using plain HTML and CSS, showcasing a responsive layout and profile features.',
    homepage: null,
  },
};

export async function fetchGitHubProjects(): Promise<Project[]> {
  const username = 'Urvi-Ladhani';
  const targetRepoNames = Object.keys(STATIC_PROJECTS);
  
  try {
    // Add User-Agent header as required by GitHub API, fetch with cache configuration
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'User-Agent': 'Urvi-Portfolio-App',
      },
      next: { revalidate: 3600 }, // Cache repositories list for 1 hour
    });
    
    if (!res.ok) {
      throw new Error(`GitHub API returned status: ${res.status}`);
    }
    
    const repos = await res.json();
    
    if (!Array.isArray(repos)) {
      throw new Error('GitHub API response is not an array');
    }
    
    const projects: Project[] = [];
    
    for (const repoName of targetRepoNames) {
      const staticMeta = STATIC_PROJECTS[repoName];
      const apiRepo = repos.find((r: any) => r.name.toLowerCase() === repoName.toLowerCase());
      
      const fallback = FALLBACK_DESCRIPTIONS[repoName];
      
      projects.push({
        ...staticMeta,
        description: apiRepo?.description || fallback.description,
        homepage: apiRepo?.homepage !== undefined ? apiRepo.homepage : fallback.homepage,
        stars: apiRepo?.stargazers_count || 0,
      });
    }
    
    // Sort projects: featured first, then by stars
    return projects.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return b.stars - a.stars;
    });
    
  } catch (error) {
    console.warn('Failed to fetch from GitHub API, using fallback project data:', error);
    
    // Graceful fallback with statically defined stars/details
    const fallbackProjects: Project[] = targetRepoNames.map((repoName) => {
      const staticMeta = STATIC_PROJECTS[repoName];
      const fallback = FALLBACK_DESCRIPTIONS[repoName];
      return {
        ...staticMeta,
        description: fallback.description,
        homepage: fallback.homepage,
        stars: repoName === 'Student-Stack' ? 3 : repoName === 'Family-Ledger' ? 2 : 0,
      };
    });
    
    return fallbackProjects.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return b.stars - a.stars;
    });
  }
}
