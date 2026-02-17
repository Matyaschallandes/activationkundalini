import { Flame, CloudOff, Compass, Zap, HelpCircle } from "lucide-react";

const frustrations = [
  { icon: Flame, text: "Tu ressens des blocages récurrents." },
  { icon: Compass, text: "Tu manques de clarté sur ta mission." },
  { icon: CloudOff, text: "Tu as l'impression de stagner." },
  { icon: Zap, text: "Ton énergie fluctue sans cesse." },
  { icon: HelpCircle, text: "Tu veux plus… mais tu ne sais pas comment." },
];

const FrustrationsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          Ce que tu vis
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Tu te reconnais <span className="text-gradient-gold italic">si…</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-16" />

        <div className="space-y-6">
          {frustrations.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 p-6 rounded-sm border border-border bg-card/40 hover:border-primary/30 hover:shadow-gold transition-all duration-500"
            >
              <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="font-body text-foreground/80 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrustrationsSection;
