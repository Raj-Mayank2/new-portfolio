import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Home, User, Briefcase, Code, Mail } from 'lucide-react'

const Navigations = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Home", id: "home", icon: Home },
    { name: "About", id: "about", icon: User },
    { name: "Projects", id: "projects", icon: Briefcase },
    { name: "Skills", id: "skills", icon: Code },
    { name: "Contact", id: "contact", icon: Mail }
  ]

  const textClasses = isDarkMode ? "text-white" : "text-gray-900"

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial active section
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false) // Close mobile menu immediately

    const element = document.getElementById(targetId)
    if (element) {
      // Use scrollIntoView for more reliable scrolling
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode 
            ? "bg-black/80 backdrop-blur-md border-white/10 shadow-lg" 
            : "bg-white/80 backdrop-blur-md border-gray-200/20 shadow-lg"
          : isDarkMode 
            ? "bg-black/20 backdrop-blur-sm border-white/5" 
            : "bg-white/20 backdrop-blur-sm border-gray-200/10"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <span className="hidden sm:block">Mayank Raj</span>
            <span className="sm:hidden">Mayank</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 relative group ${
                    isActive 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                      : `${textClasses} hover:text-purple-600 hover:bg-purple-600/10`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                  
                  {/* Hover indicator for non-active items */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </button>
              )
            })}

            {/* Theme Toggle */}
            <div className="ml-4 pl-4 border-l border-purple-600/20">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? "bg-white/10 hover:bg-white/20 text-yellow-400" 
                    : "bg-gray-900/10 hover:bg-gray-900/20 text-purple-600"
                }`}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode ? "bg-white/10 text-yellow-400" : "bg-gray-900/10 text-purple-600"
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isDarkMode 
                ? "bg-black/95 border-white/10" 
                : "bg-white/95 border-gray-200/20"
            } backdrop-blur-md rounded-2xl mt-2 p-4 border shadow-xl`}
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                        : `${textClasses} hover:text-purple-600 hover:bg-purple-600/10`
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-4 pt-4 border-t border-purple-600/20">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Theme
                </span>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {isDarkMode ? "Dark" : "Light"}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isDarkMode ? "bg-yellow-400/20 text-yellow-400" : "bg-purple-600/20 text-purple-600"
                  }`}>
                    {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600/20 to-transparent">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        ></div>
      </div>
    </nav>
  )
}

export default Navigations