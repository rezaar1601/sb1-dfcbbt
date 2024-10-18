import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Deja vu CPT
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Offerings</Link>
            <Link href="#team" className="text-muted-foreground hover:text-primary transition-colors">Voices</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; 2023 Deja vu CPT Vocal Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;