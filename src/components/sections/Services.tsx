import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Monitor, Database, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights through comprehensive data cleaning, transformation, and analysis. I help businesses make data-driven decisions.",
    icon: BarChart3,
    features: [
      "Data Cleaning & Preprocessing",
      "Statistical Analysis",
      "Trend Identification",
      "Insight Generation",
      "Performance Metrics"
    ],
    tools: ["Python", "Pandas", "NumPy", "SQL"],
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "Interactive Dashboards",
    description: "Create stunning, interactive dashboards that provide real-time insights and make complex data easy to understand for stakeholders.",
    icon: Monitor,
    features: [
      "Interactive Visualizations",
      "Real-time Data Updates",
      "Custom KPI Tracking",
      "Mobile Responsive Design",
      "Export Capabilities"
    ],
    tools: ["Power BI", "Tableau", "Excel"],
    color: "bg-green-500/10 border-green-500/20"
  },
  {
    title: "Web Development",
    description: "Build responsive, modern websites with clean user interfaces and efficient backend systems using the latest web technologies.",
    icon: Database,
    features: [
      "Responsive Frontend Design",
      "Flask Backend Development",
      "Database Integration",
      "API Development",
      "Modern UI/UX"
    ],
    tools: ["HTML", "CSS", "JavaScript", "Flask"],
    color: "bg-purple-500/10 border-purple-500/20"
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Offering comprehensive solutions in data analytics, visualization, and web development 
            to help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`bg-gradient-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 group ${service.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">What I Offer</h4>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5 group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            My <span className="text-primary">Process</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and requirements" },
              { step: "02", title: "Planning", desc: "Creating a detailed project roadmap" },
              { step: "03", title: "Development", desc: "Building and implementing solutions" },
              { step: "04", title: "Delivery", desc: "Testing, optimization, and final delivery" }
            ].map((item, index) => (
              <Card key={item.step} className="bg-gradient-card border-primary/20 shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}