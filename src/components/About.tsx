import { Card } from "./ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Passionate about writing maintainable, scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Focused on optimization techniques to deliver fast, efficient applications",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication and problem-solving skills",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Fullstack Developer with 1+ year of professional experience in developing responsive, 
            scalable, and high-performance web applications. Strong in frontend technologies like React.js, 
            Tailwind CSS, and Redux, with hands-on experience in backend APIs, authentication, and database integration.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey is driven by a passion for creating intuitive user experiences while building reliable 
            backend systems. I'm constantly learning and growing into a stronger fullstack role, staying up-to-date 
            with the latest web technologies to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 card-hover bg-card border-border"
            >
              <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
