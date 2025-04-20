import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/StudyBuddy-BackgroundBlank.png';
import logoImage from './assets/StudyBuddy-LogoSolo.png';
import logoPicture from './assets/StudyBuddy-LogoWord.png';

function RegisterPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    firstName: '',
    lastName: '',
    username: '',
    birthday: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [focused, setFocused] = useState({
    firstName: false,
    lastName: false,
    username: false,
    birthday: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  // Use React Router's navigate hook
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to navigate to different pages using React Router
  const navigateTo = (path) => {
    if (path === 'index.html') {
      navigate('/');
    } else if (path === 'register.html') {
      navigate('/register');
    } else if (path === 'login.html') {
      navigate('/login');
    } else if (path === 'about.html') {
      navigate('/about');
    } else {
      navigate(path);
    }
    
    // Close menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Decorative elements for animation - Added from LoginPage
  const particles = Array(5).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
    
    // After successful registration, navigate to login
    navigate('/login');
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

      {/* Animated particles - Added from LoginPage */}
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
          .glow-button {
            position: relative;
            z-index: 1;
            overflow: hidden;
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 ${colors.gold}70; }
            70% { box-shadow: 0 0 0 10px ${colors.gold}00; }
            100% { box-shadow: 0 0 0 0 ${colors.gold}00; }
          }
          .glow-button::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, ${colors.gold}40, transparent);
            z-index: -1;
            transform: rotate(45deg);
            animation: glowEffect 3s linear infinite;
          }
          @keyframes glowEffect {
            0% { transform: rotate(45deg) translateX(-100%); }
            100% { transform: rotate(45deg) translateX(100%); }
          }
          @keyframes gradientBg {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
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

      {/* Header with Hamburger Menu */}
      <header className="relative z-20 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div onClick={() => navigateTo('/')} className="flex items-center space-x-2 cursor-pointer">
            <img src={logoImage} alt="StudyBuddy Logo" className="h-10 w-auto" />
          </div>
          
          {/* Navigation with Hamburger Menu */}
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

      {/* Main content - Centered on screen */}
      <main className="flex-1 relative z-20 flex items-center justify-center p-4">
        {/* Form container - Now centered with mx-auto and added card-shine class */}
        <div 
          className="w-full max-w-md p-8 rounded-xl card-shine relative overflow-hidden mx-auto"
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

          <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.gold }}>Create Account.</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name Field */}
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => handleFocus('firstName', true)}
                onBlur={() => handleFocus('firstName', false)}
                className="w-full px-4 py-3 bg-transparent rounded-lg input-glow transition-shadow"
                style={{ 
                  border: `1px solid ${focused.firstName ? colors.gold : colors.white}30`,
                  color: colors.white,
                  outline: 'none'
                }}
                required
              />
              <label 
                htmlFor="firstName" 
                className="float-label absolute pointer-events-none"
                style={{ 
                  color: focused.firstName || formData.firstName ? colors.gold : colors.white,
                  left: focused.firstName || formData.firstName ? '10px' : '16px',
                  top: focused.firstName || formData.firstName ? '-10px' : '14px',
                  fontSize: focused.firstName || formData.firstName ? '12px' : '16px',
                  backgroundColor: focused.firstName || formData.firstName ? 'rgba(15, 30, 60, 0.8)' : 'transparent',
                  padding: focused.firstName || formData.firstName ? '0 4px' : '0',
                }}
              >
                First Name
              </label>
            </div>

            {/* Last Name Field */}
            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => handleFocus('lastName', true)}
                onBlur={() => handleFocus('lastName', false)}
                className="w-full px-4 py-3 bg-transparent rounded-lg input-glow transition-shadow"
                style={{ 
                  border: `1px solid ${focused.lastName ? colors.gold : colors.white}30`,
                  color: colors.white,
                  outline: 'none'
                }}
                required
              />
              <label 
                htmlFor="lastName" 
                className="float-label absolute pointer-events-none"
                style={{ 
                  color: focused.lastName || formData.lastName ? colors.gold : colors.white,
                  left: focused.lastName || formData.lastName ? '10px' : '16px',
                  top: focused.lastName || formData.lastName ? '-10px' : '14px',
                  fontSize: focused.lastName || formData.lastName ? '12px' : '16px',
                  backgroundColor: focused.lastName || formData.lastName ? 'rgba(15, 30, 60, 0.8)' : 'transparent',
                  padding: focused.lastName || formData.lastName ? '0 4px' : '0',
                }}
              >
                Last Name
              </label>
            </div>

            {/* Username Field */}
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                onFocus={() => handleFocus('username', true)}
                onBlur={() => handleFocus('username', false)}
                className="w-full px-4 py-3 bg-transparent rounded-lg input-glow transition-shadow"
                style={{ 
                  border: `1px solid ${focused.username ? colors.gold : colors.white}30`,
                  color: colors.white,
                  outline: 'none'
                }}
                required
              />
              <label 
                htmlFor="username" 
                className="float-label absolute pointer-events-none"
                style={{ 
                  color: focused.username || formData.username ? colors.gold : colors.white,
                  left: focused.username || formData.username ? '10px' : '16px',
                  top: focused.username || formData.username ? '-10px' : '14px',
                  fontSize: focused.username || formData.username ? '12px' : '16px',
                  backgroundColor: focused.username || formData.username ? 'rgba(15, 30, 60, 0.8)' : 'transparent',
                  padding: focused.username || formData.username ? '0 4px' : '0',
                }}
              >
                Username
              </label>
            </div>

            {/* Birthday Field */}
            <div className="relative">
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                onFocus={() => handleFocus('birthday', true)}
                onBlur={() => handleFocus('birthday', false)}
                className="w-full px-4 py-3 bg-transparent rounded-lg input-glow transition-shadow"
                style={{ 
                  border: `1px solid ${focused.birthday ? colors.gold : colors.white}30`,
                  color: colors.white,
                  outline: 'none'
                }}
                required
              />
              <label 
                htmlFor="birthday" 
                className="float-label absolute pointer-events-none"
                style={{ 
                  color: focused.birthday || formData.birthday ? colors.gold : colors.white,
                  left: focused.birthday || formData.birthday ? '10px' : '16px',
                  top: focused.birthday || formData.birthday ? '-10px' : '14px',
                  fontSize: focused.birthday || formData.birthday ? '12px' : '16px',
                  backgroundColor: focused.birthday || formData.birthday ? 'rgba(15, 30, 60, 0.8)' : 'transparent',
                  padding: focused.birthday || formData.birthday ? '0 4px' : '0',
                }}
              >
                Birthday
              </label>
            </div>

            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Confirm Password Field */}
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => handleFocus('confirmPassword', true)}
                onBlur={() => handleFocus('confirmPassword', false)}
                className="w-full px-4 py-3 bg-transparent rounded-lg input-glow transition-shadow"
                style={{ 
                  border: `1px solid ${focused.confirmPassword ? colors.gold : colors.white}30`,
                  color: colors.white,
                  outline: 'none'
                }}
                required
              />
              <label 
                htmlFor="confirmPassword" 
                className="float-label absolute pointer-events-none"
                style={{ 
                  color: focused.confirmPassword || formData.confirmPassword ? colors.gold : colors.white,
                  left: focused.confirmPassword || formData.confirmPassword ? '10px' : '16px',
                  top: focused.confirmPassword || formData.confirmPassword ? '-10px' : '14px',
                  fontSize: focused.confirmPassword || formData.confirmPassword ? '12px' : '16px',
                  backgroundColor: focused.confirmPassword || formData.confirmPassword ? 'rgba(15, 30, 60, 0.8)' : 'transparent',
                  padding: focused.confirmPassword || formData.confirmPassword ? '0 4px' : '0',
                }}
              >
                Confirm Password
              </label>
            </div>

            {/* Create Account Button - Added pulse animation */}
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
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p style={{ color: colors.white }}>
                Already have an account?{' '}
                <span 
                  onClick={() => navigateTo('/login')}
                  style={{ color: colors.gold, textDecoration: 'none', cursor: 'pointer' }}
                  onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  Log in
                </span>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RegisterPage;