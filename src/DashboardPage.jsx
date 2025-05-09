import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from './assets/StudyBuddy-LogoSolo.png';
import ProgressCard from './ProgressBar';


function DashboardPage() {
  // Color scheme
  const colors = {
    darkBlue: '#0a193a',
    purple: '#4e2865',
    blue: '#19467e',
    gold: '#f2a83b',
    white: '#ffffff',
    black: '#000000'
  };
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
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
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Purple Background */}
      <div 
        className="fixed inset-0 z-0" 
        style={{ backgroundColor: colors.purple }}
      />
      
      {/* Header with Navigation */}
      <header className="relative z-20 p-4 shadow-md" style={{ backgroundColor: `${colors.darkBlue}95` }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div onClick={() => navigateTo('/')} className="flex items-center space-x-2 cursor-pointer">
            <img src={logoImage} alt="StudyBuddy Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl" style={{ color: colors.white }}>StudyBuddy</span>
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
                onClick={() => navigateTo('/')}  
                className="transition-colors whitespace-nowrap" 
                style={{ 
                  color: colors.white,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = colors.gold}
                onMouseOut={(e) => e.currentTarget.style.color = colors.white}
              >Log Out</button>
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
                  navigateTo('/');
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
              >Log Out</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-1 relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2" style={{ color: colors.white }}>Dashboard</h1>
            <p className="text-lg" style={{ color: colors.white }}>Welcome to your StudyBuddy dashboard!</p>
          </div>
          
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Study Sessions Card */}
            <div 
              className="rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(15, 30, 60, 0.7)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.blue}40`
              }}
            >
              <h2 className="text-xl font-bold mb-3" style={{ color: colors.gold }}>Study Sessions</h2>
              <p style={{ color: colors.white }}>You have no upcoming study sessions.</p>
              <button 
                className="mt-4 py-2 px-4 rounded"
                style={{
                  backgroundColor: colors.gold,
                  color: colors.darkBlue
                }}
              >
                Schedule Session
              </button>
            </div>
            
            {/* Recent Activity Card */}
            <div 
              className="rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(15, 30, 60, 0.7)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.blue}40`
              }}
            >
              <h2 className="text-xl font-bold mb-3" style={{ color: colors.gold }}>Recent Activity</h2>
              <p style={{ color: colors.white }}>No recent activity to display.</p>
              <button 
                className="mt-4 py-2 px-4 rounded"
                style={{
                  backgroundColor: colors.gold,
                  color: colors.darkBlue
                }}
              >
                View All
              </button>
            </div>
            
            {/* Study Resources Card */}
            <div 
              className="rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(15, 30, 60, 0.7)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.blue}40`
              }}
            >
              <h2 className="text-xl font-bold mb-3" style={{ color: colors.gold }}>Study Resources</h2>
              <p style={{ color: colors.white }}>Access study materials and resources.</p>
              <button 
                className="mt-4 py-2 px-4 rounded"
                style={{
                  backgroundColor: colors.gold,
                  color: colors.darkBlue
                }}
              >
                Browse Resources
              </button>
            </div>
            {/* Progress Card Inserted Here */}
            <div className="rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
              style={{
                backgroundColor: 'rgba(15, 30, 60, 0.7)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.blue}40`
              }}
            >
              <h2 className="text-xl font-bold mb-3" style={{ color: colors.gold }}>Your Progress</h2>
              <ProgressCard />
            </div>
            
            {/* Collaboration Card */}
            <div 
              className="rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(15, 30, 60, 0.7)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.blue}40`
              }}
            >
              <h2 className="text-xl font-bold mb-3" style={{ color: colors.gold }}>Collaboration</h2>
              <p style={{ color: colors.white }}>Work together with other students.</p>
              <button 
                onClick={() => navigate('/collaboration')}
                className="mt-4 py-2 px-4 rounded"
                style={{
                  backgroundColor: colors.gold,
                  color: colors.darkBlue
                }}
              >
                See Collaborations
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 p-4 text-center text-sm" style={{ backgroundColor: `${colors.darkBlue}95`, color: colors.white }}>
        © {new Date().getFullYear()} StudyBuddy. All rights reserved.
      </footer>
    </div>
  );
}

export default DashboardPage;