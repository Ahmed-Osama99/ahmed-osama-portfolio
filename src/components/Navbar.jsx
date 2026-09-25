const Navbar = () => {
  return (
    <header className="container flex items-center justify-between gap-4 py-4">
      <a
        href="#main-content"
        className="ao-name shrink-0 font-caveat text-2xl font-bold text-black"
        aria-label="Ahmed Osama — back to top"
      >
        Ahmed Osama
      </a>
      <nav aria-label="Primary navigation" className="flex items-center gap-3 sm:gap-5">
        <a href="#projects" className="text-xs font-medium text-headline/75 transition-colors hover:text-main sm:text-sm">
          Work
        </a>
        <a href="#about" className="text-xs font-medium text-headline/75 transition-colors hover:text-main sm:text-sm">
          About
        </a>
        <a
          href="#contact"
          className="rounded-full bg-main px-3 py-2 text-xs font-semibold uppercase text-white ring-4 ring-main/20 transition-all hover:scale-[1.02] hover:shadow-lg sm:px-4 sm:py-2.5 sm:text-sm"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
