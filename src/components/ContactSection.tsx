
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message received! Our team will contact you shortly.", {
        description: "Thank you for your interest in Karmik Solutions.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <span className="px-4 py-1.5 bg-karmik-500/10 text-karmik-600 text-xs rounded-full font-medium">
              Get in Touch
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">
              Ready to Transform Your Rental Operations?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Book a personalized consultation with our team to see how Karmik can help your business streamline operations and increase revenue.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-karmik-50 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-karmik-500" />
                </div>
                <div>
                  <h3 className="font-medium">Schedule a Consultation</h3>
                  <p className="text-muted-foreground">
                    Book a personalized walkthrough of our platform tailored to your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-karmik-50 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-karmik-500" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@karmiksolutions.com" className="text-karmik-500 hover:underline">
                      info@karmiksolutions.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-karmik-50 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-karmik-500" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+18005551234" className="text-karmik-500 hover:underline">
                      +1 (800) 555-1234
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ '--index': 0.3 } as React.CSSProperties}>
            <div className="bg-white rounded-xl border border-border shadow-sm subtle-shadow p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Book Your Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="border-border"
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
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your business name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your rental business and needs"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none border-border"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-karmik-500 hover:bg-karmik-600 shadow-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Schedule My Consultation"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center pt-2">
                  We'll get back to you within 24 hours to schedule a personalized consultation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
