import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/StudyBuddy-Background.png';
import logoImage from './assets/StudyBuddy-LogoSolo.png';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Updated navigateTo function using React Router's navigate
  const navigateTo = (path) => {
    console.log("Navigating to:", path); // For debugging
    
    // Convert traditional paths to React Router hash paths
    if (path === 'index.html') {
      navigate('/');
    } else if (path === 'register.html') {
      navigate('/register');
    } else if (path === 'login.html') {
      navigate('/login');
    } else if (path === 'about.html') {
      navigate('/about');
    } else {
      // Fallback for any other paths
      navigate(path);
    }
  };

  // Color scheme
  const colors = {
    darkBlue: '#0a193a',
    purple: '#4e2865',
    blue: '#19467e',
    gold: '#f2a83b',
    white: '#ffffff'
  };

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col overflow-auto">
      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full z-0" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          width: '100vw',
          height: '100vh'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-20 flex flex-col min-h-screen w-full">
        {/* Navigation */}
        <nav className="p-4 w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo Image */}
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="StudyBuddy Logo" 
                className="h-10 w-auto"
                onClick={() => navigateTo('index.html')}
                style={{ cursor: 'pointer' }}
              />
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
        </nav>
        
        {/* Main Content - Positioned lower on the page */}
        <main className="flex-1 flex items-center justify-center px-4 text-center mt-32">
          <div className="max-w-2xl">
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              {/* Get Started button - Routes to Register page */}
              <button 
                type="button"
                onClick={() => navigateTo('register.html')}
                className="py-3 px-6 rounded-lg font-semibold transition-colors"
                style={{ 
                  backgroundColor: colors.gold,
                  color: colors.darkBlue,
                  border: 'none',
                  cursor: 'pointer'
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
                Get Started
              </button>
              {/* Learn More button - Routes to About page */}
              <button 
                type="button"
                onClick={() => navigateTo('about.html')}
                className="py-3 px-6 rounded-lg font-semibold transition-colors border-2"
                style={{ 
                  borderColor: colors.gold,
                  color: colors.white,
                  background: 'transparent',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = `${colors.gold}30`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="p-4 text-center text-sm" style={{ backgroundColor: `${colors.purple}90`, color: colors.white }}>
          © {new Date().getFullYear()} StudyBuddy. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;