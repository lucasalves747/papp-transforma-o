import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Um Único Lugar Com Tudo Que Você Precisa Para Evoluir
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border border-accent/20 bg-accent/5"
              >
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground/90 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-muted-foreground text-lg mb-8">
              *Você tem 7 Dias de Garantia para testar nosso programa*
            </p>
            
            <div className="p-8 rounded-2xl border-2 border-accent bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm mb-8">
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Comece sua transformação investindo apenas
              </p>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-6">
                2 dólares por dia
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-xl rounded-full font-bold shadow-xl hover:shadow-accent/50 transition-all duration-300 animate-glow"
              >
                QUERO COMEÇAR AGORA!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
