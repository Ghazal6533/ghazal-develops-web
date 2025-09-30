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
            I'm a <span className="text-accent font-medium">detail-driven Fullstack Developer</span> with 1+ year of 
            professional experience building responsive, scalable, and high-performance web applications. I'm skilled in 
            both frontend and backend technologies, delivering real-world solutions that make an impact.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My expertise includes <span className="text-accent font-medium">React.js, TypeScript, Redux, Tailwind CSS, 
            Node.js, Express.js, REST APIs, and MongoDB</span>. I'm passionate about writing clean, maintainable code 
            and optimizing application performance to deliver seamless user experiences.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether it's crafting intuitive user interfaces or building reliable backend systems, I bring dedication 
            and a problem-solving mindset to every project. I'm committed to continuous learning and growing as a 
            well-rounded fullstack developer.
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
