
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Mountain, TreePine } from "lucide-react";

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
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-green-50 to-karmik-50">
      {/* Nature-inspired background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden -z-10" 
        aria-hidden="true"
      >
        {/* Mountain landscape background */}
        <div className="absolute w-full h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" 
            alt="Mountain landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-96 h-96 -top-20 -right-20 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute w-80 h-80 top-1/3 left-2/3 bg-karmik-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute w-full h-full opacity-50 mix-blend-soft-light">
          <svg className="absolute left-0 top-0 w-full h-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="fill-current text-green-700" d="M0 0 Q 2.5 40 5 0 Q 7.5 40 10 0 Q 12.5 40 15 0 Q 17.5 40 20 0 Q 22.5 40 25 0 Q 27.5 40 30 0 Q 32.5 40 35 0 Q 37.5 40 40 0 Q 42.5 40 45 0 Q 47.5 40 50 0 Q 52.5 40 55 0 Q 57.5 40 60 0 Q 62.5 40 65 0 Q 67.5 40 70 0 Q 72.5 40 75 0 Q 77.5 40 80 0 Q 82.5 40 85 0 Q 87.5 40 90 0 Q 92.5 40 95 0 Q 97.5 40 100 0 V 100 H 0 Z"></path>
          </svg>
        </div>
      </div>
      
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-600/10 rounded-full">
              <TreePine className="h-4 w-4 text-green-700" />
              <span className="text-sm font-medium text-green-700">Outdoor Rental Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance">
              Gear Up Your{" "}
              <span className="bg-gradient-to-r from-green-600 to-karmik-500 bg-clip-text text-transparent">
                Rental Business
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              The rental platform built specifically for outdoor enthusiasts. Help more people explore the outdoors while growing your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 shadow-sm group"
                onClick={() => scrollToSection("contact")}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white shadow-sm"
                onClick={() => scrollToSection("video")}
              >
                <Play className="mr-2 h-4 w-4" />
                See It In Action
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white text-xs font-semibold text-green-800">M</div>
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white text-xs font-semibold text-green-800">S</div>
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white text-xs font-semibold text-green-800">R</div>
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white text-xs font-semibold text-green-800">P</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="text-foreground font-medium">45+</span> outdoor rental shops
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 animate-fade-in" style={{ '--index': 1 } as React.CSSProperties}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-green-100 to-blue-50 rounded-3xl blur-xl opacity-70 -z-10"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div className="pt-4 pb-2 px-2 bg-white bg-opacity-90 backdrop-blur-sm">
                  <div className="flex gap-1.5 px-2">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
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
              <div className="absolute top-1/2 -left-4 w-14 h-14 bg-green-500 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-karmik-500 rounded-full blur-3xl opacity-20"></div>
              
              {/* Outdoor gear decorative elements */}
              <div className="absolute -bottom-3 -left-8 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm rotate-6">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <div className="absolute top-10 -right-6 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm -rotate-12">
                <TreePine className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
