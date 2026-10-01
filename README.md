# Salomon Diei - AI Engineer Portfolio

A modern, animated portfolio website showcasing my work as an AI Engineer and Researcher. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Fully responsive across all devices with mobile-first approach
- **Dark/Light Mode** - Smooth theme switching with system preference detection
- **Animated UI** - Beautiful scroll-triggered animations and smooth transitions
- **Collapsible Sidebar** - Hover-to-expand navigation with elastic animations
- **Interactive Chat Widget** - AI-powered chatbot for quick information
- **Blog System** - Markdown-based blog with full MDX support
- **App Gallery** - Showcase of vibe-coded applications
- **Photography Gallery** - Personal photography collection
- **Newsletter Integration** - Email subscription system

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** CSS animations with IntersectionObserver
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/salomondiei08/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog pages
│   │   ├── gallery/           # Photography & app galleries
│   │   ├── notes/             # Quick notes
│   │   ├── projects/          # Projects showcase
│   │   ├── reading/           # Reading list
│   │   ├── research/          # Research papers
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── portfolio/         # Custom portfolio components
│   │   │   ├── Sidebar.tsx    # Navigation sidebar
│   │   │   ├── ChatWidget.tsx # Interactive chatbot
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── animations.tsx # Animation components
│   │   └── ui/                # shadcn/ui components
│   └── lib/                   # Utility functions
├── public/
│   └── images/                # Static images
└── content/                   # Markdown content
    ├── blog/                  # Blog posts
    └── notes/                 # Note files
```

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: /* Your primary color */;
  --secondary: /* Your secondary color */;
  /* ... */
}
```

### Adding Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-16"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Navigation

Update navigation links in `src/components/portfolio/Sidebar.tsx`:

```typescript
const navigation = {
  main: [
    { name: "Home", href: "/", icon: "H" },
    // Add your links...
  ],
};
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### Animated Sidebar

- Collapses to icons-only by default
- Expands smoothly on hover with elastic easing
- Shows tooltips when collapsed
- Fully responsive for mobile devices

### Chat Widget

- Keyword-based response system
- Smooth animations and typing indicators
- Context-aware responses about experience, projects, skills, etc.

### Theme System

- Automatic system preference detection
- Smooth color transitions
- Persistent user preference

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Salomon DIEI

- Website: <https://salomon.reinvent-labs.com>
- GitHub: [@salomondiei08](https://github.com/salomondiei08)
- LinkedIn: [in/salomondiei](https://linkedin.com/in/salomondiei)
- Email: <salomondiei08@gmail.com>

## 🙏 Acknowledgments

- Design inspiration from [kyson.dev](https://kyson.dev/) and [shloked.com](https://www.shloked.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Built with [Next.js](https://nextjs.org/)

---

Made with ❤️ by [Salomon DIEI](https://github.com/salomondiei08)
