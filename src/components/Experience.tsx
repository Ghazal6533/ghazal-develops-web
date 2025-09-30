import { Card } from "./ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
        
        <Card className="p-8 card-hover max-w-4xl mx-auto bg-card border-border">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Software Developer</h3>
              <p className="text-lg text-accent font-medium mb-2">
                Suthra Technologies Pvt Ltd
              </p>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>2024 - Present</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 ml-16">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Built responsive and dynamic web pages using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, 
                ensuring cross-browser compatibility and mobile responsiveness
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Integrated RESTful APIs and managed state using <strong>Redux</strong> for seamless data flow
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Optimized application load time and performance through code splitting, lazy loading, and 
                efficient rendering strategies
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Collaborated closely with designers and backend developers to implement pixel-perfect UI/UX 
                from Figma designs
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Participated in code reviews and maintained clean, reusable, and scalable component architecture
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
