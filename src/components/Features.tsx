import { 
  Calendar, 
  LineChart, 
  BarChart, 
  ShoppingBag, 
  Users, 
  Clock, 
  Database, 
  QrCode 
} from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-5 w-5 text-karmik-500" />,
    title: "Intuitive Booking System",
    description: "Streamline the entire rental process with our easy-to-use calendar interface."
  },
  {
    icon: <LineChart className="h-5 w-5 text-karmik-500" />,
    title: "Detailed Analytics",
    description: "Gain insights into your rental business with comprehensive usage and revenue reports."
  },
  {
    icon: <ShoppingBag className="h-5 w-5 text-karmik-500" />,
    title: "Inventory Management",
    description: "Keep track of all your gear with real-time availability updates and maintenance schedules."
  },
  {
    icon: <Users className="h-5 w-5 text-karmik-500" />,
    title: "Customer Profiles",
    description: "Build customer relationships with detailed profiles and rental history."
  },
  {
    icon: <QrCode className="h-5 w-5 text-karmik-500" />,
    title: "QR Code Integration",
    description: "Simplify check-in and check-out processes with quick scan technology."
  },
  {
    icon: <Clock className="h-5 w-5 text-karmik-500" />,
    title: "Automated Reminders",
    description: "Reduce late returns with automatic notifications to customers."
  },
  {
    icon: <Database className="h-5 w-5 text-karmik-500" />,
    title: "Secure Cloud Storage",
    description: "Access your data anywhere with our secure, cloud-based platform."
  },
  {
    icon: <BarChart className="h-5 w-5 text-karmik-500" />,
    title: "Performance Metrics",
    description: "Track equipment utilization rates and identify your most profitable gear."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-4 py-1.5 bg-karmik-500/10 text-karmik-600 text-xs rounded-full font-medium">
            Powerful Features
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">
            Everything You Need to Manage Outdoor Rentals
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform includes all the tools specialty outdoor retailers need to streamline operations and grow their rental business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-border shadow-sm hover-lift subtle-shadow animate-fade-in"
              style={{ '--index': index * 0.2 } as React.CSSProperties}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
