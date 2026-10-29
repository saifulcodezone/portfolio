import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

const About = () => {
  //  Magnetic Button Logic
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  //  Card Hover Spotlight Effect 
  const cardRef = useRef(null);
  const cardMouseX = useMotionValue(0);
  const cardMouseY = useMotionValue(0);

  const handleCardMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    cardMouseX.set(e.clientX - rect.left);
    cardMouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="about"
      className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 relative overflow-hidden"
    >
      {/* Left Column: Badge & Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 md:gap-20 md:w-[35%] md:-mt-24 w-full z-10"
      >
        <div className="inline-flex items-center gap-2 w-max">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
          <span className="text-[11px] font-medium text-gray-300 tracking-wide">
            About Me
          </span>
        </div>

        {/* Spotlight Profile Card */}
        <div
          ref={cardRef}
          onMouseMove={handleCardMouseMove}
          className="relative flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-md w-full md:w-max pr-8 border border-white/5 overflow-hidden group cursor-pointer"
        >
          {/* Spotlight Effect */}
          <motion.div
            className="absolute w-32 h-32 bg-brand/20 rounded-full blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              left: cardMouseX,
              top: cardMouseY,
            }}
          />
          <div className="w-10 h-10 rounded bg-gray-800 overflow-hidden shrink-0 z-10">
            <img
              src="/profile-small.png"
              alt="Saiful Islam"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col justify-center z-10 relative">
            <p className="text-[13px] font-bold text-brand leading-tight mb-0.5">
              Saiful Islam
            </p>
            <p className="text-[10px] text-gray-400 font-mono leading-tight">
              &lt;Full Stack Developer/&gt;
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Headline, Text & Button */}
      <div className="flex flex-col w-full md:w-[65%] z-10">
        {/* Text Reveal Animation for Headline */}
        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // Custom cubic-bezier
            className="text-[36px] leading-[1.1] md:text-[64px] md:leading-[1.05] font-medium tracking-tight text-white"
          >
            I craft digital <br className="hidden md:block" />
            products where <br className="hidden md:block" />
            research, <span className="text-brand">design,</span>{" "}
            <br className="hidden md:block" />{" "}
            <span className="text-brand">& craft meet.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8 md:gap-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#888888] text-[14px] md:text-[15px] leading-relaxed max-w-full md:max-w-[380px]"
          >
            Turning complex problems into clear, intuitive{" "}
            <br className="hidden md:block" />
            experiences — from early discovery and wireframes{" "}
            <br className="hidden md:block" />
            through high-fidelity UI and handoff.
          </motion.p>

          {/* Magnetic Button */}
          <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: mousePosition.x * 0.2, y: mousePosition.y * 0.2 }} // Magnetic Pull
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            }}
            className="group flex items-center justify-center md:justify-start gap-2 border border-[#fff] hover:border-brand text-[#ccc] hover:text-brand px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.05em] transition-colors shrink-0 w-full md:w-auto md:ml-auto cursor-pointer bg-transparent"
          >
            SERVICES
            <svg
              className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
