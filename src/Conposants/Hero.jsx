import React, { useState, useEffect } from "react";
import background from "../Assets/tech.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Hero = () => {
const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const texts = ["Développeur Web", "Freelance", "Passionné par la Tech"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 90 : 120;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[index].length) {
          setText((prev) => prev + texts[index][charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <motion.div  ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    id="home" className="relative"
    >
     
      
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>

        {/* Section avec background image */}
        <div
          className="h-[60vh] md:h-[70vh] w-full flex items-center justify-center mx-auto z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="text-center text-white mt-10 z-10">
            <div className="max-w-[90%] md:max-w-[80%] text-center mb-8">
              <h1 className="text-xl md:text-4xl font-semibold text-white break-words">
                <span className="text-white">{text}</span>
                <span className="animate-blink">|</span>
              </h1>
            </div>

            <a
              href="#contact"
              className="text-center mt-4 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      
    </motion.div>
  );
};

export default Hero;
