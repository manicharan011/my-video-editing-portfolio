 const Experience = () => {
  const experiences = [
    {
      period: 'Feb 2025 – Present',
      role: 'Video Editor',
      company: 'E-Cell, RGUKT Basar',
      description:
        'Editing promotional and documentary content for the official Instagram page of E-Cell RGUKT Basar, enhancing visual identity and engagement.',
      highlights: [
        'Optimized content for Reels, carousels, and IGTV',
        'Used CapCut, After Effects, Firefly AI, and Adobe Suite',
        'Boosted post reach and engagement on Instagram'
      ]
    },
    {
      period: 'Oct 2024 – Feb 2025',
      role: 'Social Media Manager',
      company: 'E-Cell, RGUKT Basar',
      description:
        'Managed strategy, content scheduling, and growth for the E-Cell Instagram page. Developed consistent branding and campaign coordination.',
      highlights: [
        'Increased followers and engagement rate',
        'Led festival & hackathon promotion campaigns',
        'Built monthly content calendars with creative themes'
      ]
    },
    {
      period: '2024 – Aug 2025',
      role: 'Freelance Video Editor',
      company: 'Self-employed',
      description:
        'Worked with various clients to deliver short-form and long-form video content. Specialized in AI-assisted editing and professional storytelling.',
      highlights: [
        'Tools: CapCut, After Effects, Firefly, Adobe Premiere Pro',
        'Created content for startups and content creators',
        'Managed full editing pipeline from raw to final'
      ]
    },
    {
      period: 'Jan 2025 – Feb 2025',
      role: 'Video Editing Intern',
      company: 'KMC Media Tech Solutions',
      description:
        'Completed a 1-month internship at a professional video editing agency, contributing to client-based social and commercial edits.',
      highlights: [
        'Worked with a creative team on fast-paced deadlines',
        'Edited commercial reels and story-driven promos',
        'Gained experience with client briefs and revisions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                    } md:w-1/2`}
                  >
                    <div className="glass-card p-6 rounded-xl hover-lift">
                      <div className="text-primary font-semibold text-sm mb-2">
                        {exp.period}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>

                      <h4 className="text-accent font-medium mb-4">
                        {exp.company}
                      </h4>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '1+ Year', label: 'Experience' },
              { number: '15+', label: 'Happy Clients' },
              { number: '100%', label: 'Quality Delivered' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
