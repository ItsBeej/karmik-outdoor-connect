
import { Shield, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BadgeProtection = () => {
  return (
    <section id="badge-protection" className="py-20 bg-gradient-to-br from-karmik-50 to-white">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="bg-karmik-500/10 text-karmik-600 mb-6">
            Game-Changing Protection
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Every Rental Protected with <span className="text-karmik-600">Karmik Badges</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our revolutionary badge system doesn't just make rentals easier - it protects your investment with industry-leading lost & found recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual showcase */}
          <div className="animate-fade-in" style={{ '--index': 0.2 } as React.CSSProperties}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Outdoor gear with Karmik protection badge" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              {/* Badge overlay */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-md border border-karmik-100">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-karmik-500" />
                  <span className="text-sm font-semibold text-karmik-600">Karmik Protected</span>
                </div>
              </div>
              {/* Protection indicator */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Protection Status</div>
                    <div className="text-xs text-karmik-600">Active</div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Key benefits */}
          <div className="space-y-8 animate-fade-in" style={{ '--index': 0.4 } as React.CSSProperties}>
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-karmik-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-karmik-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Thousands Recovered</h3>
                  <p className="text-muted-foreground">
                    Our badge system has returned <strong>over $20,000 worth of equipment</strong> to rental shops. We protect your most valuable assets.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-karmik-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-karmik-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Multi-use Badges Save Time</h3>
                  <p className="text-muted-foreground">
                    Our badges protect your gear and save your employees time. Everything you need to know with the scan of a QR code.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-karmik-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-karmik-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Effortless for Customers</h3>
                  <p className="text-muted-foreground">
                    Customers simply scan the badge to complete their rental. No paperwork, no hassle - just grab the gear and go on their adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgeProtection;
