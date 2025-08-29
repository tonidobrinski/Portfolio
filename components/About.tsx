'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Mail, Phone, Award, Users, Code, Coffee } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, value: '20+', label: 'Projects Completed' },
    { icon: Users, value: '10+', label: 'Happy Clients' },
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
  ]

  const experiences = [
    {
      year: '2024 - Present',
      title: 'Frontend Developer',
      company: 'IBM',
      description: 'Developing and maintaining web applications using React, Redux, and TypeScript.'
    },
    {
      year: '2022 - 2024',
      title: 'Frontend Developer',
      company: 'Freelance',
      description: 'Built responsive web applications for clients.'
    },
    {
      year: '2021 - Present',
      title: 'Frontend Developer',
      company: 'Personal Projects',
      description: 'Started my journey in web development, learning modern frameworks and best practices.'
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate frontend developer with a love for creating beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a dedicated frontend developer with over 3 years of experience crafting 
              exceptional web experiences. My journey in web development started with a 
              curiosity about how things work on the internet, which evolved into a passion 
              for creating intuitive and beautiful user interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies and best practices. When I'm not coding, you can find 
              me exploring new technologies, brainstorming ideas for products I'd love to build, or 
              exploring ways to improve my problem-solving skills.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span className="text-gray-600 dark:text-gray-400">Plovdiv, Bulgaria</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span className="text-gray-600 dark:text-gray-400">druidxdd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span className="text-gray-600 dark:text-gray-400">+359 884 424 859</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">My Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-dark-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary-500" />
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {exp.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
