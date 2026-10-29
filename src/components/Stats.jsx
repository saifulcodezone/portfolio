import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const easeOutProgress = 1 - Math.pow(1 - progress / (duration * 1000), 4);

      const currentCount = Math.floor(easeOutProgress * (to - from) + from);

      setCount(currentCount);

      if (progress < duration * 1000) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setCount(to); 
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, to, from, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

const Stats = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section: Label and Heading */}
        <div className="mb-20">
          {/* Top Left Label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-[11px] mb-12 flex items-center gap-2 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span> Numbers
          </motion.p>

          {/* Heading Area */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-0">
            {/* Left Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-[12px] md:w-1/3 pb-1"
            >
              More than lines of code.
            </motion.p>

            {/* Right Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-[60px] font-medium tracking-tight text-white w-full md:w-2/3 text-left md:ml-auto leading-tight pr-0 md:pr-10"
            >
              Every number tells a story.
            </motion.h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              num: 6,
              suffix: "+",
              title: "Years of Experience",
              desc: "Turning ambitious ideas into dependable websites.",
            },
            {
              num: 200,
              suffix: "+",
              title: "Projects Delivered",
              desc: "Responsive websites, built with care.",
            },
            {
              num: 100,
              suffix: "%",
              title: "Client Satisfaction",
              desc: "A thoughtful process, from first brief to launch.",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col w-full group"
            >
              {/* 1. Divider Line (Hover e glow hobe) */}
              <div className="w-full h-[1px] bg-white/20 mb-6 group-hover:bg-brand/50 transition-colors duration-500"></div>

              {/* 2. Number & Suffix with Counter Animation */}
              <h3 className="text-[90px] md:text-[120px] font-normal mb-5 flex items-center tracking-tighter text-white leading-none">
                <Counter to={stat.num} duration={2} />
                <span className="text-brand text-[45px] md:text-[55px] ml-2 flex items-center">
                  {stat.suffix}
                </span>
              </h3>

              {/* 3. Title & Description */}
              <p className="text-white font-medium mb-2 text-[14px] group-hover:text-brand transition-colors duration-300">
                {stat.title}
              </p>
              <p className="text-gray-500 text-[12px] max-w-full md:max-w-[290px] leading-relaxed md:whitespace-nowrap">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
