


import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  // frontend
  { name: "HTML5 & CSS3", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js 13+ (App Router)", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "ShadCN/UI", level: 85, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },
  // backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "Prisma ORM", level: 85, category: "backend" },
  { name: "RESTful APIs", level: 90, category: "backend" },
  { name: "Authentication (Clerk, JWT, OAuth)", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "NeonDB (Postgres Cloud)", level: 70, category: "backend" },
  // tools
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Vite", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Socket.IO & WebSockets", level: 80, category: "tools" },
  { name: "Google Generative AI (Gemini)", level: 80, category: "tools" },
  { name: "CI/CD (Vercel, Render)", level: 80, category: "tools" },
  { name: "Zustand / React Hook Form / Zod", level: 75, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-background text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300",
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-primary text-white shadow-md"
                  : "border-gray-600 text-gray-400 hover:border-primary hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-[0_0_20px_#7F5AF0] transition-all duration-300"
            >
              <div className="flex justify-between mb-3">
                <h4 className="font-medium text-lg">{skill.name}</h4>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glows */}
      <div className="absolute -z-10 top-16 left-10 w-72 h-72 bg-purple-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute -z-10 bottom-10 right-16 w-72 h-72 bg-indigo-400 opacity-10 blur-3xl rounded-full"></div>
    </section>
  );
};
