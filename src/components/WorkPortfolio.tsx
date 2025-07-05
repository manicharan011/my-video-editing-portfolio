
import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const WorkPortfolio = () => {
  const [activeTab, setActiveTab] = useState('short-form');

  const shortFormWorks = [
    {
      title: 'Tech Review Shorts',
      description: 'Engaging 60-second tech product reviews',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop',
      platform: 'Instagram Reels',
      views: '50K+'
    },
    {
      title: 'Educational Snippets',
      description: 'Bite-sized learning content for students',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop',
      platform: 'YouTube Shorts',
      views: '25K+'
    },
    {
      title: 'Behind the Scenes',
      description: 'Quick glimpses into the editing process',
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=600&fit=crop',
      platform: 'TikTok',
      views: '30K+'
    },
    {
      title: 'AI Tools Showcase',
      description: 'Demonstrating AI editing capabilities',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop',
      platform: 'LinkedIn',
      views: '15K+'
    }
  ];

  const longFormWorks = [
    {
      title: 'Corporate Documentary',
      description: 'Company culture and values storytelling',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      duration: '12 min',
      type: 'Documentary'
    },
    {
      title: 'Educational Series',
      description: 'Multi-part technical tutorial series',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      duration: '8 min',
      type: 'Tutorial'
    },
    {
      title: 'Brand Story',
      description: 'Compelling brand narrative and mission',
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      duration: '15 min',
      type: 'Commercial'
    }
  ];

  return (
    <section id="work" className="py-20 bg-muted/10">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              My Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my portfolio of creative video content across various platforms and formats
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-2 rounded-full">
              <button
                onClick={() => setActiveTab('short-form')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'short-form'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ▶️ Short-form Content
              </button>
              <button
                onClick={() => setActiveTab('long-form')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'long-form'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                🎬 Long-form Content
              </button>
            </div>
          </div>

          {/* Short-form Content */}
          {activeTab === 'short-form' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {shortFormWorks.map((work, index) => (
                <div key={index} className="group glass-card rounded-xl overflow-hidden hover-lift">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play size={48} className="text-white" />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      {work.platform}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{work.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{work.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-accent font-medium">{work.views} views</span>
                      <ExternalLink size={16} className="text-muted-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Long-form Content */}
          {activeTab === 'long-form' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {longFormWorks.map((work, index) => (
                <div key={index} className="group glass-card rounded-xl overflow-hidden hover-lift">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play size={64} className="text-white" />
                    </div>
                    <div className="absolute top-4 right-4 bg-background/80 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {work.duration}
                    </div>
                    <div className="absolute top-4 left-4 bg-accent text-background px-3 py-1 rounded-full text-sm font-medium">
                      {work.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{work.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{work.description}</p>
                    <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300">
                      <span className="font-medium">Watch Full Video</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Create Something Amazing?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate on your next video project and bring your vision to life
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPortfolio;
