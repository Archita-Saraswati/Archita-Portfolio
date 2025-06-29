

import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Career Coach',
    description: 'Personalized job guidance app using Google Generative AI and Clerk authentication.',
    image: '/projects/project1.png',
    tags: ['Next.js', 'Prisma', 'Clerk', 'TailwindCSS'],
    demoUrl: 'https://prepai-dxw2zjahz-archita-saraswatis-projects.vercel.app/',
    githubUrl: 'https://github.com/Archita-Saraswati/AI-Powered-Conversational-and-Visual-Generation-System',
  },
{
  id: 2,
  title: 'VehicleAI: AI Car Marketplace',
  description: 'Modern full-stack marketplace using Gemini Vision API to extract car details, with test drive booking, wishlist, and admin dashboard.',
  image: '/projects/project2.png', // Make sure to add this image in your public/projects folder
  tags: ['Next.js 15', 'Tailwind CSS', 'Prisma', 'Supabase', 'Gemini AI'],
  demoUrl: 'https://ai-car-marketplace-6402qw0ai-archita-saraswatis-projects.vercel.app/',
  githubUrl: 'https://github.com/Archita-Saraswati/ai-car-marketplace',
},

  {
    id: 3,
    title: 'Real-Time Chat App',
    description: 'MERN stack chat platform with Socket.IO, JWT auth, and protected messaging routes.',
    image: '/projects/project3.png',
    tags: ['MERN', 'Socket.IO', 'JWT', 'TailwindCSS'],
    demoUrl: 'https://convowise-frontend.onrender.com/',
    githubUrl: 'https://github.com/Archita-Saraswati/Real-Time-Communication-Platform',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">
        Featured <span className="highlight">Projects</span>
      </h2>
      <p className="projects-subtext">
        A showcase of my most impactful full-stack and AI-powered projects. Each reflects my passion for clean code, seamless UX, and modern web tech.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.demoUrl} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={18} /></a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-button-container">
        <a
          href="https://github.com/Archita-Saraswati"
          target="_blank"
          className="projects-button"
        >
          Check My GitHub <Github size={16} />
        </a>
      </div>
    </section>
  );
};
