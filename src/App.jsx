import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SchoolOfEngineering from './pages/SchoolOfEngineering';
import IIPA from './pages/IIPA';
import Agenda from './pages/Agenda';
import Registration from './pages/Registration';
import Speakers from './pages/Speakers';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';

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
        <Route path="/registration" element={<Registration />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;