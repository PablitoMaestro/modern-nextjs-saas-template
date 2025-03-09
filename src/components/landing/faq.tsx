/**
 * FAQ Section Component
 * 
 * Displays frequently asked questions and answers to address
 * common concerns and provide additional information.
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data
const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Our 14-day free trial gives you full access to all features of the Pro plan. No credit card is required to start. At the end of the trial, you can choose to subscribe to a paid plan or downgrade to the Free plan. Your data will be preserved regardless of your choice.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, the change will take effect at the end of your current billing cycle.",
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer:
      "The Free plan allows up to 3 team members. The Pro plan supports up to 10 team members. The Enterprise plan has unlimited team members. Additional team members can be added to the Pro plan for an additional fee per user.",
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes, we offer special pricing for non-profit organizations, educational institutions, and open-source projects. Please contact our sales team for more information and to verify your eligibility.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take security very seriously. All data is encrypted in transit and at rest. We use industry-standard security practices, regular security audits, and maintain compliance with SOC 2, GDPR, and other relevant standards. Our infrastructure is hosted on secure cloud providers with multiple redundancies.",
  },
  {
    question: "Can I export my data if I decide to cancel?",
    answer:
      "Absolutely. We believe your data belongs to you. You can export all your data at any time in standard formats (CSV, JSON, etc.). After cancellation, we provide a 30-day window to export your data before it is permanently deleted from our systems.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include access to our help center and community forum. The Free plan includes email support with a 24-hour response time. The Pro plan includes priority email support with a 4-hour response time during business hours. The Enterprise plan includes dedicated support with a 1-hour response time and a dedicated account manager.",
  },
  {
    question: "Do you have an API?",
    answer:
      "Yes, we offer a comprehensive REST API that allows you to integrate our platform with your existing tools and workflows. API access is available on the Pro and Enterprise plans. Detailed API documentation is available in our developer portal.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our platform, pricing, and policies.
          </p>
        </div>
        
        {/* FAQ accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Additional support information */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Still have questions? Contact our support team at{" "}
            <a
              href="mailto:support@saastemplate.com"
              className="text-primary underline underline-offset-4"
            >
              support@saastemplate.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 