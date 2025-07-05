
import { Instagram, Linkedin, Mail, MessageCircle, Download } from 'lucide-react';

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
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: MessageCircle, href: '#whatsapp', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border">
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
                className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
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
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
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
              <div className="text-muted-foreground text-sm">
                © {currentYear} Khumbham Mani Charan. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
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
