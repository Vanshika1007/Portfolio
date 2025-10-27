import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vv10072005@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=vv10072005@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vanshika-sharma-689783282",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Vanshika1007",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life 
            with data analytics and web development solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.label} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-foreground hover:text-primary transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Follow me on</p>
                  <div className="flex gap-3">
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
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <IconComponent className={`h-4 w-4 ${social.color}`} />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="bg-gradient-card border-primary/20 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Available for Projects</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm currently available for freelance projects and internship opportunities. 
                  Let's discuss how we can work together!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-primary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-primary/20 focus:border-primary/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vv10072005@gmail.com"
                        required
                        className="border-primary/20 focus:border-primary/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-primary/20 focus:border-primary/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={6}
                      required
                      className="border-primary/20 focus:border-primary/40 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-primary/20 shadow-soft max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you need data analysis, dashboard creation, or web development, 
                I'm here to help transform your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                  asChild
                >
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vv10072005@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me Directly
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
