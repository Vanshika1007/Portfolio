import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vanshika-sharma-689783282",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Vanshika1007",
      label: "GitHub"
    },
    {
  icon: Mail,
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=vv10072005@gmail.com",
  label: "Email"
}
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Vanshika Sharma</h3>
            <p className="text-muted-foreground text-sm">
              Aspiring Data Analyst & AI/ML Enthusiast
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Designed & Developed By Vanshika
            | Open to Data Analytics & AI/ML Opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}