<svelte:head>
  <title>Projects - Ken Flynn</title>
  <meta
    name="description"
    content="Explore Ken Flynn's data engineering projects and technical work."
  />
</svelte:head>

<div class="container section-padding">
  <div class="max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Projects</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Project Card Template -->
      <div class="card hover:shadow-lg transition-shadow">
        <h3 class="card-title">Living Datasets</h3>
        <p class="text-muted mb-4">
          A showcase of data engineering practices for maintaining fresh, reliable datasets with
          automated monitoring and quality assurance.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">Python</span>
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">FastAPI</span>
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">SvelteKit</span>
        </div>
        <div class="flex space-x-3">
          <a href="/projects/living-datasets" class="btn btn-primary text-sm">View Project</a>
          <a href="#" class="btn btn-secondary text-sm">GitHub</a>
        </div>
      </div>

      <div class="card hover:shadow-lg transition-shadow">
        <h3 class="card-title">Social Blog Buddy</h3>
        <p class="text-muted mb-4">
          Python tool for automating social media content creation and management with data-driven
          insights and scheduling.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-2 py-1 text-xs bg-secondary-100 text-secondary-700 rounded">Python</span>
          <span class="px-2 py-1 text-xs bg-secondary-100 text-secondary-700 rounded">CLI</span>
          <span class="px-2 py-1 text-xs bg-secondary-100 text-secondary-700 rounded">APIs</span>
        </div>
        <div class="flex space-x-3">
          <a href="/projects/social-blog-buddy" class="btn btn-primary text-sm">View Project</a>
          <a href="#" class="btn btn-secondary text-sm">GitHub</a>
        </div>
      </div>

      <div class="card hover:shadow-lg transition-shadow">
        <h3 class="card-title">Portfolio Site</h3>
        <p class="text-muted mb-4">
          This portfolio site built with SvelteKit, featuring D3.js visualizations and modern
          deployment practices.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">SvelteKit</span>
          <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">D3.js</span>
          <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Cloudflare</span>
        </div>
        <div class="flex space-x-3">
          <a href="/" class="btn btn-primary text-sm">View Live</a>
          <a href="#" class="btn btn-secondary text-sm">GitHub</a>
        </div>
      </div>
    </div>

    <!-- Coming Soon Section -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Coming Soon</h2>
      <div class="card">
        <h3 class="card-title">Data Visualization Gallery</h3>
        <p class="text-muted">
          Interactive gallery showcasing various data visualization techniques and D3.js
          implementations for different data types and use cases.
        </p>
      </div>
    </div>
  </div>
</div>
