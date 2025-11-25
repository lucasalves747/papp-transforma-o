import { Button } from "@/components/ui/button";
import { Brain, Dumbbell, TrendingUp } from "lucide-react";
import s from "@/assets/dr-santiago.png"
import celebro from "@/assets/celebro.png"

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-10 w-2 h-2 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "14s", animationDelay: "0s", top: "100%" }}
        />

        <div
          className="absolute right-20 w-1 h-1 bg-accent/70 rounded-full animate-float-up"
          style={{ animationDuration: "10s", animationDelay: "2s", top: "100%" }}
        />

        <div
          className="absolute left-1/4 w-2 h-2 bg-accent/60 rounded-full animate-float-up"
          style={{ animationDuration: "18s", animationDelay: "4s", top: "100%" }}
        />

        <div
          className="absolute right-1/3 w-1 h-1 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "12s", animationDelay: "1s", top: "100%" }}
        />

        <div
          className="absolute right-10 w-2 h-2 bg-accent/70 rounded-full animate-float-up"
          style={{ animationDuration: "14s", animationDelay: "3s", top: "100%" }}
        />

         <div
          className="absolute left-10 w-2 h-2 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "15s", animationDelay: "2s", top: "100%" }}
        />

        <div
          className="absolute right-10 w-1 h-1 bg-accent/70 rounded-full animate-float-up"
          style={{ animationDuration: "9s", animationDelay: "1s", top: "100%" }}
        />

        <div
          className="absolute left-1/3 w-2 h-2 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "11s", animationDelay: "3s", top: "100%" }}
        />

        <div
          className="absolute right-1/2 w-1 h-1 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "12s", animationDelay: "0s", top: "100%" }}
        />

        <div
          className="absolute right-20 w-2 h-2 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "16s", animationDelay: "1s", top: "100%" }}
        />

        <div
          className="absolute left-1/2 w-2 h-2 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "11s", animationDelay: "3s", top: "100%" }}
        />

        <div
          className="absolute right-1/5 w-1 h-1 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "12s", animationDelay: "0s", top: "100%" }}
        />

        <div
          className="absolute right-20 w-2 h-2 bg-accent/80 rounded-full animate-float-up"
          style={{ animationDuration: "16s", animationDelay: "1s", top: "100%" }}
        />

      </div>


      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground mb-4">Recupere Seu Corpo.</span>
            <span className="block text-foreground mb-4">Ative Seu Metabolismo.</span>
            <span className="block text-accent">Volte a Governar Sua Vida.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            PAPP - Programa Acelerado de 21 Dias para Emagrecimento e Desintoxicação
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
