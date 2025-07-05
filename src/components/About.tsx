
const About = () => {
  const skills = [
    'Adobe Premiere Pro',
    'After Effects',
    'CapCut',
    'DaVinci Resolve',
    'AI Editing Tools',
    'Motion Graphics',
    'Color Grading',
    'Audio Mixing'
  ];

  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Creative Storyteller & Tech Enthusiast
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a B.Tech Computer Science Engineering student with an insatiable passion for 
                  creative storytelling and cutting-edge technology. My journey into video editing 
                  began with a fascination for how stories can be transformed through the magic of 
                  post-production.
                </p>
                
                <p>
                  With a deep interest in AI and its applications in creative fields, I blend 
                  traditional editing techniques with innovative AI-powered tools to create 
                  content that not only captures attention but also resonates with audiences 
                  on an emotional level.
                </p>
                
                <p>
                  Over the past 6+ months, I've honed my skills in documentary editing, 
                  3D visual effects, and both short-form and long-form content creation. 
                  My technical background in computer science gives me a unique edge in 
                  understanding and leveraging the latest editing technologies.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="glass-card p-8 rounded-2xl">
                <h4 className="text-xl font-semibold mb-6 text-foreground">
                  Skills & Expertise
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-muted/50 px-4 py-3 rounded-lg text-center transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">Experience Highlight</h5>
                  <p className="text-sm text-muted-foreground">
                    6+ months specializing in documentary editing, 3D visual effects, 
                    and multi-platform content creation for YouTube, Instagram, and various digital platforms.
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
