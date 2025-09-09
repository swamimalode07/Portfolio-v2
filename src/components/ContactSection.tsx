"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="bg-black text-center py-34 px-[5%] font-space-grotesk">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Let’s work together
      </h2>
      <p className="text-gray-300 mb-10 text-lg">
        Have a project in mind? Let’s create something amazing.
      </p>
      <div className="flex justify-center">
        <motion.a
          href="mailto:swamimalodeofficial@gmail.com"
          className="flex items-center gap-2 rounded-full border-2 border-[#323232] px-6 py-3 text-white bg-transparent"
          whileHover={{
            y: -4, 
            scale: 1.02, 
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          Get in touch <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
