import aboutImg from "../assets/ahmedosama.jpg";
import ResponsiveImage from "./ResponsiveImage.jsx";

const About = () => {
  return (
    <section id="about" className="container scroll-mt-6 py-16 md:py-24">
      <div className="relative mx-auto w-full max-w-8xl overflow-hidden rounded-2xl @container">
        <ResponsiveImage
          name="profile"
          fallback={aboutImg}
          alt="Ahmed Osama"
          widths={[768, 1280, 1600]}
          sizes="(max-width: 768px) 100vw, min(100vw - 5rem, 1152px)"
          width={1792}
          height={592}
          className="w-full"
          loading="lazy"
        />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-24%] left-[-3%] select-none whitespace-nowrap text-center text-[15cqw] font-bold text-transparent"
          style={{ WebkitTextStroke: "3px rgba(255, 255, 255, 0.4)" }}
        >
          A bit about me
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-main">About me</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-headline md:text-4xl">
            Frontend work grounded in an IT background.
          </h2>
          <p className="mt-4 text-headline/90">
            I&apos;m a frontend developer with a background in IT and system
            administration. I build responsive interfaces with React,
            JavaScript, HTML, and CSS, and enjoy turning designs and product
            ideas into clear, usable pages.
          </p>
          <p className="mt-4 text-headline/90">
            My IT experience has strengthened my troubleshooting and
            problem-solving skills. The projects below show my recent hands-on
            frontend work and the tools I used to build it.
          </p>
        </div>
        <div className="flex w-full flex-1 flex-col gap-4 md:w-auto md:gap-8">
          <div className="rounded-2xl border border-paragraph/50 p-6 uppercase text-headline/90">
            <span className="block text-3xl font-bold text-headline">IT</span>
            Background
          </div>
          <div className="rounded-2xl border border-paragraph/50 p-6 uppercase text-headline/90">
            <span className="block text-3xl font-bold text-headline">React</span>
            Frontend focus
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
