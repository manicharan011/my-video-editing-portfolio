 import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const videoEditingTools = [
    { name: 'Adobe Premiere Pro', level: 95 },
    { name: 'After Effects', level: 90 },
    { name: 'CapCut', level: 88 },
    { name: 'DaVinci Resolve', level: 85 },
    { name: 'Motion Graphics', level: 87 },
    { name: 'Color Grading', level: 90 },
    { name: 'Audio Mixing', level: 83 }
  ];

  const aiTools = [
    { name: 'Runway ML', level: 92 },
    { name: 'Pictory', level: 88 },
    { name: 'Wisecut', level: 83 },
    { name: 'Kaiber AI', level: 85 },
    { name: 'Adobe Sensei AI', level: 90 },
    { name: 'AutoPod', level: 82 },
    { name: 'ChatGPT', level: 94 },
    { name: 'Lumen5', level: 84 },
    { name: 'HeyGen', level: 89 },
    { name: 'ElevenLabs', level: 91 },
    { name: 'Descript', level: 90 },
    { name: 'Adobe Firefly', level: 87 },
    { name: 'Canva AI', level: 89 },
    { name: 'Framer / Uizard', level: 85 },
    { name: 'Veed.io', level: 88 }
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

  const renderSkillSection = (title, skills) => (
    <div className="glass-card p-8 rounded-2xl">
      <h4 className="text-xl font-semibold mb-6 text-foreground">{title}</h4>
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
    </div>
  );

  return (
    <section id="about" className="py-20 bg-muted/10" ref={sectionRef}>
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 gradient-text transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>About Me</h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">AI-Powered Editor & Visual Storyteller</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a B.Tech CSE student at IIIT Basar passionate about AI, editing, and content creation.
                  I’ve worked with startups, creators, and student organizations to deliver high-quality videos using both professional software and advanced AI tools.
                </p>
                <p>
                  My workflow blends creativity with speed. Whether it's a viral reel, a product video, or an AI-generated animation — I build visual stories that connect.
                </p>
                <p>
                  Tools I use span Adobe, CapCut, Firefly, Runway ML, ElevenLabs, and more — enabling efficient, beautiful results tailored for modern platforms.
                </p>
              </div>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {renderSkillSection('Video Editing Tools', videoEditingTools)}
              {renderSkillSection('AI Tools & Automation', aiTools)}
              <div className="mt-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <h5 className="font-semibold text-primary mb-2">Experience Highlight</h5>
                <p className="text-sm text-muted-foreground">
                  Edited 50+ videos across startups and student bodies, mastered hybrid editing workflows, and consistently deliver results with tech + creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;