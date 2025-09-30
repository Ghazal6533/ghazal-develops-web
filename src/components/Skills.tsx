import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Redux",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MongoDB (basics)"],
    },
    {
      category: "Tools & Others",
      skills: [
        "Git & GitHub",
        "Chrome DevTools",
        "Figma to React",
        "Performance Optimization",
        "Code Splitting & Lazy Loading",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 card-hover bg-card border-border"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-accent/10 text-foreground rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
