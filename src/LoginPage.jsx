import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/StudyBuddy-BackgroundBlank.png';
import logoImage from './assets/StudyBuddy-LogoSolo.png';
import logoPicture from './assets/StudyBuddy-LogoWord.png';

function LoginPage() {
  // Color scheme
  const colors = {
    darkBlue: '#0a193a',
    purple: '#4e2865',
    blue: '#19467e',
    gold: '#f2a83b',
    white: '#ffffff',
    black: '#000000'
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [focused, setFocused] = useState({
    email: false,
    password: false
  });

  // Added state for hamburger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use React Router's navigate hook
  const navigate = useNavigate();

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to navigate to different pages using React Router
  const navigateTo = (path) => {
    // Convert traditional paths to React Router hash paths
    if (path === 'index.html') {
      navigate('/');
    } else if (path === 'register.html') {
      navigate('/register');
    } else if (path === 'login.html') {
      navigate('/login');
    } else if (path === 'about.html') {
      navigate('/about');
    } else if (path === 'dashboard.html') {
      navigate('/dashboard');
    } else {
      // Fallback for any other paths
      navigate(path);
    }
  };

  // Decorative elements for animation
  const particles = Array(5).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFocus = (field, isFocused) => {
    setFocused(prev => ({
      ...prev,
      [field]: isFocused
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Login form submitted:", formData);
    
    // After successful login, navigate to dashboard
    navigateTo('dashboard.html');
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}
      />
      <div 
        className="fixed inset-0 z-10"
        style={{ backgroundColor: `${colors.darkBlue}95` }}
      />

      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed z-10 rounded-full opacity-30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            backgroundColor: colors.gold,
            boxShadow: `0 0 ${particle.size * 2}px ${colors.gold}`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`
          }}
        />
      ))}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-20px) rotate(360deg); }
          }
          .input-glow:focus {
            box-shadow: 0 0 15px ${colors.gold}60;
          }
          .float-label {
            transition: all 0.2s ease;
          }
          .pulse-button {
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 ${colors.gold}70; }
            70% { box-shadow: 0 0 0 10px ${colors.gold}00; }
            100% { box-shadow: 0 0 0 0 ${colors.gold}00; }
          }
          .card-shine {
            overflow: hidden;
            position: relative;
          }
          .card-shine::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            width: 300%;
            height: 300%;
            background: linear-gradient(
              to bottom right,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.03) 40%,
              rgba(255,255,255,0.08) 50%,
              rgba(255,255,255,0.03) 60%,
              rgba(255,255,255,0) 100%
            );
            transform: rotate(45deg);
            animation: shimmer 10s infinite linear;
          }
          @keyframes shimmer {
            0% { transform: translateX(-50%) rotate(45deg); }
            100% { transform: translateX(150%) rotate(45deg); }
          }
        `}
      </style>

      {/* Header with Hamburger Menu - Updated to match LandingPage.jsx structure */}
      <header className="relative z-20 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div onClick={() => navigateTo('/')} className="flex items-center space-x-2 cursor-pointer">
            <img src={logoImage} alt="StudyBuddy Logo" className="h-10 w-auto" />
          </div>
          
          {/* Navigation with Hamburger Menu - Matching LandingPage structure */}
          <div className="flex items-center">
            {/* Horizontal Menu Items (only visible when menu is open) */}
            <div className={`transition-all duration-300 flex space-x-6 mr-4 items-center ${isMenuOpen ? 'opacity-100 max-w-md' : 'opacity-0 max-w-0 overflow-hidden'}`}>
              <button 
                onClick={() => navigateTo('index.html')}
                className="transition-colors whitespace-nowrap" 
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >Home</button>
              <button 
                onClick={() => navigateTo('about.html')}
                className="transition-colors whitespace-nowrap" 
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >About</button>
              <button 
                onClick={() => navigateTo('register.html')}  
                className="transition-colors whitespace-nowrap" 
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >Register</button>
              <button 
                onClick={() => navigateTo('login.html')}
                className="transition-colors whitespace-nowrap" 
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >Login</button>
            </div>
            
            {/* Hamburger Menu Button */}
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.gold}>
                {isMenuOpen 
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-16 right-0 left-0 p-4 z-40 transition-all duration-300"
            style={{ backgroundColor: colors.purple }}
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  navigateTo('index.html');
                  toggleMenu();
                }}
                className="text-left text-white hover:text-gold transition-colors"
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >Home</button>
              <button 
                onClick={() => {
                  navigateTo('about.html');
                  toggleMenu();
                }}
                className="text-left text-white hover:text-gold transition-colors"
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >About</button>
              <button 
                onClick={() => {
                  navigateTo('register.html');
                  toggleMenu();
                }}
                className="text-left text-white hover:text-gold transition-colors"
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >Register</button>
              <button 
                onClick={() => {
                  navigateTo('login.html');
                  toggleMenu();
                }}
                className="text-left text-white hover:text-gold transition-colors"
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >Login</button>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 relative z-20 flex items-center justify-center p-4">
        <div 
          className="w-full max-w-md p-8 rounded-xl card-shine"
          style={{ 
            backgroundColor: 'rgba(15, 30, 60, 0.6)',
            backdropFilter: 'blur(20px)',
            boxShadow: `0 8px 32px 0 ${colors.purple}30`,
            border: `1px solid ${colors.white}10`
          }}
        >
          <div className="flex justify-center mb-6">
            <img src={logoPicture} alt="StudyBuddy Logo" className="h-30 w-auto" />
          </div>

          <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.gold }}>Welcome Back.</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email', true)}
                onBlur={() => handleFocus('email', false)}
                className="w-full px-4 py-3 bg-transparent rounded-lg input-glow transition-shadow"
                style={{ 
                  border: `1px solid ${focused.email ? colors.gold : colors.white}30`,
                  color: colors.white,
                  outline: 'none'
                }}
                required
              />
              <label 
                htmlFor="email" 
                className="float-label absolute pointer-events-none"
                style={{ 
                  color: focused.email || formData.email ? colors.gold : colors.white,
                  left: focused.email || formData.email ? '10px' : '16px',
                  top: focused.email || formData.email ? '-10px' : '14px',
                  fontSize: focused.email || formData.email ? '12px' : '16px',
                  backgroundColor: focused.email || formData.email ? 'rgba(15, 30, 60, 0.8)' : 'transparent',
                  padding: focused.email || formData.email ? '0 4px' : '0',
                }}
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus('password', true)}
                onBlur={() => handleFocus('password', false)}
                className="w-full px-4 py-3 bg-transparent rounded-lg input-glow transition-shadow"
                style={{ 
                  border: `1px solid ${focused.password ? colors.gold : colors.white}30`,
                  color: colors.white,
                  outline: 'none'
                }}
                required
              />
              <label 
                htmlFor="password" 
                className="float-label absolute pointer-events-none"
                style={{ 
                  color: focused.password || formData.password ? colors.gold : colors.white,
                  left: focused.password || formData.password ? '10px' : '16px',
                  top: focused.password || formData.password ? '-10px' : '14px',
                  fontSize: focused.password || formData.password ? '12px' : '16px',
                  backgroundColor: focused.password || formData.password ? 'rgba(15, 30, 60, 0.8)' : 'transparent',
                  padding: focused.password || formData.password ? '0 4px' : '0',
                }}
              >
                Password
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2"
                  style={{ accentColor: colors.gold }}
                />
                <label htmlFor="rememberMe" style={{ color: colors.white, fontSize: '0.875rem' }}>
                  Remember me
                </label>
              </div>
              <a 
                href="#forgot-password" 
                style={{ color: colors.gold, fontSize: '0.875rem', textDecoration: 'none' }}
                onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-medium text-center pulse-button"
              style={{ 
                backgroundColor: colors.gold,
                color: colors.darkBlue,
                border: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.blue;
                e.currentTarget.style.color = colors.white;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.gold;
                e.currentTarget.style.color = colors.darkBlue;
              }}
            >
              Sign In
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: `${colors.white}20` }}></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 text-xs" style={{ backgroundColor: 'rgba(15, 30, 60, 0.6)', color: colors.white }}>
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                className="flex-1 py-2 rounded-lg flex items-center justify-center"
                style={{ 
                  backgroundColor: 'transparent', 
                  border: `1px solid ${colors.white}30`,
                  color: colors.white
                }}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex-1 py-2 rounded-lg flex items-center justify-center"
                style={{ 
                  backgroundColor: 'transparent', 
                  border: `1px solid ${colors.white}30`,
                  color: colors.white
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
                Facebook
              </button>
            </div>

            <div className="text-center mt-4">
              <p style={{ color: colors.white }}>
                Don't have an account?{' '}
                <span 
                  onClick={() => navigateTo('/register')}
                  style={{ color: colors.gold, textDecoration: 'none', cursor: 'pointer' }}
                  onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  Sign up
                </span>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;