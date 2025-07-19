import { useState } from 'react'
import { Mail, Github, Linkedin, Download, MapPin, Phone, Send, MessageCircle, Calendar, ExternalLink } from 'lucide-react'

const Contact = ({ isDarkMode }) => {
  const textClasses = isDarkMode ? "text-white" : "text-gray-900"
  const mutedTextClasses = isDarkMode ? "text-gray-300" : "text-gray-600"
  const cardClasses = isDarkMode
    ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-white/10"
    : "bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg"

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "vmayank0123@gmail.com",
      href: "mailto:vmayank0123@gmail.com",
      description: "Send me an email anytime",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@Raj-Mayank2",
      href: "https://github.com/Raj-Mayank2",
      description: "Check out my repositories",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Mayank Raj",
      href: "https://www.linkedin.com/in/mayankraj17/",
      description: "Let's connect professionally",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9304618177",
      href: "tel:+919304618177",
      description: "Call for urgent matters",
      color: "from-green-500 to-emerald-600"
    }
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute consultation",
      action: () => window.open("https://calendly.com/Mayankdoe", "_blank"),
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: MessageCircle,
      title: "Send Quick Message",
      description: "Email me directly",
      action: () => window.location.href = "mailto:vmayank0123@gmail.com?subject=Quick Message&body=Hi Mayank, I'd like to discuss...",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Download,
      title: "Download Resume",
      description: "Get my latest CV",
      action: handleDownloadCV,
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Send,
      title: "Start a Project",
      description: "Let's discuss your idea",
      action: () => window.location.href = "vmayank0123@gmail.com?subject=New Project Discussion&body=Hi Mayank, I have a project idea...",
      color: "from-orange-600 to-red-600"
    }
  ]

  function handleDownloadCV() {
    const link = document.createElement("a")
    link.href = "/mayankraj-resume.pdf"
    link.download = "Mayank_raj_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGetInTouch = () => {
    window.location.href = "mailto:Mayank@example.com?subject=Let's Work Together&body=Hi Mayank, I'd like to discuss a project with you."
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className={`text-lg sm:text-xl ${mutedTextClasses} max-w-3xl mx-auto mb-8`}>
            Have a project in mind? Let's create something amazing together! I'm always excited to work on new challenges and bring innovative ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className={`${cardClasses} rounded-2xl p-8 border`}>
              <h3 className={`text-2xl font-bold ${textClasses} mb-6 flex items-center space-x-2`}>
                <MessageCircle className="w-6 h-6 text-purple-600" />
                <span>Get In Touch</span>
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map(({ icon: Icon, title, value, href, description, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="group p-4 rounded-xl border border-transparent hover:border-purple-600/30 transition-all duration-300 hover:scale-105"
                    target={title !== "Email" && title !== "Phone" ? "_blank" : undefined}
                    rel={title !== "Email" && title !== "Phone" ? "noopener noreferrer" : undefined}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className={`font-semibold ${textClasses} mb-1`}>{title}</h4>
                    <p className="text-purple-600 font-medium text-sm mb-1">{value}</p>
                    <p className={`text-xs ${mutedTextClasses}`}>{description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Availability + Ready to Start */}
            <div className={`${cardClasses} rounded-2xl p-8 border`}>
              <h3 className={`text-2xl font-bold ${textClasses} mb-6 flex items-center space-x-2`}>
                <MapPin className="w-6 h-6 text-purple-600" />
                <span>Location & Availability</span>
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={textClasses}>Available for new projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className={`w-4 h-4 ${mutedTextClasses}`} />
                  <span className={mutedTextClasses}>Kalyani,West Bengal(Remote Friendly)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className={`w-4 h-4 ${mutedTextClasses}`} />
                  <span className={mutedTextClasses}>Typically responds within 24 hours</span>
                </div>
              </div>

              {/* Ready to Start Your Project Section */}
              <div className="border-t border-purple-600/20 pt-6">
                <h4 className={`text-xl font-bold ${textClasses} mb-4`}>
                  Ready to Start Your Project?
                </h4>
                <p className={`${mutedTextClasses} mb-6`}>
                  Whether you need a complete web application, a stunning landing page, or technical consultation, 
                  I'm here to help bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleGetInTouch}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-600/25"
                  >
                    Start a Conversation
                  </button>
                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className={`${cardClasses} rounded-2xl p-8 border`}>
            <h3 className={`text-2xl font-bold ${textClasses} mb-6 flex items-center space-x-2`}>
              <Send className="w-6 h-6 text-purple-600" />
              <span>Quick Actions</span>
            </h3>
            
            <div className="space-y-4">
              {quickActions.map(({ icon: Icon, title, description, action, color }, index) => (
                <button
                  key={index}
                  onClick={action}
                  className="w-full p-6 rounded-xl border border-transparent hover:border-purple-600/30 transition-all duration-300 hover:scale-105 text-left group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg ${textClasses} mb-1 group-hover:text-purple-600 transition-colors`}>
                        {title}
                      </h4>
                      <p className={`text-sm ${mutedTextClasses}`}>{description}</p>
                    </div>
                    <ExternalLink className={`w-5 h-5 ${mutedTextClasses} group-hover:text-purple-600 transition-colors`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-600/20">
              <h4 className={`font-bold ${textClasses} mb-2 flex items-center space-x-2`}>
                <MessageCircle className="w-5 h-5 text-purple-600" />
                <span>Prefer a Different Approach?</span>
              </h4>
              <p className={`text-sm ${mutedTextClasses} mb-4`}>
                Feel free to reach out through any of the contact methods on the left. I'm flexible and happy to communicate however works best for you.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-600 rounded-full text-xs border border-purple-600/30">
                  Email Preferred
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-600 rounded-full text-xs border border-blue-600/30">
                  Quick Response
                </span>
                <span className="px-3 py-1 bg-green-600/20 text-green-600 rounded-full text-xs border border-green-600/30">
                  Flexible Schedule
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact