const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <p className="highlight-text text-xl font-semibold mb-2">
          Rarity Chalés
        </p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Rarity Chalés. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
