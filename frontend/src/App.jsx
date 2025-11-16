
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Add more routes later:
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/builder" element={<ProjectBuilder />} />
        <Route path="/gallery" element={<Gallery />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
