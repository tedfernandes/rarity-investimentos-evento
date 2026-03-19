import chalet1 from "@/assets/chalet-1.jpg";
import chalet2 from "@/assets/chalet-2.jpg";
import chalet3 from "@/assets/chalet-3.jpg";
import chalet4 from "@/assets/chalet-4.jpg";
import chalet5 from "@/assets/chalet-5.jpg";
import chalet6 from "@/assets/chalet-6.jpg";

const images = [
  { src: chalet1, alt: "Chalé exterior noturno" },
  { src: chalet2, alt: "Interior do chalé - sala" },
  { src: chalet3, alt: "Chalé com deck e vista" },
  { src: chalet4, alt: "Suíte premium" },
  { src: chalet5, alt: "Jacuzzi com vista" },
  { src: chalet6, alt: "Cozinha gourmet" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center scroll-reveal mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unidades <span className="gold-gradient-text">Entregues</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Conheça os chalés que já foram entregues com excelência
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item scroll-reveal aspect-square"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
