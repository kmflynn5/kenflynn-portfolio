# Main Site Deployment Strategy

## Cloudflare Pages Deployment

### Platform Overview

Cloudflare Pages provides a JAMstack platform with global CDN, built-in CI/CD, and edge computing capabilities, making it ideal for the SvelteKit portfolio site.

### Deployment Architecture

```
GitHub Repository
    ↓ (Git push)
Cloudflare Pages Build System
    ↓ (npm run build)
Static Assets + Serverless Functions
    ↓ (Global distribution)
Cloudflare Edge Network (200+ locations)
    ↓ (User requests)
End Users Worldwide
```

## Environment Configuration

### Development Environment

**URL**: `localhost:5173`
**Purpose**: Local development with hot reload
**Configuration**:

```javascript
// vite.config.js - development
export default {
  mode: 'development',
  server: {
    port: 5173,
    host: true
  }
};
```

### Preview Environment

**URL**: `<branch>.<project>.pages.dev`
**Purpose**: Feature branch testing and review
**Trigger**: Push to any branch except `main`
**Configuration**:

- Automatic deployment on push
- Environment variables for preview
- Basic authentication (optional)

### Production Environment

**URL**: `kenflynn.dev`
**Purpose**: Live production site
**Trigger**: Push to `main` branch
**Configuration**:

- Custom domain with SSL
- Production environment variables
- Performance monitoring enabled

## Build Configuration

### Cloudflare Pages Settings

```toml
# wrangler.toml
name = "kenflynn-portfolio-main-site"
compatibility_date = "2024-09-27"

[env.production]
name = "kenflynn-portfolio-main-site"

[env.preview]
name = "kenflynn-portfolio-main-site-preview"

[[env.production.env]]
NODE_ENV = "production"

[[env.preview.env]]
NODE_ENV = "preview"
```

### Build Commands

```json
{
  "scripts": {
    "build": "vite build",
    "build:preview": "vite build --mode preview",
    "build:analyze": "vite build --mode analyze",
    "preview:local": "vite preview"
  }
}
```

### Build Optimization

```javascript
// vite.config.js - production optimizations
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte', '@sveltejs/kit'],
          d3: ['d3']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['d3']
  }
});
```

## Performance Optimization for Cloudflare

### Edge Caching Strategy

```javascript
// Edge cache headers for static assets
export const cacheControl = {
  // HTML pages - short cache with revalidation
  html: 'public, max-age=300, s-maxage=86400, stale-while-revalidate=86400',

  // Static assets - long cache with immutable content
  static: 'public, max-age=31536000, immutable',

  // API responses - medium cache with revalidation
  api: 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400'
};
```

### Image Optimization

```javascript
// Cloudflare Image Resizing integration
const optimizeImage = (src, width, height, format = 'auto') => {
  const baseUrl = 'https://kenflynn.dev/cdn-cgi/image';
  const params = `width=${width},height=${height},format=${format},quality=85`;
  return `${baseUrl}/${params}/${src}`;
};
```

### Asset Optimization

- **Image Formats**: WebP with JPEG/PNG fallbacks
- **Font Loading**: Preload critical fonts, swap for non-critical
- **JavaScript**: Code splitting by route and component
- **CSS**: Critical CSS inlined, non-critical deferred

## Security Configuration

### Content Security Policy

```javascript
// Security headers for Cloudflare Pages
export const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://api.github.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "connect-src 'self' https://api.github.com",
    "font-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'"
  ].join('; '),

  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};
```

### SSL/TLS Configuration

- **Minimum TLS Version**: 1.2
- **HSTS**: Enabled with 1-year max-age
- **Certificate**: Cloudflare Universal SSL
- **Redirect**: HTTP to HTTPS (301)

## Environment Variables Management

### Development Variables

```bash
# .env.development
PUBLIC_GITHUB_API_URL=https://api.github.com
PUBLIC_SITE_URL=http://localhost:5173
PUBLIC_ENVIRONMENT=development
```

### Production Variables

```bash
# Cloudflare Pages Environment Variables
PUBLIC_GITHUB_API_URL=https://api.github.com
PUBLIC_SITE_URL=https://kenflynn.dev
PUBLIC_ENVIRONMENT=production
GITHUB_API_TOKEN=<secret_managed_externally>
```

### Secret Management

- **Sensitive Data**: Stored in Cloudflare Pages environment variables
- **Public Config**: Prefixed with `PUBLIC_` for client-side access
- **Build Secrets**: Available only during build process
- **Runtime Secrets**: Available to serverless functions

## Monitoring and Analytics

### Core Web Vitals Monitoring

```javascript
// Real User Monitoring integration
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send metrics to Cloudflare Analytics
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify(metric)
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Error Tracking

```javascript
// Error monitoring setup
window.addEventListener('error', (event) => {
  fetch('/api/errors', {
    method: 'POST',
    body: JSON.stringify({
      message: event.error.message,
      stack: event.error.stack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    })
  });
});
```

### Performance Budgets

```javascript
// Performance monitoring in CI/CD
const performanceBudgets = {
  'bundle-size': {
    javascript: '200kb',
    css: '50kb'
  },
  'core-web-vitals': {
    lcp: '2500ms',
    fid: '100ms',
    cls: '0.1'
  }
};
```

## Deployment Pipeline

### GitHub Actions Integration

```yaml
# Automatic deployment configuration
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
    paths: ['main-site/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: 'main-site/package-lock.json'

      - name: Install dependencies
        working-directory: main-site
        run: npm ci

      - name: Run tests
        working-directory: main-site
        run: npm run test

      - name: Build application
        working-directory: main-site
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: kenflynn-portfolio-main-site
          directory: main-site/build
```

### Rollback Strategy

```bash
# Quick rollback to previous deployment
# Cloudflare Pages maintains deployment history
# Rollback can be triggered via:
# 1. Cloudflare Dashboard
# 2. Wrangler CLI
# 3. API call

wrangler pages deployment list
wrangler pages deployment activate <deployment-id>
```

## Domain Configuration

### Custom Domain Setup

1. **Domain Registration**: `kenflynn.dev` registered with appropriate registrar
2. **DNS Configuration**: Nameservers pointed to Cloudflare
3. **Pages Custom Domain**: Added in Cloudflare Pages dashboard
4. **SSL Certificate**: Automatic issuance and renewal

### DNS Records

```
Type    Name    Value
CNAME   @       kenflynn-portfolio-main-site.pages.dev
CNAME   www     kenflynn-portfolio-main-site.pages.dev
```

### Redirect Rules

```javascript
// Cloudflare Pages _redirects file
/api/* /api/:splat 200
/* /index.html 200
```

## Disaster Recovery

### Backup Strategy

- **Source Code**: GitHub repository with full history
- **Build Artifacts**: Cloudflare Pages deployment history
- **Environment Config**: Documented and version controlled
- **DNS Configuration**: Terraform managed (future)

### Recovery Procedures

1. **Service Outage**: Cloudflare's global network provides automatic failover
2. **Build Failures**: Previous deployment remains active
3. **Data Loss**: Restore from GitHub repository
4. **DNS Issues**: Update DNS records to backup hosting

### Monitoring and Alerting

- **Uptime Monitoring**: External service monitoring availability
- **Performance Alerts**: Core Web Vitals degradation alerts
- **Build Notifications**: GitHub integration for build status
- **Error Rate Monitoring**: Track error rates and performance

This deployment strategy ensures reliable, performant, and secure delivery of the portfolio site through Cloudflare's global network while maintaining excellent developer experience and operational visibility.
