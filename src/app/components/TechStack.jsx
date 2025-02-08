import Image from "next/image";

export function TechStack() {
  const technologies = [
    { name: "React", icon: "react.svg" },
    { name: "Astro", icon: "astro.svg" },
    { name: "TailwindCSS", icon: "tailwind.svg" },
    { name: "Docker", icon: "docker.svg" },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech,i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={`/icons/${tech.icon}`}
                alt={tech.name}
                className="w-16 h-16 mb-2"
                height={64}
                width={64}
              />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 max-w-2xl mx-auto text-lg">
          Con más de{" "}
          <span className="text-secondary font-semibold">
            5 años de experiencia
          </span>{" "}
          en desarrollo web, he trabajado en{" "}
          <span className="text-secondary">proyectos desafiantes</span> utilizando
          las
          <span className="font-semibold"> últimas tecnologías</span> para crear
          <span className="text-secondary"> soluciones robustas y escalables</span>.
        </p>
      </div>
    </section>
  );
}
