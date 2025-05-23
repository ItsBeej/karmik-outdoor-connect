import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Zap, Coffee, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Application received! We'll be in touch soon.", {
        description: "Thank you for your interest in joining the Karmik team.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", position: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <PageNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-karmik-50 to-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-balance">
              Join the
              <span className="text-karmik-500"> Adventure</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us transform the outdoor rental industry while building a career 
              you're passionate about. We're always looking for talented people to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Work at Karmik?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building more than just software – we're creating the future of outdoor retail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Purpose-Driven Work</h3>
                <p className="text-sm text-muted-foreground">
                  Help outdoor retailers connect more people with nature through better technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Amazing Team</h3>
                <p className="text-sm text-muted-foreground">
                  Work alongside passionate outdoor enthusiasts and talented professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Grow your skills and career as we scale our impact in the outdoor industry.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Great Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Competitive salary, health benefits, and gear allowances for outdoor adventures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Remote-First</h3>
                <p className="text-sm text-muted-foreground">
                  Work from anywhere while staying connected with our distributed team.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-karmik-500" />
                </div>
                <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible hours and unlimited PTO to pursue your outdoor passions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Current Openings
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-xl p-12 shadow-sm">
              <div className="w-16 h-16 bg-karmik-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-karmik-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No Current Openings</h3>
              <p className="text-muted-foreground mb-8">
                We don't have any active job postings at the moment, but we're always interested 
                in connecting with talented individuals who share our passion for the outdoors and technology.
              </p>
              <p className="text-sm text-muted-foreground">
                Drop us a line below and we'll keep you in mind for future opportunities!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Interested in Joining Our Team?
            </h2>
            <p className="text-muted-foreground">
              Send us your information and we'll reach out when a role that matches your skills becomes available.
            </p>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="position" className="text-sm font-medium">
                    Position of Interest
                  </label>
                  <Input
                    id="position"
                    name="position"
                    placeholder="e.g., Software Engineer, Product Manager, etc."
                    value={formData.position}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-medium">
                    Tell Us About Yourself
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share your background, interests, and what excites you about working at Karmik"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-karmik-500 hover:bg-karmik-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
