const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        <p className="gold-gradient-text font-display text-xl font-semibold mb-2">
          Rarity Chalés
        </p>
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Rarity Chalés. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
