import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/skills";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">What I work with</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-card rounded-xl p-6 card-shadow hover:card-hover-shadow transition-all duration-300 flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}15` }}
              >
                <skill.icon
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <span className="text-sm text-muted-foreground mt-2">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
