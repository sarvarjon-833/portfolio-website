import {
  Code,
  Database,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import SkillCard from "./CardTemplates/SkillCard";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Kartalar chiqish tezligi
    },
  },
};

const skillsData = [
  {
    title: "Frontend Development",
    icon: <Code className="w-5 h-5 text-emerald-400" />,
    skills: [
      "React.js",
      "JavaScript(ES6+)",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5 & CSS3",
      "TypeScript",
      "Pug",
    ],
  },
  {
    title: "Backend Architecture",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Middleware",
      "Asynchronous Programming",
    ],
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ["MongoDB", "Mongoose (ODM)", "NoSQL Data Modeling", "JSON"],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5 text-emerald-400" />,
    skills: ["Git", "GitHub", "Render", "Postman", "VS Code", "Vite"],
  },
  {
    title: "Security & Authentication",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    skills: [
      "JSON Web Tokens (JWT)",
      "Bcrypt Hashing",
      "User Authentication",
      "Route Authorization",
    ],
  },
  {
    title: "Web Frameworks",
    icon: <Terminal className="w-5 h-5 text-emerald-400" />,
    skills: ["Express.js"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className=" mx-auto w-full px-4 md:px-6 lg:px-8 sm:px-6 pt-32 py-20 bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto space-y-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl text-gray-100">Technical Skills</h2>
        <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base">
          Comprehensive expertise across modern development stack with focus on
          scalable web applications and DevOps practices.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
