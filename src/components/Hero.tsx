 import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ['Video Editor', 'E-Cell RGUKT Basar Editor', 'AI Tools Expert', 'Storyteller'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="section-padding relative z-10 text-center max-w-6xl">
        <div className="animate-fade-in flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Photo */}
          <div className="opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards] mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-300 bg-background p-2">
                <img
                  src="https://drive.google.com/uc?export=view&id=1AmXhNZlpZUKrZqWA69s5r4vcymEUtHDy"
                  alt="Khumbham Mani Charan - Video Editor"
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]">
              Hey, I'm{' '}
              <span className="gradient-text">Khumbham Mani Charan</span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 h-12 opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
              <span className="text-primary font-semibold">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed opacity-0 animate-[slide-in-from-bottom_1s_ease-out_0.8s_forwards]">
              Transforming raw footage into stories that inspire — from reels to documentaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
              <button
                onClick={scrollToPortfolio}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px] hover:shadow-primary/50 relative overflow-hidden"
              >
                <span className="relative z-10">View Portfolio →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px] hover:shadow-primary/30"
              >
                <span className="relative z-10">Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
