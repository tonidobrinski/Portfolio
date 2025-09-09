'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Palette, Globe } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Responsive Apps' },
    { id: 'design', label: 'UI/UX Design' },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A role based full-stack e-commerce platform built with React.js, featuring user authentication, customer reviews & ratings, product management and admin dashboard.',
      image: '/images/e-commerce.webp',
      category: 'web',
      technologies: ['React', 'Node.js', 'Express.js' ,'MySQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/tonidobrinski/My3dWorld',
      featured: true
    },
    {
      id: 2,
      title: 'Satellite Network App',
      description: 'A Next.js-based frontend module for space situational awareness, featuring an interactive world map, telescope management dashboard, and real-time observatory monitoring.',
      image: '/images/satelliteNetwork.jpg',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'SASS', 'Material UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/tonidobrinski/sensor-network',
      featured: true
    },
    {
      id: 3,
      title: 'Form Validation App',
      description: 'A multi-step registration and authentication app featuring live validation with Zod, session-persisted form state, avatar upload preview, and protected routing—all styled with Chakra UI and SCSS.',
      image: '/images/formValidation.jpg',
      category: 'mobile',
      technologies: ['React', 'TypeScript', 'SASS', 'Chakra UI'],
      liveUrl: 'https://tonisformvalidation.netlify.app/',
      githubUrl: 'https://github.com/tonidobrinski/form-validation',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website App',
      description: 'A modern and responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.',
      image: '/images/portfolio.jpg',
      category: 'mobile',
      technologies: ['Next.js', 'Tailwind CSS', 'Figma', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/tonidobrinski/Portfolio',
      featured: false
    },
    {
      id: 5,
      title: 'Product List App',
      description: 'A product listing page styled with CSS, featuring dynamic product cards, filtering & sorting, and a user-friendly interface for e-commerce applications.',
      image: '/images/productListing.png',
      category: 'web',
      technologies: ['React', 'CSS', 'Bootstrap'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/tonidobrinski/product-list-page',
      featured: false
    },
    {
      id: 6,
      title: 'Expenses Manager App',
      description: 'A modern and responsive expenses manager app featuring intuitive UI/UX, interactive elements, and seamless expense tracking.',
      image: '/images/expenseManagement.webp',
      category: 'web',
      technologies: ['React', 'CSS', 'Figma'],
      liveUrl: 'https://expenses-manager-application.netlify.app/',
      githubUrl: 'https://github.com/tonidobrinski/Expenses-Manager-App',
      featured: false
    },
    {
      id: 7,
      title: 'Color Block Manager App',
      description: 'A React app that lets users create persons and assign customizable color blocks, with dynamic color selection loaded via a JSON API.',
      image: '/images/colorBlockManager.png',
      category: 'web',
      technologies: ['React', 'TypeScript', 'SASS', 'Material UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/tonidobrinski/color-block-manager',
      featured: false
    },
    {
      id: 8,
      title: 'Shopping Cart App',
      description: 'A shopping cart app with Redux for state management, featuring dynamic item counts, add/remove functionality, and a live cart preview.',
      image: '/images/shoppingCart.jpg',
      category: 'web',
      technologies: ['React', 'Redux', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/tonidobrinski/Shopping-Cart',
      featured: false
    },
    {
      id: 9,
      title: 'Fintech Blog Posts App',
      description: 'A web app that aggregates and displays fintech-related blog posts, allowing users to browse, read, and filter content by categories or tags.',
      image: '/images/fintech.jpg',
      category: 'web',
      technologies: ['React', 'TypeScript', 'SASS', "Figma"],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
  ]

    const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-dark-800/50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in web
            development, mobile responsive apps, and UI/UX design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-800 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-800 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:border-primary-500 hover:text-primary-500 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects
