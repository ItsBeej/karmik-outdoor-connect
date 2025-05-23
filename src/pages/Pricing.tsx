import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const scrollToContact = () => {
    // Navigate to home page and scroll to contact section
    window.location.href = "/#contact";
  };

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for small shops getting started with rentals",
      features: [
        "Up to 10 rental items",
        "Basic inventory tracking",
        "Simple booking system",
        "Email notifications",
        "Community support"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Professional",
      price: "$750",
      period: "per year",
      description: "Enhanced features for growing rental businesses",
      features: [
        "Unlimited rental items",
        "Advanced inventory management",
        "Customer management system",
        "Automated reminders",
        "Basic reporting & analytics",
        "Priority email support",
        "Mobile app access"
      ],
      popular: true,
      cta: "Book a Consultation"
    },
    {
      name: "Advanced",
      price: "$1,200",
      period: "per year",
      description: "Full feature set for established rental operations",
      features: [
        "Everything in Professional",
        "Advanced analytics & reporting",
        "Multi-location support",
        "Custom integrations",
        "Damage tracking & billing",
        "Advanced customer portal",
        "Phone support",
        "Staff training sessions"
      ],
      popular: false,
      cta: "Book a Consultation"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large operations",
      features: [
        "Everything in Advanced",
        "Custom feature development",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations & APIs",
        "White-label options",
        "Advanced security features",
        "Onsite training & setup"
      ],
      popular: false,
      cta: "Book a Consultation"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-karmik-50 to-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-balance">
              Simple, Transparent
              <span className="text-karmik-500"> Pricing</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business size and needs. 
              All plans include our core rental management features with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={tier.name} 
                className={`relative ${tier.popular ? 'ring-2 ring-karmik-500 shadow-lg' : 'shadow-sm'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-karmik-500 text-white px-3 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {tier.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full mb-6 ${tier.popular ? 'bg-karmik-500 hover:bg-karmik-600' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>

                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-karmik-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2">Can I change plans at any time?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
              <p className="text-muted-foreground">
                No setup fees for any plan. We'll help you get started with a personalized onboarding session at no extra cost.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards and ACH transfers for annual payments. Enterprise customers can arrange custom payment terms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do you offer discounts for annual payments?</h3>
              <p className="text-muted-foreground">
                Yes! All our pricing is already annual pricing. Monthly plans are available at a 20% premium to the annual rates shown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a consultation to discuss which plan is right for your business and see a personalized demo.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-karmik-500 hover:bg-karmik-600 shadow-sm"
              size="lg"
            >
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
