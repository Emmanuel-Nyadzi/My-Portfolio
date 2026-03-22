import { Heart } from "lucide-react";
import { personalInfo } from "@/data/personal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} <span className="font-semibold text-foreground">{personalInfo.name}</span>. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>using React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
