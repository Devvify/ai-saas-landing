# Deployment Guide

This guide covers various deployment options for the AI SaaS Landing Page.

## Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Devvify/ai-saas-landing-page)

### Manual Deploy

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to configure your deployment.

## Netlify

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Devvify/ai-saas-landing-page)

### Manual Deploy

1. Build the project:
   ```bash
   npm run build
   npm run export
   ```

2. Drag and drop the `out` folder to Netlify.

## Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:

```bash
docker build -t ai-saas-landing .
docker run -p 3000:3000 ai-saas-landing
```

## Environment Variables

For production deployments, you may need to set environment variables:

- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)

## Custom Domain

### Vercel
1. Go to your project settings in Vercel
2. Add your custom domain in the "Domains" section

### Netlify
1. Go to your site settings in Netlify
2. Add your custom domain in the "Domain settings" section

## Performance Optimization

For production deployments, consider:

1. **Image Optimization**: Use Next.js Image component
2. **Bundle Analysis**: Run `npm run analyze` to check bundle size
3. **Caching**: Configure proper caching headers
4. **CDN**: Use a CDN for static assets
