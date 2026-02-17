import { Milestone, Leaf, Zap, Flame, Crown } from "lucide-react";

const milestones = [
  {
    icon: Leaf,
    title: "Nettoyage & Stabilisation",
    items: ["Libération des blocages", "Bannissement des énergies parasites", "Travail sur l'ancrage"],
    results: ["Moins de fatigue", "Moins de confusion", "Plus de stabilité émotionnelle"],
  },
  {
    icon: Zap,
    title: "Activation contrôlée",
    items: ["Activation progressive kundalini", "Expansion du champ énergétique", "Travail sur les peurs inconscientes"],
    results: ["Intensité énergétique ressentie", "Puissance maîtrisée", "Moins de résistance intérieure"],
  },
  {
    icon: Flame,
    title: "Transformation 21 jours",
    items: ["Exercices quotidiens", "Reprogrammation identitaire", "Activation feu sacré"],
    results: ["Nouvelle posture", "Décisions plus affirmées", "Clarté de mission"],
  },
  {
    icon: Crown,
    title: "Intégration",
    items: ["Stabilisation", "Vision long terme", "Alignement mission / actions"],
    results: ["Stabilité constante", "Sentiment de souveraineté", "Passage à l'action concret"],
  },
];

const JourneySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          Le parcours
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Les jalons de ta <span className="text-gradient-gold italic">transformation</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-16" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-8 shadow-gold z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="p-6 rounded-sm border border-border bg-card/60 hover:border-primary/20 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <m.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-heading text-xl text-foreground">{m.title}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {m.items.map((item, j) => (
                        <li key={j} className="font-body text-sm text-foreground/70">• {item}</li>
                      ))}
                    </ul>
                    <div className="border-t border-border pt-4">
                      <p className="font-body text-xs text-primary tracking-wider uppercase mb-2">Résultats</p>
                      <div className="flex flex-wrap gap-2">
                        {m.results.map((r, j) => (
                          <span key={j} className="text-xs font-body px-3 py-1 rounded-sm bg-primary/10 text-primary">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
