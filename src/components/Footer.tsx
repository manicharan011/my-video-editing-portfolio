
import { Instagram, Linkedin, Mail, MessageCircle, Download, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#instagram', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: MessageCircle, href: '#whatsapp', label: 'WhatsApp', color: 'hover:text-green-500' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-accent' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px] hover:shadow-primary/50 group"
      >
        <ArrowUp size={20} className="group-hover:animate-bounce" />
      </button>

      <div className="section-padding py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold gradient-text mb-4">
                Khumbham Mani Charan
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Creative video editor and storyteller passionate about bringing ideas to life 
                through the power of visual narrative and cutting-edge technology.
              </p>
              <button
                onClick={() => {
                  // Handle resume download
                  console.log('Download resume');
                }}
                className="group flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px] hover:shadow-primary/50"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 opacity-0 animate-[fade-in_0.6s_ease-out_forwards]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center space-x-3 text-muted-foreground transition-all duration-300 hover:translate-x-1 ${social.color} opacity-0 animate-[fade-in_0.6s_ease-out_forwards]`}
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <social.icon size={18} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">
                © {currentYear} Khumbham Mani Charan. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground opacity-0 animate-[fade-in_1s_ease-out_0.7s_forwards]">
                <span>Made with ❤️ for creative storytelling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
