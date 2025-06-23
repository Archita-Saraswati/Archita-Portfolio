

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
} from "lucide-react";
import { useState } from "react";


export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thank you for your message. I'll get back to you soon.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>
        Get In <span>Touch</span>
      </h2>
      <p>
        Have an idea, opportunity, or just want to say hi? Let’s connect or collaborate on something cool!
      </p>

      <div className="contact-container">
        {/* Left - Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <Mail size={20} />
            <div>
              <h4>Email</h4>
              <a href="mailto:architasaraswati@gmail.com">architasaraswati@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <Phone size={20} />
            <div>
              <h4>Phone</h4>
              <a href="tel:+919140781005">+91 9140781005</a>
            </div>
          </div>

          <div className="info-item">
            <MapPin size={20} />
            <div>
              <h4>Location</h4>
              <p>Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/archita-saraswati-82b654253/" target="_blank">
              <Linkedin />
            </a>
            <a href="https://github.com/Archita-Saraswati" target="_blank">
              <Github />
            </a>
            <a href="https://x.com/ArchitaSaraswa7" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.75 3h4.54l4.285 5.682L18.57 3h1.878l-5.92 7.668L21.5 21h-4.54l-4.725-6.262L7.43 21H5.553l6.09-7.882L4.75 3Z"/>
              </svg>
            </a>
            
          </div>
        </div>

        {/* Right - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};
