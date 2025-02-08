import Projects from '@/components/projects/Projects';

const ProjectsSection = () => {
  return (
    <section className="relative py-24" id='projects'>
      <div className="mb-12 space-y-8 px-6 md:mb-0 xl:px-56">
        <h2 className="h2-bold">Recientes Proyectos</h2>
      </div>

      <Projects />

      <div className="projects-grid-pattern-bottom absolute bottom-0 -z-10 h-48 w-full" />
    </section>
  );
};
export default ProjectsSection;
