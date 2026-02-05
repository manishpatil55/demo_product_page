/**
 * ============================================================================
 * APP.JSX - Application Router
 * ============================================================================
 * 
 * Handles client-side routing between:
 * - Home Page ('/')
 * - Project Details ('/project/:slug')
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

// ScrollToTop component - ensures page loads at top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
