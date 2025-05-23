
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, TreePine, Shield } from "lucide-react";

const Hero = () => {
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
    <section 
      className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2000&auto=format&fit=crop')` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 pointer-events-none"></div>
      
      <div className="container max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-karmik-100">
              <Shield className="h-4 w-4 text-karmik-600" />
              <span className="text-sm font-medium text-karmik-600">Badge-Protected Rentals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance">
              Gear Up Your{" "}
              <span className="bg-gradient-to-r from-karmik-500 to-karmik-600 bg-clip-text text-transparent">
                Rental Business
              </span>
            </h1>
            
            <p className="text-lg max-w-lg">
              The rental platform built specifically for outdoor enthusiasts. Help more people explore the outdoors while growing your business with industry-leading equipment protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-karmik-500 hover:bg-karmik-600 shadow-sm group"
                onClick={() => scrollToSection("contact")}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-karmik-500 hover:bg-karmik-600 text-white shadow-sm"
                onClick={() => scrollToSection("badge-protection")}
              >
                <Shield className="mr-2 h-4 w-4" />
                Badge Protection
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-karmik-100 flex items-center justify-center border-2 border-white text-xs font-semibold text-karmik-800">M</div>
                <div className="w-8 h-8 rounded-full bg-karmik-100 flex items-center justify-center border-2 border-white text-xs font-semibold text-karmik-800">S</div>
                <div className="w-8 h-8 rounded-full bg-karmik-100 flex items-center justify-center border-2 border-white text-xs font-semibold text-karmik-800">R</div>
                <div className="w-8 h-8 rounded-full bg-karmik-100 flex items-center justify-center border-2 border-white text-xs font-semibold text-karmik-800">P</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="text-foreground font-medium">45+</span> outdoor rental shops
              </p>
            </div>
          </div>
          
          {/* Nature background image column */}
          <div className="lg:col-span-6 animate-fade-in" style={{ '--index': 1 } as React.CSSProperties}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-karmik-100/50">
              <img 
                src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Ski rental shop" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Floating gear elements */}
              <div className="absolute -bottom-3 -left-8 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md rotate-6 border border-karmik-100/50">
                <Mountain className="h-8 w-8 text-karmik-600" />
              </div>
              <div className="absolute top-10 -right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md -rotate-12 border border-karmik-100/50">
                <TreePine className="h-6 w-6 text-karmik-600" />
              </div>
              
              {/* Visual overlay with rental shop tags */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/80 backdrop-blur-md rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Badge Protected</span>
                  </div>
                  <span className="text-sm font-semibold text-karmik-600">48 items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product image below hero */}
        <div className="mt-20 animate-fade-in" style={{ '--index': 2 } as React.CSSProperties}>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-br from-karmik-100 to-karmik-50 rounded-3xl blur-xl opacity-70 -z-10"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="pt-4 pb-2 px-2 bg-white bg-opacity-90 backdrop-blur-sm">
                <div className="flex gap-1.5 px-2">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-karmik-300 rounded-full"></div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/917c1eee-ec94-4a13-aaed-978518d1124c.png"
                  alt="Karmik dashboard interface" 
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative scattered outdoor icons */}
      <div className="absolute bottom-0 left-5 opacity-20 text-karmik-500">
        <Mountain className="h-16 w-16" />
      </div>
      <div className="absolute top-20 right-5 opacity-15 text-karmik-500">
        <TreePine className="h-24 w-24" />
      </div>
    </section>
  );
};

export default Hero;
