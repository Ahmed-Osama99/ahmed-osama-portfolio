import { useState, useEffect } from "react";
import MarqueeImport from "react-fast-marquee";
import reactSVG from "../assets/react.svg";
import tailwindSVG from "../assets/tailwind.svg";
import viteSVG from "../assets/vite.svg";
import jsSVG from "../assets/javascript.svg";
import nodeSVG from "../assets/node.svg";
import htmlSVG from "../assets/html-5.svg";
import cssSVG from "../assets/css-3.svg";
import gitSVG from "../assets/git.svg";
import gitHubSVG from "../assets/github.svg";
import vercelSVG from "../assets/vercel.svg";
import figmaSVG from "../assets/figma.svg";
import npmSVG from "../assets/npm.svg";

const Marquee = MarqueeImport.default || MarqueeImport;

const Skills = () => {
  const techStack = [
    { src: htmlSVG, name: "HTML" },
    { src: cssSVG, name: "CSS" },
    { src: jsSVG, name: "JavaScript" },
    { src: reactSVG, name: "React" },
    { src: tailwindSVG, name: "Tailwind CSS" },
    { src: viteSVG, name: "Vite" },
    { src: nodeSVG, name: "Node.js" },
    { src: gitSVG, name: "Git" },
    { src: gitHubSVG, name: "GitHub" },
    { src: vercelSVG, name: "Vercel" },
    { src: figmaSVG, name: "Figma" },
    { src: npmSVG, name: "NPM" },
  ];
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionMediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updatePreference = () => setReducedMotion(motionMediaQuery.matches);

    updatePreference();

    motionMediaQuery.addEventListener("change", updatePreference);

    return () => motionMediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section className="container py-16 md:py-24">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-main">My toolkit</p>
      <h2 className="mb-8 mt-3 text-center text-3xl font-bold tracking-tight text-headline md:text-4xl">
        Skills & Tools
      </h2>

      <div className="text-xl md:text-2xl font-bold mx-auto w-fit text-headline text-center leading-relaxed">
        <p>
          Make it
          <span className="text-main font-caveat text-3xl md:text-4xl inline-block mx-2">
            beautiful
          </span>
          , Make it
          <span className="text-main font-caveat text-3xl md:text-4xl inline-block mx-2">
            fast.
          </span>
        </p>
        <p>
          Make it
          <span className="text-main font-caveat text-3xl md:text-4xl inline-block mx-2">
            unique
          </span>
          , Make it
          <span className="text-main font-caveat text-3xl md:text-4xl inline-block mx-2">
            worthy.
          </span>
        </p>
        <p className="text-center mt-2">Make it.</p>
      </div>

      <div className="mt-16">
        <Marquee
          play={!reducedMotion}
          speed={50}
          gradient
          gradientColor="white"
          pauseOnHover
          pauseOnClick
          className="py-4 overflow-hidden"
        >
          {techStack.map((skill) => (
            <img
              key={skill.name}
              src={skill.src}
              alt={skill.name}
              title={skill.name}
              className="w-16 h-16 mx-8 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
