
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "TechTalks YouTube",
      text: "Charan delivers stunning edits with quick turnaround and creativity. His understanding of storytelling transformed our video content completely.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Marketing Director",
      company: "StartupHub",
      text: "Working with Charan was a game-changer for our brand videos. His AI-powered approach and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Filmmaker",
      company: "Independent",
      text: "Exceptional talent in documentary editing. Charan brought our vision to life with cinematic quality and professional precision.",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "TechTalks", logo: "🎬" },
    { name: "StartupHub", logo: "🚀" },
    { name: "CreativeStudio", logo: "🎨" },
    { name: "BrandForge", logo: "⚡" },
    { name: "MediaFlow", logo: "📺" },
    { name: "VisualCraft", logo: "✨" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Clients & Testimonials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* Client Logos */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((client, index) => (
                <div
                  key={client.name}
                  className="group glass-card p-6 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {client.logo}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="glass-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full glass-card hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronLeft size={24} className="text-primary" />
                </button>
                
                <Quote size={48} className="text-primary/30" />
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full glass-card hover:bg-primary/20 transition-colors duration-300"
                >
                  <ChevronRight size={24} className="text-primary" />
                </button>
              </div>

              <div className="text-center">
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
