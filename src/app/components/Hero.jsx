import { cn } from '@/lib/utils';
import {AnimatedGradientText} from '@/components/ui/animated-gradient-text';
import {AnimatedGridPattern} from '@/components/ui/animated-grid-pattern';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative px-6 pb-52" style={{ contain: 'layout' }}>
      <div className="pt-28">
        <h1 className="h1-bold flex flex-col items-start md:items-center">
          <span>Desarrollo de</span>
          <span>Webs Modernas</span>
          <span>y Optimizadas</span>
        </h1>
      </div>

      <div className="mt-12 flex flex-col-reverse gap-8 md:flex-row md:justify-center md:gap-20 lg:gap-32">
        <div className="flex w-fit flex-col items-start gap-4">
          <p className="font-Silkscreen font-normal uppercase text-gray-400 md:mt-8 md:text-2xl">
            Jherson.P · Desarrollador Fullstack
          </p>
          <div>
            <Link
              href="#contact"
            >
              <AnimatedGradientText className="rounded-full px-5 py-2 text-lg hover:cursor-pointer">
                🤝 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-400" />{' '}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#00df82] via-[#EDEDED] to-[#00df82] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  Iniciar una colaboración
                </span>
              </AnimatedGradientText>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:flex-col">
          <p className="font-Silkscreen font-normal uppercase text-gray-400">
            Creando webs...
          </p>
          <p className="w-fit rounded-md bg-celtic px-2 font-Silkscreen text-[18px] font-normal uppercase">
            <span className="text-oceangreen">Responsivas</span>
          </p>
          <p className="w-fit rounded-md bg-downriver px-2 font-Silkscreen text-[18px] font-normal uppercase">
            <span className="text-dodgerblue">Veloces</span>
          </p>
          <p className="w-fit rounded-md bg-antiquebronze px-2 font-Silkscreen text-[18px] font-normal uppercase">
            <span className="text-foreground">SEO Optimizado</span>
          </p>
          <p className="w-fit rounded-md bg-revolver px-2 font-Silkscreen text-[18px] font-normal uppercase">
            <span className="text-violet-400/85">modernas</span>
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 -z-20 size-full overflow-hidden opacity-50 [mask-image:radial-gradient(900px_circle_at_top,#000,transparent)]">
        <AnimatedGridPattern
          numSquares={120}
          maxOpacity={0.2}
          duration={5}
          repeatDelay={1}
          colors={[
            'rgba(60, 177, 121, 1)',
            'rgba(157, 91, 210, 1)',
            'rgba(205, 43, 49, 1)',
            'rgba(189, 75, 0, 1)',
            'rgba(247, 206, 0, 1)',
            'rgba(250, 147, 78, 1)',
            'rgba(54, 158, 255, 1)',
          ]}
          className="inset-x-[4.5px] inset-y-[-30%] h-[150%]"
        />
      </div>

      {/* <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(#000_50%,transparent)]">
        <div className="grid-pattern pointer-events-none absolute inset-0" />
      </div> */}
    </section>
  );
};
export default Hero;
