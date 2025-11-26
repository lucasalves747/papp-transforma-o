import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--gradient-problem)" }}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Você Se Reconhece Nessa Situação?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">Você sente que:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/30 transition-all duration-300"
            >
              <Check className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-foreground/90 text-base md:text-lg leading-relaxed">{problem}</p>
            </motion.div>
          ))}
        </div>

        {/* resto do bloco vermelho ... */}
      </div>
    </section>
  );
};

export default ProblemSection;
