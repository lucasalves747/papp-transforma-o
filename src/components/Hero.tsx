import { Button } from "@/components/ui/button";
import { Brain, Dumbbell, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden px-1 py-16 md:py-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* mantém suas bolinhas animadas */}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-10 md:mb-12 space-y-4 md:space-y-6">
          <h1 className="text-3xl  sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground mb-2 md:mb-4">
              Recupere Seu Corpo.
            </span>
            <span className="block text-foreground mb-2 md:mb-4">
              Ative Seu Metabolismo.
            </span>
            <span className="block text-accent">
              Volte a Governar Sua Vida.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            PAPP - Programa Acelerado de 21 Dias para Emagrecimento e Desintoxicação
          </p>
        </div>

        {/* Problem Statement */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-12 ">
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground/90 leading-relaxed">
            Você sente que faz dieta, tenta se controlar, mas seu corpo simplesmente não responde?
          </p>
          <p className="text-sm sm:text-base md:text-lg text-center text-muted-foreground mt-3 md:mt-4 leading-relaxed">
            O problema pode não estar na sua força de vontade — mas no estado em que seu corpo se encontra hoje.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-14 md:mb-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 md:px-12 md:py-6 text-sm md:text-lg rounded-full font-semibold shadow-lg hover:shadow-accent/50 transition-all duration-300 animate-glow"
          >
            Quero Me Tornar uma pessoa melhor
          </Button>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto ">
          <div className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <Brain className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Saúde Mental</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">Clareza mental e equilíbrio emocional</p>
          </div>

          <div className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <Dumbbell className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Saúde Física</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">Corpo forte e energia renovada</p>
          </div>

          <div className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Saúde Financeira</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">Propósito e disciplina financeira</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
