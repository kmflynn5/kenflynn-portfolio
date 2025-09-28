<script lang="ts">
  import { DataPipelineMetrics, ExperimentalEvolution, SEO } from '$lib/components';
</script>

<SEO
  title="Ken Flynn - Lead Data Science Engineer & Research Scientist"
  description="Lead Data Science Engineer at Cybrary with 10+ years transforming raw data into strategic business insights. PhD research scientist combining rigorous experimental methodology with modern data engineering practices."
  type="website"
  keywords={['Ken Flynn', 'Data Science Engineer', 'Lead Data Scientist', 'Cybrary', 'Data Engineering', 'Python', 'Machine Learning', 'PhD Research', 'Bioinformatics', 'Experimental Evolution']}
/>

<div class="container section-padding">
  <!-- Hero Section -->
  <div class="text-center mb-16">
    <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
      Ken Flynn
    </h1>
    <p class="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 mb-8">
      Lead Data Science Engineer & Research Scientist
    </p>
    <p class="text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
      Transforming raw data into strategic business insights with 10+ years of experience.
      PhD research scientist combining rigorous experimental methodology with modern data
      engineering practices to solve complex analytical challenges.
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
      <a href="/projects" class="btn btn-primary text-lg px-8 py-3">
        View My Work
      </a>
      <a href="/contact" class="btn btn-secondary text-lg px-8 py-3">
        Get In Touch
      </a>
    </div>
  </div>

  <!-- Key Expertise Section -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div class="card text-center hover:shadow-lg transition-shadow">
      <div class="text-primary-600 dark:text-primary-400 mb-4">
        <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h3 class="card-title">Data Pipeline Engineering</h3>
      <p class="text-muted">
        Designing and implementing robust ETL/ELT pipelines using Python, Apache Airflow,
        and modern data orchestration tools.
      </p>
    </div>

    <div class="card text-center hover:shadow-lg transition-shadow">
      <div class="text-primary-600 dark:text-primary-400 mb-4">
        <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4" />
        </svg>
      </div>
      <h3 class="card-title">Cloud Data Architecture</h3>
      <p class="text-muted">
        Building scalable data architectures on AWS, GCP, and Azure with emphasis on
        cost optimization and performance.
      </p>
    </div>

    <div class="card text-center hover:shadow-lg transition-shadow">
      <div class="text-primary-600 dark:text-primary-400 mb-4">
        <svg class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 class="card-title">Analytics & Visualization</h3>
      <p class="text-muted">
        Creating interactive dashboards and data visualizations using D3.js, Tableau,
        and modern web technologies.
      </p>
    </div>
  </div>

  <!-- Data Visualization Showcase -->
  <div class="space-y-12 mb-16">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Data Science in Action
      </h2>
      <p class="text-lg text-muted max-w-2xl mx-auto">
        Interactive visualizations demonstrating real-world data engineering and research analytics
      </p>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <DataPipelineMetrics />
      <ExperimentalEvolution />
    </div>
  </div>

  <!-- Technology Highlights -->
  <div class="card">
    <h2 class="card-title text-center mb-8">Technology Stack</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div class="text-center">
        <h4 class="font-medium text-gray-900 dark:text-white mb-2">Core Languages</h4>
        <div class="space-y-1 text-sm text-muted">
          <p>Python</p>
          <p>R</p>
          <p>SQL</p>
          <p>TypeScript</p>
        </div>
      </div>
      <div class="text-center">
        <h4 class="font-medium text-gray-900 dark:text-white mb-2">Data Science</h4>
        <div class="space-y-1 text-sm text-muted">
          <p>Pandas, NumPy, SciPy</p>
          <p>Machine Learning</p>
          <p>Statistical Analysis</p>
          <p>Apache Airflow</p>
        </div>
      </div>
      <div class="text-center">
        <h4 class="font-medium text-gray-900 dark:text-white mb-2">Research & Bio</h4>
        <div class="space-y-1 text-sm text-muted">
          <p>Bioinformatics</p>
          <p>Genomics Analysis</p>
          <p>Experimental Evolution</p>
          <p>Scientific Computing</p>
        </div>
      </div>
      <div class="text-center">
        <h4 class="font-medium text-gray-900 dark:text-white mb-2">Modern Stack</h4>
        <div class="space-y-1 text-sm text-muted">
          <p>SvelteKit, D3.js</p>
          <p>Docker, Terraform</p>
          <p>Cloud Platforms</p>
          <p>CI/CD Pipelines</p>
        </div>
      </div>
    </div>
  </div>
</div>
