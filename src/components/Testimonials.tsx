import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Costa",
      text: "comecei com 71.1 em Maio hoje estou com 65k emagrecendo aos poucos sem retornar os kilos, voltei a me reeducar em relação aos alimentos estou feliz",
    },
    {
      name: "João Ribeiro",
      text: "O PAPP tem sido essencial para o meu emagrecimento, especialmente por eu ganhar peso com facilidade. Desde o primeiro ciclo, melhorei minhas escolhas alimentares e já eliminei 7 kg. Agora, sinto que meu corpo se adaptou ao ritmo atual e preciso intensificar as atividades físicas para continuar avançando.",
    },
    {
      name: "Carla Mendes",
      text: "Hoje com 38 kgs a menos venho agradecer pela oportunidade que o senhor nos oferece de mudar de vida e ver que com determinação tudo é possivel",
    },
  ];

  return (
    <section
      className="py-20 px-4 relative"
      style={{ background: "var(--gradient-testimonials)" }}
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* TÍTULO */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            O Programa Que Já Transformou
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-accent">
            Mais de 3000 Pessoas
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 md:mt-6">
            Elas conseguiram, você também pode!
          </p>
        </div>

        {/* TESTEMUNHOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="p-4 md:p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              {/* Nome */}
              <p className="font-semibold text-base md:text-lg text-foreground mb-2">
                {item.name}
              </p>

              {/* Estrelas */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="text-yellow-500 fill-yellow-500 md:size-18"
                  />
                ))}
              </div>

              {/* Texto */}
              <p className="text-foreground/80 text-base leading-relaxed md:text-sm">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
