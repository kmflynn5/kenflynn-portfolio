<script lang="ts">
  import { page } from '$app/stores';

  interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
    author?: string;
    keywords?: string[];
    noindex?: boolean;
    nofollow?: boolean;
  }

  let {
    title = 'Ken Flynn - Lead Data Science Engineer & Research Scientist',
    description = 'Lead Data Science Engineer at Cybrary with 10+ years transforming raw data into strategic business insights. PhD research scientist combining rigorous experimental methodology with modern data engineering practices.',
    canonical,
    image = 'https://kenflynn.dev/images/ken-flynn-og.jpg',
    type = 'website',
    author = 'Ken Flynn',
    keywords = ['Ken Flynn', 'Data Science Engineer', 'Data Engineering', 'Python', 'Machine Learning', 'Bioinformatics', 'Cybrary', 'PhD Research', 'Experimental Evolution', 'Analytics'],
    noindex = false,
    nofollow = false
  }: SEOProps = $props();

  // Build canonical URL
  const canonicalUrl = $derived(canonical || `https://kenflynn.dev${$page.url.pathname}`);

  // Ensure title is properly formatted
  const pageTitle = $derived(title.includes('Ken Flynn') ? title : `${title} - Ken Flynn`);

  // Build structured data
  const structuredData = $derived({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ken Flynn',
    url: 'https://kenflynn.dev',
    image: image,
    jobTitle: 'Lead Data Science Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Cybrary'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of New Hampshire'
    },
    description: description,
    sameAs: [
      'https://www.linkedin.com/in/kmflynn5',
      'https://github.com/kenflynn'
    ],
    knowsAbout: [
      'Data Science',
      'Data Engineering',
      'Python Programming',
      'Machine Learning',
      'Bioinformatics',
      'Experimental Evolution',
      'Statistical Analysis',
      'Data Visualization'
    ]
  });
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{pageTitle}</title>
  <meta name="title" content={pageTitle} />
  <meta name="description" content={description} />
  <meta name="author" content={author} />
  <meta name="keywords" content={keywords.join(', ')} />
  <link rel="canonical" href={canonicalUrl} />

  <!-- Robots -->
  {#if noindex || nofollow}
    <meta name="robots" content="{noindex ? 'noindex' : 'index'},{nofollow ? 'nofollow' : 'follow'}" />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content="Ken Flynn Portfolio" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={canonicalUrl} />
  <meta property="twitter:title" content={pageTitle} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />

  <!-- Additional Meta Tags -->
  <meta name="theme-color" content="#2563eb" />
  <meta name="msapplication-TileColor" content="#2563eb" />

  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>