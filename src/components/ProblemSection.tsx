import { Check } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Vive cansado, sem energia e não consegue cuidar de si mesmo?",
    "Seu metabolismo está lento e queimar gordura parece impossível?",
    "Lida com inchaço, má digestão e falta de disposição diariamente?",
    "Sua alimentação acaba sendo dominada por fast food, processados, açúcar e álcool por causa da correria?",
    "Já tentou dietas, ficou passando fome, mas o peso sempre volta?",
    "A falta de sono e de atividade física só pioram tudo com o tempo?"
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Você Se Reconhece Nessa Situação?
          </h2>
          <p className="text-xl text-muted-foreground">Você sente que:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/30 transition-all duration-300"
            >
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-foreground/90 leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-2xl border-2 border-destructive/30 bg-destructive/5 backdrop-blur-sm max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-start gap-3">
            <span className="text-destructive text-3xl">⚠️</span>
            Mas Porque Isso Acontece?
          </h3>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Porque o seu corpo está sobrecarregado por toxinas que inflamam o organismo e desaceleram o metabolismo. 
            Isso dificulta a queima de gordura (principalmente na barriga), desestrutura os hormônios e ainda rouba 
            sua energia e disposição no dia a dia.
          </p>
          <p className="text-lg text-accent font-semibold mt-6">
            Se você se identifica com isso, o PAPP foi criado exatamente para você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
