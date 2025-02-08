import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase font-Silkscreen ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-valencia">J</span>
      <span className="text-supernova">h</span>
      <span className="text-cerise">e</span>
      <span className="text-azureradiance">r</span>
      <span className="text-azureradiance">s</span>
      <span className="text-oceangreen">o</span>
      <span className="text-roseofsharon">nn</span>
      <span className="text-brickred">p</span>
      <span className="text-tanhide">a</span>
    </Link>
  );
};
export default Logo;
