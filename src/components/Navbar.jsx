const Navbar = () => {
  return (
    <header className="container flex items-center justify-between py-4">
      <a
        href="#main-content"
        className="ao-name font-caveat text-2xl font-bold text-black"
        aria-label="Ahmed Osama — back to top"
      >
        Ahmed Osama
      </a>
      <nav aria-label="Primary navigation" className="flex items-center gap-2 sm:gap-5">
        <a href="#projects" className="hidden text-sm font-medium text-headline/75 transition-colors hover:text-main sm:inline">
          Work
        </a>
        <a href="#about" className="hidden text-sm font-medium text-headline/75 transition-colors hover:text-main sm:inline">
          About
        </a>
        <a
          href="#contact"
          className="rounded-full bg-main px-4 py-2.5 text-sm font-medium uppercase text-white ring-4 ring-main/20 transition-all hover:scale-[1.02] hover:shadow-lg"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
