import Image from "next/image";

export function TechStack() {
  const technologies = [
    { name: "React", icon: "react.svg" },
    { name: "Astro", icon: "astro.svg" },
    { name: "TailwindCSS", icon: "tailwind.svg" },
    { name: "Docker", icon: "docker.svg" },
  ];
  return (
    <section class="py-20 bg-gradient-to-t from-bg from- via-primary via-">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <div class="flex flex-wrap justify-center gap-8">
          {technologies.map((tech,i) => (
            <div key={i} class="flex flex-col items-center">
              <Image
                src={`/icons/${tech.icon}`}
                alt={tech.name}
                class="w-16 h-16 mb-2"
                height={64}
                width={64}
              />
              <span class="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
        <p class="text-center mt-8 max-w-2xl mx-auto text-lg text-[#EDEDED]">
          Con más de{" "}
          <span class="text-[#00df82] font-semibold">
            5 años de experiencia
          </span>{" "}
          en desarrollo web, he trabajado en{" "}
          <span class="text-[#00df82]">proyectos desafiantes</span> utilizando
          las
          <span class="font-semibold">últimas tecnologías</span> para crear
          <span class="text-[#00df82]">soluciones robustas y escalables</span>.
        </p>
      </div>
    </section>
  );
}
