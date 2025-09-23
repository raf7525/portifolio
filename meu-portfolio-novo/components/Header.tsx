import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  const navLinks = [
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Habilidades" },
    { href: "#about", label: "Sobre Mim" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-10 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold">
          SN.
        </Link>
        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="#contact">
          <Button>Contato</Button>
        </Link>
      </div>
    </header>
  );
};