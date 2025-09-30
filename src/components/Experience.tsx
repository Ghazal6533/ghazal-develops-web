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
                Built responsive user interfaces using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, 
                and <strong>Material UI</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Integrated REST APIs and optimized performance with lazy loading and code-splitting
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Collaborated with designers to turn Figma wireframes into accessible components
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Worked with backend teams to implement frontend-backend data flows
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Implemented efficient state management solutions using <strong>Redux</strong> and <strong>Context API</strong>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
