/**
 * Pricing Section Component
 * 
 * Displays the different pricing tiers and their features
 * to help users choose the right plan for their needs.
 */
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Pricing plan data
const plans = [
  {
    name: "Free",
    description: "Perfect for individuals and small projects",
    price: "$0",
    duration: "forever",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "24-hour support response time",
      "Community access",
      "1 GB storage",
    ],
    cta: "Get Started",
    href: "/auth/register?plan=free",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses and teams",
    price: "$29",
    duration: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "4-hour support response time",
      "Team collaboration tools",
      "10 GB storage",
      "API access",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    href: "/auth/register?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "$99",
    duration: "per month",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO and advanced security",
      "Unlimited storage",
      "Custom reporting",
      "SLA guarantees",
      "Priority feature requests",
    ],
    cta: "Contact Sales",
    href: "/contact-sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`flex flex-col ${
                plan.highlighted 
                  ? "border-primary shadow-lg" 
                  : "border-border"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> / {plan.duration}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={plan.href} className="w-full">
                  <Button 
                    className="w-full" 
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Additional information */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom plan? <Link href="/contact" className="text-primary underline underline-offset-4">Contact us</Link> for custom pricing options.
          </p>
        </div>
      </div>
    </section>
  );
} 