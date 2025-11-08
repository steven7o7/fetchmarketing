# FetchMarketing

> AI-driven marketing website built with React + Vite

A modern, responsive marketing website for FetchMarketing - a creative studio specializing in AI-driven marketing for service businesses. Built with React, Vite, and React Router for optimal performance and developer experience.

## 🚀 Features

- **Modern React Architecture** - Component-based structure with hooks
- **Client-Side Routing** - React Router v7 for seamless navigation
- **Responsive Design** - Mobile-first approach with fluid typography
- **Smooth Animations** - Intersection Observer for scroll reveals
- **Accessibility** - Skip links, ARIA labels, keyboard navigation
- **Performance Optimized** - Lazy loading, code splitting, optimized assets
- **Dark Mode Design** - Professional dark theme with light sections
- **SEO Ready** - Meta tags, Open Graph, semantic HTML

## 📁 Project Structure

```
fetchmarketing-react/
├── public/
│   └── assets/           # Static assets (images, videos)
├── src/
│   ├── components/
│   │   ├── Layout/       # Layout components (Header, Layout)
│   │   └── sections/     # Page sections (Hero, WorkGrid, etc.)
│   ├── data/             # Project data
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Route pages (Home, WorkDetail, NotFound)
│   └── styles/           # Global styles and design tokens
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🛠️ Tech Stack

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **React Router 7.9** - Client-side routing
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

### Layout Components
- **Header** - Sticky navigation with scroll effects
- **Layout** - Main layout wrapper with skip link

### Section Components
- **Hero** - Full-screen hero with video background (or particle canvas)
- **WorkGrid** - Featured projects grid with hover effects
- **AboutSplit** - Sticky/scrolling about section
- **Services** - Service cards with hover animations
- **LogoMarquee** - Infinite scrolling logo strip
- **Journal** - Blog post previews
- **CTA** - Contact form section

### Pages
- **Home** - Main landing page with all sections
- **WorkDetail** - Dynamic case study pages
- **NotFound** - 404 error page

## 🎯 Custom Hooks

- **usePrefersReducedMotion** - Detects user motion preferences
- **useRevealOnScroll** - Intersection Observer for scroll animations
- **useScrollSpy** - Active navigation highlighting

## 🚢 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `pnpm build`
4. Output directory: `dist`
5. Deploy!

### GitHub Pages
```bash
# Build the project
pnpm build

# Deploy to gh-pages branch
# (You may need to configure base path in vite.config.js)
```

## 🔧 Configuration

### Adding Particle Canvas
To integrate a custom particle canvas component:

1. Create your particle component in `src/components/`
2. Import it in `src/main.jsx`
3. Pass it to the App component:

```jsx
import ParticleCanvas from './components/ParticleCanvas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App ParticleCanvas={ParticleCanvas} />
    </BrowserRouter>
  </React.StrictMode>
);
```

### Form Integration
Replace the placeholder form in `CTA.jsx` with:
- **Netlify Forms** - Add `netlify` attribute
- **Formspree** - Use their endpoint
- **Calendly** - Embed widget for bookings

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

## 📊 Performance

- Code splitting with React Router
- Lazy loading images
- Optimized WebP images
- Minified CSS and JS
- Tree-shaking with Vite

## 🐛 Known Issues

- Form submission not implemented (placeholder)
- Journal links are placeholders
- Video may not play on some mobile browsers (fallback needed)

## 🔮 Future Enhancements

- [ ] Implement form backend (Netlify Forms/Formspre)
- [ ] Add blog/CMS integration (Sanity, Contentful)
- [ ] Create actual blog content
- [ ] Add sitemap.xml and robots.txt
- [ ] Implement analytics (GA4, Plausible)
- [ ] Add structured data (JSON-LD)
- [ ] Create favicon and app icons
- [ ] Add loading states and error boundaries
- [ ] Implement A/B testing
- [ ] Add internationalization (i18n)

## 📄 License

ISC

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

FetchMarketing Team

---

Built with ❤️ using React + Vite
