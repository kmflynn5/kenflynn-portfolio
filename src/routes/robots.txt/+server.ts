import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://kenflynn.dev/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=86400'
    }
  });
};