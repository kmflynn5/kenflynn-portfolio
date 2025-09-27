# Main Site Development Guidelines

## Code Organization

### File Structure Standards

```
main-site/
├── src/
│   ├── routes/                     # SvelteKit routes
│   │   ├── +layout.svelte         # Root layout
│   │   ├── +page.svelte           # Landing page
│   │   ├── about/                 # About page
│   │   ├── projects/              # Project showcase
│   │   └── api/                   # API routes
│   ├── lib/                       # Shared code
│   │   ├── components/            # Reusable components
│   │   │   ├── ui/               # Basic UI components
│   │   │   ├── data-viz/         # D3.js visualization components
│   │   │   └── layout/           # Layout components
│   │   ├── stores/               # Svelte stores
│   │   ├── utils/                # Utility functions
│   │   ├── types/                # TypeScript type definitions
│   │   ├── api/                  # API client functions
│   │   └── styles/               # Global styles and design tokens
│   ├── app.html                   # App shell
│   └── app.d.ts                   # TypeScript declarations
├── static/                        # Static assets
├── tests/                         # Test files
└── docs/                          # Project documentation
```

### Naming Conventions

#### Files and Directories

- **Routes**: Use kebab-case for route directories (`about`, `project-showcase`)
- **Components**: Use PascalCase for component files (`Button.svelte`, `ProjectCard.svelte`)
- **Utilities**: Use camelCase for utility files (`apiClient.ts`, `dateUtils.ts`)
- **Types**: Use PascalCase for type files (`ApiTypes.ts`, `ComponentProps.ts`)

#### Code Elements

- **Variables/Functions**: camelCase (`userName`, `fetchProjects()`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL`, `MAX_RETRY_ATTEMPTS`)
- **Types/Interfaces**: PascalCase (`User`, `ProjectData`, `ApiResponse`)
- **Component Props**: camelCase with descriptive names

#### CSS Classes

- **Tailwind**: Use utility classes preferentially
- **Custom Classes**: Use kebab-case with BEM-like patterns (`component-name__element--modifier`)
- **CSS Variables**: Use kebab-case with semantic names (`--color-primary`, `--spacing-large`)

## Component Development Standards

### Component Structure Template

```typescript
<script lang="ts">
  // 1. Imports
  import type { ComponentType } from './types';
  import { onMount } from 'svelte';
  import Button from '$lib/components/ui/Button.svelte';

  // 2. Props interface
  interface Props {
    title: string;
    description?: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
  }

  // 3. Props destructuring with defaults
  let {
    title,
    description = '',
    variant = 'primary',
    onClick = () => {},
    ...restProps
  }: Props = $props();

  // 4. Local variables
  let isLoading = $state(false);
  let element: HTMLElement;

  // 5. Reactive statements
  $effect(() => {
    // Side effects based on props changes
  });

  // 6. Functions
  function handleClick() {
    isLoading = true;
    onClick();
    isLoading = false;
  }

  // 7. Lifecycle
  onMount(() => {
    // Component initialization
  });
</script>

<!-- 8. Template with consistent formatting -->
<div
  bind:this={element}
  class="component-class {variant}"
  {...restProps}
>
  <h2>{title}</h2>
  {#if description}
    <p>{description}</p>
  {/if}

  <Button onclick={handleClick} disabled={isLoading}>
    {isLoading ? 'Loading...' : 'Click me'}
  </Button>
</div>

<!-- 9. Scoped styles -->
<style>
  .component-class {
    /* Component-specific styles when Tailwind isn't sufficient */
  }
</style>
```

### Component Design Principles

#### Composition over Inheritance

- Create small, focused components that do one thing well
- Use composition to build complex UIs from simple components
- Prefer explicit props over implicit global state

#### Props Interface Design

```typescript
// Good: Clear, specific interface
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onclick?: () => void;
}

// Avoid: Vague or overly generic interfaces
interface ButtonProps {
  style?: string;
  config?: any;
  handler?: Function;
}
```

#### Accessibility Standards

- Always include semantic HTML elements
- Provide ARIA labels for complex interactions
- Ensure keyboard navigation support
- Maintain color contrast ratios

```svelte
<!-- Good: Accessible button -->
<button
  type="button"
  aria-label={ariaLabel || title}
  disabled={disabled || loading}
  onclick={handleClick}
>
  {#if loading}
    <span aria-hidden="true">⏳</span>
    <span class="sr-only">Loading...</span>
  {/if}
  {title}
</button>
```

## State Management Patterns

### Svelte Stores Usage

```typescript
// stores/appState.ts
import { writable, derived } from 'svelte/store';

// Simple state
export const isMenuOpen = writable(false);

// Complex state with validation
function createProjectStore() {
  const { subscribe, set, update } = writable<Project[]>([]);

  return {
    subscribe,
    load: async () => {
      const projects = await fetchProjects();
      set(projects);
    },
    add: (project: Project) => update((projects) => [...projects, project]),
    remove: (id: string) => update((projects) => projects.filter((p) => p.id !== id))
  };
}

export const projects = createProjectStore();

// Derived stores for computed values
export const featuredProjects = derived(projects, ($projects) =>
  $projects.filter((p) => p.featured)
);
```

### Local Component State

- Use `$state()` for simple reactive variables
- Use `$derived()` for computed values
- Keep state as local as possible, only elevate to stores when needed

```typescript
// Component state management
let searchTerm = $state('');
let projects = $state<Project[]>([]);

// Derived values
let filteredProjects = $derived(
  projects.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
);

// Effects for side effects
$effect(() => {
  if (searchTerm) {
    // Debounced search logic
  }
});
```

## Styling Guidelines

### Tailwind CSS Usage

```svelte
<!-- Prefer utility classes -->
<div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    {title}
  </h2>
</div>

<!-- Use @apply for repeated patterns -->
<style>
  .card {
    @apply bg-white dark:bg-gray-900 rounded-lg shadow-md p-6;
  }

  .card-title {
    @apply text-2xl font-bold text-gray-900 dark:text-white mb-4;
  }
</style>
```

### Responsive Design Patterns

```svelte
<!-- Mobile-first responsive design -->
<div
  class="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
"
>
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</div>
```

### CSS Custom Properties for Theming

```css
/* Global CSS variables */
:root {
  --color-primary: theme('colors.blue.600');
  --color-secondary: theme('colors.gray.600');
  --spacing-section: theme('spacing.16');
  --font-display: theme('fontFamily.display');
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: theme('colors.blue.400');
    --color-secondary: theme('colors.gray.300');
  }
}
```

## D3.js Integration Patterns

### Svelte + D3.js Component Structure

```typescript
<script lang="ts">
  import * as d3 from 'd3';
  import { onMount } from 'svelte';

  interface Props {
    data: DataPoint[];
    width?: number;
    height?: number;
  }

  let { data, width = 600, height = 400 }: Props = $props();

  let svgElement: SVGSVGElement;
  let chart: d3.Selection<SVGSVGElement, unknown, null, undefined>;

  // Reactive updates when data changes
  $effect(() => {
    if (chart && data) {
      updateChart();
    }
  });

  onMount(() => {
    initializeChart();
  });

  function initializeChart() {
    chart = d3.select(svgElement);
    updateChart();
  }

  function updateChart() {
    // D3.js chart implementation
    const scales = createScales();
    const selection = chart.selectAll('.data-point')
      .data(data);

    // Enter/update/exit pattern
    selection.enter()
      .append('circle')
      .attr('class', 'data-point')
      .merge(selection)
      .transition()
      .duration(300)
      .attr('cx', d => scales.x(d.x))
      .attr('cy', d => scales.y(d.y));

    selection.exit().remove();
  }
</script>

<svg bind:this={svgElement} {width} {height}>
  <!-- SVG content managed by D3.js -->
</svg>
```

## API Integration Standards

### API Client Structure

```typescript
// lib/api/client.ts
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  }
}

