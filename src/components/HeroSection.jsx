const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 translate-y-[-60%] rounded-full bg-main opacity-20 blur-[80px] sm:h-125 sm:w-125 sm:blur-[120px]"
      />
      <div className="container relative z-10 flex h-fit -mt-15 flex-col items-center justify-center text-center">
        <p className="hero-enter-1 rounded-full bg-black/5 py-2.5 pl-1.5 pr-4 text-sm md:text-base">
          <span className="inline-block rounded-full bg-main-tag px-3 py-1.5 text-gray-100">
            React Frontend Developer
          </span>{" "}
          <span className="font-medium inline-block text-sm ml-1 font-sans leading-3.5">
            Hi, I&apos;m Ahmed
          </span>
        </p>
        <h1 className="hero-enter-2 mt-4 bg-linear-to-br from-headline to-headline/70 bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-5xl lg:text-7xl">
          Responsive interfaces,
          <br />
          built with React.
        </h1>
        <p className="hero-enter-3 mt-5 max-w-xl text-base leading-relaxed text-paragraph md:text-lg">
          I turn designs and product ideas into responsive frontends with React,
          JavaScript, and Tailwind CSS, with a focus on clear layouts and
          thoughtful interactions.
        </p>
        <a
          href="#projects"
          className="hero-enter-3 mt-10 rounded-full bg-main px-5 py-3 text-sm font-medium uppercase text-white ring-4 ring-main/20 transition-all hover:scale-[1.02] hover:shadow-lg"
        >
          View selected work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
