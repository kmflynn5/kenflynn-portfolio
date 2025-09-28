<script lang="ts">
  import { SEO } from '$lib/components';
</script>

<SEO
  title="Projects - Ken Flynn's Data Engineering Portfolio"
  description="Explore Ken Flynn's data engineering projects: Cybrary CRM data pipeline, multi-project portfolio platform, research data management, and upcoming data visualization projects."
  keywords={['Ken Flynn Projects', 'Data Engineering Projects', 'Cybrary CRM Pipeline', 'HubSpot Integration', 'SvelteKit Portfolio', 'Data Science Projects', 'Research Data Management', 'Python Projects']}
/>

<div class="container section-padding">
  <div class="max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Projects</h1>

    <!-- Featured Projects -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Cybrary CRM Data Pipeline -->
      <div class="card hover:shadow-lg transition-shadow">
        <div class="flex items-start justify-between mb-4">
          <h3 class="card-title">CRM Data Pipeline</h3>
          <span class="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">Production</span>
        </div>
        <p class="text-muted mb-4">
          Built and maintained the data pipeline that keeps Cybrary's HubSpot CRM up-to-date, enabling seamless marketing and sales engagement operations. Automated data synchronization across multiple sources to ensure data consistency and timeliness.
        </p>
        <div class="mb-4">
          <h4 class="font-medium text-gray-900 dark:text-white mb-2">Key Achievements</h4>
          <ul class="text-sm text-muted space-y-1">
            <li>• Automated CRM data updates for marketing & sales teams</li>
            <li>• Reduced manual data entry and improved data accuracy</li>
            <li>• Enabled real-time customer engagement workflows</li>
          </ul>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">Python</span>
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">HubSpot API</span>
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">Data Pipelines</span>
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">ETL</span>
        </div>
        <div class="flex space-x-3">
          <button class="btn btn-primary text-sm" disabled>Proprietary</button>
          <a href="/contact" class="btn btn-secondary text-sm">Discuss</a>
        </div>
      </div>

      <!-- Multi-Project Portfolio Platform -->
      <div class="card hover:shadow-lg transition-shadow">
        <div class="flex items-start justify-between mb-4">
          <h3 class="card-title">Portfolio Platform</h3>
          <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Active</span>
        </div>
        <p class="text-muted mb-4">
          Comprehensive multi-project portfolio platform showcasing modern development practices. Features SvelteKit frontend, Docker containerization, multi-cloud deployment, and integrated CI/CD workflows.
        </p>
        <div class="mb-4">
          <h4 class="font-medium text-gray-900 dark:text-white mb-2">Architecture Highlights</h4>
          <ul class="text-sm text-muted space-y-1">
            <li>• SvelteKit 5 with TypeScript and runes mode</li>
            <li>• Tailwind CSS v4 design system</li>
            <li>• Cloudflare Pages deployment with CI/CD</li>
            <li>• Comprehensive testing and validation</li>
          </ul>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">SvelteKit</span>
          <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">TypeScript</span>
          <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Docker</span>
          <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Cloudflare</span>
        </div>
        <div class="flex space-x-3">
          <a href="/" class="btn btn-primary text-sm">View Live</a>
          <a href="/contact" class="btn btn-secondary text-sm">GitHub</a>
        </div>
      </div>
    </div>

    <!-- Additional Projects -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Living Datasets (Future) -->
      <div class="card hover:shadow-lg transition-shadow opacity-75">
        <div class="flex items-start justify-between mb-4">
          <h3 class="card-title">Living Datasets</h3>
          <span class="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">Planned</span>
        </div>
        <p class="text-muted mb-4">
          Showcase of data engineering practices for maintaining fresh, reliable datasets with automated monitoring and quality assurance. Will demonstrate real-time data processing and validation techniques.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">Python</span>
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">FastAPI</span>
          <span class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">Data Quality</span>
        </div>
        <div class="flex space-x-3">
          <button class="btn btn-primary text-sm" disabled>Coming Soon</button>
        </div>
      </div>

      <!-- Research Transition -->
      <div class="card hover:shadow-lg transition-shadow opacity-75">
        <div class="flex items-start justify-between mb-4">
          <h3 class="card-title">Research Data Management</h3>
          <span class="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">Academic</span>
        </div>
        <p class="text-muted mb-4">
          PhD research experience analyzing genome sequencing data and helping researchers design experiments and manage complex datasets. Foundation for transitioning research methods to industry applications.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">Perl</span>
          <span class="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">Bioinformatics</span>
          <span class="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">Genomics</span>
        </div>
        <div class="flex space-x-3">
          <a href="/about" class="btn btn-secondary text-sm">Learn More</a>
        </div>
      </div>
    </div>

    <!-- What's Next -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">What's Next</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="card-title">Data Visualization Gallery</h3>
          <p class="text-muted">
            Interactive D3.js visualizations demonstrating various data analysis techniques and
            storytelling approaches for complex datasets.
          </p>
        </div>
        <div class="card">
          <h3 class="card-title">Open Source Contributions</h3>
          <p class="text-muted">
            Exploring opportunities to contribute to data science and engineering open source
            projects that align with industry best practices.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
