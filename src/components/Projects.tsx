import ProjectCard from "./CardTemplates/ProjectCard";

const projectsData = [
  {
    title: "AI-Powered Content Assistant",
    description:
      "A full-stack intelligent writing platform powered by Google's Gemini API. Features a secure Node.js backend with JWT-based user authentication and database integration for saving generated content and user history.",
    image: "/Projects/project1.png",
    techStack: ["React", "Node.js", "MongoDB", "Gemini API", "JWT", "Tailwind"],
    codeLink: "https://github.com/sarvarjon-833/ai-writer",
    demoLink: "https://ai-writer-delta-topaz.vercel.app/",
  },
  {
    title: "Natours: Advanced Tour Booking Platform",
    description:
      "A comprehensive full-stack application featuring a robust REST API and Server-Side Rendered (SSR) views using Pug. Built with advanced backend concepts including secure JWT authentication, MongoDB geospatial queries, complex aggregation pipelines, and centralized error handling.",
    image: "/Projects/project2.png",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Pug (SSR)",
      "JWT",
      "Mongoose",
    ],
    codeLink: "https://github.com/sarvarjon-833/natours-project",
    demoLink: "https://natours-app-xyvi.onrender.com/",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment processing, and admin dashboard.",
    image: "/Projects/project1.png",
    techStack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    codeLink: "https://github.com/",
    demoLink: "https://demo.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className=" mx-auto w-full px-4 md:px-6 lg:px-8 sm:px-6 pt-32 py-20 bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto space-y-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl text-gray-100">
          Featured Projects
        </h2>
        <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base">
          A selection of projects that demonstrate my expertise in full-stack
          development and modern DevOps practices.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto h-full ">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demolink={project.demoLink}
            image={project.image}
            techStack={project.techStack}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
