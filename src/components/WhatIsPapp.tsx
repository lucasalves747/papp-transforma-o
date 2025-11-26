import { Flame, Zap, Trophy } from "lucide-react";

const WhatIsPapp = () => {
  const pillars = [
    {
      icon: Flame,
      title: "Desintoxicar",
      description: "Elimine as toxinas que impedem seu corpo de funcionar como deveria.",
    },
    {
      icon: Zap,
      title: "Acelerar o Metabolismo",
      description: "Ative o metabolismo e transforme seu corpo em uma máquina de queima.",
    },
    {
      icon: Trophy,
      title: "Reequilibrar o Corpo",
      description: "Crie hábitos simples e possíveis que mantêm seu progresso mesmo depois dos 21 dias.",
    },
  ];

  return (
    <section
      className="py-20 px-4 relative"
      style={{ background: "var(--gradient-what)" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* TÍTULO PRINCIPAL */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            O Que É o PAPP?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            O PAPP é um programa de 21 dias criado para desinflamar seu corpo, reativar seu metabolismo 
            e fazer você voltar a ter energia, leveza e resultados de verdade.
          </p>
        </div>

        {/* PILARES */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-accent mb-10 md:mb-12">
            Os 3 Pilares da Transformação
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="
                    group relative p-5 md:p-8 
                    rounded-2xl border border-border/50 
                    bg-card/50 backdrop-blur-sm
                    hover:border-accent/50 transition-all duration-300
                    hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2
                  "
                >
                  <div className="inline-flex p-3 md:p-4 rounded-xl bg-accent/10 mb-5 md:mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                    {pillar.title}
                  </h4>

                  <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BLOCO FINAL */}
        <div className="
          max-w-4xl mx-auto 
          p-6 md:p-14 
          rounded-2xl border-2 border-accent/30 
          bg-gradient-to-br from-accent/5 to-transparent 
          backdrop-blur-sm
        ">
          <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
            <span className="text-3xl md:text-4xl">💡</span>
            <h3 className="text-xl md:text-3xl font-bold text-foreground leading-tight">
              Não É Sobre Fazer Mais Uma Dieta Ou Passar Fome
            </h3>
          </div>

          <p className="text-lg md:text-xl text-foreground/90 mb-4 md:mb-6 leading-relaxed">
            É sobre recuperar o controle do seu corpo.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
            É sobre se tornar a pessoa cujo corpo, energia e resultados começam a refletir quem você 
            realmente é, de forma natural.
          </p>

          <ul className="space-y-3 md:space-y-4">
            {[
              "Ter clareza para saber exatamente o que fazer todos os dias",
              "Sair da ansiedade e parar de se sabotar",
              "Construir um corpo e uma mente fortes de verdade",
              "Viver com propósito, direção e constância",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent text-lg md:text-xl mt-1">•</span>
                <span className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhatIsPapp;
