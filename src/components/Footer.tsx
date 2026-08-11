const Footer = () => {
  return (
    <footer className="w-full py-10 bg-zinc-950/95 border-t border-zinc-800/50 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-2">
        <h3 className="text-zinc-100 font-semibold text-lg">
          Sarvarjon Niyazov
        </h3>

        <p className="text-zinc-400 text-sm text-center">
          Junior Full-Stack Developer | React & Node.js Enthusiast
        </p>

        <p className="text-zinc-600 text-xs mt-4">
          © {new Date().getFullYear()} Sarvarjon Niyazov. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
