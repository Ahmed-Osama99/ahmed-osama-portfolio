import learnify from "../assets/learnify.jpg";
import kaira from "../assets/kaira.jpg";
import dashstack from "../assets/dashstack.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ResponsiveImage from "./ResponsiveImage.jsx";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      img: learnify,
      imageName: "learnify",
      title: "Learnify - Courses Platform",
      type: "Learning platform concept",
      description:
        "A course-platform concept focused on course discovery and category browsing. Student and success figures in the preview are illustrative demo content.",
      stack: ["React", "Tailwind CSS"],
      url: "https://learnify-pied-rho.vercel.app/",
    },
    {
      id: 2,
      img: kaira,
      imageName: "kaira",
      title: "Kaira - Shopping",
      type: "Storefront concept",
      description:
        "A responsive storefront concept with desktop and mobile screens for browsing products, a wishlist, and a cart.",
      stack: ["HTML", "CSS", "JavaScript"],
      url: "https://ahmed-osama99.github.io/kaira-ecommerce/",
    },
    {
      id: 3,
      img: dashstack,
      imageName: "dashstack",
      title: "DashStack - Monitor Your Business",
      type: "Dashboard concept",
      description:
        "A business dashboard concept with inventory, order-list, and chart views using sample data.",
      stack: ["HTML", "CSS", "JavaScript"],
      url: "https://ahmed-osama99.github.io/DashStack/",
    },
  ];

  return (
    <section id="projects" className="container scroll-mt-6 py-16 md:py-24">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-main">
        Selected work
      </p>
      <h2 className="mb-4 mt-3 text-center text-3xl font-bold tracking-tight text-headline md:text-4xl">
        Featured Projects
      </h2>
      <p className="mx-auto max-w-xl text-center text-lg text-gray-600">
        A selection of interfaces where I practiced turning ideas into useful,
        responsive experiences.
      </p>
      <div className="mx-auto mt-10 grid gap-8 md:grid-cols-3">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-headline/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-main/30 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main"
          >
            <div className="aspect-video overflow-hidden">
              <ResponsiveImage
                name={project.imageName}
                fallback={project.img}
                alt={project.title}
                widths={[480, 768, 1200]}
                sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 3rem), 360px"
                width={1376}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-main">{project.type}</p>
              <h3 className="mt-2 text-xl font-semibold text-headline">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => <li key={item} className="rounded-full bg-main/8 px-2.5 py-1 text-xs font-medium text-main-tag">{item}</li>)}
              </ul>
              <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-headline transition-colors group-hover:text-main">
                View live project{" "}
                <FontAwesomeIcon aria-hidden="true" icon={faArrowUpRightFromSquare} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
