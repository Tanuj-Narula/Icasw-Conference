import { BrowserRouter as Router, Route, Routes ,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SchoolOfEngineering from './pages/SchoolOfEngineering';
import IIPA from './pages/IIPA';
import Agenda from './pages/Agenda';
import Registration from './pages/Registration';
import Speakers from './pages/Speakers';
import Advisory from './pages/Advisory';
import Organizing from './pages/Organizing';
import Paper from './pages/Paper';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Reviewer from './pages/Reviewer';
import Patron from './pages/Patron';

function App() {
  return (
    <>
    <Router basename="/ic-icasw2025">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/school-of-engineering" element={<SchoolOfEngineering />} />
        <Route path="/iipa" element={<IIPA />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/paper" element={<Paper/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/Committee/advisory Committee" element={<Advisory />} />
        <Route path="/Committee/organizing Committee" element={<Organizing />} />
        <Route path="/Committee/reviewers" element={<Reviewer />} />
        <Route path="/Committee/patrons" element={<Patron />} />
        <Route path="/contact us" element={<Contact />} />
      </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;