import projectEcommerce from "@/assets/project-ecommerce.png";
import projectTaskManager from "@/assets/project-taskmanager.png";
import projectBlog from "@/assets/project-blog.png";
import projectFitness from "@/assets/project-fitness.png";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-featured online shopping platform with cart, checkout, and admin dashboard.",
    fullDescription: "Built a comprehensive e-commerce solution featuring product catalog management, shopping cart functionality, secure checkout process, and a powerful admin dashboard for inventory and order management.",
    techStack: ["React", "Java", "MySQL", "CSS"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart with persistent storage",
      "Secure payment integration",
      "Admin dashboard for inventory management",
      "Order tracking system"
    ],
    challenges: [
      "Implemented real-time inventory updates to prevent overselling",
      "Designed scalable database schema for products with variants",
      "Optimized image loading for better performance"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Emmanuel-Nyadzi",
    image: projectEcommerce
  },
  {
    id: "task-management-app",
    title: "Task Management System",
    shortDescription: "A collaborative task management tool with real-time updates and team features.",
    fullDescription: "Developed a project management application that enables teams to organize tasks, track progress, and collaborate effectively with real-time notifications and updates.",
    techStack: ["Vue", "JavaScript", "MySQL", "HTML"],
    features: [
      "Drag-and-drop task boards",
      "Team collaboration features",
      "Real-time notifications",
      "Progress tracking and reporting",
      "File attachments and comments",
      "Deadline reminders"
    ],
    challenges: [
      "Implemented WebSocket connections for real-time updates",
      "Built efficient notification system for team activities",
      "Designed intuitive drag-and-drop interface"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Emmanuel-Nyadzi",
    image: projectTaskManager
  },
  {
    id: "blog-platform",
    title: "Blog & CMS Platform",
    shortDescription: "A modern blogging platform with rich text editing and content management.",
    fullDescription: "Created a full-stack blogging platform with a custom content management system, featuring a rich text editor, media management, and SEO optimization tools.",
    techStack: ["React", "JavaScript", "MySQL", "CSS"],
    features: [
      "Rich text editor with media embedding",
      "Category and tag management",
      "SEO optimization tools",
      "Comment system with moderation",
      "Analytics dashboard",
      "Social media sharing"
    ],
    challenges: [
      "Built custom rich text editor with image uploads",
      "Implemented efficient content search with full-text indexing",
      "Optimized for SEO with dynamic meta tags"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Emmanuel-Nyadzi",
    image: projectBlog
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracking App",
    shortDescription: "A comprehensive fitness app for tracking workouts, nutrition, and progress.",
    fullDescription: "Designed and developed a fitness tracking application that helps users monitor their workouts, track nutrition intake, set goals, and visualize their progress over time.",
    techStack: ["React", "Java", "MySQL", "HTML", "CSS"],
    features: [
      "Workout logging and history",
      "Nutrition tracking with calorie counter",
      "Goal setting and progress charts",
      "Exercise library with instructions",
      "Weekly/monthly reports",
      "Social features for motivation"
    ],
    challenges: [
      "Created comprehensive exercise database with categories",
      "Built data visualization for progress tracking",
      "Implemented smart goal recommendations"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Emmanuel-Nyadzi",
    image: projectFitness
  }
];
