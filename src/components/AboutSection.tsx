import ceoPortrait from "@/assets/ceo-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-2 scroll-reveal flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-accent/20">
                <img
                  src={ceoPortrait}
                  alt="Victor Alfenas - CEO Rarity Chalés"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-80 md:w-72 md:h-96 rounded-2xl border border-accent/10 -z-10" />
            </div>
          </div>

          <div className="lg:col-span-3 scroll-reveal" style={{ transitionDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Victor <span className="highlight-text">Alfenas</span>
            </h2>
            <p className="text-sm text-accent tracking-wider uppercase mb-6">
              CEO da Rarity Chalés
            </p>
            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>
                Durante anos, vivi preso em vícios, distrações e ciclos de autossabotagem.
                Mesmo tendo potencial, não conseguia sair do lugar — até que descobri uma
                verdade simples: ninguém vence sem clareza, disciplina e ação.
              </p>
              <p>
                Foi quando desenvolvi o que hoje se tornou o{" "}
                <strong className="text-foreground">Método ALFA</strong> — uma metodologia que
                me ajudou a reprogramar minha mente, vencer os bloqueios e finalmente construir
                uma vida com propósito, prosperidade e direção.
              </p>
              <p>
                Hoje, sou empresário, mentor e pai de família. Já administrei mais de{" "}
                <strong className="text-accent">R$20 milhões em negócios</strong>, mas o que
                mais me orgulha é ter vencido minhas batalhas internas e ajudado outros a
                fazerem o mesmo. Se você sente que está travado, essa jornada é pra você. Eu
                sei o caminho — e vou caminhar com você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
