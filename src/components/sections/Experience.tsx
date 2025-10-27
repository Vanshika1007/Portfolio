import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, Calendar } from "lucide-react";

const experiences = [
  {
    type: "internship",
    title: "Data Analytics Intern",
    company: "Deloitte",
    period: "2025",
    description: "Preprocessed and analyzed large-scale datasets to identify key trends and patterns. Built interactive dashboards and conducted trend analysis to optimize client decision-making. Collaborated with cross-functional teams to deliver data-driven insights that improved reporting efficiency.",
    skills: ["Data Preprocessing", "Data Visualization", "Dashboard Development", "Trend Analysis", "Cross-functional Collaboration"]
  },
  {
    type: "internship",
    title: "Machine Learning Intern",
    company: "AICTE",
    period: "2025",
    description: "Developed and deployed ML models for predictive analytics using Python, Pandas, and Scikit-learn. Achieved high accuracy rates in classification and clustering tasks through model optimization. Conducted feature engineering and hyperparameter tuning to improve model performance.",
    skills: ["Python", "Pandas", "Scikit-learn", "Predictive Analytics", "Model Optimization", "Feature Engineering"]
  },
  {
    type: "training",
    title: "AI/ML Trainee",
    company: "NIELIT Haridwar",
    period: "2024",
    description: "Completed hands-on AI/ML training covering supervised, unsupervised, and deep learning approaches. Applied data preprocessing techniques to real-world datasets, improving model readiness.",
    skills: ["AI", "Machine Learning", "Data Preprocessing", "Deep Learning", "Supervised Learning", "Unsupervised Learning"]
  }
];

const certifications = [
  {
    title: "GenAI Powered Data Analytics",
    organization: "Tata Group/Forage",
    period: "Aug 2025",
    description: "Advanced training in generative AI applications for data analytics and business intelligence.",
    skills: ["GenAI", "Data Analytics", "Business Intelligence"]
  },
  {
    title: "Data Analytics Job Simulation",
    organization: "Deloitte/Forage",
    period: "Aug 2025",
    description: "Comprehensive simulation of real-world data analytics projects and client scenarios.",
    skills: ["Data Analysis", "Client Communication", "Project Management"]
  },
  {
    title: "Data Science & Analytics",
    organization: "HP LIFE",
    period: "Jun 2025",
    description: "Professional certification in data science methodologies and analytics tools.",
    skills: ["Data Science", "Analytics", "Statistical Methods"]
  },
  {
    title: "AICTE ML Internship Certification",
    organization: "AICTE",
    period: "2025",
    description: "Applied ML techniques in live projects with demonstrated expertise.",
    skills: ["Machine Learning", "Live Projects", "Applied ML"]
  },
  {
    title: "NIELIT AI/ML Training Certification",
    organization: "NIELIT",
    period: "2024",
    description: "Comprehensive AI/ML technical training certification.",
    skills: ["AI/ML", "Technical Training", "Deep Learning"]
  },
  {
    title: "Hackathon Consolation Prize",
    organization: "GNA Hackathon",
    period: "Apr 2024",
    description: "Recognition for problem-solving in AI solutions in competitive hackathon environment.",
    skills: ["Problem Solving", "AI Solutions", "Innovation", "Team Collaboration"]
  },
  {
    title: "YLTC Dalhousie Trip Recognition",
    organization: "YLTC",
    period: "2024",
    description: "Selected for leadership & cultural exchange program.",
    skills: ["Leadership", "Cultural Exchange", "Team Building"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through internships and professional development programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Internships */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Internships</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">{cert.title}</CardTitle>
                        <p className="text-primary font-medium">{cert.organization}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Timeline Stats */}
            <Card className="bg-gradient-card border-primary/20 shadow-soft mt-6">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">Professional Journey</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Internships</span>
                    <span className="font-semibold text-primary">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Trainings</span>
                    <span className="font-semibold text-primary">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Certifications</span>
                    <span className="font-semibold text-primary">7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Key Achievement</span>
                    <span className="font-semibold text-primary">Hackathon Prize</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}