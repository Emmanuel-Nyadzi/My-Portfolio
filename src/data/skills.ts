import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiVuedotjs, 
  SiMysql,
  SiTailwindcss 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: number; // 1-100
}

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
    level: 95
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572B6",
    level: 90
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 88
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    level: 85
  },
  {
    name: "Vue",
    icon: SiVuedotjs,
    color: "#4FC08D",
    level: 80
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#ED8B00",
    level: 82
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    level: 85
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: 88
  }
];
