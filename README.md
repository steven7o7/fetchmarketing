# FetchMarketing

> AI-driven marketing website built with React + Vite

A modern, responsive marketing website for FetchMarketing - a creative studio specializing in AI-driven marketing for service businesses. Built with React, Vite, and React Router for optimal performance and developer experience.

## 🚀 Features

- **Modern React Architecture** - Component-based structure with hooks
- **Client-Side Routing** - React Router v7 for seamless navigation
- **Responsive Design** - Mobile-first approach with fluid typography
- **Smooth Animations** - Intersection Observer for scroll reveals with Reveal component
- **Functional Contact Form** - Serverless API endpoint with validation
- **Accessibility** - Skip links, ARIA labels, keyboard navigation, reduced motion support
- **Performance Optimized** - Lazy loading, code splitting, optimized assets
- **SEO Ready** - Dynamic meta tags, Open Graph, sitemap, robots.txt
- **Dark Mode Design** - Professional dark theme with light sections

## 📁 Project Structure

```
fetchmarketing/
├── api/
│   └── contact.js            # Serverless contact form handler
├── public/
│   ├── assets/               # Static assets (images, videos)
│   ├── robots.txt            # Search engine crawler config
│   └── sitemap.xml           # XML sitemap
├── src/
│   ├── components/
│   │   ├── Layout/           # Layout components (Header, Layout)
│   │   ├── sections/         # Page sections (Hero, WorkGrid, CTA, etc.)
│   │   ├── Reveal.jsx        # Scroll reveal animation component
│   │   ├── SEO.jsx           # SEO meta tag management
│   │   └── LazyImage.jsx     # Optimized image loading
│   ├── data/                 # Project data
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Route pages (Home, WorkDetail, NotFound)
│   └── styles/               # Global styles and design tokens
├── ASSET_REPORT.md           # Asset inventory and optimization guide
├── CHANGELOG.md              # Project changes and enhancements
├── netlify.toml              # Netlify deployment config
├── vercel.json               # Vercel deployment config
└── package.json              # Dependencies and scripts
```

## 🛠️ Tech Stack

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **React Router 7.9** - Client-side routing
- **React Helmet Async** - SEO meta tag management
- **CSS3** - Styling with custom properties
- **Inter Font** - Typography (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Or with npm
npm install

# Or with yarn
yarn install
```

## 🏃 Development

```bash
# Start dev server (http://localhost:5173)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## 🎨 Design System

### Colors
- **Background Dark**: `#0E0E0E`
- **Background Light**: `#FFFFFF`
- **Accent**: `#1E90FF` (Dodger Blue)
- **Text Dark**: `#FFFFFF`
- **Text Light**: `#0B0F19`

### Spacing Scale
- `--s1`: 8px
- `--s2`: 16px
- `--s3`: 24px
- `--s4`: 32px
- `--s5`: 48px
- `--s6`: 96px

### Typography
- **Font**: Inter (400, 600, 700)
- **H1**: clamp(40px, 7vw, 88px)
- **H2**: clamp(28px, 4vw, 48px)

## 🧩 Components

### Core Components

**Reveal** - Scroll-triggered animation wrapper
```jsx
import Reveal from '../components/Reveal';

<Reveal direction="right" threshold={0.15}>
  <YourContent />
</Reveal>
```

**SEO** - Meta tag management
```jsx
import SEO from '../components/SEO';

<SEO 
  title="Page Title"
  description="Page description"
  image="/assets/image.webp"
  url="/page-path"
/>
```

**LazyImage** - Optimized image loading
```jsx
import LazyImage from '../components/LazyImage';

<LazyImage 
  src="/assets/image.webp"
  alt="Description"
  width={800}
  height={600}
/>
```

### Section Components
- **Hero** - Full-screen hero with video background
- **WorkGrid** - Featured projects grid with hover effects
- **AboutSplit** - Sticky/scrolling about section
- **Services** - Service cards with hover animations
- **LogoMarquee** - Infinite scrolling logo strip
- **Journal** - Blog post previews
- **CTA** - Functional contact form with validation

### Pages
- **Home** - Main landing page with all sections
- **WorkDetail** - Dynamic case study pages
- **NotFound** - 404 error page

## 🎯 Custom Hooks

- **usePrefersReducedMotion** - Detects user motion preferences
- **useRevealOnScroll** - Intersection Observer for scroll animations
- **useScrollSpy** - Active navigation highlighting

## 📧 Contact Form

The contact form submits to `/api/contact` serverless endpoint with:

**Client-side validation**:
- Required fields: name, email, message
- Email format validation
- Real-time error feedback

**Server response**:
```json
{
  "ok": true,
  "message": "Thank you! Your message has been received.",
  "timestamp": "2025-11-11T..."
}
```

**Email service integration**: To connect with SendGrid, Mailgun, or other services, modify `api/contact.js` to send emails after validation.

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repository in Vercel
3. Framework preset: Vite
4. Build command: `pnpm build`
5. Output directory: `dist`
6. API routes in `/api` are automatically detected
7. Deploy!

**One-click deploy**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/steven7o7/fetchmarketing)

### Netlify
1. Connect GitHub repository
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Functions directory: `api` (configured in netlify.toml)
5. Deploy!

**Configuration**: `netlify.toml` is pre-configured with:
- Build settings
- API function routing
- SPA redirects
- Asset caching headers

### GitHub Pages
```bash
# Build the project
pnpm build

# Deploy to gh-pages branch
pnpm run deploy
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific settings:

```env
VITE_API_URL=https://your-domain.com
VITE_CONTACT_EMAIL=hello@fetchmarketing.com
```

### SEO Configuration
Update default SEO values in `src/components/SEO.jsx`:
- Site title and description
- Default OG image
- Domain URL

### Sitemap
Update `public/sitemap.xml` with your actual domain and pages.

## 📝 Content Management

Project data is stored in `src/data/projects.js`. To add new projects:

```js
{
  slug: 'project-slug',
  title: 'Project Title',
  category: 'Category',
  year: '2025',
  cover: '/assets/project-image.webp',
  summary: 'Project description...'
}
```

## ♿ Accessibility

- Skip to main content link
- Semantic HTML5 elements
- ARIA labels and landmarks
- Keyboard navigation support
- Focus visible states
- Respects `prefers-reduced-motion`
- Form validation with screen reader support

## 📊 Performance

- Code splitting with React Router
- Lazy loading images with IntersectionObserver
- Optimized WebP images
- Minified CSS and JS
- Tree-shaking with Vite
- Asset caching headers
- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)

## 📄 Documentation

- **ASSET_REPORT.md** - Complete asset inventory and optimization guide
- **CHANGELOG.md** - All project changes and enhancements
- **README.md** - This file

## 🐛 Known Issues

- Journal links are placeholders (no blog backend yet)
- Video may not autoplay on some mobile browsers (fallback recommended)

## 🔮 Future Enhancements

- [ ] Email service integration (SendGrid/Mailgun)
- [ ] Blog/CMS integration (Sanity, Contentful)
- [ ] Analytics (GA4, Plausible)
- [ ] Structured data (JSON-LD)
- [ ] Favicon and app icons
- [ ] Loading states and error boundaries
- [ ] A/B testing capability
- [ ] Internationalization (i18n)
- [ ] Unit and E2E tests

## 📄 License

ISC

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

**FetchMarketing Team**

- Website: https://fetchmarketing.com
- GitHub: [@steven7o7](https://github.com/steven7o7)

---

Built with ❤️ using React + Vite

**Last Updated**: November 11, 2025
