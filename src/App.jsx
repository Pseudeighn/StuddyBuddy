import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import CollaborationPage from './CollaborationPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        {/* Add more routes as needed 
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/study-guides" element={<div>Study Guides</div>} />
        <Route path="/flashcards" element={<div>Flashcards</div>} />
        <Route path="/practice-tests" element={<div>Practice Tests</div>} />
        <Route path="/find-tutors" element={<div>Find Tutors</div>} />
        <Route path="/study-groups" element={<div>Study Groups</div>} />*/}
      </Routes>
    </HashRouter>
  );
}

export default App;