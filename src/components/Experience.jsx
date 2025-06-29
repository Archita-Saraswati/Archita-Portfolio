
// export default Experience;
// src/components/Experience.tsx
import React from "react";
// import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Nostavia Technologies Pvt. Ltd.",
      role: "Full-Stack Developer Intern",
      duration: "March 2025 – July 2025",
      description: [
             "Built a telehealth dashboard using React, Next.js, TypeScript, Tailwind CSS, and Context API.",
      "Developed a config-driven diagnostic quiz with real-time validation and AI-generated health reports.",
      "Integrated Gemini API for personalized diagnosis and automated doctor routing.",
      "Implemented Socket.IO for real-time interactions and secure session handling via custom React hooks.",
      ],
    },
   
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-entry">
            {/* Glowing circle node */}
            <div className="circle-dot"></div>

            {/* Content card */}
            <div className="experience-card">
              <h3>
                {exp.role} – <span className="company">{exp.company}</span>
              </h3>
              <p className="duration">{exp.duration}</p>
              <ul className="experience-points">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
