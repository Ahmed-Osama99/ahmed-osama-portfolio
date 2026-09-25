import aboutImg from "../assets/ahmedosama.jpg";
import ResponsiveImage from "./ResponsiveImage.jsx";

const About = () => {
  return (
    <section id="about" className="container scroll-mt-6 py-16 md:py-24">
      <div className="w-full relative max-w-8xl mx-auto @container rounded-2xl overflow-hidden">
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
        
<p aria-hidden
          className="absolute bottom-[-24%] left-[-3%] text-[15cqw] font-bold text-center whitespace-nowrap text-transparent select-none pointer-events-none"
          style={{ WebkitTextStroke: '3px rgba(255, 255, 255, 0.4)' }}
        >
          A bit about me
        </p>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-main">About me</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-headline md:text-4xl">Building with curiosity and care.</h2>
          <p className="mt-4 text-headline/90">
            I&apos;m a junior frontend developer who enjoys turning a visual idea
            into an interface that feels clear, responsive, and easy to use.
            I care about the small details—from semantic structure to the final
            interaction.
          </p>
          <p className="mt-4 text-headline/90">
            My background in IT and system administration gives me a practical
            perspective on the products I build. I&apos;m currently growing my
            React skills by shipping projects and learning from every release.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 w-full md:w-auto flex-1">
          <div className="border border-paragraph/50 rounded-2xl p-6 uppercase text-headline/90">
            <span className="block text-3xl font-bold text-headline">3+</span>{" "}
            Years in IT
          </div>
          <div className="border border-paragraph/50 rounded-2xl p-6 uppercase text-headline/90">
            <span className="block text-3xl font-bold text-headline">15</span>{" "}
            Web projects built
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
