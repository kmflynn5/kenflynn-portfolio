# Ken Flynn Portfolio - Main Site

A modern, responsive portfolio website showcasing data engineering projects and expertise. Built with SvelteKit, TypeScript, and Tailwind CSS, deployed on Cloudflare Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn

### Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Available Scripts

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run validate` - Run all quality checks + build

### Testing
- `npm run test` - Run unit tests in watch mode
- `npm run test:unit` - Run unit tests once
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:e2e:ui` - Run E2E tests with UI
- `npm run test:coverage` - Run tests with coverage report

### Deployment
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run deploy:staging` - Deploy to staging environment
- `npm run deploy:production` - Deploy to production environment

## 🏗️ Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI components (Button, Card, etc.)
│   │   └── layout/         # Layout components (Container, Section)
│   ├── stores/             # Svelte stores for state management
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── api/                # API client and service functions
│   └── config/             # Application configuration
├── routes/                 # SvelteKit file-based routing
│   ├── +layout.svelte      # Root layout
│   ├── +page.svelte        # Homepage
│   ├── about/              # About page
│   ├── projects/           # Projects page
│   ├── contact/            # Contact page
│   └── health/             # Health check endpoint
└── app.html               # HTML template
```

## 🎨 Tech Stack

### Frontend Framework
- **SvelteKit 5** - Full-stack framework with runes mode
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **Custom Design System** - Consistent theming and components

### Testing
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing
- **Testing Library** - Component testing utilities

### Development Tools
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

### Deployment
- **Cloudflare Pages** - Static site hosting with edge computing
- **GitHub Actions** - CI/CD pipeline
- **Docker** - Containerized development environment

## 🐳 Docker Development

### Start with Docker Compose
```bash
# Development environment
docker-compose up main-site-dev

# Production environment
docker-compose up main-site
```

### Build Docker Image
```bash
# Build the image
docker build -t kenflynn-portfolio-main-site .

# Run the container
docker run -p 3000:3000 kenflynn-portfolio-main-site
```

## 🚀 Deployment

### Cloudflare Pages

The site automatically deploys via GitHub Actions:
- **Production**: Pushes to `main` branch → `kenflynn.dev`
- **Staging**: Pushes to `staging` branch → `staging.kenflynn.dev`

### Manual Deployment
```bash
# Deploy to production
npm run deploy:production

# Deploy to staging
npm run deploy:staging
```

### Environment Variables

Set these secrets in your GitHub repository or Cloudflare dashboard:
- `CLOUDFLARE_API_TOKEN` - Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` - Cloudflare account ID

## 🧪 Testing

### Unit Tests
```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:unit

# Generate coverage report
npm run test:coverage
```

### End-to-End Tests
```bash
# Run E2E tests
npm run test:e2e

# Run with UI for debugging
npm run test:e2e:ui
```

## 📁 Component Library

### Basic Usage
```svelte
<script>
  import { Button, Card, Input } from '$lib/components';
</script>

<Card>
  <h2>Contact Form</h2>
  <Input label="Email" type="email" />
  <Button variant="primary">Submit</Button>
</Card>
```

### Available Components

#### UI Components
- **Button** - Primary, secondary, outline variants
- **Card** - Content containers with shadow and padding options
- **Input** - Text inputs with validation states
- **Textarea** - Multi-line text inputs

#### Layout Components
- **Container** - Responsive content containers
- **Section** - Page sections with consistent spacing

## ⚙️ Configuration

### Application Config
Configuration is managed in `src/lib/config/index.ts`:

```typescript
export const config = {
  app: {
    name: 'Ken Flynn Portfolio',
    url: 'https://kenflynn.dev'
  },
  contact: {
    email: 'hello@kenflynn.dev',
    github: 'https://github.com/kenflynn'
  },
  features: {
    contactForm: true,
    analytics: false,
    darkMode: true
  }
};
```

### Environment-Specific Settings
- Development: Hot reload, detailed errors
- Production: Optimized builds, error tracking
- Staging: Production-like with debugging enabled

## 🎯 Features

### Responsive Design
- Mobile-first approach
- Adaptive navigation
- Optimized for all screen sizes

### Performance
- Static site generation
- Edge deployment with Cloudflare
- Optimized assets and lazy loading

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance

### SEO
- Meta tags and structured data
- Sitemap generation
- Social media optimization

## 📚 Documentation

Additional documentation is available in the `docs/` directory:
- [Technical Decisions](./docs/technical-decisions.md) - Architecture decision records
- [Development Guidelines](./docs/development-guidelines.md) - Coding standards and patterns
- [Deployment Strategy](./docs/deployment-strategy.md) - Deployment and infrastructure details
- [Feature Roadmap](./docs/feature-roadmap.md) - Planned features and timeline

## 🤝 Contributing

1. Follow the established patterns in `docs/development-guidelines.md`
2. Run `npm run validate` before committing
3. Write tests for new functionality
4. Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Live Site**: [kenflynn.dev](https://kenflynn.dev)
- **Staging**: [staging.kenflynn.dev](https://staging.kenflynn.dev)
- **GitHub**: [Repository](https://github.com/kenflynn/kenflynn-portfolio)

---

Built with ❤️ using SvelteKit, TypeScript, and Tailwind CSS
