
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t border-border">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#" className="inline-block">
              <img 
                src="https://www.karmikoutdoors.com/cdn/shop/files/karmik-outdoors-logo.png?v=1734445838" 
                alt="Karmik Solutions" 
                className="h-10 mb-4" 
              />
            </a>
            <p className="mt-4 text-muted-foreground">
              Transforming outdoor gear rentals for specialty retail stores worldwide.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border hover:bg-secondary transition-colors" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border hover:bg-secondary transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-karmik-500 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Subscribe
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay up to date with the latest features and product updates.
            </p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 bg-white border border-border rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-karmik-500/20 flex-grow"
              />
              <Button className="rounded-l-none bg-karmik-500 hover:bg-karmik-600">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Karmik Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-karmik-500 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-karmik-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-karmik-500 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
