
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Users, Target, Heart } from "lucide-react";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const scrollToContact = () => {
    // Navigate to home page and scroll to contact section
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      <PageNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-karmik-50 to-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-balance">
              Transforming Outdoor Retail,
              <span className="text-karmik-500"> One Store at a Time</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're passionate about helping outdoor specialty retailers streamline their rental operations 
              and unlock new revenue streams through innovative technology solutions.
            </p>
            <Button 
              onClick={scrollToContact}
              className="mt-8 bg-karmik-500 hover:bg-karmik-600 shadow-sm"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower outdoor specialty retailers with cutting-edge rental management technology 
                that simplifies operations, enhances customer experiences, and drives sustainable growth.
              </p>
              <p className="text-muted-foreground">
                We built Karmik Solutions because retailers asked for a faster, easier system. By integrating our unique lost-and-found badges with our rental platform, we created a powerful, multi-use solution—two amazing services in one.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Inside outdoor gear store" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Adventure First</h3>
                <p className="text-sm text-muted-foreground">
                  We're outdoor enthusiasts who understand the passion behind every rental.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Customer Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Your success is our success. We build solutions that truly serve your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We constantly evolve our platform to stay ahead of industry needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We build lasting relationships through transparency and trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the growing community of outdoor retailers who trust Karmik to power their rental operations.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-karmik-500 hover:bg-karmik-600 shadow-sm"
              size="lg"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
