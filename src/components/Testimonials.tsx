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
  return;
};
export default Testimonials;