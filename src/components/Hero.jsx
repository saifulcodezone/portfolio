import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-between">
      
      <div
        className="absolute top-0 left-0 w-[80vw] md:w-[45vw] h-[50vh] md:h-[55vh] pointer-events-none z-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(0, 255, 100, 0.35) 0%, rgba(0, 200, 80, 0.15) 35%, rgba(0, 150, 60, 0.12) 60%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      {/* Right Side Green Light Glow */}
      <div
        className="absolute top-0 right-0 w-[90vw] md:w-[65vw] h-[60vh] md:h-[70vh] pointer-events-none z-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(0, 255, 100, 0.85) 0%, rgba(0, 200, 80, 0.10) 45%, rgba(0, 150, 60, 0.12) 60%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />

      
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 md:right-40 w-full md:w-[65%] h-full z-0 flex justify-end pointer-events-none"
      >
        <img
          src="/profile.png"
          alt="Saiful Islam"
          className="w-full h-full object-cover object-[75%_20%] md:object-[center_10%] opacity-30 md:opacity-40 grayscale mix-blend-lighten md:mix-blend-normal"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to top, transparent 0%, black 15%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to top, transparent 0%, black 15%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between px-6 md:px-12 pt-32 md:pt-40 pb-10 md:pb-16">
        {/* Top Left Text (Staggered Animation) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          className="max-w-[600px]"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-white text-[36px] md:text-[48px] leading-[1.1] font-medium tracking-tight mb-4"
          >
            Hey I'm Saiful Islam <br />
            Full Stack Developer
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 text-[12px] md:text-sm max-w-[300px] md:max-w-[340px] leading-relaxed"
          >
            I turn ambitious ideas into fast, accessible websites. Clean code,
            thoughtful details, real-world impact.
          </motion.p>
        </motion.div>

        {/* Huge Text Section (Slide Up Animation) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="w-full flex items-end justify-start mt-auto pb-4 md:pb-0"
        >
          
          <h2 className="text-[18vw] md:text-[16.5vw] lg:text-[20vw] font-black tracking-[-0.10em] leading-[0.96] text-white select-none whitespace-nowrap -ml-1.5 md:-ml-4">
            Developer
          </h2>

          
          <span className="text-brand text-[7vw] md:text-[4.2vw] lg:text-[7vw] font-sans font-extrabold tracking-[-0.15em] select-none leading-none mb-2 md:mb-16 lg:mb-28 ml-1 md:ml-4">
            &lt;/&gt;
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
