import { Code, Palette, Zap } from "lucide-react"
import homepage from "../assets/homepage.jpg"
const About = ({ isDarkMode }) => {
  const textClasses = isDarkMode ? "text-white" : "text-gray-900"
  const mutedTextClasses = isDarkMode ? "text-gray-300" : "text-gray-600"
  const cardClasses = isDarkMode
    ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-white/10"
    : "bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg"

  const features = [
    { icon: Code, text: "Clean Code", desc: "Maintainable & Scalable" },
    { icon: Palette, text: "UI/UX Design", desc: "Beautiful Interfaces" },
    { icon: Zap, text: "Performance", desc: "Lightning Fast" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-base sm:text-lg ${mutedTextClasses} leading-relaxed`}>
              I’m a passionate Full Stack Developer with a strong foundation in building scalable, user-friendly web applications using modern technologies like React, Node.js, MongoDB, and Express. I enjoy turning complex problems into clean, efficient code and crafting seamless user experiences.

With hands-on experience in both frontend and backend development, I specialize in creating full-stack solutions — from responsive UI design to secure server-side logic and robust database integration. I'm always eager to learn new technologies, contribute to impactful projects, and build software that solves real-world problems.
            </p>
            <p className={`text-base sm:text-lg ${mutedTextClasses} leading-relaxed`}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a good cup of coffee while brainstorming the next big idea.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map(({ icon: Icon, text, desc }, index) => (
                <div
                  key={index}
                  className={`${cardClasses} p-4 rounded-xl border text-center hover:scale-105 transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className={`font-semibold ${textClasses} mb-1`}>{text}</h3>
                  <p className={`text-sm ${mutedTextClasses}`}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section - Replaced emoji with image */}
          <div className="relative">
            <div className="w-64 sm:w-80 h-64 sm:h-80 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1 hover:scale-105 transition-transform duration-300">
              <div
                className={`w-full h-full ${
                  isDarkMode ? "bg-slate-900" : "bg-white"
                } rounded-full flex items-center justify-center overflow-hidden relative group`}
              >
                {/* Profile Image - replace src with your actual image */}
                <img
                  src={homepage}
                  alt="Mayank Raj - About Me"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to developer icon if image fails to load
                    e.target.style.display = "none"
                    e.target.nextElementSibling.style.display = "flex"
                  }}
                />
                {/* Fallback developer icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl"
                  style={{ display: "none" }}
                >
                  👨‍💻
                </div>
              </div>
            </div>

            {/* Decorative floating elements around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-600/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-600/20 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
