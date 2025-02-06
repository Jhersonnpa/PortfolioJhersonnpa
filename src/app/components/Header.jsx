// Desc: Header component
export const Header = () => {
  return (
    <header class="fixed w-full max-w-xs md:max-w-lg mt-2 glassmorphism top-0 left-0 right-0 mx-auto z-10 rounded-3xl">
      <nav class="container mx-auto px-3 py-1.5">
        <div class="flex justify-between items-center">
          <a href="/" class="text-2xl font-bold text-primary">
            <span class="text-white text-md font-gristela">
              {"<"}
              {"/"}
              {">"}Jhersonnpa
            </span>
          </a>
          <div class="hidden md:flex space-x-4 font-gristela">
            <a href="#home" class="hover:text-primary">
              Inicio
            </a>
            <a href="#about" class="hover:text-primary">
              Sobre mí
            </a>
            <a href="#projects" class="hover:text-primary">
              Proyectos
            </a>
            <a href="#contact" class="hover:text-primary">
              Contacto
            </a>
          </div>
          <button class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
