
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t border-border">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <img 
              src="https://www.karmikoutdoors.com/cdn/shop/files/karmik-outdoors-logo.png?v=1734445838" 
              alt="Karmik Solutions" 
              className="h-10 mb-4" 
            />
            <p className="mt-4 text-muted-foreground">
              Transforming outdoor gear rentals for specialty retail stores worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("features")} className="text-muted-foreground hover:text-karmik-500 transition-colors text-left">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("benefits")} className="text-muted-foreground hover:text-karmik-500 transition-colors text-left">
                  Benefits
                </button>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonials")} className="text-muted-foreground hover:text-karmik-500 transition-colors text-left">
                  Customers
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Karmik Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/sales" className="text-sm text-muted-foreground/10 hover:text-muted-foreground transition-colors">
              Sales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
