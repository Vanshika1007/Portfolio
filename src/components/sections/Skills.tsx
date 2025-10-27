import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart3, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Tools",
    icon: Code,
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "SQL", "HTML", "CSS", "JavaScript"],
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    title: "Data & Analytics Skills",
    icon: BarChart3,
    skills: ["Data Cleaning & Preprocessing", "Statistical Analysis", "Data Visualization", "Trend Analysis", "Dashboard Development"],
    color: "bg-green-500/10 text-green-600 border-green-500/20"
  },
  {
    title: "Machine Learning Expertise",
    icon: Brain,
    skills: ["Supervised & Unsupervised Learning", "Predictive Modeling", "Recommendation Systems", "Model Evaluation", "Feature Engineering", "Hyperparameter Tuning"],
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  {
    title: "Industry Knowledge",
    icon: Database,
    skills: ["Business Intelligence (BI)", "AI Solution Development", "Process Optimization", "Decision Support Systems"],
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
  },
  {
    title: "Business & Reporting",
    icon: BarChart3,
    skills: ["KPI Tracking", "Power BI", "Tableau", "Excel (Advanced)", "BI Reporting", "Data Cleaning", "Statistical Analysis"],
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="bg-gradient-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`${category.color} hover:scale-105 transition-transform duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Core <span className="text-primary">Competencies</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-primary/20 shadow-soft text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Data Analysis</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-primary/20 shadow-soft text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Machine Learning</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-primary/20 shadow-soft text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Web Development</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}