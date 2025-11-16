
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        {/* Add more routes later:
        <Route path="/builder" element={<ProjectBuilder />} />
        <Route path="/gallery" element={<Gallery />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
