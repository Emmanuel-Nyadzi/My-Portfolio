import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Layout, MapPin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/data/personal";
import profilePhoto from "@/assets/profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Building responsive, interactive UIs with React & Vue",
      number: "01",
    },
    {
      icon: Code2,
      title: "Backend Development",
      description: "Creating robust APIs and server-side logic with Java",
      number: "02",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing efficient MySQL database architectures",
      number: "03",
    },
  ];

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-40 relative overflow-hidden" ref={ref}>

      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-8 lg:px-16 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-16 xl:gap-20 items-start">

          {/* LEFT — Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-10"
          >
            {/* 
              Outermost div: just for layout flow + bottom padding for the badge overflow 
              overflow-visible so badge and icon can poke out
            */}
            <div style={{ position: "relative", width: "288px", paddingBottom: "28px" }}>

              {/* Glow layer — sits behind photo, same size as photo */}
              <div style={{
                position: "absolute",
                top: "6px",
                left: "6px",
                right: "6px",
                height: "370px",
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.4))",
                borderRadius: "24px",
                filter: "blur(16px)",
                opacity: 0.65,
                zIndex: 0,
              }} />

              {/* Photo box */}
              <div style={{
                position: "relative",
                width: "100%",
                height: "370px",
                borderRadius: "24px",
                overflow: "hidden",
                zIndex: 1,
              }}>
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
                {/* Subtle bottom overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent 60%)",
                }} />
              </div>

              {/* Code icon — top right corner OF THE PHOTO */}
              <div style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "hsl(var(--primary))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}>
                <Code2 style={{ width: "16px", height: "16px", color: "white" }} />
              </div>

              {/* Name badge — bottom center, overlapping photo bottom edge */}
              <div style={{
                position: "absolute",
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                padding: "10px 24px",
                borderRadius: "16px",
                whiteSpace: "nowrap",
                zIndex: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}>
                <p style={{ fontWeight: 700, fontSize: "14px", color: "hsl(var(--foreground))", margin: 0 }}>{personalInfo.name}</p>
                <p style={{ fontSize: "12px", color: "hsl(var(--primary))", margin: "2px 0 0 0" }}>{personalInfo.title}</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-5 w-full">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex-1 bg-card rounded-2xl py-5 px-3 text-center card-shadow border border-border/50"
                >
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full bg-card rounded-2xl p-6 card-shadow border border-border/50 space-y-5"
            >
              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Kumasi, Ghana</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground truncate">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{personalInfo.phone[0]}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Bio + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-10"
          >
            {/* Bio Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
              <div className="relative bg-card rounded-3xl p-10 card-shadow border border-border/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest px-1">My Story</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
                </div>
                {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-loose mb-6 last:mb-0 text-[15px]">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
                  className="group relative bg-card rounded-2xl p-7 card-shadow border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl font-black text-foreground/5 group-hover:text-primary/10 transition-colors duration-300 select-none">
                    {item.number}
                  </span>
                  <div className="flex items-center gap-6 relative z-10">
                    <div
                      className="flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                      style={{ width: "52px", height: "52px" }}
                    >
                      <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-primary rounded-l-2xl transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
