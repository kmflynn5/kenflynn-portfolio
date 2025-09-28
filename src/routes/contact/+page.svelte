<script lang="ts">
  import { enhance } from '$app/forms';
  import { SEO } from '$lib/components';
  import type { ActionData } from './$types';

  export let form: ActionData;

  let loading = false;
</script>

<SEO
  title="Contact Ken Flynn - Data Science Engineer"
  description="Get in touch with Ken Flynn for data engineering opportunities, collaborations, or to discuss data science projects. Lead Data Science Engineer at Cybrary available for consulting."
  keywords={['Contact Ken Flynn', 'Data Science Consulting', 'Data Engineering Services', 'Hire Data Scientist', 'Cybrary Engineer Contact', 'Data Science Collaboration', 'Technical Consulting']}
/>

<div class="container section-padding">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Contact Information -->
      <div class="card">
        <h2 class="card-title">Get in Touch</h2>
        <p class="text-muted mb-6">
          Interested in data engineering opportunities, collaborations, or have questions about my
          work? I'd love to hear from you.
        </p>

        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">Email</p>
              <p class="text-sm text-muted">
                <a href="mailto:hello@kenflynn.dev" class="hover:text-primary-600 transition-colors">
                  hello@kenflynn.dev
                </a>
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">GitHub</p>
              <p class="text-sm text-muted">
                <a href="https://github.com/kenflynn" target="_blank" rel="noopener noreferrer" class="hover:text-primary-600 transition-colors">
                  github.com/kenflynn
                </a>
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</p>
              <p class="text-sm text-muted">
                <a href="https://www.linkedin.com/in/kmflynn5" target="_blank" rel="noopener noreferrer" class="hover:text-primary-600 transition-colors">
                  linkedin.com/in/kmflynn5
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="card">
        <h2 class="card-title">Send a Message</h2>

        {#if form?.success}
          <div class="mb-4 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded">
            <p class="text-green-800 dark:text-green-200">{form.message}</p>
          </div>
        {:else}
          {#if form?.errors?.general}
            <div class="mb-4 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded">
              <p class="text-red-800 dark:text-red-200">{form.errors.general}</p>
            </div>
          {/if}

          <form
            method="POST"
            class="space-y-4"
            novalidate
            use:enhance={({ submitter, cancel }) => {
              loading = true;
              return async ({ result, update }) => {
                loading = false;
                await update();
              };
            }}
          >
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form?.name || ''}
                class="w-full px-3 py-2 border {form?.errors?.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                required
              />
              {#if form?.errors?.name}
                <p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.name}</p>
              {/if}
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form?.email || ''}
                class="w-full px-3 py-2 border {form?.errors?.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                required
              />
              {#if form?.errors?.email}
                <p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.email}</p>
              {/if}
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form?.subject || ''}
                class="w-full px-3 py-2 border {form?.errors?.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                required
              />
              {#if form?.errors?.subject}
                <p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.subject}</p>
              {/if}
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="w-full px-3 py-2 border {form?.errors?.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                required
              >{form?.message || ''}</textarea>
              {#if form?.errors?.message}
                <p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.message}</p>
              {/if}
            </div>

            <button
              type="submit"
              class="w-full btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</div>
