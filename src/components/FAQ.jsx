import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How do I start a website project?",
    a: "Tell me about your website, goals, and the features you need. I'll review the scope with you and discuss the next steps, timeline, and budget before development begins.",
    cat: "Working with Saiful",
  },
  {
    q: "Will I work directly with you?",
    a: "Yes, absolutely. You will communicate directly with me throughout the entire process.",
    cat: "",
  },
  {
    q: "What types of websites can you build?",
    a: "I build custom landing pages, corporate websites, e-commerce stores, and complex web applications.",
    cat: "Scope & Pricing",
  },
  {
    q: "What is included in a development project?",
    a: "This includes design implementation, responsive coding, SEO basics, performance optimization, and deployment.",
    cat: "",
  },
  {
    q: "How much does a custom website cost?",
    a: "Costs vary based on complexity, features, and timeline. Contact me for a custom quote.",
    cat: "",
  },
  {
    q: "Can you work on an existing website?",
    a: "Yes, I can audit and improve your existing website's performance, design, and functionality.",
    cat: "",
  },
  {
    q: "How do you approach responsive development?",
    a: "I use a mobile-first approach with modern CSS to ensure the site looks perfect on all devices.",
    cat: "Development & Handover",
  },
  {
    q: "Can you help with performance and accessibility?",
    a: "Yes, I prioritize Core Web Vitals and WCAG guidelines to ensure your site is fast and accessible.",
    cat: "",
  },
  {
    q: "How will my website be handed over?",
    a: "You will get full access to the codebase, hosting, and a documentation guide for future maintenance.",
    cat: "",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto bg-[#050505] w-full overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 flex flex-col items-start md:pl-[25%]"
      >
        <p className="text-gray-400 text-[11px] mb-3 flex items-center gap-2 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-brand"></span> FAQ
        </p>
        <h2 className="text-3xl md:text-[46px] font-bold tracking-tight mb-3">
          <span className="text-brand">ASK ME ANYTING</span>
        </h2>
        <p className="text-gray-400 text-[12px]">
          Answers about planning,{" "}
          <span className="text-white font-medium">
            building, and launching your website.
          </span>{" "}
        </p>
      </motion.div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const showCategory = faq.cat !== "";

          return (
            <div key={index} className="contents">
              
              <div className="md:col-span-1 hidden md:flex items-start pt-5">
                {showCategory && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-white text-[14px] font-medium tracking-wide"
                  >
                    {faq.cat}
                  </motion.span>
                )}
              </div>

              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="md:col-span-3 flex flex-col w-full"
              >
              
                <div
                  className={`flex flex-col w-full rounded-xl transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "bg-[#0c0c0c] border border-white/[0.08]"
                      : "border-b border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex justify-between items-center text-left py-5 px-6 group cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-[11px] font-mono transition-colors duration-300 ${
                          isOpen
                            ? "text-brand"
                            : "text-gray-500 group-hover:text-brand"
                        }`}
                      >
                        [0{index + 1}]
                      </span>
                      <span
                        className={`text-[15px] font-medium transition-colors duration-300 ${
                          isOpen
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    
                    <span
                      className={`text-xl font-light transition-colors duration-300 ${
                        isOpen
                          ? "text-white"
                          : "text-gray-500 group-hover:text-white"
                      }`}
                    >
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>

                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="pl-[52px] text-gray-400 text-[13px] pr-12 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
