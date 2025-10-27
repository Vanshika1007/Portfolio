import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, Target, BarChart3, Leaf, DollarSign, Brain } from "lucide-react";

const projects = [
  {
    title: "IKGPTU Student Support – AI Powered Chatbot",
    description: "Built a scalable AI chatbot resolving student queries with 95% accuracy. Integrated with Twilio alerts & real-time updates via web scraping. Optimized backend using Scikit-learn intent classification, reducing response time by 40%.",
    icon: Bot,
    technologies: ["Python", "NLP", "Scikit-learn", "Twilio", "Web Scraping", "HTML", "CSS", "JavaScript", "APIs"],
    features: ["95% Accuracy", "Real-time Updates", "Intent Classification", "40% Faster Response", "Live Support", "Automated Email Notifications"],
    color: "bg-purple-500/10 border-purple-500/20",
    link: "https://github.com/Vanshika1007/PTU-AI-POWERED-CHATBOT"
  },
  {
    title: "Sales Dashboard",
    description: "Designed and developed an interactive dashboard to track KPIs (Sales, Profit, Quantity, Ship Mode). Created regional, category, and segment-wise analysis for business insights.",
    icon: BarChart3,
    technologies: ["Power BI", "Tableau", "Data Analysis", "KPI Tracking", "Business Intelligence"],
    features: ["Sales Tracking", "Profit Analysis", "Regional Insights", "Segment Analysis"],
    color: "bg-blue-500/10 border-blue-500/20",
    link: "https://github.com/Vanshika1007/Sales-Dashboard"
  },
  {
    title: "Uber Analysis Dashboard",
    description: "Created a dashboard to analyze ride demand, revenue patterns, and customer behavior. Provided insights into peak hours and regional distribution for optimization.",
    icon: Target,
    technologies: ["Power BI", "Tableau", "Data Visualization", "Analytics", "Business Intelligence"],
    features: ["Ride Demand Analysis", "Revenue Patterns", "Peak Hours", "Regional Distribution"],
    color: "bg-green-500/10 border-green-500/20",
    link: "https://github.com/Vanshika1007/Uber-Analysis-Dashboard"
  },
  {
    title: "Crop & Fertilizer Recommendation System",
    description: "Developed an ML-based system to recommend best crops and fertilizers according to soil and weather conditions. Implemented supervised learning algorithms for accurate predictions. Achieved 90%+ model accuracy with Random Forest algorithm.",
    icon: Leaf,
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Random Forest"],
    features: ["90%+ Accuracy", "Soil Analysis", "Weather Integration", "Data-driven Suggestions", "Agricultural Optimization"],
    color: "bg-emerald-500/10 border-emerald-500/20",
    link: "https://github.com/Vanshika1007/Crop-Fertilizer-Recommendation"
  },
  {
    title: "Salary Prediction using Machine Learning",
    description: "Built a predictive model to estimate salaries based on experience, skills, and education. Applied Linear Regression and Decision Tree models for comparison. Enhanced accuracy through feature engineering & preprocessing.",
    icon: DollarSign,
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Linear Regression", "Decision Tree"],
    features: ["Feature Engineering", "Model Comparison", "Predictive Analytics", "Data Preprocessing"],
    color: "bg-yellow-500/10 border-yellow-500/20",
    link: "https://github.com/Vanshika1007/Salary-Prediction"
  },
  {
    title: "AI Career Guidance System",
    description: "Developed an AI-based career guidance platform to recommend suitable career paths for students. Used Machine Learning & NLP to match students' skills and interests with career options. Enhanced user engagement through an interactive chatbot interface.",
    icon: Brain,
    technologies: ["Python", "NLP", "Scikit-learn", "Streamlit", "Flask", "Machine Learning"],
    features: ["Skills Matching", "Interest Analysis", "Interactive Chatbot", "Career Recommendations", "User Engagement"],
    color: "bg-indigo-500/10 border-indigo-500/20",
    link: "https://github.com/Vanshika1007/AI_Powered_Career_Guidance-Recommendation-System"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my AI/ML projects that solve real-world problems and demonstrate technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`bg-gradient-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 group ${project.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Key Features</h4>
                    <div className="space-y-1">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                  <a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="block"
>
  <Button 
    variant="outline" 
    size="sm" 
    className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5"
  >
    <ExternalLink className="mr-2 h-4 w-4" />
    View Project
  </Button>
</a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}