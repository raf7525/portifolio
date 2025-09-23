import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";

// Coloque as imagens dos seus projetos na pasta /public/projects
const projectData = [
  {
    title: "Nome do Projeto 1",
    image: "/projects/projeto1.png",
    description: "Uma breve e impactante descrição do seu projeto. Fale sobre o objetivo e a principal funcionalidade.",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    liveUrl: "#", // Link para o site no ar
    repoUrl: "#", // Link para o repositório no GitHub
  },
  {
    title: "Nome do Projeto 2",
    image: "/projects/projeto2.png",
    description: "Descreva o desafio que este projeto resolve. Destaque uma feature complexa que você implementou.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-muted/50 py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Projetos que Construí
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Uma seleção de projetos que demonstram minhas habilidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <div className="relative w-full h-48 mb-4">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-t-lg"
                    />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex gap-2 pt-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Link href={project.repoUrl} target="_blank">
                  <span className="text-sm font-medium hover:underline">Ver Código</span>
                </Link>
                <Link href={project.liveUrl} target="_blank">
                  <span className="text-sm font-medium hover:underline">Ver Projeto</span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};