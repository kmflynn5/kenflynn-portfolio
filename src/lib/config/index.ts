// Application configuration

// Environment configuration
export const config = {
  // Application info
  app: {
    name: 'Ken Flynn Portfolio',
    version: '1.0.0',
    description: 'Data Engineer Portfolio showcasing projects and expertise',
    url: 'https://kenflynn.dev'
  },

  // Contact information
  contact: {
    email: 'hello@kenflynn.dev',
    github: 'https://github.com/kenflynn',
    linkedin: 'https://linkedin.com/in/kenflynn'
  },

  // Project links and data
  projects: {
    'living-datasets': {
      title: 'Living Datasets',
      description:
        'A showcase of data engineering practices for maintaining fresh, reliable datasets',
      technologies: ['Python', 'FastAPI', 'SvelteKit'],
      github: 'https://github.com/kenflynn/living-datasets',
      live: 'https://living-datasets.kenflynn.dev'
    },
    'social-blog-buddy': {
      title: 'Social Blog Buddy',
      description: 'Python tool for automating social media content creation and management',
      technologies: ['Python', 'CLI', 'APIs'],
      github: 'https://github.com/kenflynn/social-blog-buddy'
    },
    'portfolio-site': {
      title: 'Portfolio Site',
      description: 'This portfolio site built with SvelteKit and modern deployment practices',
      technologies: ['SvelteKit', 'D3.js', 'Cloudflare'],
      github: 'https://github.com/kenflynn/kenflynn-portfolio',
      live: 'https://kenflynn.dev'
    }
  },

  // Feature flags
  features: {
    contactForm: true,
    analytics: false,
    darkMode: true,
    blog: false
  },

  // External services
  services: {
    analytics: {
      // Google Analytics, Cloudflare Analytics, etc.
      enabled: false
    },
    monitoring: {
      // Sentry, LogRocket, etc.
      enabled: false
    }
  }
} as const;

// Type exports
export type Config = typeof config;
export type ProjectKey = keyof typeof config.projects;
