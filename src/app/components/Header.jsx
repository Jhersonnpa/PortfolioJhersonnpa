// Desc: Header component
import Link from "next/link";
export const Header = () => {
  return (
    <header className="fixed w-full max-w-xs md:max-w-lg mt-2 bg-dark/90 backdrop-blur-3xl top-0 left-0 right-0 mx-auto z-10 rounded-3xl">
      <nav className="container mx-auto px-3 py-1.5">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            <span className="text-white text-md font-gristela">
              {"<"}
              {"/"}
              {">"}Jhersonnpa
            </span>
          </Link>
          <div className="hidden md:flex space-x-4 font-gristela">
            <Link href="#" className="hover:text-primary">
              Inicio
            </Link>
            <Link href="#about" className="hover:text-primary">
              Sobre mí
            </Link>
            <Link href="#projects" className="hover:text-primary">
              Proyectos
            </Link>
            <Link href="#contact" className="hover:text-primary">
              Contacto
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
