
import { ArrowRight, MapPin, Shield, Home } from "lucide-react";

const VisualStory = () => {
  const storySteps = [
    {
      icon: <Shield className="h-8 w-8 text-karmik-500" />,
      title: "Customer Rents Gear",
      description: "Badge-protected equipment ensures peace of mind from the start",
      image: "/lovable-uploads/af53a656-d67e-496e-86cd-94ba9cd23e98.png"
    },
    {
      icon: <MapPin className="h-8 w-8 text-amber-500" />,
      title: "Adventure Happens", 
      description: "Gear gets lost or left behind during the outdoor experience",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Home className="h-8 w-8 text-green-500" />,
      title: "Quick Recovery",
      description: "Badge enables rapid return to shop through QR identification",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            How Badge Protection Works
          </h2>
          <p className="text-lg text-muted-foreground">
            See how our badge system protects your equipment investment throughout the entire rental journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {storySteps.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{ '--index': index * 0.2 } as React.CSSProperties}>
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover-lift">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-karmik-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {/* Arrow connector */}
              {index < storySteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white border border-border rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="h-4 w-4 text-karmik-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-karmik-500/5 rounded-2xl p-8 animate-fade-in" style={{ '--index': 0.6 } as React.CSSProperties}>
          <h3 className="text-2xl font-semibold mb-4">
            Your Tools. Your Livelihood. <span className="text-karmik-600">Protected.</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every piece of equipment is someone's tool of the trade. When gear goes missing, it's not just an expense - it's lost work time. Our badge protection keeps your customers equipped and your business running.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisualStory;
