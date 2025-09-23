"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactForm = () => {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("Ocorreu um erro ao enviar a mensagem.");
      }
    } catch (error) {
      setStatus("Ocorreu um erro. Tente novamente mais tarde.");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Entre em Contato
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input name="name" placeholder="Seu Nome" required />
              </div>
              <div>
                <Input name="email" type="email" placeholder="Seu E-mail" required />
              </div>
              <div>
                <Textarea name="message" placeholder="Sua Mensagem" required />
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
            {status && <p className="text-center mt-4 text-sm">{status}</p>}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};