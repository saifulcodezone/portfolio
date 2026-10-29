import React from "react";

const Marquee = () => {
  const technologies = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "🛡️" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "🦦" },
    { name: "Git & GitHub", icon: "🐙" },
  ];

  return (
    
    <div className="py-5 bg-white/3 backdrop-blur-sm overflow-hidden flex whitespace-nowrap relative z-10">
      <div className="animate-marquee flex gap-12 items-center text-xs font-medium text-gray-400">
        {technologies.map((tech, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[14px]">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}

        
        {technologies.map((tech, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-2">
            <span className="text-[14px]">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
