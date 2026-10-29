import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <footer className="pt-24 pb-8 px-6 md:px-12 bg-[#12180F] w-full border-t border-white/5 overflow-hidden relative">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-brand/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col mb-20"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-[11px] mb-6 flex items-center gap-2 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
            Have a project in mind? Let's bring it to life.
          </motion.p>

          {/* Huge Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[45px] md:text-[90px] lg:text-[110px] font-bold tracking-tighter text-brand leading-[0.9] mb-6"
          >
            Let's build something
          </motion.h2>

          {/* Email Link with Border */}
          <motion.a
            variants={itemVariants}
            href="mailto:mohammadsaifulislamcse@gmail.com"
            className="text-[20px] md:text-[40px] text-white font-light tracking-tight border-b border-white/30 pb-4 inline-block w-full max-w-[660px] hover:border-brand hover:text-brand transition-colors duration-300 break-all md:break-normal"
          >
            mohammadsaifulislamcse@gmail.com
          </motion.a>

          {/* Bottom Row: WhatsApp Button & Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 gap-8"
          >
            {/* WhatsApp Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/8801517074567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-black px-2 py-2 pr-6 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                <FaWhatsapp className="text-white text-[18px]" />
              </div>
              <span className="text-sm font-medium">Chat on WhatsApp</span>
            </motion.a>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-5 md:gap-8 text-gray-400 text-[12px] md:text-[13px] font-medium">
              {/* Instagram */}
              <motion.a
                whileHover={{ y: -3, color: "#ffffff" }}
                href="https://www.instagram.com/_mohammadsaifulislam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors group"
              >
                <FaInstagram className="text-[18px] group-hover:text-brand transition-colors" />
                Instagram
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -3, color: "#ffffff" }}
                href="https://www.linkedin.com/in/saifulcodezone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors group"
              >
                <FaLinkedin className="text-[18px] group-hover:text-brand transition-colors" />
                Linkedin
              </motion.a>

              {/* GitHub */}
              <motion.a
                whileHover={{ y: -3, color: "#ffffff" }}
                href="https://github.com/saifulcodezone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors group"
              >
                <FaGithub className="text-[18px] group-hover:text-brand transition-colors" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* 2. Bottom Section: Copyright & Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 gap-4"
        >
          <p>© 2025 Saiful. Built with purpose.</p>
          <a
            href="#"
            className="hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1 group"
          >
            Back to top
            <span className="group-hover:-translate-y-1 transition-transform duration-300">
              ↑
            </span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
