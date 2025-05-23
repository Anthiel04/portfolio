import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="flex items-center min-h-screen pt-16">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 mb-4 font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Fullstack Developer
            </motion.span>

            <motion.h1
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Building{" "}
              <span className="text-primary-500">digital experiences</span> that
              delight
            </motion.h1>

            <motion.p
              className="max-w-xl mb-8 text-lg md:text-xl text-dark-600 dark:text-dark-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I'm a passionate fullstack developer crafting beautiful web
              applications with modern technologies. Focused on creating
              intuitive and performant user experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a href="#contact" className="btn-primary">
                Get in touch
              </a>
              <a href="#projects" className="btn-outline">
                View my work
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-full hover:bg-dark-100 dark:hover:bg-dark-800"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-full hover:bg-dark-100 dark:hover:bg-dark-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-full hover:bg-dark-100 dark:hover:bg-dark-800"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl rotate-6 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="William Hernandez"
                className="relative z-10 object-cover w-full h-full shadow-xl rounded-2xl"
              />
              <div className="absolute z-20 p-4 bg-white shadow-lg -bottom-6 -right-6 dark:bg-dark-800 rounded-2xl">
                <p className="text-lg font-bold">1+ Years Experience</p>
                <p className="text-dark-500 dark:text-dark-400">
                  Delivering quality solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute flex-col items-center hidden transform -translate-x-1/2 bottom-12 left-1/2 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span className="mb-2 text-sm text-dark-500 dark:text-dark-400">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-dark-500 dark:text-dark-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
