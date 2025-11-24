import { Button } from "@/components/ui/button";
import { Brain, Dumbbell, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/40 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/30 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-pulse delay-200" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Community Badge */}
        <div className="flex justify-center mb-8 animate-float">
          <div className="inline-flex items-center px-6 py-3 rounded-full border-2 border-accent/30 bg-card/50 backdrop-blur-sm">
            <span className="text-foreground font-medium">Comunidade Betos e Alfredos</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-foreground mb-4">Recupere Seu Corpo.</span>
            <span className="block text-foreground mb-4">Ative Seu Metabolismo.</span>
            <span className="block text-accent">Volte a Governar Sua Vida.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            PAPP – Programa Acelerado de 21 Dias para Emagrecimento e Desintoxicação
          </p>
        </div>

        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-center text-foreground/90 leading-relaxed">
            Você sente que faz dieta, tenta se controlar, mas seu corpo simplesmente não responde?
          </p>
          <p className="text-base md:text-lg text-center text-muted-foreground mt-4 leading-relaxed">
            O problema pode não estar na sua força de vontade — mas no estado em que seu corpo se encontra hoje.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg rounded-full font-semibold shadow-lg hover:shadow-accent/50 transition-all duration-300 animate-glow"
          >
            Quero Me Tornar um Homem Melhor
          </Button>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Saúde Mental</h3>
            </div>
            <p className="text-muted-foreground">Clareza mental e equilíbrio emocional</p>
          </div>

          <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-center gap-4 mb-4">
              <Dumbbell className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Saúde Física</h3>
            </div>
            <p className="text-muted-foreground">Corpo forte e energia renovada</p>
          </div>

          <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Saúde Financeira</h3>
            </div>
            <p className="text-muted-foreground">Propósito e disciplina financeira</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
