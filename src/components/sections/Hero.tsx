import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Vanshika 
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Data Analytics & AI/ML Engineer | BTech CSE Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Analytical and results-oriented with hands-on experience in Machine Learning, Predictive Analytics, and Data Visualization. Skilled in Python, SQL, and advanced analytics tools to extract insights and support data-driven decision-making.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-medium transition-all duration-300 text-lg px-8 py-6"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
             <Button
  variant="outline"
  size="lg"
  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-lg px-8 py-6"
  onClick={() => window.open("/VANSHIKA..RESUME.pdf", "_blank")}
>
  <Download className="mr-2 h-5 w-5" />
  Open Resume
</Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="sm"
                className="w-12 h-12 p-0 rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                asChild
              >
                <a href="https://linkedin.com/in/vanshika-sharma-689783282" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-12 h-12 p-0 rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                asChild
              >
                <a href="https://github.com/Vanshika1007" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-card shadow-strong overflow-hidden border-4 border-primary/20">
                <img
                  src="/photo.jpg"
                  alt="Vanshika - Data Analytics & AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}