export const apiClient = new ApiClient('/api');
```

### Error Handling Patterns

```typescript
// Consistent error handling
async function loadProjects() {
  try {
    isLoading = true;
    projects = await apiClient.get<Project[]>('/projects');
    error = null;
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error';
    projects = [];
  } finally {
    isLoading = false;
  }
}
```

## Testing Guidelines

### Component Testing with Vitest

```typescript
// Button.test.ts
import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button.svelte';

describe('Button', () => {
  it('renders with correct text', () => {
    render(Button, { props: { title: 'Click me' } });
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onclick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(Button, { props: { title: 'Click me', onclick: handleClick } });

    await fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('shows loading state', () => {
    render(Button, { props: { title: 'Click me', loading: true } });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
```

### E2E Testing with Playwright

```typescript
// tests/navigation.spec.ts
import { test, expect } from '@playwright/test';

test('main navigation works correctly', async ({ page }) => {
  await page.goto('/');

  // Test homepage loads
  await expect(page.locator('h1')).toContainText('Ken Flynn');

  // Test navigation to projects
  await page.click('text=Projects');
  await expect(page).toHaveURL('/projects');
  await expect(page.locator('h1')).toContainText('Projects');
});
```

## Performance Guidelines

### Bundle Optimization

- Use dynamic imports for route-level code splitting
- Lazy load D3.js visualizations only when needed
- Optimize images with proper formats and sizes
- Minimize CSS with Tailwind purging

### Runtime Performance

- Use `$derived()` instead of expensive reactive statements
- Implement virtual scrolling for large lists
- Debounce user input handlers
- Use `onMount()` for expensive initialization

### Core Web Vitals Optimization

- Optimize LCP with image preloading and font optimization
- Minimize CLS with proper image dimensions and layout stability
- Optimize FID with minimal JavaScript on main thread

These guidelines ensure consistent, maintainable, and performant code across the main site implementation.
