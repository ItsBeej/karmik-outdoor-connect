
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="video" className="py-20 relative overflow-hidden">
      {/* Nature-inspired background */}
      <div className="absolute inset-0 -z-10 opacity-10" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')", 
        backgroundSize: "cover", 
        backgroundPosition: "center"
      }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-karmik-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-karmik-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <span className="px-4 py-1.5 bg-karmik-500/10 text-karmik-600 text-xs rounded-full font-medium">
            Trail To Success
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">
            See Karmik In The Wild
          </h2>
          <p className="mt-4 text-muted-foreground">
            Watch how our platform helps outdoor rental shops streamline operations while getting more adventurers outside with the gear they need.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl animate-fade-in" style={{ '--index': 0.3 } as React.CSSProperties}>
          <div className="absolute -inset-1 bg-gradient-to-br from-karmik-100 to-karmik-50 rounded-3xl blur-xl opacity-70 -z-10"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => setVideoOpen(true)}>
            <div className="aspect-video bg-gray-100 relative">
              <img 
                src="/lovable-uploads/ed6af07f-2c3e-4f69-b1f4-9d5b579b47cb.png" 
                alt="Karmik Product Demo - Reservations Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Play className="h-8 w-8 text-karmik-500 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-karmik-500 hover:bg-karmik-600 shadow-sm"
            onClick={() => setVideoOpen(true)}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch The Adventure
          </Button>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[900px] p-1">
          <div className="aspect-video w-full bg-black flex items-center justify-center">
            <p className="text-white text-center p-4">Your product video would play here.</p>
            {/* In a real implementation, you would insert your video player here */}
            {/* For example: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Karmik Product Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
