# 🚀 AI SaaS Landing Page

A modern, responsive landing page template built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Perfect for AI/SaaS companies looking for a professional, conversion-optimized landing page.

![AI SaaS Landing Page](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-purple?style=for-the-badge&logo=framer)

## 📸 Screenshots

### Hero Section
![Hero Section](./docs/hero-section.png)

### Features Section  
![Features Section](./docs/features-section.png)

### Pricing Section
![Pricing Section](./docs/pricing-section.png)

## 🚀 Demo

🔗 **[Live Demo](https://your-demo-url.com)** (Replace with your deployed URL)

## ✨ Features

- ✨ **Modern Design**: Clean, professional UI with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🚀 **Performance Optimized**: Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations**: Beautiful animations powered by Framer Motion
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid development
- 📊 **Static Data**: All content uses static JSON data for easy customization
- 🔧 **TypeScript**: Full type safety and better development experience

## Sections Included

1. **Hero Section** - Eye-catching banner with CTA buttons
2. **Features Section** - Showcase your product features
3. **How It Works** - Step-by-step process explanation
4. **Pricing Section** - Flexible pricing plans
5. **CTA Section** - Final call-to-action
6. **Footer** - Complete footer with links and newsletter signup

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devvify/ai-saas-landing-page.git
   cd ai-saas-landing-page
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in Browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── HowItWorks.tsx      # How it works section
│   ├── Pricing.tsx         # Pricing section
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer component
├── data/
│   └── content.ts          # Static content data
└── public/                 # Static assets
```

## Customization

### Content
All content is stored in `data/content.ts`. Update this file to customize:
- Features list
- Pricing plans
- Step-by-step process
- Testimonials

### Styling
- Colors: Modify the color palette in `tailwind.config.js`
- Typography: Update font settings in `app/layout.tsx`
- Components: Each component has its own styling that can be modified

### Images
- Add your images to the `public/` folder
- Update image paths in the components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 🚀 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Devvify/ai-saas-landing-page)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Devvify/ai-saas-landing-page)

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## 📧 Support

If you have any questions or need help, please open an issue on GitHub or reach out to [your-email@example.com](mailto:your-email@example.com).

---

⭐ Star this repository if you found it helpful!
