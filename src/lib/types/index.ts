// Common UI component types
export interface BaseComponentProps {
  class?: string;
  id?: string;
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'auto';

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';
