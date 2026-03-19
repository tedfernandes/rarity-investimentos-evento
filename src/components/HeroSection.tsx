import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 parallax-bg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl scroll-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Evento Exclusivo
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Pré-lançamento da{" "}
            <span className="highlight-text">Expansão Rarity</span>{" "}
            Chalés
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
            Evento ao vivo com o CEO <strong className="text-foreground">Victor Alfenas</strong>.
            Venha participar e saiba todos os detalhes de como ser sócio nesse
            empreendimento e fazer parte deste sucesso.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-accent">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground/80 text-sm">100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground/80 text-sm">Online e Ao Vivo</span>
            </div>
          </div>
          <a
            href="https://wa.me/5500000000000?text=Olá! Meu nome é e quero participar do evento de pré-lançamento da Rarity Chalés!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-block text-base"
          >
            Quero Participar
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
