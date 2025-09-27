<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import { page } from '$app/stores';

  let { children } = $props();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Ken Flynn - Data Engineer Portfolio</title>
  <meta
    name="description"
    content="Ken Flynn's data engineering portfolio showcasing projects, skills, and experience."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
  <!-- Navigation -->
  <nav class="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <a href="/" class="text-xl font-bold text-gray-900 dark:text-white"> Ken Flynn </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            {#each navigation as item}
              <a
                href={item.href}
                class={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  $page.url.pathname === item.href
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </a>
            {/each}
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            type="button"
            class="bg-gray-200 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Menu icon -->
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Main content -->
  <main class="flex-1">
    {@render children?.()}
  </main>

  <!-- Footer -->
  <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 Ken Flynn. Built with SvelteKit.</p>
      </div>
    </div>
  </footer>
</div>
