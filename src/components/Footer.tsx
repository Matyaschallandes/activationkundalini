const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading text-2xl text-gradient-gold italic mb-4">🌿</p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Activation & Transformation Profonde
        </p>
      </div>
    </footer>
  );
};

export default Footer;
