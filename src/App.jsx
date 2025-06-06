"use client";

import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function sendMessage(){
    toast.success("Message sent successfully!")
  }
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const darkImage = { light: "sun.png", dark: "dark.png" };

  const texts = {
    en: {
      hero: "Full Stack Developer & Founder of Youth Code Lab and MindCraft Tech",
      subtitle:
        "Empowering the next generation of developers with 3+ years of experience",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      blog: "Blog",
      resume: "Download Resume",
      testimonials: "Testimonials",
    },
    fr: {
      hero: "Développeur Full Stack & Fondateur de Youth Code Lab",
      subtitle:
        "Autonomiser la prochaine génération de développeurs avec 3+ ans d'expérience",
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      blog: "Blog",
      resume: "Télécharger CV",
      testimonials: "Témoignages",
    },
  };

  const skills = [
    { name: "HTML & CSS", level: 100 },
    { name: "JavaScript", level: 96 },
    { name: "React/Next.js", level: 90 },
    { name: "TailwindCSS & Bootstrap", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "MongoDB", level: 92 },
    { name: "TypeScript", level: 70 },
    { name: "Python", level: 85 },

    { name: "PHP", level: 98 },
    { name: "VUE", level: 88 },
    { name: "Machine Learning", level: 70 },
    { name: "Flutter", level: 89 },
    { name: "React Native", level: 85 },
    { name: "AWS", level: 78 },
  ];

  const projects = [
    {
      id: 1,
      title: "Bei Chini Ltd",
      description: "Stock management system for Bei Chini Ltd",
      tech: ["React", "Node.js", "MongoDB"],
      category: "web",
      image: "app (1).jfif",
      demo: "https://youthcodelab.com",
      github: "https://github.com/bitbeast-dev?tab=repositories",
    },
    {
      id: 2,
      title: "Active Minds Initiative",
      description: "Responsive website for Active Minds Initiative",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      category: "dashboard",
      image: "afri (7).jfif",
      demo: "https://demo.com",
      github: "https://github.com/bitbeast-dev?tab=repositories",
    },
    {
      id: 2,
      title: "Wander wise",
      description: "WanderWise adventerous touring application",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      category: "dashboard",
      image: "afri (3).jfif",
      demo: "https://demo.com",
      github: "https://github.com/bitbeast-dev?tab=repositories",
    },
    {
      id: 1,
      title: "Garage Management System",
      description: "Comprehensive system for managing garage operations",
      tech: ["React", "Node.js", "MongoDB"],
      category: "web",
      image: "afri (5).jfif",
      demo: "https://youthcodelab.com",
      github: "https://github.com/bitbeast-dev?tab=repositories",
    },
    {
      id: 2,
      title: "Hospitality Management System",
      description: "Comprehensive system for managing hotel operations",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      category: "dashboard",
      image: "afri (5).jfif",
      demo: "https://demo.com",
      github: "https://github.com/bitbeast-dev?tab=repositories",
    },
    {
      id: 2,
      title: "Empowering High School Students Through Youth Code Lab Training",
      description:
        "Youth Code Lab trained high school students in modern web development. ",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      category: "dashboard",
      image: "essa.PNG",
      demo: "https://demo.com",
      github: "https://github.com/bitbeast-dev?tab=repositories",
    },
  ];

  const testimonials = [
    {
      name: "Nsengumukiza Irene",
      role: "IT Specialist at Norrsken, Kigali, Rwanda",
      content:
        "Working with Tuyizere Honore was an absolute pleasure. His professionalism, deep technical knowledge, and ability to turn ideas into functional, high-quality solutions truly set him apart. He’s not only a talented developer but also one of the best people you could ever collaborate with—reliable, insightful, and always committed to excellence.",
      avatar: "test.jfif",
    },
    {
      name: "Elissa Ntihinduka",
      role: "Teacher at Essa Nyarugunga",
      content:
        "In every coding project, Tuyizere shows a rare blend of precision, creativity, and persistence. He tackles problems with a clear mind, writes clean, efficient code, and never backs down from a challenge. Beyond his technical skills, he is one of the most hardworking, brave, open-minded, and collaborative students I have ever known. His humility, willingness to learn, and supportive nature make him not just a great developer, but a truly admirable person. Anyone would be fortunate to work with him.",
      avatar: "test.jfif",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Started Full Stack Development",
      description: "Began professional journey in web development",
    },
    {
      year: "2022",
      title: "Founded Youth Code Lab",
      description: "Launched educational platform for young developers",
    },
    {
      year: "2023",
      title: "Senior Developer Role",
      description: "Advanced to senior position with expanded responsibilities",
    },
    {
      year: "2024",
      title: "Mentoring & Teaching",
      description: "Actively mentoring 50+ young developers",
    },
  ];

  // Typing animation effect
  useEffect(() => {
    const text = texts[language].hero;
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [language]);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Dark mode persistence
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Testimonials carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "en" ? "fr" : "en");

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#08ce93] flex items-center justify-center z-50">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold">Tuyizere Honore</h2>
          <p className="text-[#08ce93]">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Custom Cursor */}
      {/* <div
                className="fixed w-6 h-6 bg-yellow-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
                style={{
                    left: mousePosition.x - 12,
                    top: mousePosition.y - 12,
                    transform: 'scale(1)',
                }}
            /> */}

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          darkMode ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-sm border-b ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="w-13 h-13 rounded-full overflow-hidden">
              <img src="me.jfif" className="" alt="" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`capitalize transition-colors duration-200 hover:text-[#08ce93] ${
                      activeSection === item ? "text-[#08ce93]" : ""
                    }`}
                  >
                    {texts[language][item] || item}
                  </a>
                )
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-full border border-[#08ce93] text-[#08ce93] hover:bg-[#08ce93] hover:text-white transition-colors"
              >
                {language.toUpperCase()}
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <img
                    src={darkImage.light}
                    alt="Light Mode Icon"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src={darkImage.dark}
                    alt="Light Mode Icon"
                    className="w-6 h-6"
                  />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-gray-900" : "bg-white"
            } border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="px-4 py-2 space-y-2">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block py-2 capitalize hover:text-[#08ce93] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {texts[language][item] || item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#08ce93]">Tuyizere</span> Honore
          </h1>
          <div className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-[#08ce93] animate-pulse pr-1">
              {typedText}
            </span>
          </div>
          <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {texts[language].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#08ce93] text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#08ce93]  rounded-full hover:bg-[#08ce93] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-16 text-[#08ce93] ${
              darkMode ? "text-white" : "text-[#08ce93]"
            }`}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto rounded-full flex items-center justify-center text-white text-6xl font-bold">
                <img src="me.jfif" alt="" className="rounded-full" />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of
                professional experience, dedicated to creating innovative
                solutions and empowering the next generation of developers
                through Youth Code Lab.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in technology has been driven by a desire to solve
                real-world problems and make a positive impact in the developer
                community. I specialize in modern web technologies and have a
                strong foundation in both frontend and backend development.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-[#08ce93] dark:bg-[#08ce93] text-white  rounded-full">
                  Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-[#08ce93] dark:bg-[#08ce93] text-white  rounded-full">
                  Founder
                </span>
                <span className="px-4 py-2 bg-[#08ce93] dark:bg-[#08ce93] text-white rounded-full">
                  Mentor
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20">
            <h3
              className={`text-2xl font-bold text-center mb-12 text-[#08ce93] ${
                darkMode ? "text-white" : ""
              }`}
            >
              My Journey
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#08ce93]"></div>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-200">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-[#08ce93] rounded-full flex items-center justify-center text-white font-bold z-10">
                    {item.year.slice(-2)}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-16 ${
              darkMode ? "text-white" : "text-[#08ce93]"
            }`}
          >
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span
                    className={` ${darkMode ? "text-white" : "text-black"}`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-[#08ce93] h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-[#08ce93] mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">
                GitHub Repositories
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-[#08ce93] mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Commits This Year
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-[#08ce93] mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Students Mentored
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-16 text-[#08ce93] ${
              darkMode ? "text-white" : ""
            }`}
          >
            Featured Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div
              className={`flex space-x-4  p-2 rounded-full bg-[#ddd] border border-white ${
                darkMode ? "bg-[rgba(1,1,1,0.07)]" : ""
              }`}
            >
              {["all", "web", "mobile", "dashboard"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                    selectedFilter === filter
                      ? "bg-[#08ce93] text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-white "
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg h-70 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="p-6">
                  <img
                    src={project.image}
                    alt=""
                    className="rounded-lg w-15 h-15 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#08ce93] dark:bg-[#08ce93] text-[#08ce93] dark:text-[#08ce93] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      className="flex-1 text-center py-2 bg-[#08ce93] text-white rounded hover:bg-[#08ce93] transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 text-center py-2 border border-[#08ce93] text-[#08ce93] rounded hover:bg-[#08ce93] hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold mb-16 text-[#08ce93] ${
              darkMode ? "text-white" : ""
            }`}
          >
            What People Say
          </h2>
          <div className="relative">
            <div className="bg-white dark:bg-gray-900 p-8 text-white rounded-lg shadow-lg">
              <div className="text-6xl text-[#08ce93] mb-4 ">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
              </div>
              <p className="text-lg mb-6 italic">
                {testimonials[currentTestimonial].content}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold">
                  {testimonials[currentTestimonial].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-bold">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-[#08ce93]"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-16 text-[#08ce93] ${
              darkMode ? "text-white" : ""
            }`}
          >
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
              <p
                className={`text-lg mb-8 text-blac text-black font-light ${
                  darkMode ? "text-white" : ""
                }`}
              >
                I'm always interested in new opportunities and exciting
                projects. Whether you need a full-stack developer or want to
                collaborate on educational initiatives, let's connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 p-2 bg-[#08ce93] rounded-full flex items-center justify-center text-white">
                    <img src="icon (1).png" alt="" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600 dark:text-gray-300">
                      beastbit918@gmail.com || honoretuyizere8@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 p-2 bg-[#08ce93] rounded-full flex items-center justify-center text-white">
                    <img src="icon (7).png" alt="" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600 dark:text-gray-300">
                      +250 783724712 || +250 795528081
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 p-2 bg-[#08ce93] rounded-full flex items-center justify-center text-white">
                    <img src="icon (6).png" alt="" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Kigali, Rwanda
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#08ce93] focus:border-transparent transition-all ${
                    formErrors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                />

                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#08ce93] focus:border-transparent transition-all ${
                    formErrors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                />

                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#08ce93] focus:border-transparent transition-all resize-none ${
                    formErrors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
                />

                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>
              <button
              onClick={sendMessage}
                type="submit"
                className="w-full py-4 bg-[#08ce93] text-white rounded-lg hover:bg-[#08ce93] transition-all duration-300 transform hover:scale-105 font-semibold"
              >
              
                Send Message
              </button>
                <ToastContainer/>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#08ce93] mb-4">
                Tuyizere Honore
              </h3>
              <p className="text-gray-300">
                Full Stack Developer & Founder of Youth Code Lab
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-gray-300 hover:text-[#08ce93] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-300 hover:text-[#08ce93] transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block text-gray-300 hover:text-[#08ce93] transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block text-gray-300 hover:text-[#08ce93] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Web Development</div>
                <div className="text-gray-300">Mobile Apps</div>
                <div className="text-gray-300">Mentoring</div>
                <div className="text-gray-300">Consulting</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4 p-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#08ce93] rounded-full flex items-center justify-center hover:bg-[#08ce93] transition-colors"
                >
                  <img src="icon (2).png" alt="" />
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="/meet me.pdf"
                  download
                  className="inline-block px-6 py-2 bg-[#08ce93] text-white rounded-full hover:bg-[#08ce93] transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tuyizere Honore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
