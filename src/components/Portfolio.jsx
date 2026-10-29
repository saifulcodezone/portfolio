import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MontCapital",
    year: "2025",
    img: "/p1.png",
    type: "Finance Landing Page",
  },
  {
    title: "4Score",
    year: "2025",
    img: "/p2.png",
    type: "Finance Digital Product",
  },
  {
    title: "Evenvalue",
    year: "2025",
    img: "/p3.png",
    type: "SaaS Landing Page",
  },
  {
    title: "Compensel",
    year: "2025",
    img: "/p4.png",
    type: "Dashboard Interface",
  },
];

const Portfolio = () => {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🛡️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "🦦" },
    { name: "REST API", icon: "🔗" },
    { name: "Git", icon: "🐙" },
    { name: "GitHub", icon: "🐈‍⬛" },
    { name: "Postman", icon: "🚀" },
  ];

  return (
    <section id="portfolio" className="py-16 px-6 md:px-12 w-full bg-[#050505]">
      {/* Top Section: Title & Tags */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4 text-[11px] text-gray-400 font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand"></span> Projects
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-[90px] font-medium mb-6 tracking-tighter leading-none text-white"
        >
          Portfolio
        </motion.h2>

        {/* Tech Stack Tags (Staggered Animation) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-medium text-gray-400 pb-2"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-[13px] grayscale opacity-70">
                {tech.icon}
              </span>
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }} 
            className="group cursor-pointer flex flex-col"
          >
            {/* Project Image Wrapper (Image Reveal Effect) */}
            <div className="rounded-xl bg-surface aspect-[4/3] mb-6 overflow-hidden relative">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={project.img}
                alt={project.title}
                
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 transition-colors duration-500 pointer-events-none"></div>
            </div>

            {/* Project Details Bottom Area */}
            <div className="flex justify-between items-start px-2">
              {/* Left Side: Title & Year */}
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-white tracking-tight group-hover:text-brand transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-[12px] mt-1 font-mono">
                  {project.year}
                </p>
              </div>

              {/* Right Side: Arrow (Top) and Badge (Bottom) */}
              <div className="flex flex-col items-end gap-3">
                {/* Arrow Icon */}
                <motion.svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                  
                  whileHover={{ x: 4, y: -4 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </motion.svg>

                {/* Type Badge */}
                <span className="border border-gray-700 text-gray-400 text-[11px] px-3 py-1.5 rounded-full font-medium tracking-wide group-hover:border-gray-500 transition-colors">
                  {project.type}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
