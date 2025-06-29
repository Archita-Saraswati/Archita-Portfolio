'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    id: 7,
    type: 'Publication',
    title: 'Top2Vec: Analysis for Unsupervised Topic Discovery',
    organization: 'ICAISI 2025 (Scopus Indexed)',
    date: 'May 2025',
    description: 'Published a research paper on unsupervised topic modeling using Top2Vec, showcasing enhanced clustering and semantic analysis techniques for intelligent text data understanding.',
    link: 'https://drive.google.com/file/d/15TsCIhilQq1ZsVBeA9Mz-R5P4diK6Pks/view',
  },
  {
    id: 1,
    type: 'Certification',
    title: 'Deloitte Australia – Technology Job Simulation',
    organization: 'Forage',
    date: 'Jun 2025',
    description: 'Completed Deloitte’s job simulation program covering software development and problem-solving scenarios.',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_h4gQxREBab2cCJMft_1750876534821_completion_certificate.pdf',
  },
  {
    id: 2,
    type: 'Certification',
    title: 'The Ultimate React Course 2024: React, Next.js, Redux & More',
    organization: 'Udemy',
    date: 'Feb 2025',
    description: 'Mastered React, Redux, Next.js, Tailwind CSS, and component architecture.',
    link: 'https://www.udemy.com/certificate/UC-6ea7b688-45e6-472c-9807-3035d62773da/',
  },
  {
    id: 3,
    type: 'Certification',
    title: 'The Complete 2024 Web Development Bootcamp',
    organization: 'Udemy',
    date: 'Jul 2024',
    description: 'Covered full-stack web development including HTML, CSS, JS, Node.js, MongoDB, and REST APIs.',
    link: 'https://www.udemy.com/certificate/UC-71e16162-9a63-4932-a94d-10d8451753bb/',
  },

  {
    id: 4,
    type: 'Certification',
    title: 'Web Development Fundamentals',
    organization: 'IBM',
    date: 'Date Unknown',
    description: 'Earned foundational certification in web development concepts by IBM.',
    link: 'https://www.credly.com/badges/3df1a408-6a84-4c9a-af6d-e217dd9fc73a/public_url',
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 px-4 container mx-auto text-white">
      <h2 className="text-5xl font-bold mb-6 gradient-title">
        Publications & Certifications 
      </h2>
<p className="text-lg text-muted-foreground mb-10 max-w-3xl text-center mx-auto">
  A curated collection of my verified certifications and published research.
</p>


      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800 transition-all duration-300"
          >
            <span
              className={`inline-block text-xs font-bold tracking-wide px-3 py-1 rounded-full mb-4 ${
                item.type === 'Publication' ? 'bg-blue-500' : 'bg-purple-600'
              }`}
            >
              {item.type}
            </span>
            <h3
              className={`text-xl font-semibold mb-1 ${
                item.type === 'Publication' ? 'text-blue-400' : 'text-white'
              }`}
            >
              {item.title}
            </h3>
            <p className="text-sm text-zinc-400">{item.organization}</p>
            <p className="text-xs text-zinc-500 mb-3">{item.date}</p>
            <p className="text-sm text-zinc-300 mb-4">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:underline text-sm inline-flex items-center"
            >
              View Credential <ExternalLink size={16} className="ml-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
