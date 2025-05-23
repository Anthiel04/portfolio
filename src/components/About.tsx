import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Database, Globe } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          variants={variants}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 mb-4 font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
            About Me
          </span>
          <h2 className="mb-6">My Journey as a Developer</h2>
          <p className="max-w-3xl mx-auto text-lg text-dark-600 dark:text-dark-300">
            With over 5 years of experience in web development, I've cultivated
            a passion for creating efficient, beautiful, and user-focused
            applications.
          </p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500 to-primary-500 rounded-3xl -rotate-3 opacity-20"></div>
              <div className="absolute z-20 p-4 bg-white shadow-lg -top-6 -left-6 dark:bg-dark-900 rounded-xl">
                <p className="font-bold">Problem Solver</p>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  Turning challenges into solutions
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6">Who I Am</h3>
            <p className="mb-6 text-dark-600 dark:text-dark-300">
              I'm a fullstack developer with a focus on creating seamless user
              experiences through clean, efficient code. My journey began with a
              curiosity about how things work on the web, which evolved into a
              passion for building digital solutions.
            </p>
            <p className="mb-8 text-dark-600 dark:text-dark-300">
              I believe in continuous learning and staying up-to-date with the
              latest technologies and best practices. When I'm not coding, you
              can find me exploring new technologies, contributing to open
              source, or enjoying the outdoors.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="p-4 bg-white shadow-sm dark:bg-dark-900 rounded-xl"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Code2 className="mb-2 text-primary-500" size={24} />
                <h4 className="mb-1 text-base font-medium">Frontend</h4>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  Creating intuitive interfaces
                </p>
              </motion.div>

              <motion.div
                className="p-4 bg-white shadow-sm dark:bg-dark-900 rounded-xl"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Server className="mb-2 text-secondary-500" size={24} />
                <h4 className="mb-1 text-base font-medium">Backend</h4>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  Building robust systems
                </p>
              </motion.div>

              <motion.div
                className="p-4 bg-white shadow-sm dark:bg-dark-900 rounded-xl"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Database className="mb-2 text-accent-500" size={24} />
                <h4 className="mb-1 text-base font-medium">Databases</h4>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  Optimizing data storage
                </p>
              </motion.div>

              <motion.div
                className="p-4 bg-white shadow-sm dark:bg-dark-900 rounded-xl"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Globe className="mb-2 text-primary-500" size={24} />
                <h4 className="mb-1 text-base font-medium">DevOps</h4>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  Streamlining deployments
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
