import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-headline text-white @container">
      <div className="container py-16">
        <h2 className="text-center text-3xl leading-tight tracking-tight sm:text-4xl md:text-7xl">
          Have a frontend project in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-base text-white/75 md:text-lg">
          I&apos;d be glad to hear what you&apos;re building and how I can help.
        </p>
        <a
          href="https://www.upwork.com/freelancers/~01ddab436f32db0c34?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-8 flex w-fit items-center justify-center gap-2 rounded-full bg-main px-6 py-3 text-base font-semibold text-white ring-4 ring-main/30 transition-all hover:scale-[1.02] hover:shadow-lg md:text-lg"
        >
          Message me on Upwork{" "}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            aria-hidden="true"
            className="text-sm"
          />
        </a>
        <p className="mt-14 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Ahmed Osama
        </p>
      </div>
      <p aria-hidden="true" className="pointer-events-none relative left-[-3%] select-none whitespace-nowrap text-center text-[13.5cqw] font-bold uppercase leading-[40%] text-white/30">
        Ahmed Osama
      </p>
    </footer>
  );
};

export default Footer;
