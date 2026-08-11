import { Briefcase, Calendar, DownloadIcon, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface EduCardProps {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  techStack: string[];
  certLink: string;
}

const EduCard = ({
  role,
  company,
  date,
  location,
  description,
  techStack,
  certLink,
}: EduCardProps) => {
  return (
    <div>
      <Card className="bg-zinc-900/50 border border-zinc-800 text-white rounded-2xl hover:border-zinc-700 transition-all duration-300 h-full">
        <CardHeader className="pb-4 flex flex-col gap-1.5">
          <CardTitle className="text-xl md:text-2xl font-semibold text-zinc-50 flex items-center gap-4">
            <span>
              <Briefcase className="h-5 w-5" />
            </span>
            {role}
          </CardTitle>
          <CardDescription>{company}</CardDescription>
          <div className="flex flex-col gap-2 mt-3 text-zinc-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-zinc-400" />
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-400" />
              <span>{location}</span>
            </div>

            <a
              className="flex items-center gap-2 mt-2 text-zinc-300 border border-zinc-800 px-3 py-1.5 rounded-lg hover:bg-zinc-800 hover:text-emerald-400 transition-colors"
              href={certLink}
              target="_blank"
              rel="noopener boreferrer"
            >
              <DownloadIcon className="w-4 h-4" />
              View Certificate
            </a>
          </div>
        </CardHeader>
        <CardContent>
          <p>{description}</p>

          <div className="mt-4 flex flex-wrap gap-2 pt-6 border-t border-zinc-800/50">
            {techStack.map((skill, index) => (
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
    </div>
  );
};

export default EduCard;
