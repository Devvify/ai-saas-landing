'use client';

import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Pricing } from '@/components/Pricing'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { UserDashboard } from '@/components/UserDashboard'
import { useAuth } from '@/lib/AuthContext'

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen">
      <Navigation />
      {user ? (
        <UserDashboard />
      ) : (
        <>
          <Hero />
          <Features />
          <HowItWorks />
          <Pricing />
          <CTA />
        </>
      )}
      <Footer />
    </main>
  )
}
