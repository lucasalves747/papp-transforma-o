const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative" style={{ background: 'var(--gradient-testimonials)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            O Programa Que Já Transformou
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-accent">
            Mais de 3000 Pessoas
          </p>
          <p className="text-xl text-muted-foreground mt-6">
            Elas conseguiram, você também pode!
          </p>
        </div>

        {/* Placeholder for testimonials - would need actual images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <div className="aspect-square bg-muted/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Depoimento {i}</span>
              </div>
              <p className="text-muted-foreground text-sm">
                "Resultados incríveis em 21 dias. Minha vida mudou completamente!"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
