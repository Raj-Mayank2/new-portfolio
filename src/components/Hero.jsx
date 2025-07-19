import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import profile1 from "../assets/profile1.jpg"
const Hero = ({ isDarkMode }) => {
  const textClasses = isDarkMode ? "text-white" : "text-gray-900"
  const mutedTextClasses = isDarkMode ? "text-gray-300" : "text-gray-600"

  const handleViewWork = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/mayankraj-resume.pdf"; // Path from public folder
  link.download = "mayankraj-resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          {/* Profile Avatar with Image Space */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1 hover:scale-105 transition-transform duration-300">
            <div
              className={`w-full h-full rounded-full ${
                isDarkMode ? "bg-slate-900" : "bg-white"
              } flex items-center justify-center overflow-hidden relative group`}
            >
              {/* Image placeholder - replace src with your actual image */}
              <img
                src={profile1}
                alt="Mayank Raj"
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Fallback initials */}
              <span 
                className="absolute inset-0 text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hidden items-center justify-center"
                style={{ display: 'none' }}
              >
                MR
              </span>
            </div>
          </div>

          {/* Main Heading - Fixed text clipping */}
          <div className="mb-6 py-4 overflow-visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse leading-tight sm:leading-tight md:leading-tight overflow-visible">
              <span className="inline-block py-2">Mayank Raj</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl ${mutedTextClasses} mb-8 leading-relaxed`}>
            Full Stack Developer & ML Enthusiast 
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleViewWork}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={handleDownloadResume}
            className="flex items-center space-x-2 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { Icon: Github, href: "https://github.com/Raj-Mayank2", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/mayankraj17/", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:vmayank0123@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className={`p-4 rounded-full ${
                isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
              } backdrop-blur-sm border ${
                isDarkMode ? "border-white/10" : "border-gray-200/20"
              } hover:scale-110 transition-all duration-300 cursor-pointer group`}
            >
              <Icon className={`w-6 h-6 group-hover:text-purple-600 transition-colors ${textClasses}`} />
            </a>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => {
            const element = document.getElementById("about")
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
        >
          <ChevronDown className="w-8 h-8 mx-auto text-purple-600" />
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-4 sm:left-20 w-4 h-4 bg-purple-600 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-8 sm:right-32 w-6 h-6 bg-pink-600 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
    </section>
  )
}

export default Hero