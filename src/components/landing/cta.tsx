/**
 * Call to Action Section Component
 * 
 * A prominent section that encourages visitors to take action,
 * such as signing up or starting a free trial.
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main heading */}
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          
          {/* Supporting copy */}
          <p className="mb-10 text-xl text-muted-foreground">
            Join thousands of businesses that use our platform to streamline operations,
            boost productivity, and drive growth. Start your free trial today.
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/auth/register">
              <Button size="lg" className="w-full sm:w-auto">
                Start your free trial
              </Button>
            </Link>
            <Link href="/contact-sales">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact sales
              </Button>
            </Link>
          </div>
          
          {/* Additional information */}
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
} 