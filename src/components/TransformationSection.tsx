import transformationBg from "@/assets/transformation-bg.jpg";

const transformations = [
  { before: "Confusion", after: "Clarté" },
  { before: "Instabilité", after: "Ancrage" },
  { before: "Blocage", after: "Activation" },
  { before: "Doute", after: "Autorité intérieure" },
];

const benefits = [
  "Plus de clarté",
  "Plus d'ancrage",
  "Plus de puissance",
  "Plus de confiance",
  "Une direction claire",
];

const TransformationSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={transformationBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          La transformation
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          De blocage à <span className="text-gradient-gold italic">puissance incarnée</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-6" />
        <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-2xl mx-auto">
          Je t'accompagne pour nettoyer, activer et stabiliser ton énergie.
        </p>

        {/* Transformation arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {transformations.map((t, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-sm bg-card/60 border border-border">
              <span className="font-body text-muted-foreground line-through">{t.before}</span>
              <span className="text-primary">→</span>
              <span className="font-heading text-xl text-gradient-gold italic">{t.after}</span>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="text-center">
          <h3 className="font-heading text-2xl text-foreground mb-8">Ce que ça change</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((b, i) => (
              <span key={i} className="px-6 py-3 rounded-sm border border-primary/20 bg-primary/5 text-primary font-body text-sm">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
