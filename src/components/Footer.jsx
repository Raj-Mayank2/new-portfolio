import { useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, Heart, Coffee, Code, ArrowUp, ExternalLink, Calendar, Download } from 'lucide-react'

const Footer = ({ isDarkMode }) => {
  const [currentYear] = useState(new Date().getFullYear())
  
  const textClasses = isDarkMode ? "text-white" : "text-gray-900"
  const mutedTextClasses = isDarkMode ? "text-gray-400" : "text-gray-500"
  const cardClasses = isDarkMode
    ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border-white/10"
    : "bg-white/30 backdrop-blur-sm border-gray-200/30"

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Raj-Mayank2",
      label: "GitHub",
      color: "hover:text-gray-600",
      followers: "40+ repos"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/Raj-Mayank2",
      label: "LinkedIn",
      color: "hover:text-blue-600",
      followers: "900+ followers"
    },
    {
      icon: Mail,
      href: "mailto:vmayank0123@gmail.com",
      label: "Email",
      color: "hover:text-red-600",
      followers: "Direct"
    },
    {
      icon: Phone,
      href: "tel:+919304618177",
      label: "Phone",
      color: "hover:text-green-600",
      followers: "Call"
    }
  ]

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "My Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf", external: true }
  ]

  const services = [
    "Web Development",
    "UI/UX Design", 
    "Mobile Apps",
    "API Development",
    "Consulting",
    "Code Review"
  ]

  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", 
    "Python", "MongoDB", "PostgreSQL", "AWS"
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleQuickLinkClick = (e, href, external) => {
    if (!external) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className={`relative py-16 px-4 sm:px-6 border-t ${isDarkMode ? "border-white/10 bg-gradient-to-b from-slate-900/50 to-black" : "border-gray-200/20 bg-gradient-to-b from-gray-50/50 to-gray-100"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Mayank Raj
              </h3>
              <p className={`${mutedTextClasses} leading-relaxed mb-4`}>
                Full-stack developer passionate about creating beautiful, functional web applications. 
                I turn ideas into digital reality with clean code and innovative solutions.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-medium">Available for new projects</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className={`w-4 h-4 ${mutedTextClasses}`} />
                <span className={mutedTextClasses}>Kalyani,West Bengal (Remote Friendly)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`w-4 h-4 ${mutedTextClasses}`} />
                <a href="mailto:Mayank@example.com" className={`${mutedTextClasses} hover:text-purple-600 transition-colors`}>
                  vmayank0123@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`w-4 h-4 ${mutedTextClasses}`} />
                <a href="tel:+15551234567" className={`${mutedTextClasses} hover:text-purple-600 transition-colors`}>
                  +919304618177
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className={`font-bold ${textClasses} mb-4 flex items-center space-x-2`}>
              <Code className="w-5 h-5 text-purple-600" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(e, link.href, link.external)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`${mutedTextClasses} hover:text-purple-600 transition-colors text-sm flex items-center space-x-2 group`}
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform" />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <a
                href="https://calendly.com/Mayank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 text-purple-600 rounded-lg text-sm hover:bg-purple-600/30 transition-colors group"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Call</span>
                <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services & Tech Column */}
          <div>
            <h4 className={`font-bold ${textClasses} mb-4`}>Services & Tech</h4>
            
            <div className="mb-6">
              <h5 className={`text-sm font-medium ${textClasses} mb-2`}>Services</h5>
              <div className="flex flex-wrap gap-1">
                {services.map((service, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-600/10 text-purple-600 rounded text-xs border border-purple-600/20"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className={`text-sm font-medium ${textClasses} mb-2`}>Technologies</h5>
              <div className="flex flex-wrap gap-1">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-600/10 text-blue-600 rounded text-xs border border-blue-600/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className={`${cardClasses} rounded-2xl p-6 border mb-8`}>
          <h4 className={`font-bold ${textClasses} mb-4 text-center`}>Let's Connect</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map(({ icon: Icon, href, label, color, followers }, index) => (
              <a
                key={index}
                href={href}
                target={label !== "Email" && label !== "Phone" ? "_blank" : undefined}
                rel={label !== "Email" && label !== "Phone" ? "noopener noreferrer" : undefined}
                className={`group p-4 rounded-xl border border-transparent hover:border-purple-600/30 transition-all duration-300 hover:scale-105 text-center`}
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${mutedTextClasses} ${color} group-hover:scale-110 transition-transform duration-300`} />
                <h5 className={`font-medium ${textClasses} text-sm mb-1`}>{label}</h5>
                <p className={`text-xs ${mutedTextClasses}`}>{followers}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t ${isDarkMode ? "border-white/10" : "border-gray-200/20"}`}>
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className={mutedTextClasses}>© {currentYear} Mayank Raj. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className={mutedTextClasses}>and lots of</span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </div>

          <div className="flex items-center space-x-4">
            <span className={`text-sm ${mutedTextClasses}`}>
              Built with hardwork.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-600/25"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Lines of Code", value: "100k+" },
              { label: "Coffee Cups", value: "∞" },
              { label: "Projects", value: "10+" },
              { label: "Happy Clients", value: "100%" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-lg font-bold ${textClasses} group-hover:text-purple-600 transition-colors`}>
                  {stat.value}
                </div>
                <div className={`text-xs ${mutedTextClasses}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute -top-24 -right-24 w-48 h-48 ${isDarkMode ? "bg-purple-600/5" : "bg-purple-600/3"} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-24 -left-24 w-48 h-48 ${isDarkMode ? "bg-pink-600/5" : "bg-pink-600/3"} rounded-full blur-3xl`}></div>
      </div>
    </footer>
  )
}

export default Footer