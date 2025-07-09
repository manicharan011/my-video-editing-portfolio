import { useState } from 'react';
import { Instagram, Linkedin, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/manicharan-khumbham-a8a30429a',
      color: 'hover:text-blue-500 hover:shadow-[0_0_20px] hover:shadow-blue-500/30'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/__mani_charan__',
      color: 'hover:text-pink-500 hover:shadow-[0_0_20px] hover:shadow-pink-500/30'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/919121334847', // <- replace with your real number
      color: 'hover:text-green-500 hover:shadow-[0_0_20px] hover:shadow-green-500/30'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:khumbhammanicharan@gmail.com',
      color: 'hover:text-accent hover:shadow-[0_0_20px] hover:shadow-accent/30'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your video vision to life? Reach me via any platform below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send Me a Message</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3 animate-fade-in">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-green-500 font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px] focus:shadow-primary/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px] focus:shadow-primary/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px] focus:shadow-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, and vision..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-muted cursor-not-allowed' 
                      : 'bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px] hover:shadow-primary/50'
                  } text-primary-foreground`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Connect With Me</h3>

                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always excited to collaborate on creative and tech projects — whether it's short-form social media content, documentary-style videos, or AI-driven solutions.
                  </p>

                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary animate-pulse" size={20} />
                    <span className="text-foreground">khumbhammanicharan@gmail.com</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageCircle className="text-primary animate-pulse" size={20} />
                    <span className="text-foreground">Available on WhatsApp</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Follow My Work</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`p-4 glass-card rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                        title={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card p-8 rounded-2xl">
                <h4 className="text-lg font-semibold mb-6 text-foreground">Why Work With Me?</h4>
                <div className="space-y-4">
                  {[
                    '✨ 6+ months of professional experience',
                    '🚀 Fast turnaround times',
                    '🎯 Unlimited revisions until perfect',
                    '🤝 Clear communication throughout',
                    '💡 Creative and technical expertise',
                    '📱 Multi-platform optimization'
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="text-muted-foreground opacity-0 animate-[fade-in_0.6s_ease-out_forwards]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
