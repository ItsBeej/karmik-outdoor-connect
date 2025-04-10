
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tree, Calendar, Mountain, BarChart3, Users, ShoppingBag, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  companyName: z.string().min(1, { message: "Please enter your company name" }),
  companySize: z.string().min(1, { message: "Please select your company size" }),
  phoneNumber: z.string().min(1, { message: "Please enter your phone number" }),
  message: z.string().optional(),
});

const SalesLanding = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      companySize: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // In a real implementation, this would send data to HubSpot
      console.log("Form submitted with values:", values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Thanks for your interest! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-karmik-50 to-white pt-24 pb-20">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-karmik-100 rounded-full mb-5">
              <Mountain className="h-4 w-4 text-karmik-600" />
              <span className="text-sm font-medium text-karmik-600">Specialty Outdoor Retail</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-balance">
              Simplify Your <span className="bg-gradient-to-r from-karmik-500 to-karmik-600 bg-clip-text text-transparent">Rental Operations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              The all-in-one rental management platform built specifically for outdoor specialty retailers.
            </p>
          </div>
          
          {/* Product Screenshot */}
          <div className="relative mx-auto max-w-5xl animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-br from-karmik-100 to-karmik-50 rounded-3xl blur-xl opacity-70 -z-10"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border">
              <div className="pt-4 pb-2 px-2 bg-white bg-opacity-90 backdrop-blur-sm">
                <div className="flex gap-1.5 px-2">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-karmik-300 rounded-full"></div>
                </div>
              </div>
              <img 
                src="/lovable-uploads/917c1eee-ec94-4a13-aaed-978518d1124c.png"
                alt="Karmik Rental Management Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-karmik-500/10 text-karmik-600 text-xs rounded-full font-medium">
              Built For Outdoor Retailers
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">
              Why Specialty Retailers Choose Karmik
            </h2>
            <p className="mt-4 text-muted-foreground">
              Designed specifically for the unique challenges of outdoor retail rental operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingBag className="h-10 w-10 text-karmik-500" />,
                title: "Inventory Management",
                description: "Track every piece of gear with detailed maintenance history, usage metrics, and real-time availability.",
                benefits: [
                  "Equipment utilization tracking",
                  "Maintenance scheduling",
                  "Serial number management",
                  "Custom gear categories"
                ]
              },
              {
                icon: <Calendar className="h-10 w-10 text-karmik-500" />,
                title: "Intelligent Booking",
                description: "Flexible booking system with visual calendar, conflict prevention, and customer notifications.",
                benefits: [
                  "Visual calendar interface",
                  "Automated reminders",
                  "Multiple reservation types",
                  "Group booking capabilities"
                ]
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-karmik-500" />,
                title: "Business Insights",
                description: "Valuable analytics that help you optimize inventory, staff resources, and revenue potential.",
                benefits: [
                  "Revenue forecasting",
                  "Custom reporting",
                  "Seasonal trend analysis",
                  "Equipment ROI calculations"
                ]
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-border p-8 shadow-sm hover-lift animate-fade-in"
                style={{ '--index': index * 0.3 } as React.CSSProperties}
              >
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-karmik-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-4 py-1.5 bg-karmik-500/10 text-karmik-600 text-xs rounded-full font-medium">
              Customer Success
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold mb-10">
              Trusted by Leading Retailers
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-secondary/30 p-8 md:p-10 rounded-2xl border border-border animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="rounded-full overflow-hidden border-4 border-white shadow-lg w-32 h-32 bg-karmik-100 flex items-center justify-center">
                  <Tree className="h-16 w-16 text-karmik-500" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">
                  "Karmik has transformed how we manage our rental operations. We've reduced administrative work by 60% and increased our rental revenue by 40% in just six months."
                </blockquote>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Operations Manager, Mountain Adventures Outfitters</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-sales" className="py-20 bg-secondary/30">
        <div className="container max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <span className="px-4 py-1.5 bg-karmik-500/10 text-karmik-600 text-xs rounded-full font-medium">
                Get Started Today
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold mb-6">
                Schedule Your Personalized Demo
              </h2>
              <p className="text-muted-foreground mb-8">
                See how Karmik can transform your outdoor rental operations. Our team will walk you through the platform and answer any questions specific to your business.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-karmik-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-karmik-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Approach</h3>
                    <p className="text-muted-foreground">Tailored demonstrations focused on your specific business needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-karmik-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-karmik-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Choose a time that works best for you and your team.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-karmik-100 p-3 rounded-lg">
                    <Mountain className="h-6 w-6 text-karmik-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Industry Experts</h3>
                    <p className="text-muted-foreground">Our team has deep experience in outdoor specialty retail.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Request Your Demo</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201+">201+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your specific needs or questions"
                              className="resize-none min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit"
                      className="w-full bg-karmik-500 hover:bg-karmik-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Schedule My Demo"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesLanding;
