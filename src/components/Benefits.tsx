
import { CheckCircle, Shield } from 'lucide-react';

const Benefits = () => {
  const benefitsList = [
    {
      title: "Operational Efficiency",
      items: [
        "Reduce administrative overhead by 60%",
        "Automate repetitive rental tasks",
        "Streamline check-in/out processes",
        "Eliminate double-bookings",
        "Centralize all rental information"
      ]
    },
    {
      title: "Revenue Growth",
      items: [
        "Increase rental utilization by up to 40%",
        "Boost customer retention rates",
        "Enable easy upselling opportunities",
        "Optimize pricing with demand-based models",
        "Reduce equipment downtime"
      ]
    },
    {
      title: "Enhanced Customer Experience",
      items: [
        "Provide 24/7 online booking capabilities",
        "Offer seamless pickup and return",
        "Enable paperless waivers and agreements",
        "Send automated reminders and updates",
        "Build customer loyalty with personalization"
      ]
    },
    {
      title: "Equipment Protection",
      icon: <Shield className="h-6 w-6 text-karmik-500" />,
      items: [
        "Lost & found service included with every badge",
        "$50,000+ in equipment recovered and returned",
        "24-hour recovery guarantee for peace of mind",
        "Reduce replacement costs by up to 80%",
        "Customer confidence in renting expensive gear"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="px-4 py-1.5 bg-karmik-500/10 text-karmik-600 text-xs rounded-full font-medium">
            Why Choose Karmik
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">
            Transform Your Outdoor Rental Business
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our platform delivers measurable improvements across every aspect of your rental operations, from efficiency to equipment protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border border-border p-6 shadow-sm subtle-shadow animate-fade-in ${
                benefit.title === "Equipment Protection" ? "ring-2 ring-karmik-200 bg-karmik-50/50" : ""
              }`}
              style={{ '--index': index * 0.2 } as React.CSSProperties}
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b">
                {benefit.icon && benefit.icon}
                <h3 className="text-lg font-semibold text-center flex-1">
                  {benefit.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-karmik-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
