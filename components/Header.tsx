"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Deja vu CPT
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">Offerings</Link>
            <Link href="#team" className="text-foreground hover:text-primary transition-colors">Voices</Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <ModeToggle />
          </nav>
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Offerings</Link>
            <Link href="#team" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Voices</Link>
            <Link href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;