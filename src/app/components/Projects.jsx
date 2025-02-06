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
    <section id="projects" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-8">
          Proyectos Destacados
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,i) => (
            <div key={i} class="bg-primary rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div class="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
