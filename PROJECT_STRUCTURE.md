# Portfolio Project Structure

This project follows Next.js App Router conventions and best practices from popular portfolio websites and GitHub repositories.

## 📁 Project Structure

```
app/
├── api/                    # API routes (Next.js App Router)
├── components/             # Reusable components
│   ├── index.ts           # Component exports
│   ├── ContactForm.tsx    # Contact form component
│   ├── ContactInfo.tsx    # Contact info & social links
│   ├── Navbar.tsx         # Navigation component
│   ├── ProjectCard.tsx    # Reusable project card
│   ├── sections/          # Page-specific sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx     # Main contact section
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── ui/                # Basic UI components
│       ├── SocialLinks.tsx
│       └── ScrollToTop.tsx
├── data/                  # Static data files
│   ├── personal.ts
│   ├── projects.ts
│   └── faq.ts
├── lib/                   # Utilities and constants
│   ├── index.ts
│   ├── utils.ts
│   └── constants.ts
├── layout.tsx             # Root layout
├── page.tsx               # Home page
└── globals.css            # Global styles

public/                    # Static assets
├── assets/               # Images and icons
└── *.pdf                 # Resume files
```

## 🏗️ Architecture Principles

### **Component Organization**

- **`components/`**: Reusable components that can be used across multiple pages
- **`components/sections/`**: Page-specific sections that make up the landing page
- **`components/ui/`**: Basic UI components (buttons, links, etc.)

### **Data Management**

- **`data/`**: Static data files (personal info, projects, FAQ)
- **`lib/`**: Utility functions and constants

### **File Naming**

- PascalCase for component files (e.g., `Hero.tsx`)
- camelCase for utility files (e.g., `utils.ts`)
- kebab-case for data files (e.g., `personal.ts`)

## 🚀 Best Practices Followed

### **From Popular Portfolio Sites:**

- **Vercel**: Clean component organization and separation of concerns
- **Tailwind CSS**: Utility-first approach with consistent naming
- **GitHub Portfolio Repos**: Modular structure with clear separation

### **Next.js Conventions:**

- App Router structure
- Server and client components appropriately used
- Proper import/export patterns
- TypeScript for type safety

### **Code Organization:**

- Index files for clean imports
- Logical grouping of related components
- Separation of data, logic, and presentation
- Reusable utilities and constants

## 📦 Import Patterns

### **Clean Imports**

```tsx
// Instead of multiple imports
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';

// Use barrel exports
import { Hero, About } from './components';
```

### **Utility Imports**

```tsx
// Import utilities
import { scrollToElement, debounce } from '@/lib';

// Import constants
import { SITE_CONFIG, NAVIGATION_LINKS } from '@/lib';
```

## 🔧 Development Guidelines

1. **Add new sections** to `components/sections/`
2. **Add reusable UI components** to `components/ui/`
3. **Add utilities** to `lib/utils.ts`
4. **Add constants** to `lib/constants.ts`
5. **Update data** in `data/` folder
6. **Update index files** when adding new exports

## 🎯 Benefits

- **Maintainability**: Clear separation of concerns
- **Scalability**: Easy to add new features
- **Developer Experience**: Clean imports and organization
- **Performance**: Proper code splitting and lazy loading
- **Consistency**: Follows industry standards
