
import PageNavbar from "@/components/PageNavbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BadgeProtection from "@/components/BadgeProtection";
import VisualStory from "@/components/VisualStory";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageNavbar />
      <main>
        <Hero />
        <Features />
        <BadgeProtection />
        <VisualStory />
        <Benefits />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
