import heroImage from "@/assets/hero-camper.png";

const HeroSection = () => {
  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Campmeleon Smart Leveling System" 
          className="w-full h-full object-cover object-[70%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="animate-fade-up mb-6">
            <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-full glow-border">
              Coming Soon
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Dein Camper.</span>
            <br />
            <span className="text-gradient glow-text">Perfekt im Lot.</span>
          </h1>

          {/* Subline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Das intelligente Nivellierungssystem für deinen Camper.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up-delay-3">
            <a 
              href="#kontakt"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground rounded-lg"
            >
              <span>Benachrichtigen lassen</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
