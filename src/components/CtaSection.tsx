const CtaSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="glass-card max-w-2xl mx-auto p-10 md:p-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ficou com alguma{" "}
            <span className="highlight-text">dúvida?</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg mb-8">
            Clique no botão abaixo e fale com o nosso time agora mesmo
          </p>
          <a
            href="https://wa.me/5500000000000?text=Olá! Tenho dúvidas sobre o pré-lançamento da expansão Rarity Chalés."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-block"
          >
            Falar com o Time
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
