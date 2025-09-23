import { Badge } from "./ui/badge";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Node.js", "Tailwind CSS", "HTML5", "CSS3",
  "Git", "Prisma", "PostgreSQL", "Docker"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            Minhas Habilidades
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};