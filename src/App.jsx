import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SchoolOfEngineering from './pages/SchoolOfEngineering';
import IIPA from './pages/IIPA';
import Agenda from './pages/Agenda';
import Registration from './pages/Registration';
import Speakers from './pages/Speakers';
import Advisory from './pages/advisroy';
import Organizing from './pages/organizing';
import Paper from './pages/Paper';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Reviewer from './pages/reviewer';
import Patron from './pages/patron';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
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