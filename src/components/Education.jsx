// src/components/Education.jsx
import React from "react";
// import "../styles/Education.css";

const educationData = [
  {
    title: "B.Tech in Computer Science & Technology",
    org: "Amity University, Lucknow",
    duration: "2022 – 2026",
  },
  {
    title: "Senior Secondary (PCM + CS)",
    org: "Lucknow Public School",
    duration: "2020 – 2022",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* <h2>🎓 Education</h2> */}
            <h2> Education</h2>

      <p className="education-subtitle">
        A glimpse into my academic journey and qualifications.
      </p>

      <div className="education-container">
        {educationData.map((item, index) => (
          <div key={index} className="education-entry">
            <div className="education-dot"></div>
            <div className="education-card">
              <h3>{item.title}</h3>
              <p className="org">{item.org}</p>
              <p className="duration">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
