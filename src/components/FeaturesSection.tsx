import { Compass, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Smart Leveling",
    description: "Nie wieder Keile. Ein Klick, und du stehst gerade.",
    teaser: "Präzision trifft auf intelligente Steuerung."
  },
  {
    icon: Shield,
    title: "Guardian Mode",
    description: "Wenn du schläfst, wacht Campmeleon.",
    teaser: "Gas- & Einbruchschutz für absolute Sicherheit."
  },
  {
    icon: Smartphone,
    title: "App Control",
    description: "Volle Kontrolle über dein Smartphone.",
    teaser: "Steuere alles bequem von der Couch aus."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technologie</span>
            <span className="text-foreground"> der Zukunft</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entdecke, was Campmeleon für dich tun kann
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-primary mb-2">
                {feature.description}
              </p>

              {/* Teaser */}
              <p className="text-sm text-muted-foreground">
                {feature.teaser}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
