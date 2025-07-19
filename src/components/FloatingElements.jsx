import { useState, useEffect } from 'react'

const FloatingElements = ({ isDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Track window size for responsive positioning
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    handleResize() // Set initial size
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main Mouse-Following Gradients */}
      <div
        className={`absolute w-96 h-96 ${
          isDarkMode
            ? "bg-gradient-to-r from-purple-400/20 to-pink-400/20"
            : "bg-gradient-to-r from-blue-400/10 to-purple-400/10"
        } rounded-full blur-3xl transition-all duration-500`}
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%'
        }}
      />
      
      <div
        className={`absolute w-80 h-80 ${
          isDarkMode
            ? "bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
            : "bg-gradient-to-r from-pink-400/10 to-orange-400/10"
        } rounded-full blur-3xl transition-all duration-500`}
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          right: '10%',
          top: '50%'
        }}
      />

      {/* Secondary Floating Elements */}
      <div
        className={`absolute w-64 h-64 ${
          isDarkMode
            ? "bg-gradient-to-r from-green-400/15 to-blue-400/15"
            : "bg-gradient-to-r from-green-400/8 to-blue-400/8"
        } rounded-full blur-3xl transition-all duration-700`}
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          left: '60%',
          bottom: '20%'
        }}
      />

      {/* Animated Floating Orbs */}
      <div className="absolute inset-0">
        {/* Large Floating Orb */}
        <div
          className={`absolute w-32 h-32 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
              : "bg-gradient-to-r from-purple-500/5 to-pink-500/5"
          } rounded-full blur-2xl animate-float`}
          style={{
            left: '20%',
            top: '60%',
            animationDuration: '6s',
            animationDelay: '0s'
          }}
        />

        {/* Medium Floating Orb */}
        <div
          className={`absolute w-24 h-24 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
              : "bg-gradient-to-r from-blue-500/5 to-cyan-500/5"
          } rounded-full blur-2xl animate-float`}
          style={{
            right: '25%',
            top: '30%',
            animationDuration: '8s',
            animationDelay: '2s'
          }}
        />

        {/* Small Floating Orb */}
        <div
          className={`absolute w-16 h-16 ${
            isDarkMode
              ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10"
              : "bg-gradient-to-r from-green-500/5 to-emerald-500/5"
          } rounded-full blur-xl animate-float`}
          style={{
            left: '70%',
            bottom: '40%',
            animationDuration: '10s',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Rotating Triangle */}
        <div
          className={`absolute w-20 h-20 ${
            isDarkMode ? "opacity-5" : "opacity-3"
          } animate-spin`}
          style={{
            left: '15%',
            top: '80%',
            animationDuration: '20s'
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 transform rotate-45 rounded-lg blur-sm"></div>
        </div>

        {/* Pulsing Circle */}
        <div
          className={`absolute w-12 h-12 ${
            isDarkMode ? "bg-blue-500/10" : "bg-blue-500/5"
          } rounded-full blur-lg animate-pulse`}
          style={{
            right: '20%',
            bottom: '60%',
            animationDuration: '3s'
          }}
        />

        {/* Floating Diamond */}
        <div
          className={`absolute w-8 h-8 ${
            isDarkMode ? "bg-pink-500/10" : "bg-pink-500/5"
          } transform rotate-45 blur-sm animate-bounce`}
          style={{
            left: '80%',
            top: '70%',
            animationDuration: '4s'
          }}
        />
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${
              isDarkMode ? "bg-white/20" : "bg-gray-600/20"
            } rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5"
              : "bg-gradient-to-br from-purple-100/30 via-transparent to-blue-100/30"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-tl from-pink-900/5 via-transparent to-cyan-900/5"
              : "bg-gradient-to-tl from-pink-100/30 via-transparent to-cyan-100/30"
          }`}
        />
      </div>

      {/* Interactive Ripples (appear on mouse movement) */}
      <div
        className={`absolute w-4 h-4 ${
          isDarkMode ? "bg-purple-500/30" : "bg-purple-500/20"
        } rounded-full blur-sm animate-ping pointer-events-none`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          animationDuration: '1s'
        }}
      />

      {/* Section-Specific Decorations */}
      {/* Hero Section Decoration */}
      <div className="absolute top-20 left-4 sm:left-20 w-4 h-4 bg-purple-600 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-40 right-8 sm:right-32 w-6 h-6 bg-pink-600 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-600 rounded-full animate-bounce opacity-60"></div>

      {/* Responsive Adjustments */}
      {windowSize.width < 768 && (
        <>
          {/* Mobile-specific smaller elements */}
          <div
            className={`absolute w-32 h-32 ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-400/15 to-pink-400/15"
                : "bg-gradient-to-r from-blue-400/8 to-purple-400/8"
            } rounded-full blur-2xl`}
            style={{
              left: '50%',
              top: '30%',
              transform: 'translateX(-50%)'
            }}
          />
        </>
      )}
    </div>
  )
}

export default FloatingElements