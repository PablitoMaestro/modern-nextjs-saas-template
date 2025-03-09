/**
 * Features Section Component
 * 
 * Showcases the key features and benefits of the SaaS product
 * with icons, descriptions, and visual elements.
 */
import {
  LineChart,
  Shield,
  Zap,
  Clock,
  Settings,
  Users,
} from "lucide-react";

// Feature data for the section
const features = [
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with comprehensive analytics and customizable dashboards that help you make data-driven decisions.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Enterprise Security",
    description:
      "Keep your data safe with enterprise-grade security features, including encryption, SSO, and compliance with industry standards.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description:
      "Experience exceptional performance with our optimized infrastructure, ensuring your workflows are smooth and efficient.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Automation",
    description:
      "Save time and reduce errors by automating repetitive tasks, workflows, and processes across your organization.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Customization",
    description:
      "Tailor the platform to your specific needs with extensive customization options, flexible workflows, and API integrations.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Team Collaboration",
    description:
      "Enhance teamwork with collaborative tools, real-time updates, and seamless communication features built into the platform.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to streamline your operations and scale your business effectively.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional feature callout */}
        <div className="mt-16 rounded-xl bg-primary/5 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-2xl font-bold">
              And Much More!
            </h3>
            <p className="mb-6 text-muted-foreground">
              Discover additional features like API integrations, advanced reporting, 
              multi-platform support, and dedicated customer success managers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 