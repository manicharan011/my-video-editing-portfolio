
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Adobe Premiere Pro', level: 95 },
    { name: 'After Effects', level: 90 },
    { name: 'CapCut', level: 88 },
    { name: 'DaVinci Resolve', level: 85 },
    { name: 'AI Tools (Runway, Pika)', level: 92 },
    { name: 'Motion Graphics', level: 87 },
    { name: 'Color Grading', level: 90 },
    { name: 'Audio Mixing', level: 83 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/10" ref={sectionRef}>
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 gradient-text transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              About Me
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Creative Storyteller & Tech Enthusiast
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a B.Tech CSE student at IIIT Basar with a passion for AI, storytelling, and powerful visuals.
                  With 6+ months of hands-on experience in documentary-style video editing, 3D effects, and AI-powered tools, 
                  I bring ideas to life on screen.
                </p>
                
                <p>
                  My journey combines technical expertise with creative vision, allowing me to leverage cutting-edge 
                  AI tools like Runway and Pika alongside traditional editing software to create content that 
                  not only captures attention but also resonates with audiences on an emotional level.
                </p>
                
                <p>
                  From viral social media content to comprehensive documentaries, I specialize in crafting 
                  narratives that engage, inspire, and deliver results for creators, startups, and brands.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="glass-card p-8 rounded-2xl">
                <h4 className="text-xl font-semibold mb-6 text-foreground">
                  Skills & Expertise
                </h4>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div 
                          className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${600 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">Experience Highlight</h5>
                  <p className="text-sm text-muted-foreground">
                    Edited 30+ videos for creators, startups, and brands with expertise in documentary-style editing, 
                    3D visual effects, and AI-powered content creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
