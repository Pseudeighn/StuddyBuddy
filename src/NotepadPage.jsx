import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from './assets/StudyBuddy-LogoSolo.png';

function NotepadPage() {
  // Color scheme
  const colors = {
    deepNavy: '#0a193a',
    royalPurple: '#4b2354',
    orchidPink: '#aa5ca4',
    goldenrod: '#eda847',
    white: '#ffffff',
  };

  const [isMenuOpen, setIsMenuOpen] = useState(true); 
  const [note, setNote] = useState('');
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
      {/* Deep Navy Background */}
      <div
        className="fixed inset-0 z-0"
        style={{ backgroundColor: colors.deepNavy }}
      />

      {/* Header with Navigation */}
      <header
        className="relative z-20 p-4 shadow-md"
        style={{ backgroundColor: `${colors.royalPurple}95` }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div
            onClick={() => navigateTo('/')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img
              src={logoImage}
              alt="StudyBuddy Logo"
              className="h-10 w-auto"
            />
            <span
              className="font-bold text-xl"
              style={{ color: colors.white }}
            >
              StudyBuddy
            </span>
          </div>

          {/* Horizontal Menu Items */}
          <div
            className={`flex space-x-6 mr-4 items-center ${
              isMenuOpen ? 'opacity-100 max-w-md' : 'opacity-0 max-w-0 overflow-hidden'
            }`}
          >
            <button
              onClick={() => navigateTo('index.html')}
              className="transition-colors whitespace-nowrap"
              style={{
                color: colors.white,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = colors.goldenrod)}
              onMouseOut={(e) => (e.currentTarget.style.color = colors.white)}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about.html')}
              className="transition-colors whitespace-nowrap"
              style={{
                color: colors.white,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = colors.goldenrod)}
              onMouseOut={(e) => (e.currentTarget.style.color = colors.white)}
            >
              About
            </button>
            <button
              onClick={() => navigateTo('/')}
              className="transition-colors whitespace-nowrap"
              style={{
                color: colors.white,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = colors.goldenrod)}
              onMouseOut={(e) => (e.currentTarget.style.color = colors.white)}
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="flex-1 relative z-10 p-6 max-w-4xl mx-auto w-full"
        style={{ color: colors.white }}
      >
        <h1 className="text-3xl font-bold mb-4">Notepad</h1>
        <textarea
          className="w-full h-96 p-4 rounded-lg resize-none"
          style={{
            backgroundColor: colors.deepNavy,
            border: `2px solid ${colors.royalPurple}`,
            color: colors.white,
            fontSize: '1rem',
            fontFamily: 'monospace',
          }}
          placeholder="Write your notes here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="mt-4 flex space-x-4">
          <button
            onClick={() => setNote('')}
            className="px-4 py-2 rounded"
            style={{
              backgroundColor: colors.orchidPink,
              color: colors.white,
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
        </div>
      </main>
    </div>
  );
}

export default NotepadPage;
