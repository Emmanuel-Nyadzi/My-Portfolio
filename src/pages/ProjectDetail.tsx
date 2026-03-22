import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useState, useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                  <p className="text-lg text-muted-foreground">{project.fullDescription}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-card rounded-2xl p-8 card-shadow">
                  <h2 className="text-xl font-semibold mb-6">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="bg-card rounded-2xl p-8 card-shadow">
                  <h2 className="text-xl font-semibold mb-6">Challenges & Solutions</h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProjectDetail;
