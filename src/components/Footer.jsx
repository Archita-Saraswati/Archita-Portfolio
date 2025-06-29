import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer py-6 bg-background border-t border-zinc-800">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <p className="footer-text text-sm text-muted-foreground">
          Made with <span className="animate-pulse text-red-500">❤️</span> by Archita Saraswati
        </p>
        <a href="#hero" className="scroll-top-btn text-primary hover:text-purple-500 transition" aria-label="Back to Top">
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
