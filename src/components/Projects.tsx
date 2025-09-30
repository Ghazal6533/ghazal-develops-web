import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Evergreen POS",
      description: "A high-performance Point of Sale system built with React, Redux, and TypeScript",
      technologies: ["React.js", "Redux", "TypeScript", "Material UI"],
      highlights: [
        "Optimized application load time to under 200ms using code splitting and lazy loading",
        "Implemented debounced search functionality for efficient data filtering",
        "Built reusable component library following atomic design principles",
        "Integrated real-time inventory management with Redux state management",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Atlanta Fence Company POS",
      description: "Responsive POS application with real-time API integration and advanced data management",
      technologies: ["React.js", "TypeScript", "REST APIs", "Tailwind CSS"],
      highlights: [
        "Developed fully responsive screens adapting to various device sizes",
        "Implemented real-time API integration for order processing and tracking",
        "Created scalable and reusable components for rapid feature development",
        "Enhanced user experience with intuitive navigation and quick actions",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Growth Society Banking App",
      description: "Secure banking application with robust authentication and financial API integration",
      technologies: ["React.js", "Node.js", "JWT", "REST APIs", "Redux"],
      highlights: [
        "Built secure authentication & authorization with JWT (frontend + backend)",
        "Implemented role-based routing for different user privilege levels",
        "Integrated financial APIs for transactions and interest calculation logic",
        "Designed responsive dashboard with real-time balance updates",
      ],
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover bg-card border-border group"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/20">
                  {project.title.split(" ")[0]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl gradient-text">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-5xl font-bold text-muted-foreground/20">
                  {selectedProject?.title.split(" ")[0]}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-muted-foreground">{selectedProject?.description}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject?.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                {selectedProject?.githubUrl && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject?.liveUrl && (
                  <Button asChild className="flex-1 bg-gradient-to-r from-accent to-primary">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
