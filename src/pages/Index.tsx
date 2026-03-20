import { useEffect } from "react";
import rarityVideo from "@/assets/rarity-video.mp4";
import heroBg from "@/assets/hero-bg.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import chalet1 from "@/assets/chalet-1.jpg";
import chalet2 from "@/assets/chalet-2.jpg";
import chalet3 from "@/assets/chalet-3.jpg";
import chalet4 from "@/assets/chalet-4.jpg";
import chalet5 from "@/assets/chalet-5.jpg";
import chalet6 from "@/assets/chalet-6.jpg";

const galleryImages = [
  { src: chalet1, alt: "Barn House", name: "Barn House" },
  { src: chalet2, alt: "A-Frame", name: "A-Frame" },
  { src: chalet3, alt: "Scandinavian", name: "Scandinavian" },
  { src: chalet4, alt: "Double A-Frame", name: "Double A-Frame" },
  { src: chalet5, alt: "Cabana Linear", name: "Cabana Linear" },
  { src: chalet6, alt: "Iglu Tower", name: "Iglu Tower", subtitle: "(Em fase final de obra)" },
];

const highlights = [
  { icon: "📊", text: "Informações sobre o investimento aos futuros sócios" },
  { icon: "🚁", text: "Imagens de drone ao vivo do complexo de chalés da unidade Ouro Preto" },
  { icon: "👤", text: "Contato direto com o CEO da Rarity Chalés, Victor Alfenas" },
  { icon: "🏷️", text: "Condições exclusivas para novos sócios somente na live" },
];

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="min-h-screen">

      {/* ===== HERO — full viewport, immersive ===== */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl fade-in text-center sm:text-left mx-auto sm:mx-0">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase border border-white/20 bg-white/10 text-white/80 mb-5 backdrop-blur-sm">
              Evento Exclusivo
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] mb-5 text-white" style={{ textWrap: "balance" }}>
              Pré-lançamento da{" "}
              <span className="glow-accent">Expansão Rarity Chalés</span>{" "}
              para outro estado
            </h1>
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto sm:mx-0">
              Evento ao vivo com o CEO <strong className="text-white">Victor Alfenas</strong>.
              Saiba como se tornar sócio neste empreendimento de sucesso. Não fique de fora desta oportunidade.
            </p>
            <div className="inline-flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 mb-6 px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-transparent shimmer-border">
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm" style={{ color: "#ffffff" }}>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                Online e Ao Vivo
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm" style={{ color: "#ffffff" }}>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Gratuito
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm" style={{ color: "#ffffff" }}>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                26/03
              </span>
            </div>
            <br />
            <a
              href="https://wa.me/5500000000000?text=Olá! Quero participar do evento de pré-lançamento da Rarity Chalés!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-block text-xs sm:text-sm"
            >
              Quero Participar
            </a>
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
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <span className="text-xl shrink-0">{item.icon}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY — alt background ===== */}
      <section className="section-alt py-14 md:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 fade-in fade-in-delay-3">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider" style={{ color: "#000000" }}>
              PRIMEIRA EXPANSÃO
            </h2>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase border border-black/20 bg-black/5 text-black/70 mt-3">
              Unidades Entregues
            </span>
            <p className="text-sm text-black/60 mt-2">
              Primeira expansão, da unidade Ouro Preto, foi um sucesso
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item aspect-square relative rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" style={img.alt === "Iglu Tower" ? { objectPosition: "center 20%" } : undefined} />
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-2" style={{ paddingLeft: "20px" }}>
                  <p className="text-white font-medium" style={{ fontSize: "16px" }}>{img.name} {img.subtitle && <span className="font-light text-white/80">{img.subtitle}</span>}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CEO + CTA — default background ===== */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 fade-in fade-in-delay-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[3fr_1fr] gap-6 items-stretch">
            {/* Bio Card */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-accent/20">
                <img src={ceoPortrait} alt="Victor Alfenas" className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  <span className="glow-accent">Victor Alfenas</span>
                </h3>
                <p className="text-xs text-accent uppercase tracking-wider mb-3">CEO da Rarity Chalés</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Empresário, mentor e pai de família. Já administrou mais de <strong className="text-accent">R$20 milhões em obras próprias</strong>, sendo mais de 20 unidades entre prédios, casas de alto padrão e chalés de luxo. Venha conhecer a oportunidade.
                </p>
                <a
                  href="https://wa.me/5500000000000?text=Olá! Quero participar do evento de pré-lançamento da Rarity Chalés!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green inline-block text-xs py-3 px-6"
                >
                  Garantir Minha Vaga
                </a>
              </div>
            </div>

            {/* Video */}
            <div className="rounded-2xl overflow-hidden aspect-square relative border border-border">
              <video
                src={rarityVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm px-3 py-2 text-center">
                <p className="text-white font-medium" style={{ fontSize: "11px" }}>Primeira Expansão, unidade Ouro Preto</p>
              </div>
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
