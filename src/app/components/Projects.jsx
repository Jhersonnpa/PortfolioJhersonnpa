import Link from "next/link";
import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Breve descripción del proyecto 1",
      image: "/projects/project1.jpg",
      github: "https://github.com/tuusuario/proyecto1",
      demo: "https://proyecto1.com",
    },
    {
      title: "Proyecto 2",
      description: "Breve descripción del proyecto 2",
      image: "/projects/project2.jpg",
      github: "https://github.com/tuusuario/proyecto2",
      demo: "https://proyecto2.com",
    },
    {
      title: "Proyecto 3",
      description: "Breve descripción del proyecto 3",
      image: "/projects/project3.jpg",
      github: "https://github.com/tuusuario/proyecto3",
      demo: "https://proyecto3.com",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gradient-to-t from-background to-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,i) => (
            <div key={i} className="bg-dark rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover"
                height={192}
                width={384}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
