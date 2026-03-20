import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import chalet1 from "@/assets/chalet-1.jpg";
import chalet2 from "@/assets/chalet-2.jpg";
import chalet3 from "@/assets/chalet-3.jpg";
import chalet4 from "@/assets/chalet-4.jpg";
import chalet5 from "@/assets/chalet-5.jpg";
import chalet6 from "@/assets/chalet-6.jpg";

const galleryImages = [
  { src: chalet1, alt: "Chalé com casal e deck" },
  { src: chalet2, alt: "Chalé A-frame com montanhas" },
  { src: chalet3, alt: "Chalé moderno elevado" },
  { src: chalet4, alt: "Chalé com heliponto" },
  { src: chalet5, alt: "Chalé com varanda e piscina" },
  { src: chalet6, alt: "Chalé geodésico panorâmico" },
];

const highlights = [
  { icon: "📊", text: "Informações sobre o investimento aos futuros sócios" },
  { icon: "🚁", text: "Imagens de drone ao vivo dos chalés" },
  { icon: "👤", text: "Contato direto com o CEO" },
  { icon: "🏷️", text: "Condições exclusivas na live" },
];

const Index = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved ? saved === "dark" : true;
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main className="min-h-screen">
      {/* Theme toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-card border border-border shadow-md hover:scale-105 active:scale-95 transition-transform"
        aria-label="Alternar tema"
      >
        {dark ? (
          <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* ===== HERO — full viewport, immersive ===== */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-32">
          <div className="max-w-2xl fade-in">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase border border-white/20 bg-white/10 text-white/80 mb-5 backdrop-blur-sm">
              Evento Exclusivo
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-5 text-white" style={{ textWrap: "balance" }}>
              Pré-lançamento da{" "}
              <span className="text-accent">Expansão Rarity</span> Chalés
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Evento ao vivo com o CEO <strong className="text-white">Victor Alfenas</strong>.
              Saiba como ser sócio neste empreendimento de sucesso.
            </p>
            <div className="flex flex-wrap gap-5 mb-10">
              <span className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                100% Gratuito
              </span>
              <span className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Online e Ao Vivo
              </span>
            </div>
            <a
              href="https://wa.me/5500000000000?text=Olá! Quero participar do evento de pré-lançamento da Rarity Chalés!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-block text-sm"
            >
              Quero Participar
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS — alt background ===== */}
      <section className="section-alt py-14 md:py-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 fade-in fade-in-delay-1">
            {[
              { val: "R$20M+", label: "Em negócios" },
              { val: "6+", label: "Unidades entregues" },
              { val: "100%", label: "Satisfação" },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">{s.val}</div>
                <p className="text-current/50 text-xs sm:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENT — default background ===== */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 fade-in fade-in-delay-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            O que teremos no <span className="text-accent">evento</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <span className="text-xl shrink-0">{item.icon}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY — alt background ===== */}
      <section className="section-alt py-14 md:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 fade-in fade-in-delay-3">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Unidades <span className="text-accent">Entregues</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item aspect-square">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CEO + CTA — default background ===== */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 fade-in fade-in-delay-4">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-accent/20">
              <img src={ceoPortrait} alt="Victor Alfenas" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-xl font-bold mb-1">
                Victor <span className="text-accent">Alfenas</span>
              </h3>
              <p className="text-xs text-accent uppercase tracking-wider mb-3">CEO da Rarity Chalés</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Empresário, mentor e pai de família. Já administrou mais de <strong className="text-accent">R$20 milhões em negócios</strong>. Venha conhecer a oportunidade.
              </p>
              <a
                href="https://wa.me/5500000000000?text=Olá! Quero participar do evento de pré-lançamento da Rarity Chalés!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-block text-xs py-3 px-6"
              >
                Garantir Minha Vaga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-alt py-6 border-t border-white/10 text-center">
        <p className="text-accent font-semibold mb-1">Rarity Chalés</p>
        <p className="text-current/40 text-xs">
          © {new Date().getFullYear()} Rarity Chalés. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
};

export default Index;
