import { useState } from 'react'
import { Star, Award, Target, Code, TrendingUp, Zap } from 'lucide-react'

const Skills = ({ isDarkMode }) => {
  const [activeSkill, setActiveSkill] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const textClasses = isDarkMode ? "text-white" : "text-gray-900"
  const mutedTextClasses = isDarkMode ? "text-gray-300" : "text-gray-600"
  const cardClasses = isDarkMode
    ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-white/10"
    : "bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg"

  const skills = [
    {
      name: "React",
      level: 95,
      icon: "⚛️",
      category: "Frontend",
      description: "Building dynamic UIs with hooks, context, and modern patterns",
      experience: "2+ years",
      projects: 15
    },
    {
      name: "JavaScript",
      level: 92,
      icon: "🟨",
      category: "Language",
      description: "ES6+, async/await, functional programming, and modern JS",
      experience: "1+ years",
      projects: 10
    },
    {
      name: "Node.js",
      level: 80,
      icon: "🟢",
      category: "Backend",
      description: "RESTful APIs, Express.js, and server-side development",
      experience: "2+ years",
      projects: 10
    },
    {
      name: "TypeScript",
      level: 45,
      icon: "🔷",
      category: "Language",
      description: "Type-safe development with advanced TypeScript features",
      experience: "1+ years",
      projects: 5
    },
    {
      name: "Python",
      level: 82,
      icon: "🐍",
      category: "Language",
      description: "Django, Flask, data analysis, and automation scripts",
      experience: "3+ years",
      projects: 5
    },
    {
      name: "Next.js",
      level: 40,
      icon: "▲",
      category: "Frontend",
      description: "Full-stack React framework with SSR and API routes",
      experience: "1+ years",
      projects: 12
    },
    {
      name: "UI/UX Design",
      level: 78,
      icon: "🎨",
      category: "Design",
      description: "Figma, user research, prototyping, and design systems",
      experience: "2+ years",
      projects: 30
    },
    {
      name: "MongoDB",
      level: 75,
      icon: "🍃",
      category: "Database",
      description: "NoSQL database design, aggregation, and optimization",
      experience: "1+ years",
      projects: 16
    },
    {
      name: "AWS",
      level: 50,
      icon: "☁️",
      category: "Cloud",
      description: "EC2, S3, Lambda, and cloud infrastructure management",
      experience: "1+ years",
      projects: 10
    },
    {
      name: "Git",
      level: 94,
      icon: "🌿",
      category: "Tools",
      description: "Version control, branching strategies, and collaboration",
      experience: "2+ years",
      projects: 50
    }
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Design', 'Cloud', 'DevOps', 'Tools']

  const stats = [
    { icon: Award, number: "10+", label: "Projects Completed", color: "from-purple-600 to-pink-600" },
    { icon: Star, number: "1", label: "Years Experience", color: "from-blue-600 to-cyan-600" },
    { icon: Target, number: "100%", label: "Client Agreement", color: "from-green-600 to-emerald-600" },
    { icon: Code, number: "8+", label: "Technologies", color: "from-orange-600 to-red-600" },
  ]

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const getSkillColor = (level) => {
    if (level >= 90) return "from-green-500 to-emerald-500"
    if (level >= 80) return "from-blue-500 to-cyan-500"
    if (level >= 70) return "from-yellow-500 to-orange-500"
    return "from-red-500 to-pink-500"
  }

  const getStarCount = (level) => Math.floor(level / 20)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className={`text-lg sm:text-xl ${mutedTextClasses} max-w-3xl mx-auto mb-8`}>
            Crafting digital experiences with cutting-edge technologies and creative problem-solving
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : `${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'} ${textClasses} hover:scale-105`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`${cardClasses} rounded-2xl p-6 border hover:scale-105 transition-all duration-300 cursor-pointer group`}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold ${textClasses} group-hover:text-purple-600 transition-colors`}>
                      {skill.name}
                    </h3>
                    <p className="text-xs text-purple-600 font-medium">{skill.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${textClasses} group-hover:text-purple-600 transition-colors`}>
                    {skill.level}%
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < getStarCount(skill.level) 
                            ? "text-yellow-400 fill-current" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className={`w-full ${isDarkMode ? "bg-slate-700" : "bg-gray-200"} rounded-full h-3 mb-4 overflow-hidden`}>
                <div
                  className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-3 rounded-full transition-all duration-1000 ease-out ${
                    activeSkill === index ? "animate-pulse" : ""
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Skill Details */}
              <div className="space-y-2 mb-4">
                <p className={`text-sm ${mutedTextClasses} leading-relaxed`}>
                  {skill.description}
                </p>
                <div className="flex justify-between text-xs">
                  <span className={`${mutedTextClasses} flex items-center space-x-1`}>
                    <TrendingUp className="w-3 h-3" />
                    <span>{skill.experience}</span>
                  </span>
                  <span className={`${mutedTextClasses} flex items-center space-x-1`}>
                    <Zap className="w-3 h-3" />
                    <span>{skill.projects} projects</span>
                  </span>
                </div>
              </div>

              {/* Skill Level Badge */}
              <div className="flex justify-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  skill.level >= 90 ? 'bg-green-500/20 text-green-600 border border-green-500/30' :
                  skill.level >= 80 ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                  skill.level >= 70 ? 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30' :
                  'bg-red-500/20 text-red-600 border border-red-500/30'
                }`}>
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Learning'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, number, label, color }, index) => (
            <div
              key={index}
              className={`${cardClasses} rounded-xl p-6 text-center border hover:scale-105 transition-all duration-300 group`}
            >
              <Icon className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {number}
              </div>
              <div className={`text-sm ${mutedTextClasses} font-medium`}>{label}</div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className={`${cardClasses} rounded-2xl p-8 border mt-16 text-center`}>
          <h3 className={`text-2xl font-bold ${textClasses} mb-4`}>
            Always Learning, Always Growing
          </h3>
          <p className={`${mutedTextClasses} max-w-2xl mx-auto mb-6`}>
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            tools, and methodologies to stay at the forefront of web development and deliver 
            cutting-edge solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-purple-600/20 text-purple-600 rounded-full text-sm border border-purple-600/30">
              Currently Learning: AI/ML
            </span>
            <span className="px-4 py-2 bg-blue-600/20 text-blue-600 rounded-full text-sm border border-blue-600/30">
              Next: DevOps Development
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills