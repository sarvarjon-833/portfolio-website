import { Download, Mail, Sparkles } from "lucide-react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  type Variants,
} from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({
  from,
  to,
  duration = 2.5,
}: {
  from: number;
  to: number;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: duration });
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// Chap tarafdagi barcha elementlarni o'rab turuvchi Ota qoida
const leftContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Har bir qator 0.15 soniya farq bilan chiqadi
    },
  },
};

// Chap tarafdagi har bir qator (bola) uchun qoida
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Boshida ko'rinmaydi va 30px pastda turadi
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// O'ng tarafdagi rasm uchun qoida (Scale effekti)
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 }, // Boshida 20% kichikroq bo'lib turadi
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }, // Rasm biroz kechikib chiqadi
  },
};

// Matnning Ota qutisi uchun qoida
const textContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Har bir harf 0.05 soniyada chiqadi (tezlik)
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full min-h-screen pt-32 bg-zinc-900  overflow-x-hidden"
    >
      {/* 1_) Main container*/}
      <motion.div
        variants={leftContainerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full px-4 md:px-8 sm:px-6 lg:px-8 flex items-center flex-col md:flex-row gap-6 lg:gap-20"
      >
        {/* 1.1_) Left Side: Text & Buttons,  Social links*/}
        <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-2 md:mt-0">
          {/* Status Badge  */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-300 border border-gray-700 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Available for Work
          </motion.div>
          {/*Heading */}
          <motion.div className="mt-4 space-y-6">
            <motion.h1
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-gray-100"
            >
              <span className="block font-bold">Hello, I'm</span>

              <span className=" block text-emerald-400 ">
                <Typewriter
                  words={[
                    "Sarvarjon Developer",
                    "Junior Full Stack Developer",
                    "Problem Solver",
                  ]}
                  loop={true}
                  cursorStyle="|"
                  delaySpeed={50}
                  typeSpeed={70}
                  cursor
                  deleteSpeed={250}
                />
              </span>
            </motion.h1>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Junior Full-Stack Developer crafting digital experience with
                modern web technologies.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Specializing in modern frontend development and expanding into
                robust backend architecture with Node.js. Driven by a strong
                goal to build meaningful digital solutions for international
                science, nature, and wildlife organizations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center  gap-4 mt-10">
              <a
                href="/Resume/my-resume1.pdf"
                className={
                  "flex items-center cursor-pointer w-full sm:w-auto gap-2 py-4 px-8 rounded-lg bg-gray-50 text-black  hover:bg-gray-300 transition-all"
                }
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#projects"
                className={
                  " cursor-pointer w-full sm:w-auto gap-2 py-4 px-8 rounded-lg bg-gray-50 text-black  hover:bg-gray-300 transition-all"
                }
              >
                View My Work
              </a>
            </div>
          </motion.div>
          {/* Social media icons */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-row gap-4 items-center"
          >
            <a className="w-14 h-14 rounded-full border border-gray-600 bg-zinc-900/50 flex items-center justify-center text-white hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110">
              <svg
                className="w-6 h-6 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a className="w-14 h-14 rounded-full border border-gray-600 bg-zinc-900/50 flex items-center justify-center text-white hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>
            <a className="w-14 h-14 rounded-full border border-gray-600 bg-zinc-900/50 flex items-center justify-center text-white hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
        {/* 1.2_) Right Side: Portfolio image and Floating Badge*/}
        <motion.div
          variants={imageVariants}
          className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0"
        >
          <div className="relative w-80 h-80 sm:w-80 sm:h-80 lg:w-96 lg:h-96 transform group">
            {/* Main profile picture */}
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <img
                src="/my-profile2.jpg"
                alt="my-profile-photo"
                className="relative w-full h-full rounded-full overflow-hidden bg-white object-cover z-10 "
              />
            </motion.div>
            <div className="absolute bottom-2 right-2 md:bottom-6 md:right-4 bg-zinc-900/90 border border-zinc-900 px-5 py-3 rounded-full flex items-center gap-3 z-20">
              {/* Pulsing green Dot */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>

              {/* Badge text */}
              <span className="text-md font-medium text-zinc-100">
                Available for hire
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* 2_) Statistics and Indicators */}
      <motion.div
        variants={leftContainerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto px-4 md:px-8 sm:px-6 lg:px-8 mt-6 pt-8 flex flex-row justify-center md:justify-start items-center gap-6  sm:gap-12 md:gap-16"
      >
        {/* statistics */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            <AnimatedCounter from={0} to={10} duration={3} />+
          </span>
          <span className="text-zinc-400 mt-2 font-medium">
            Completed Projects
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <span className="text-4xl md:text-5xl font-extrabold text-emerald-400 tracking-tight">
            Full-Stack
          </span>
          <span className="text-zinc-400 mt-2 font-medium">
            Development Focus
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            <AnimatedCounter from={0} to={100} duration={2.5} />%
          </span>
          <span className="text-zinc-400 mt-2 font-medium">
            Passion & Drive
          </span>
        </motion.div>
        {/* scroll to explore */}
      </motion.div>
    </section>
  );
};

export default Hero;
