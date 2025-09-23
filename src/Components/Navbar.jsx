import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  // Navbar links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Workouts", path: "/workouts" },
    { name: "Challenges", path: "/challenges" },
    { name: "Progress", path: "/progress" },
    { name: "Nutrition", path: "/nutrition" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent dark:bg-transparent shadow-md backdrop-blur-2xl">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600 dark:text-orange-400">
          Calisthenics
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-200 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-orange-500 transition ${
                    isActive ? "text-orange-600 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition place-content-end-safe"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/*for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-2 md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col space-y-3 p-4 text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block hover:text-orange-500 transition ${
                      isActive ? "text-orange-600 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
