import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/ghazalashameem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ghazalashameem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ghazalashameem3365@gmail.com"
              className="hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Ghazala Shameem. All rights reserved.
          </p>
          <p className="text-xs text-center opacity-75">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
