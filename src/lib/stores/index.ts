// Application state management
import { writable } from 'svelte/store';
import type { Theme } from '$lib/types';

// Theme management
export const theme = writable<Theme>('auto');

// Loading states
export const isLoading = writable(false);

// Error handling
export const error = writable<string | null>(null);

// Navigation state
export const currentPage = writable<string>('');

// Contact form state
export const contactForm = writable({
  name: '',
  email: '',
  subject: '',
  message: ''
});
