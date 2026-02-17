import healerPortrait from "@/assets/healer-portrait.jpg";

const WhyMeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-sm overflow-hidden shadow-gold">
              <img src={healerPortrait} alt="Praticien énergétique" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
              Pourquoi moi
            </p>
            <h2 className="font-heading text-4xl font-light mb-6 text-foreground">
              Une approche <span className="text-gradient-gold italic">profonde et structurée</span>
            </h2>
            <div className="glow-line w-16 mb-8" />

            <p className="font-body text-foreground/70 leading-relaxed mb-6">
              Je suis formé en énergétique, activation kundalini et lecture vibratoire.
              Mon approche est profonde, structurée et engagée.
            </p>

            <p className="font-body text-foreground/70 leading-relaxed mb-8">
              Chaque accompagnement est unique. Je m'adapte à ton rythme, tes besoins
              et ton niveau d'ouverture énergétique pour créer une transformation
              durable et intégrée.
            </p>

            <div className="space-y-4">
              {[
                "Énergétique & activation kundalini",
                "Lecture vibratoire & astrologie",
                "Protocoles de transformation structurés",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
