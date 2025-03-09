/**
 * Testimonials Section Component
 * 
 * Displays customer testimonials and social proof to build
 * trust and credibility with potential customers.
 */
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

// Testimonial data
const testimonials = [
  {
    quote:
      "This SaaS platform has completely transformed how our team works. The automation features alone have saved us countless hours every week.",
    author: "Sarah Johnson",
    title: "CTO, TechInnovate",
    avatar: "/avatars/avatar-1.png",
    initials: "SJ",
  },
  {
    quote:
      "The analytics dashboard gives us insights we never had before. We've been able to make data-driven decisions that have significantly improved our ROI.",
    author: "Michael Chen",
    title: "Marketing Director, GrowthLabs",
    avatar: "/avatars/avatar-2.png",
    initials: "MC",
  },
  {
    quote:
      "Customer support is exceptional. Any time we've had questions or needed help, the team has been responsive and incredibly helpful.",
    author: "Emily Rodriguez",
    title: "Operations Manager, Streamline Inc.",
    avatar: "/avatars/avatar-3.png",
    initials: "ER",
  },
  {
    quote:
      "We evaluated several solutions before choosing this platform. The combination of features, ease of use, and pricing made it the clear winner for our business.",
    author: "David Kim",
    title: "CEO, StartupVision",
    avatar: "/avatars/avatar-4.png",
    initials: "DK",
  },
  {
    quote:
      "The customization options are incredible. We've been able to tailor the platform to our specific workflow needs, which has been a game-changer.",
    author: "Olivia Martinez",
    title: "Product Manager, FlexSolutions",
    avatar: "/avatars/avatar-5.png",
    initials: "OM",
  },
  {
    quote:
      "Implementation was smooth and the onboarding process was well-structured. We were up and running in days, not weeks or months.",
    author: "James Wilson",
    title: "IT Director, Enterprise Global",
    avatar: "/avatars/avatar-6.png",
    initials: "JW",
  },
];

// Company logos for social proof
const companyLogos = [
  { name: "Company 1", logo: "/logos/logo-1.svg" },
  { name: "Company 2", logo: "/logos/logo-2.svg" },
  { name: "Company 3", logo: "/logos/logo-3.svg" },
  { name: "Company 4", logo: "/logos/logo-4.svg" },
  { name: "Company 5", logo: "/logos/logo-5.svg" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>
        
        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div>
                  {/* Quote marks */}
                  <div className="mb-4 text-4xl text-primary/40">"</div>
                  {/* Testimonial text */}
                  <p className="mb-6 text-lg">{testimonial.quote}</p>
                </div>
                
                {/* Author information */}
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Company logos */}
        <div className="mt-20">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {companyLogos.map((company, index) => (
              <div key={index} className="relative h-8 w-32 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                {/* Note: In a real implementation, you would have actual logo images */}
                <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 