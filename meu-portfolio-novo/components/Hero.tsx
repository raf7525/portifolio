"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section id="home" className="py-20 sm:py-32 md:py-40">
      <div className="container mx-auto text-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Olá, eu sou [Seu Nome]
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-8">
            Desenvolvedor de Software apaixonado por criar soluções inovadoras e experiências de usuário incríveis.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#projects">
              <Button size="lg">Meus Projetos</Button>
            </Link>
            <a href="/cv.pdf" download> {/* Coloque seu CV na pasta /public */}
              <Button size="lg" variant="outline">
                Download CV
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};