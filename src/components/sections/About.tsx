import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn more about my journey, education, and aspirations in the world of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Bio */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                Analytical and results-oriented Data Analytics & AI/ML Engineer with hands-on experience in Machine Learning, Predictive Analytics, and Data Visualization. Skilled in Python, SQL, and advanced analytics tools to extract insights and support data-driven decision-making.
              </p>
              <p className="text-foreground leading-relaxed">
                I am a B.Tech Computer Science and Engineering student at I.K. Gujral Punjab Technical University, Kapurthala (2022–2026) with a strong academic record (SGPA: 9.27). Proven ability to design, develop, and deploy AI-powered solutions that enhance business outcomes.
              </p>
              <p className="text-foreground leading-relaxed">
                Adept at data preprocessing, statistical modeling, and dashboard development with a focus on delivering measurable results. I aim to leverage my skills in Data Analytics & Artificial Intelligence to drive impactful business solutions.
              </p>
            </div>

            {/* Goals */}
            <Card className="bg-gradient-card border-primary/20 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Career Goals</h3>
                    <p className="text-muted-foreground">
                      To become a skilled Data Analytics & AI/ML Engineer, contributing to 
                      innovative projects that leverage data science to drive business decisions 
                      and create positive impact through data-driven solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Education */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2">Education</h3>
                    <div className="space-y-4">
                      <div className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-medium text-lg">B.Tech (CSE)</h4>
                        <p className="text-primary font-medium">I.K. Gujral Punjab Technical University, Main Campus</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>2022 - 2026</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>Kapurthala</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          SGPA: 9.27 | Senior Secondary (12th, PCM) – Junior Model School (2022) | 91.6%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-card border-primary/20 shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">2026</div>
                  <div className="text-sm text-muted-foreground">Graduation Year</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-primary/20 shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">6+</div>
                  <div className="text-sm text-muted-foreground">AI/ML Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}