import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'
import Navigations from './components/Navigation'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
    }
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    
    // Update document class for global styles
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const themeClasses = isDarkMode
    ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-900"

  // Loading Screen Component
  const LoadingScreen = () => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${themeClasses}`}>
      <div className="text-center">
        {/* Animated Logo */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1 animate-pulse">
          <div className={`w-full h-full rounded-full ${isDarkMode ? "bg-slate-900" : "bg-white"} flex items-center justify-center`}>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              MR
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Mayank Raj
        </h1>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8`}>
          Loading Portfolio...
        </p>

        {/* Loading Bar */}
        <div className={`w-64 h-2 ${isDarkMode ? "bg-slate-800" : "bg-gray-200"} rounded-full overflow-hidden mx-auto`}>
          <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute w-96 h-96 ${isDarkMode ? "bg-gradient-to-r from-purple-400/10 to-pink-400/10" : "bg-gradient-to-r from-blue-400/5 to-purple-400/5"} rounded-full blur-3xl animate-pulse`} 
             style={{ top: '20%', left: '10%' }}></div>
        <div className={`absolute w-80 h-80 ${isDarkMode ? "bg-gradient-to-r from-blue-400/10 to-cyan-400/10" : "bg-gradient-to-r from-pink-400/5 to-orange-400/5"} rounded-full blur-3xl animate-pulse`} 
             style={{ bottom: '20%', right: '10%', animationDelay: '1s' }}></div>
      </div>
    </div>
  )

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses} overflow-hidden`}>
      {/* Floating Background Elements */}
      <FloatingElements isDarkMode={isDarkMode} />
      
      {/* Navigation */}
      <Navigations isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Main Content */}
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      
      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Scroll to Top Button (Alternative) */}
      <ScrollToTopButton isDarkMode={isDarkMode} />
    </div>
  )
}

// Scroll to Top Button Component
const ScrollToTopButton = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-purple-600/25 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      title="Back to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

export default App