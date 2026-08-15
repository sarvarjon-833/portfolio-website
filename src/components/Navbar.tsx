import { Menu, Moon, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900 border-b  border-zinc-800/80 ">
      <section className=" mx-auto w-full px-4 md:px-6 lg:px-8 sm:px-6 ">
        <div className="flex flex-row items-center justify-between h-16">
          <h1 className="text-white font-semibold text-base tracking-tight">
            Sarvarjon Developer
          </h1>
          <div className="hidden md:flex items-center gap-6">
            <a
              className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              href="#education"
            >
              Education
            </a>
            <a
              className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              href="#contacts"
            >
              Contacts
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsopen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900/90 backdrop-blur-2xl border-b border-zinc-800/80 md:hidden">
          <div className="mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
            <a
              onClick={() => setIsopen(false)}
              href="#home"
              className="text-gray-300 hover:text-emerald-400 font-medium text-base transition-colors"
            >
              Home
            </a>
            <a
              onClick={() => setIsopen(false)}
              href="#skills"
              className="text-gray-300 hover:text-emerald-400 font-medium text-base transition-colors"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-emerald-400 font-medium text-base transition-colors"
            >
              Experience
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-emerald-400 font-medium text-base transition-colors"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-emerald-400 font-medium text-base transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
