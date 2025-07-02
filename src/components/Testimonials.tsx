import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const testimonials = [{
  quote: "Karmik has revolutionized how we manage our ski and snowboard rentals. The intuitive interface has made training new staff a breeze, and our customers love how seamless the rental process has become.",
  author: "Sarah Johnson",
  position: "Operations Manager",
  company: "Alpine Adventure Outfitters"
}, {
  quote: "We've increased our rental revenue by 35% since implementing Karmik. The ability to track inventory and analyze usage patterns has been instrumental in optimizing our rental fleet.",
  author: "Michael Chen",
  position: "Owner",
  company: "Cascade Outdoor Supply"
}, {
  quote: "As a small kayak and paddleboard rental shop, we needed an affordable solution that could grow with us. Karmik has exceeded our expectations in every way. Customer support is excellent too!",
  author: "Emma Rodriguez",
  position: "Founder",
  company: "Harbor Paddle Co."
}];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
            Testimonials
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border">
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <cite className="font-semibold text-foreground not-italic">
                  {testimonials[currentIndex].author}
                </cite>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="h-10 w-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="h-10 w-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;