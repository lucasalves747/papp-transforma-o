import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WhatsIncluded = () => {
  const features = [
    "Acesso à Comunidade Exclusiva PAPP no WhatsApp",
    "Acompanhamento Diário do Dr. Santiago Vecina",
    "Ebook Completo: Cardápio Detalhado para os 21 Dias",
    "Guia Prático: Lista de Alimentos Permitidos",
    "Alerta Vermelho: Lista de Alimentos Proibidos",
    "Manual Detox PAPP",
    "Guia dos Desafios Diários",
    "Ebook Bônus: Receitas Deliciosas de Doces Sem Açúcar"
  ];

  return (
    <section
      className="py-20 md:py-24 px-1 relative"
      style={{ background: "var(--gradient-included)" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* TÍTULO */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Um Único Lugar Com Tudo Que Você Precisa Para Evoluir
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* LISTA DE FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.10, ease: "easeOut" }}
                className="
                  flex items-start gap-3 
                  p-3 md:p-4 
                  rounded-lg border border-accent/20 
                  bg-accent/5
                "
              >
                <Check className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground/90 font-medium text-sm md:text-base leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* GARANTIA + BOX DE PREÇO */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              *Você tem 7 Dias de Garantia para testar nosso programa*
            </p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="
                p-6 md:p-8 
                rounded-2xl border-2 border-accent 
                bg-gradient-to-br from-accent/10 to-transparent 
                backdrop-blur-sm
                mb-10
              "
            >
              <p className="text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                Comece sua transformação investindo apenas
              </p>

              <p className="text-4xl md:text-5xl font-bold text-accent mb-6">
                2 dólares por dia
              </p>

              <Button
                size="lg"
                className="
                  bg-accent hover:bg-accent/90 
                  text-accent-foreground 
                  px-10 py-5 md:px-12 md:py-6 
                  text-lg md:text-xl 
                  rounded-full font-bold 
                  shadow-xl hover:shadow-accent/50 
                  transition-all duration-300 
                  w-full md:w-auto
                  animate-glow
                "
              >
                QUERO COMEÇAR AGORA!
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
