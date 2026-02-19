import { BookOpen, Snowflake, Eye, Footprints, Flame, RotateCcw } from "lucide-react";

const dailyPractices = [
  { icon: Flame, title: "Charge luminique", desc: "Respiration spéciale chaque matin pour densifier l'aura et stabiliser le système nerveux" },
  { icon: Snowflake, title: "Douche froide consciente", desc: "Renforce la discipline intérieure et développe la résilience" },
  { icon: Eye, title: "Reconnexion miroir", desc: "Soutenir votre propre regard, vous accepter, sortir du rejet subtil de soi" },
  { icon: Footprints, title: "Exercices d'ancrage", desc: "Marche consciente, respiration dans le ventre, présence dans le bassin" },
];

const cycle7 = [
  "Reconnexion à soi",
  "Libération émotionnelle",
  "Transformation des pensées limitantes",
  "Pardon",
  "Activation de la nouvelle identité",
  "Libération des peurs",
  "Engagement et ancrage",
];

const results = [
  "Plus d'ancrage",
  "Moins de fluctuations émotionnelles",
  "Plus de clarté mentale",
  "Plus de respect de vous-même",
  "Moins d'auto-sabotage",
  "Plus de stabilité énergétique",
  "Plus de courage dans vos décisions",
];

const Programme21Section = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
          🔥 Programme Signature
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-4 text-foreground">
          Activation de la <span className="text-gradient-gold italic">Souveraineté Intérieure</span>
        </h2>
        <p className="text-center font-heading text-xl text-muted-foreground mb-2">21 jours d'incarnation</p>
        <div className="glow-line w-24 mx-auto mb-8" />

        <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
          Ce programme n'est pas passif. C'est un engagement quotidien qui demande présence, discipline douce, honnêteté et implication. <span className="text-primary">La transformation ne se décrète pas. Elle s'incarne.</span>
        </p>

        {/* Carnet */}
        <div className="bg-card/60 border border-border rounded-sm p-8 mb-16 flex items-start gap-6">
          <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-heading text-xl text-foreground mb-3">Le Carnet de Transformation</h3>
            <p className="font-body text-foreground/70 leading-relaxed">
              Chaque jour, vous notez votre état énergétique, vos émotions, vos résistances, vos prises de conscience et vos changements. L'écriture clarifie, stabilise, rend visible votre évolution et ancre la transformation.
            </p>
          </div>
        </div>

        {/* Daily practices */}
        <h3 className="font-heading text-2xl text-center text-foreground mb-8">Pratiques quotidiennes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {dailyPractices.map((p, i) => (
            <div key={i} className="p-6 rounded-sm border border-border bg-card/40 hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-3">
                <p.icon className="w-5 h-5 text-primary" />
                <h4 className="font-heading text-lg text-foreground">{p.title}</h4>
              </div>
              <p className="font-body text-sm text-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Cycle 7 steps */}
        <h3 className="font-heading text-2xl text-center text-foreground mb-8 flex items-center justify-center gap-3">
          <RotateCcw className="w-5 h-5 text-primary" />
          Le Cycle en 7 Étapes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {cycle7.map((step, i) => (
            <div key={i} className="text-center p-4 rounded-sm border border-border bg-card/60">
              <span className="font-heading text-2xl text-gradient-gold">J{i + 1}</span>
              <p className="font-body text-xs text-foreground/70 mt-2">{step}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground font-body text-sm mb-16">
          Le premier cycle ouvre. Le deuxième approfondit. Le troisième installe.
        </p>

        {/* Results */}
        <h3 className="font-heading text-2xl text-center text-foreground mb-8">Résultats observés</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {results.map((r, i) => (
            <span key={i} className="px-5 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary font-body text-sm">
              {r}
            </span>
          ))}
        </div>

        {/* Accompaniment */}
        <div className="bg-card/60 border border-primary/20 rounded-sm p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-heading text-xl text-foreground mb-4">Mon accompagnement</h3>
          <p className="font-body text-foreground/70 leading-relaxed mb-4">
            Je suis présent en visio, en suivi WhatsApp, en ajustements énergétiques et en réponses à vos questions. Je prends des nouvelles. Je suis engagé dans votre évolution.
          </p>
          <p className="font-body text-foreground/70 leading-relaxed">
            Pendant 21 jours, nous travaillons ensemble. Puis 1 mois d'intégration. Et si nécessaire, je reste disponible jusqu'à 3 mois après.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programme21Section;
