import { Flame, Heart, Eye, Zap, Shield, Sparkles } from "lucide-react";

const effects = [
  { icon: Heart, text: "Libère les blocages émotionnels" },
  { icon: Flame, text: "Fait remonter les traumas pour les dissoudre" },
  { icon: Eye, text: "Ouvre la conscience" },
  { icon: Zap, text: "Réveille la vitalité" },
  { icon: Shield, text: "Reconnecte au corps" },
  { icon: Sparkles, text: "Fait tomber les illusions" },
];

const KundaliniSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          🌟 Comprendre
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Qu'est-ce que la <span className="text-gradient-gold italic">Kundalini</span> ?
        </h2>
        <div className="glow-line w-24 mx-auto mb-8" />

        <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
          La Kundalini est une énergie vitale présente en chacun de nous. Elle ne vous donne pas quelque chose de nouveau. <span className="text-primary">Elle enlève ce qui empêche d'être vous.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {effects.map((e, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-sm border border-border bg-card/40 hover:border-primary/30 hover:shadow-gold transition-all duration-500">
              <e.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-body text-foreground/80">{e.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-card/60 border border-border rounded-sm p-8 max-w-3xl mx-auto">
          <p className="font-body text-foreground/70 leading-relaxed mb-4">
            Et parfois, cela implique de grandes remises en question : votre travail, vos relations, vos choix de vie, votre identité, vos croyances.
          </p>
          <p className="font-heading text-xl italic text-foreground/90">
            Ce n'est pas une fuite du monde. C'est une <span className="text-gradient-gold">sortie des conditionnements</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KundaliniSection;
