import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const frontendSkills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 78 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 71 },
    { name: "React", level: 92 },
    { name: "Next.js", level: 85 },
    { name: "HTML/CSS", level: 98 },
    { name: "Tailwind CSS", level: 78 },
    { name: "Framer Motion", level: 54 },
    { name: "ShadCN", level: 89 },
    { name: "Spline", level: 20 },
    { name: "Three.js", level: 25 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 75 },
    { name: "Nest.js", level: 25 },
    { name: "Express", level: 70 },
    { name: "Python", level: 80 },
    { name: "Java", level: 40 },
    { name: "C++", level: 25 },
    { name: "Mongoose", level: 20 },
    { name: "RESTful APIs", level: 95 },
  ];

  const otherSkills = [
    { name: "Git/GitHub", level: 56 },
    { name: "Docker", level: 26 },
    { name: "Prompting", level: 74 },
  ];

  const databases = [
    { name: "MongoDB", level: 23 },
    { name: "PostgreSQL", level: 68 },
    { name: "SQLite", level: 82 },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 mb-4 font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
            My Expertise
          </span>
          <h2 className="mb-6">Skills &amp; Technologies</h2>
          <p className="max-w-3xl mx-auto text-lg text-dark-600 dark:text-dark-300">
            I've worked with a range of technologies in the web development
            world, from frontend to backend, continuously expanding my toolkit
            to deliver the best solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Frontend Skills */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              className="flex items-center mb-6"
              variants={itemVariants}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <span className="text-sm font-bold">F</span>
              </span>
              Frontend Development
            </motion.h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-dark-500 dark:text-dark-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-dark-200 dark:bg-dark-700">
                    <motion.div
                      className="h-full rounded-full bg-primary-500"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3
              className="flex items-center mt-12 mb-6"
              variants={itemVariants}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                <span className="text-sm font-bold">D</span>
              </span>
              Databases
            </motion.h3>
            <div className="space-y-6">
              {databases.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-dark-500 dark:text-dark-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-dark-200 dark:bg-dark-700">
                    <motion.div
                      className="h-full rounded-full bg-accent-500"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              className="flex items-center mb-6"
              variants={itemVariants}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400">
                <span className="text-sm font-bold">B</span>
              </span>
              Backend Development
            </motion.h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-dark-500 dark:text-dark-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-dark-200 dark:bg-dark-700">
                    <motion.div
                      className="h-full rounded-full bg-secondary-500"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3
              className="flex items-center mt-12 mb-6"
              variants={itemVariants}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <span className="text-sm font-bold">T</span>
              </span>
              Tools &amp; Methodologies
            </motion.h3>
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-dark-500 dark:text-dark-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-dark-200 dark:bg-dark-700">
                    <motion.div
                      className="h-full rounded-full bg-primary-500"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
