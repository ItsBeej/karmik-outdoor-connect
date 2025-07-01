
import { useEffect } from "react";
import { Calendar, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/23725922.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/23725922.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
              <h3 className="text-xl font-semibold mb-3">Book Your Consultation</h3>
              
              <div className="hs-form-frame" data-region="na1" data-form-id="109b350b-c68c-428e-a12c-75d1dfc7bdc7" data-portal-id="23725922"></div>
              
              <p className="text-xs text-muted-foreground text-center pt-4">
                We'll get back to you within 24 hours to schedule a personalized consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
