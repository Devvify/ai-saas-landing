import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/lib/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI SaaS Platform - Revolutionize Your Business with AI',
  description: 'Transform your business with our cutting-edge AI platform. Get started with powerful AI tools, seamless integrations, and enterprise-grade security.',
  keywords: 'AI, SaaS, artificial intelligence, machine learning, automation, business tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
