

import { ArrowUp } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Archita Saraswati. All rights reserved.
      </p>

      <a href="#hero" className="scroll-top-btn" aria-label="Back to Top">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
