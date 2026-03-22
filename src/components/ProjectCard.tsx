import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-hover-shadow transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Link to={`/project/${project.id}`}>
            <Button variant="hero" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
