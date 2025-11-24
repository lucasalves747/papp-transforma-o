const AboutDoctor = () => {
  return (
    <section className="py-24 px-4 relative" style={{ background: 'var(--gradient-doctor)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quem Vai Te Ajudar Nessa Jornada?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-accent mb-6">Dr. Santiago Vecina</h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                É médico nutrólogo com mais de 10 anos de experiência, membro da Associação 
                Brasileira de Nutrologia e especialista em desintoxicação e aceleração metabólica.
              </p>
              <p>
                Ao longo de sua carreira, já atendeu milhares de pacientes e ajudou a eliminar 
                mais de 5 toneladas de gordura com uma metodologia prática, segura e 
                cientificamente estruturada.
              </p>
              <p>
                Além de médico, é atleta de alta performance e criador de protocolos que unem 
                saúde, performance e propósito, filosofia que já levou atletas e profissionais 
                a resultados extraordinários dentro e fora do corpo.
              </p>
              <p>
                Autor do livro <span className="text-accent font-semibold">"Médico do Corpo e da Alma"</span>, 
                Santiago acredita que saúde não é sacrifício: é devolver ao corpo a capacidade 
                natural de funcionar como deveria.
              </p>
              <p>
                Hoje, acompanha pessoalmente todas as fases do PAPP, garantindo resultados reais, 
                consistentes e possíveis para qualquer pessoa que queira recuperar energia, 
                equilíbrio e um corpo que acompanha seus objetivos.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="aspect-[3/4] rounded-2xl border-2 border-accent/30 bg-muted/20 backdrop-blur-sm overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span>Foto do Dr. Santiago Vecina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
