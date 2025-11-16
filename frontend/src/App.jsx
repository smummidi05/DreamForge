
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import ProjectBuilder from './pages/ProjectBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/builder" element={<ProjectBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
