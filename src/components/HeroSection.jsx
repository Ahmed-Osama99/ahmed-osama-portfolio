const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-white">
      {/* Background Glowing Orb (FIXED: Removed -z-10, separated opacity for strict Tailwind v4 variable support) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-60%] w-75 h-75 sm:w-125 sm:h-125 rounded-full bg-main opacity-20 blur-[80px] sm:blur-[120px] pointer-events-none"></div>

      {/* Added 'relative z-10' here to guarantee content stays above the orb */}
      <div className="container relative z-10 h-fit -mt-15 flex flex-col items-center text-center justify-center">
        <p className="hero-enter-1 rounded-full bg-black/5 py-2.5 pl-1.5 pr-4 text-sm md:text-base">
          <span className="inline-block rounded-full bg-main-tag px-3 py-1.5 text-gray-100">
            Junior Frontend Developer
          </span>{" "}
          <span className="font-medium inline-block text-sm ml-1 font-sans leading-3.5">
            Hi, I&apos;m Ahmed
          </span>
        </p>
        <h1 className="text-2xl hero-enter-2 sm:text-5xl lg:text-7xl bg-linear-to-br from-headline to-headline/70 bg-clip-text text-transparent font-semibold mt-4">
          Thoughtful interfaces,
          <br />
          built with care.
        </h1>
        <p className="hero-enter-3 mt-5 max-w-xl text-base leading-relaxed text-paragraph md:text-lg">
          I turn ideas into responsive React experiences with a focus on clean
          UI, accessible interactions, and details that feel great to use.
        </p>
        <a
          href="#projects"
          className="hero-enter-3 mt-10 rounded-full bg-main px-5 py-3 text-sm font-medium uppercase text-white ring-4 ring-main/20 transition-all hover:scale-[1.02] hover:shadow-lg"
        >
          See my work
        </a>
        </div>
    </section>
  );
};

export default HeroSection;
