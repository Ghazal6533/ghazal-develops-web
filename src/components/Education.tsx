import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
        
        <Card className="p-8 card-hover max-w-4xl mx-auto bg-card border-border">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">B.Sc. Computer Science</h3>
              <p className="text-lg text-accent font-medium mb-2">
                Aligarh Muslim University
              </p>
              <p className="text-muted-foreground">
                Developed a strong foundation in computer science fundamentals, algorithms, 
                data structures, and software engineering principles. Gained hands-on experience 
                in various programming languages and modern development practices.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
