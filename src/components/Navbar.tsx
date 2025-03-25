
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-lg shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <img 
                  src="https://www.karmikoutdoors.com/cdn/shop/files/karmik-outdoors-logo.png?v=1734445838" 
                  alt="Karmik Solutions" 
                  className="h-8 md:h-10"
                />
              </a>
            </div>
            
            {!isMobile ? (
              <>
                <div className="flex items-center space-x-8">
                  <button onClick={() => scrollToSection("features")} className="text-sm text-foreground/80 hover:text-karmik-500 transition-colors">
                    Features
                  </button>
                  <button onClick={() => scrollToSection("benefits")} className="text-sm text-foreground/80 hover:text-karmik-500 transition-colors">
                    Benefits
                  </button>
                  <button onClick={() => scrollToSection("testimonials")} className="text-sm text-foreground/80 hover:text-karmik-500 transition-colors">
                    Testimonials
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" onClick={() => scrollToSection("video")} className="shadow-sm">
                    Watch Demo
                  </Button>
                  <Button variant="default" size="sm" onClick={() => scrollToSection("contact")} className="bg-karmik-500 hover:bg-karmik-600 shadow-sm">
                    Book a Call
                  </Button>
                </div>
              </>
            ) : (
              <button
                className="p-1 text-foreground"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white animate-fade-in">
          <div className="flex justify-end p-6">
            <button onClick={toggleMobileMenu} aria-label="Close mobile menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[80vh] space-y-8">
            <img 
              src="https://www.karmikoutdoors.com/cdn/shop/files/karmik-outdoors-logo.png?v=1734445838" 
              alt="Karmik Solutions" 
              className="h-10 mb-6" 
            />
            <button onClick={() => scrollToSection("features")} className="text-xl font-medium transition-colors hover:text-karmik-500">
              Features
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-xl font-medium transition-colors hover:text-karmik-500">
              Benefits
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-xl font-medium transition-colors hover:text-karmik-500">
              Testimonials
            </button>
            <div className="pt-4 flex flex-col space-y-4 w-full max-w-[200px]">
              <Button variant="outline" onClick={() => scrollToSection("video")} className="w-full shadow-sm">
                Watch Demo
              </Button>
              <Button variant="default" onClick={() => scrollToSection("contact")} className="w-full bg-karmik-500 hover:bg-karmik-600 shadow-sm">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
