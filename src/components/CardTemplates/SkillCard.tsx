import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion, type Variants } from "motion/react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, borderColor: "#3f3f46" }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-zinc-900/50 border border-zinc-800 text-white rounded-2xl hover:border-zinc-700 transition-all duration-300 h-full">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-3 text-lg font-semibold text-zinc-100">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 ">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium bg-zinc-800/80 text-white rounded-full border border-zinc-700/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
