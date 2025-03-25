
import { CheckCircle } from 'lucide-react';

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
            Our platform delivers measurable improvements across every aspect of your rental operations, from efficiency to customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-border p-6 shadow-sm subtle-shadow animate-fade-in"
              style={{ '--index': index * 0.3 } as React.CSSProperties}
            >
              <h3 className="text-xl font-semibold mb-6 text-center pb-4 border-b">
                {benefit.title}
              </h3>
              <ul className="space-y-4">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-karmik-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
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
