/**
 * Hero Section Component
 * 
 * The primary hero section for the landing page that showcases
 * the product's value proposition with a call-to-action.
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-[10%] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 translate-y-[20%] rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Overline text */}
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Modern SaaS Template
          </p>
          
          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Simplify Your Business Operations
          </h1>
          
          {/* Supporting copy */}
          <p className="mb-10 text-xl text-muted-foreground">
            All-in-one platform to streamline workflows, boost productivity, and scale your business.
            Powerful features with a simple interface.
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/auth/register">
              <Button size="lg" className="w-full sm:w-auto">
                Start for free
              </Button>
            </Link>
            <Link href="/#features">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See how it works
              </Button>
            </Link>
          </div>
          
          {/* Stats or social proof */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <p>✓ No credit card required</p>
            <p>✓ 14-day free trial</p>
            <p>✓ Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
} 