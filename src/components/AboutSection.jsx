

import { Briefcase, Code } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer & AI Explorer
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in full-stack development and a keen eye for detail, I specialize in crafting responsive, intelligent, and scalable web applications. From AI-powered career tools to real-time chat platforms, I bring ideas to life using React, Next.js, Node.js, Prisma, and modern APIs.
            </p>

            <p className="text-muted-foreground">
              I love solving real-world problems with elegant code and intuitive UI. Whether integrating AI for smarter UX or building secure, performant systems, I’m always exploring new tech to stay ahead in the ever-evolving dev landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              {/* <a
                // href="https://drive.google.com/file/d/1N1Q_J91z6luJnUHMmIaxSsQuAUC71k8s/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="gradient-border p-6 card-hover transform hover:-translate-y-2 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building intelligent, scalable, and real-time web apps using React, Next.js, Node.js, Prisma, and modern APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover transform hover:-translate-y-2 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Ownership</h4>
                  <p className="text-muted-foreground">
                    Driving full-stack projects end-to-end—from planning and development to deployment—while ensuring clean architecture and real-time performance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
