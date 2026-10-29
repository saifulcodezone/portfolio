import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-12 py-6">
        {/* Logo (Left Side) */}
        <div className="text-brand font-bold text-xl tracking-wide cursor-pointer">
          SAIFUL
        </div>

        {/* Right Side Group (Links + Button) */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Middle Links */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-medium">
            {/* Home Link (Active - Green) */}
            <a
              href="#"
              className="flex items-center gap-1.5 text-brand transition-colors"
            >
              <span className="text-[11px] font-mono text-brand/70">
                &lt;/&gt;
              </span>
              Home
            </a>

            {/* About Link (White text) */}
            <a
              href="#about"
              className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors group"
            >
              <span className="text-[11px] font-mono text-gray-600 group-hover:text-gray-400">
                &lt;/&gt;
              </span>
              About
            </a>

            {/* Portfolio Link (White text) */}
            <a
              href="#portfolio"
              className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors group"
            >
              <span className="text-[11px] font-mono text-gray-600 group-hover:text-gray-400">
                &lt;/&gt;
              </span>
              Portfolio
            </a>
          </div>

          {/* Download Resume Button (Converted to <a> tag) */}
          <a
            href="/resume.pdf"
            download="Saiful_Islam_Resume.pdf"
            className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-full font-semibold text-xs transition-all duration-300 ml-4 cursor-pointer"
          >
            <img
              src="/cta.svg"
              alt="download icon"
              className="w-4 h-4 object-contain"
            />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
