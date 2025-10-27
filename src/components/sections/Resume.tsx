import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export function Resume() {
  const handleDownloadResume = () => {
    // Add your resume PDF URL here
    const resumeUrl = "/VANSHIKA..RESUME.pdf"; // You'll need to add your PDF to the public folder
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="resume" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          📜 Resume
        </h2>
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            View my complete professional experience and qualifications
          </p>
          <Button 
            onClick={handleDownloadResume}
            size="lg"
            className="gap-2"
          >
            <FileDown className="w-5 h-5" />
            📥 Open My Resume
          </Button>
        </div>
      </div>
    </section>
  );
}