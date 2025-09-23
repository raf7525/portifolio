import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm"; // Corrigido
import { Footer } from "@/components/Footer";       // Corrigido
import { Header } from "@/components/Header";       // Corrigido
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}