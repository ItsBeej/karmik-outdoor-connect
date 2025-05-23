
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PageNavbar = () => {
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

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-lg shadow-sm"
            : "py-6 bg-white/95 backdrop-blur-lg"
        }`}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://karmik.blob.core.windows.net/cdn/logo-orvis-rental.png" 
                  alt="Karmik Solutions" 
                  className="h-8 md:h-10"
                />
              </Link>
            </div>
            
            {!isMobile ? (
              <>
                <div className="flex items-center space-x-8">
                  <Link to="/about" className="text-sm text-foreground/80 hover:text-karmik-500 transition-colors">
                    About
                  </Link>
                  <Link to="/pricing" className="text-sm text-foreground/80 hover:text-karmik-500 transition-colors">
                    Pricing
                  </Link>
                  <Link to="/careers" className="text-sm text-foreground/80 hover:text-karmik-500 transition-colors">
                    Careers
                  </Link>
                </div>

                <div className="flex items-center">
                  <Button variant="default" size="sm" onClick={scrollToContact} className="bg-karmik-500 hover:bg-karmik-600 shadow-sm">
                    Book a Consultation
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
            <Link to="/about" onClick={toggleMobileMenu} className="text-xl font-medium transition-colors hover:text-karmik-500">
              About
            </Link>
            <Link to="/pricing" onClick={toggleMobileMenu} className="text-xl font-medium transition-colors hover:text-karmik-500">
              Pricing
            </Link>
            <Link to="/careers" onClick={toggleMobileMenu} className="text-xl font-medium transition-colors hover:text-karmik-500">
              Careers
            </Link>
            <div className="pt-4 flex flex-col space-y-4 w-full max-w-[200px]">
              <Button variant="default" onClick={scrollToContact} className="w-full bg-karmik-500 hover:bg-karmik-600 shadow-sm">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageNavbar;
