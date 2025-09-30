import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-custom text-center animate-fade-in">
        <div className="mb-6">
          <span className="text-accent font-medium">Hi, my name is</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
          Ghazala Shameem
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-muted-foreground">
          Fullstack Developer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Fullstack Developer passionate about crafting{" "}
          <span className="text-accent font-medium">user-friendly</span> frontend interfaces and building{" "}
          <span className="text-accent font-medium">reliable</span> backend systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-accent to-primary text-lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/ghazalashameem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/ghazalashameem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ghazalashameem3365@gmail.com"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
