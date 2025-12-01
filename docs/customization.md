# Customization Guide

Learn how to customize the AI SaaS Landing Page template to match your brand and requirements.

## Content Customization

### Static Data

All content is stored in `data/content.ts`. This includes:

- Features list
- Pricing plans  
- Step-by-step process
- Testimonials

Example of updating features:

```typescript
export const featuresData = [
  {
    id: 1,
    icon: "Brain", // Lucide icon name
    title: "Your Feature Title",
    description: "Your feature description..."
  },
  // Add more features...
];
```

### Navigation Links

Update navigation links in `components/Navigation.tsx`:

```typescript
const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  // Add your links...
];
```

## Design Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color-50',
        100: '#your-color-100',
        // ... more shades
        600: '#your-primary-color',
        700: '#your-color-700',
      },
    },
  },
},
```

### Typography

Change fonts in `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})
```

### Component Styling

Each component uses Tailwind CSS classes. Example customization:

```tsx
// In any component
<div className="bg-your-color text-your-text-color p-8 rounded-xl">
  // Your content
</div>
```

## Adding New Sections

### 1. Create the Component

Create a new file in `components/YourSection.tsx`:

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const YourSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your content */}
      </div>
    </section>
  );
};
```

### 2. Add to Main Page

Import and use in `app/page.tsx`:

```tsx
import { YourSection } from '@/components/YourSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Other sections */}
      <YourSection />
      {/* More sections */}
    </main>
  )
}
```

## Animation Customization

### Framer Motion Variants

Create custom animation variants:

```typescript
const customVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};
```

### Custom Animations

Add to `tailwind.config.js`:

```javascript
animation: {
  'your-animation': 'your-keyframes 2s ease-in-out infinite',
},
keyframes: {
  'your-keyframes': {
    '0%, 100%': { transform: 'rotate(0deg)' },
    '50%': { transform: 'rotate(180deg)' },
  },
},
```

## SEO Customization

### Meta Tags

Update in `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
  keywords: 'your, keywords, here',
  openGraph: {
    title: 'Your App Title',
    description: 'Your app description',
    images: '/og-image.png',
  },
}
```

### Structured Data

Add JSON-LD structured data in components:

```tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Your App Name",
  "description": "Your app description",
  // More schema.org properties
};
```

## Image Optimization

### Adding Images

1. Add images to `public/` folder
2. Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/your-image.png"
  alt="Description"
  width={500}
  height={300}
  className="rounded-xl"
/>
```

## Form Integration

### Contact Forms

Add form handling with services like:

- Formspree
- Netlify Forms  
- Your own API

Example with Formspree:

```tsx
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Send</button>
</form>
```

## Analytics Integration

### Google Analytics

1. Add GA ID to environment variables
2. Update `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics trackPageViews />
      </body>
    </html>
  )
}
```

## Performance Tips

1. **Optimize Images**: Always use Next.js Image component
2. **Code Splitting**: Use dynamic imports for large components
3. **Bundle Analysis**: Run `npm run build` to check bundle size
4. **Lazy Loading**: Use React.lazy for non-critical components

## Common Customizations

### Remove Sections

Simply comment out or remove from `app/page.tsx`:

```tsx
// <Features /> // Commented out
```

### Change Layout

Modify the grid layout in any section:

```tsx
// Change from 3 columns to 4
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

### Update CTA Buttons

Change button text and links throughout components:

```tsx
<button>Your Custom CTA Text</button>
```
