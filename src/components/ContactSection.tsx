import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Bleib </span>
            <span className="text-gradient">informiert</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Erfahre als Erster, wenn Campmeleon startet.
          </p>

          {/* Contact Info */}
          <div className="glow-border rounded-xl p-8 bg-card/50 backdrop-blur-sm mb-10">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="feature-icon w-12 h-12">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a 
                  href="mailto:lahrchristian@gmail.com" 
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  lahrchristian@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="feature-icon w-12 h-12">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a 
                  href="tel:+4915165181806" 
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  0151 65181806
                </a>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="feature-icon w-12 h-12">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg text-muted-foreground">
                  Freiburg im Breisgau
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a 
            href="mailto:lahrchristian@gmail.com?subject=Campmeleon%20-%20Interesse"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground rounded-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Kontakt aufnehmen</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
