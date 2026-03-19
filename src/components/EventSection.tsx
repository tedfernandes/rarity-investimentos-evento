const eventItems = [
  {
    icon: "📊",
    text: "Informações relevantes sobre o investimento aos futuros sócios",
  },
  {
    icon: "🚁",
    text: "Imagens de drone ao vivo dos chalés, direto da unidade de Ouro Preto",
  },
  {
    icon: "👤",
    text: "Contato direto com o CEO da Rarity Chalés",
  },
  {
    icon: "🏷️",
    text: "Condições exclusivas para aquisição na live",
  },
];

const EventSection = () => {
  return (
    <section id="evento" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center scroll-reveal mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que teremos neste{" "}
            <span className="gold-gradient-text">evento?</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Uma oportunidade única de conhecer todos os detalhes do empreendimento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {eventItems.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 scroll-reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="check-item">
                <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                <p className="text-foreground/90 font-body leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <p className="text-muted-foreground mb-6 font-body">
            Não perca tempo, pois é uma{" "}
            <strong className="text-primary">oportunidade limitada</strong>.
          </p>
          <a href="#hero" className="btn-gold inline-block font-body">
            Quero Participar
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
