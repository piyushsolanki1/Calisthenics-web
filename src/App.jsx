import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Pages/Home';
import Progress from './Pages/Progress';
import Nutrition from './Pages/Nutrition';
import About from './Pages/About';
import WorkoutDetail from './Pages/WorkoutDetail';
import Workouts from './Pages/Workouts';
import Contact from './Pages/Contact';
import Challenges from './Pages/Challenges';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PageWrapper from './Pages/PageWrapper';

// Scroll to top whenever route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Separate component for routes
function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen flex flex-col bg-background text-foreground">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/progress" element={<PageWrapper><Progress /></PageWrapper>} />
            <Route path="/nutrition" element={<PageWrapper><Nutrition /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/workout/:id" element={<PageWrapper><WorkoutDetail /></PageWrapper>} />
            <Route path="/workouts" element={<PageWrapper><Workouts /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/challenges" element={<PageWrapper><Challenges /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

// Main App wrapper
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
