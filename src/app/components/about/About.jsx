import { DotPattern } from "@/components/ui/dot-pattern";
import { skills } from "@/constants/skills";
import SkillCard from "./SkillCard";

const About = () => {
  return (
    <section id="about" className="relative flex items-center justify-center px-6 py-24">
      <div className="z-10">
        <div className="space-y-8 md:text-center">
          <h2 className="h2-bold">Sobre mí</h2>
          <p className="regular-paragraph mx-auto max-w-[835px]">
            Hola 👋, Soy{" "}
            <span className="text-code text-sky-600">Jherson Pabon</span>,
            Transformo ideas en experiencias web
            <span className="text-secondary"> rápidas</span>,{" "}
            <span className="text-secondary"> eficientes</span> y{" "}
            <span className="text-secondary"> optimizadas</span>. Como{" "}
            <span className="text-orange-500">desarrollador Full Stack</span>{" "}
            especializado en{""}
            <span className="text-purple-600"> Frontend</span>, utilizo {""}
            <span className="text-indigo-500">Astro</span>,{" "}
            <span className="text-purple-200">NextJs</span>, y{" "}
            <span className="text-blue-400">TailwindCSS</span>.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 md:mt-24">
          {skills.map((skill) => {
            const Icon = skill.asset.icon;
            return (
              <SkillCard
                key={skill.id}
                gradientColor={skill.gradientColor}
                assetBackground={skill.asset.background}
                titleBackground={skill.title.background}
                titleLabel={skill.title.label}
                content={skill.content}
              >
                <Icon className="size-4" />
              </SkillCard>
            );
          })}
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-50"
      />
    </section>
  );
};

export default About;
