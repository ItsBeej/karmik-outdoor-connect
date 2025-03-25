
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Karmik has revolutionized how we manage our ski and snowboard rentals. The intuitive interface has made training new staff a breeze, and our customers love how seamless the rental process has become.",
    author: "Sarah Johnson",
    position: "Operations Manager",
    company: "Alpine Adventure Outfitters",
  },
  {
    quote: "We've increased our rental revenue by 35% since implementing Karmik. The ability to track inventory and analyze usage patterns has been instrumental in optimizing our rental fleet.",
    author: "Michael Chen",
    position: "Owner",
    company: "Cascade Outdoor Supply",
  },
  {
    quote: "As a small kayak and paddleboard rental shop, we needed an affordable solution that could grow with us. Karmik has exceeded our expectations in every way. Customer support is excellent too!",
    author: "Emma Rodriguez",
    position: "Founder",
    company: "Harbor Paddle Co.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-karmik-500/5">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="px-4 py-1.5 bg-karmik-500/10 text-karmik-600 text-xs rounded-full font-medium">
            Success Stories
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">
            Trusted by Leading Outdoor Retailers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear what our customers have to say about their experience with Karmik Solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12 animate-fade-in" style={{ '--index': 0.3 } as React.CSSProperties}>
            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium mb-8 italic text-balance">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-4 right-4 text-karmik-100 opacity-30">
              <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6 44.2C21.4 44.2 14 41.4 8.4 35.8C2.8 30.2 0 22.8 0 13.6C0 9.6 0.8 5.6 2.4 1.6H17.8C16.2 4.8 15.4 8.4 15.4 12.4C15.4 16 16.4 18.8 18.4 20.8C20.4 22.8 23 23.8 26.2 23.8H38V44.2H30.6ZM87.2 44.2C78 44.2 70.6 41.4 65 35.8C59.4 30.2 56.6 22.8 56.6 13.6C56.6 9.6 57.4 5.6 59 1.6H74.4C72.8 4.8 72 8.4 72 12.4C72 16 73 18.8 75 20.8C77 22.8 79.6 23.8 82.8 23.8H94.6V44.2H87.2Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
