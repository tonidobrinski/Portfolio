'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Database, Cloud, Zap, Target } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiSass,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiRedux,
  SiReactquery,
  SiMysql,
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 92 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      icon: Palette,
      title: 'Design & Styling',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'CSS3/SASS', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Responsive Design', level: 92 },
        { name: 'UI/UX Principles', level: 80 },
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'REST APIs', level: 85 },
      ]
    },
    {
      icon: Cloud,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Netlify', level: 85 },
        { name: 'Vercel', level: 85 },
        { name: 'CI/CD', level: 75 },
      ]
    }
  ]

  const technologies = [
    { name: 'React', icon: SiReact, color: 'bg-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'bg-gray-900 dark:bg-gray-100' },
    { name: 'TypeScript', icon: SiTypescript, color: 'bg-blue-600' },
    { name: 'JavaScript', icon: SiJavascript, color: 'bg-yellow-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'bg-cyan-500' },
    { name: 'HTML5', icon: SiHtml5, color: 'bg-orange-500' },
    { name: 'CSS3', icon: SiCss3, color: 'bg-blue-500' },
    { name: 'Sass', icon: SiSass, color: 'bg-pink-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'bg-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'bg-gray-600' },
    { name: 'MySQL', icon: SiMysql, color: "bg-red-500" },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'bg-blue-700' },
    { name: 'Docker', icon: SiDocker, color: 'bg-blue-500' },
    { name: 'React Query', icon: SiReactquery, color: "bg-red-500" },
    { name: 'Git', icon: SiGit, color: 'bg-orange-600' },
    { name: 'GitHub', icon: SiGithub, color: 'bg-gray-800' },
    { name: 'Vercel', icon: SiVercel, color: 'bg-gray-900 dark:bg-gray-100' },
    { name: 'Figma', icon: SiFigma, color: 'bg-purple-500' },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise in modern web development.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-700 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600">
                  <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ${
                    tech.name === 'Next.js' || tech.name === 'Vercel' 
                      ? 'text-white dark:text-gray-900' 
                      : 'text-white'
                  }`}>
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Performance',
                description: 'Optimizing applications for speed and efficiency'
              },
              {
                icon: Target,
                title: 'Problem Solving',
                description: 'Finding elegant solutions to complex challenges'
              },
              {
                icon: Code,
                title: 'Clean Code',
                description: 'Writing maintainable and scalable code'
              }
            ].map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl border border-primary-200 dark:border-primary-800/30"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <strength.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {strength.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
