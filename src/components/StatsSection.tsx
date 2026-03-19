import { useAnimatedCounter } from "@/hooks/use-scroll-animations";

const stats = [
  { value: 20, suffix: "M+", label: "Em negócios administrados", prefix: "R$" },
  { value: 6, suffix: "+", label: "Unidades entregues" },
  { value: 100, suffix: "%", label: "De satisfação" },
];

const StatsSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12 scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({
  value,
  suffix,
  label,
  prefix = "",
}: {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}) => {
  const counterRef = useAnimatedCounter(value, 2000);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {prefix}
        <span ref={counterRef}>0</span>
        {suffix}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default StatsSection;
