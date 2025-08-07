import { Github, ExternalLink, Star, Calendar, Users } from 'lucide-react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
const Projects = ({ isDarkMode }) => {
  const textClasses = isDarkMode ? "text-white" : "text-gray-900"
  const mutedTextClasses = isDarkMode ? "text-gray-300" : "text-gray-600"
  const cardClasses = isDarkMode
    ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-white/10"
    : "bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg"

  const projects = [
    {
      title: "Background-remover SaaS application",
      description: "A full-stack SaaS application where user can remove the background from their images easily with no efforts.Sign in feature also implemented.",
      tech: ["React", "Node.js", "MongoDB", "RazorPay","SaaS","Express","Clerk","Axios","Cors"],
      color: "from-purple-400 to-pink-400",
      image: project1,
      github: "https://github.com/Raj-Mayank2/bg-removals",
      live: "https://bg-removals.onrender.com/",
      status: "Completed",
      year: "2024",
      team: "Solo Project",
      features: ["Payment Integration", "Bg-removal", "AI integration"]
    },
    {
      title: "Pro-News Letter",
      description: "A full-stack application which works as my online project journals where I record details of all my projects and all.",
      tech: ["Next", "Node.js", "MongoDB", "RazorPay","SaaS","Express","Clerk","Axios","Cors"],
      color: "from-green-400 to-blue-400",
      image: project1,
      github: "https://github.com/Raj-Mayank2/Pro-Newsletter",
      live: "https://pronewsletter.netlify.app/",
      status: "Completed",
      year: "2024",
      team: "Solo Project",
      features: ["Payment Integration", "Bg-removal", "AI integration"]
    },
    {
      title: "Movie App",
      description: "Movie application made with 5000+ tmdb database with description of each movie.",
      tech: ["React", "TMDB", "API", "Express", "Redux"],
      color: "from-blue-400 to-cyan-400",
      image: project2,
      github: "https://github.com/Raj-Mayank2/movie-apps",
      live: "https://raj-mayank2.github.io/movieapp/",
      status: "In Progress",
      year: "2024",
      team: "2 Developers",
      features: ["movie-application", "api-usage", "description"]
    },
    {
      title: "Ecommerce App",
      description: "Full stack ecommerce website made with MERN stack with add to cart ,filter ,admin dashboard and many full stack features",
      tech: ["React", "MongoDB", "Express", "Tailwind"],
      color: "from-green-400 to-blue-400",
      image: project3,
      github: "https://github.com/Raj-Mayank2/e-com",
      live: "https://e-com-1-z1dm.onrender.com/",
      status: "Completed",
      year: "2023",
      team: "Solo Project",
      features: ["Add to Cart", "Filter", "Purchase"]
    },
    {
      title: "Blog Website App",
      description: "A blog website to support storage of blogs written by creators and to store them in MongoDB database.",
      tech: ["React.js", "JavaScript", "Express", "MongoDB", "cors","axios"],
      color: "from-orange-400 to-red-400",
      image: project4,
      github: "https://github.com/Raj-Mayank2/blog-website",
      live: "https://blog-website-delta-eosin.vercel.app/",
      status: "Completed",
      year: "2023",
      team: "Solo Developer",
      features: ["Drag & Drop", "Team Collaboration", "Progress Tracking"]
    },
    {
      title: "REPL WEBSITE",
      description: "Collaborative Coding Club Website of my college created by me to help other fellow programmers of my college.",
      tech: ["Reactjs", "JavaScript", "MongoDB", ],
      color: "from-orange-400 to-red-400",
      image: project5,
      github: "https://repldevs.vercel.app/",
      live: "https://repldevs.vercel.app/",
      status: "Completed",
      year: "2023",
      team: "Solo Developer",
      features: ["Drag & Drop", "Team Collaboration", "Progress Tracking"]
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-600 border-green-500/30"
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-600 border-gray-500/30"
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className={`text-lg sm:text-xl ${mutedTextClasses} max-w-3xl mx-auto`}>
            A showcase of my recent work, featuring full-stack applications, innovative solutions, and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${cardClasses} rounded-2xl border overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-bold ${textClasses} group-hover:text-purple-600 transition-colors`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                </div>

                {/* Project Meta Info */}
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className={`w-4 h-4 ${mutedTextClasses}`} />
                    <span className={mutedTextClasses}>{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className={`w-4 h-4 ${mutedTextClasses}`} />
                    <span className={mutedTextClasses}>{project.team}</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`${mutedTextClasses} mb-4 text-sm leading-relaxed line-clamp-3`}>
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold ${textClasses} mb-2`}>Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-purple-600/10 text-purple-600 rounded text-xs border border-purple-600/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold ${textClasses} mb-2`}>Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-600 rounded-full text-xs border border-purple-600/30 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-purple-600 hover:text-purple-700 transition-colors group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-purple-600 hover:text-purple-700 transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`${mutedTextClasses} mb-6`}>
            Want to see more of my work or discuss a project?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-600/25"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
