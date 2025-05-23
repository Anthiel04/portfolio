import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Code } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Code className="text-primary-500" size={28} />
          <span>William Hernandez</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 md:flex">
          <NavLinks />
          <motion.button
            onClick={toggleTheme}
            className="p-2 transition-colors rounded-full hover:bg-dark-100 dark:hover:bg-dark-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-dark-500" size={20} />
            )}
          </motion.button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <motion.button
            onClick={toggleTheme}
            className="p-2 transition-colors rounded-full hover:bg-dark-100 dark:hover:bg-dark-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-dark-500" size={20} />
            )}
          </motion.button>
          <button
            onClick={toggleMenu}
            className="p-2 transition-colors rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="absolute left-0 right-0 bg-white shadow-lg md:hidden top-full dark:bg-dark-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="container flex flex-col items-center gap-6 py-6">
            <NavLinks onClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void } = {}) => {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          className="font-medium transition-colors hover:text-primary-500"
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.name}
        </motion.a>
      ))}
    </>
  );
};

export default Header;
