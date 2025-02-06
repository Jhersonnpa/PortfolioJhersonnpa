import Image from "next/image";

export const Hero = () => {
  return (
    <section id="home" class="pt-20 pb-10 relative">
      <div class="w-20 h-30 left-44 bg-primary rounded-full blur-3xl absolute -z-10" />

      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2">
            <h1 class="text-4xl md:text-5xl text-gray-600 dark:text-gray-400 mb-6">
              Desarrollador Web{" "}
              <span class="text-[#00df82] font-semibold">Full Stack</span>
            </h1>
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-[#EDEDED]">
              Jherson Pabon
            </h2>
            <p class="mb-8 text-lg">
              Transformo ideas en experiencias web{" "}
              <span class="text-[#00df82]">rápidas</span>,
              <span class="text-[#00df82]"> eficientes</span> y
              <span class="text-[#00df82]"> optimizadas</span>. Como
              <span class="font-semibold"> desarrollador Full Stack</span>{" "}
              especializado en
              <span class="font-semibold"> Frontend</span>, utilizo
              <span class="font-semibold text-indigo-800"> Astro</span>,
              <span class="font-semibold text-blue-600"> TailwindCSS</span> y
              <span class="font-semibold"> Next.js</span> para construir
              <span class="text-[#00df82]">
                {" "}
                sitios web de alto rendimiento
              </span>
              , con
              <span class="text-[#00df82]"> UX/UI atractiva</span> y
              <span class="text-[#00df82]"> SEO optimizado</span>.
            </p>
            <p class="mb-8 text-lg text-[#EDEDED]">
              ¿Buscas mejorar la presencia digital de tu negocio? 🚀
              <span class="font-semibold text-[#00df82]">
                ¡Ve mis proyectos!
              </span>
            </p>
            <div class="flex space-x-4">
              <a
                href="#projects"
                class="bg-[#00df82] text-bg font-semibold px-6 py-2 rounded-full hover:bg-[#03624c] hover:text-text transition duration-300"
              >
                Ver Proyectos
              </a>
              <a
                href="/cv.pdf"
                class="bg-gray-200 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300"
                download
              >
                Descargar CV
              </a>
            </div>
          </div>
          <div class="md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/assets/avatar.png"
              alt="Avatar Jherson Pabon"
              width={500}
              height={500}
              className="shadow-image"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
      </div>
    </section>
  );
};
