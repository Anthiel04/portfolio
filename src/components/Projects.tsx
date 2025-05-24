import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const getProjects = (theme: string | null): Project[] => {
  return [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management and cart functionality.",
      image: "assets/K-Mart.webp",
      technologies: ["React", "Node.js", "SQLite", "Express", "TypeScript"],
      github: "#",
      live: "https://kweb-front.vercel.app/",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Alpaca Generator",
      description:
        "A funny Alpaca Generator, personalized downloadable squared profile pics.",
      image: "assets/alpaca-image.webp",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://alpaca-ionic-react-kw6l.vercel.app/",
      category: "frontend",
    },
    {
      id: 3,
      title: "JSONtoVCF for Telegram",
      description:
        "A useful script that converts JSON data to VCF format for easy import into the contacts app.",
      image:
        "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python"],
      github: "https://github.com/Anthiel04/JSONtoVCF-tg",
      live: "#",
      category: "soft",
    },
    {
      id: 4,
      title: "Happy Birthday",
      description: "A funny and wholesome Happy Birthday website.",
      image: "assets/happybd.webp",
      technologies: ["React"],
      github: "https://github.com/Anthiel04/happybd",
      live: "https://anthiel04.github.io/happybd/",
      category: "frontend",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern portfolio website with smooth animations and responsive design.",
      image:
        theme === "dark"
          ? "assets/portfolio-dark.webp"
          : "assets/portfolio-light.webp",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      github: "https://github.com/Anthiel04/portfolio",
      live: "#",
      category: "frontend",
    },
    {
      id: 6,
      title: "Upydate",
      description:
        "A useful script that automatically downloads av updates, features resume of downloads and scraps on repos",
      image:
        "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python"],
      github: "https://github.com/Anthiel04/upydate",
      live: "#",
      category: "soft",
    },
    {
      id: 7,
      title: "MiTienda",
      description:
        "Contributed migration of the project repo, frontend and backend, the website is for a shop",
      image:
        "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Tailwind CSS", "Vite", "Nest", "Framer-Motion"],
      github: "#",
      live: "#",
      category: "fullstack",
    },
    {
      id: 8,
      title: "TechServ",
      description: "A website that has a list of services",
      image:
        theme === "dark"
          ? "assets/services-dark.webp"
          : "assets/services-light.webp",
      technologies: ["React", "Tailwind"],
      github: "https://github.com/Anthiel04/techserv",
      live: "https://anthiel04.github.io/techserv/",
      category: "frontend",
    },
    {
      id: 9,
      title: "toWebp",
      description:
        "A useful script that automatically converts jpeg and png to webp",
      image:
        "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python"],
      github: "https://github.com/Anthiel04/towebp",
      live: "#",
      category: "soft",
    },
  ];
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: "frontend" | "fullstack" | "backend" | "soft" | "all";
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projects, setProjects] = useState<Project[]>(
    localStorage.getItem("theme") === "dark"
      ? getProjects("dark")
      : getProjects("light")
  );

  useEffect(() => {
    const handleThemeChange = () => {
      const updatedTheme = localStorage.getItem("theme");
      setProjects(getProjects(updatedTheme));
    };

    // Add event listener for theme changes
    window.addEventListener("themeStorage", handleThemeChange);
    console.log("Theme changed:", localStorage.getItem("theme"));
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("themeStorage", handleThemeChange);
    };
  }, []);

  const [filter, setFilter] = useState<
    "all" | "frontend" | "backend" | "fullstack" | "soft"
  >("all");

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="section bg-dark-50 dark:bg-dark-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 mb-4 font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
            My Work
          </span>
          <h2 className="mb-6">Featured Projects</h2>
          <p className="max-w-3xl mx-auto text-lg text-dark-600 dark:text-dark-300">
            Here are some of my recent projects that showcase my skills and
            expertise in building modern web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <motion.button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary-500 text-white"
                  : "bg-white dark:bg-dark-900 hover:bg-dark-100 dark:hover:bg-dark-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </motion.button>
            <motion.button
              onClick={() => setFilter("frontend")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "frontend"
                  ? "bg-primary-500 text-white"
                  : "bg-white dark:bg-dark-900 hover:bg-dark-100 dark:hover:bg-dark-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Frontend
            </motion.button>
            <motion.button
              onClick={() => setFilter("backend")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "backend"
                  ? "bg-primary-500 text-white"
                  : "bg-white dark:bg-dark-900 hover:bg-dark-100 dark:hover:bg-dark-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Backend
            </motion.button>
            <motion.button
              onClick={() => setFilter("fullstack")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "fullstack"
                  ? "bg-primary-500 text-white"
                  : "bg-white dark:bg-dark-900 hover:bg-dark-100 dark:hover:bg-dark-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fullstack
            </motion.button>
            <motion.button
              onClick={() => setFilter("soft")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "soft"
                  ? "bg-primary-500 text-white"
                  : "bg-white dark:bg-dark-900 hover:bg-dark-100 dark:hover:bg-dark-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Soft
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="overflow-hidden transition-shadow bg-white shadow-lg dark:bg-dark-900 rounded-xl hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-dark-600 dark:text-dark-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium hover:text-primary-500"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium hover:text-primary-500"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
