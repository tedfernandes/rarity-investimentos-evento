import { useState, type FormEvent } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && whatsapp) {
      window.open(
        `https://wa.me/5500000000000?text=Olá! Meu nome é ${encodeURIComponent(name)} e quero participar do evento de pré-lançamento da Rarity Chalés!`,
        "_blank"
      );
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0 parallax-bg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="scroll-reveal">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase font-body">
                Evento Exclusivo
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Pré-lançamento da{" "}
              <span className="gold-gradient-text">Expansão Rarity</span>{" "}
              Chalés
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-4 font-body">
              Evento ao vivo com o CEO <strong className="text-foreground">Victor Alfenas</strong>.
              Venha participar e saiba todos os detalhes de como ser sócio nesse
              empreendimento e fazer parte deste sucesso.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground/80 font-body text-sm">100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground/80 font-body text-sm">Online e Ao Vivo</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="glass-card p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold text-center mb-2">
                Garanta sua <span className="text-primary">Vaga</span>
              </h2>
              <p className="text-muted-foreground text-center text-sm mb-8 font-body">
                Preencha o formulário e participe do evento exclusivo
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-luxury font-body"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="DDD + WhatsApp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="input-luxury font-body"
                    required
                  />
                </div>
                <button type="submit" className="btn-gold w-full text-base font-body">
                  Quero Participar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
