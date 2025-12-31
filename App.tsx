
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Institutional from './pages/Institutional';
import Booking from './pages/Booking';
import Units from './pages/Units';
import UnitDoctors from './pages/UnitDoctors';
import Contact from './pages/Contact';

// Specialty Pages
import Acupuncture from './pages/specialties/Acupuncture';
import PainClinic from './pages/specialties/PainClinic';
import Orthopedics from './pages/specialties/Orthopedics';
import Nutrition from './pages/specialties/Nutrition';
import Psychology from './pages/specialties/Psychology';
import Physiotherapy from './pages/specialties/Physiotherapy';
import Rpg from './pages/specialties/Rpg';
import MassageTherapy from './pages/specialties/MassageTherapy';
import Rheumatology from './pages/specialties/Rheumatology';
import Physiatry from './pages/specialties/Physiatry';

// Helper to scroll to top on route change or handle anchors
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <ScrollHandler />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<Institutional />} />
            <Route path="/agendamento" element={<Booking />} />
            <Route path="/unidades" element={<Units />} />
            <Route path="/unidades/:unitSlug/medicos" element={<UnitDoctors />} />
            <Route path="/contato" element={<Contact />} />
            
            {/* Specialty Routes */}
            <Route path="/especialidades/acupuntura" element={<Acupuncture />} />
            <Route path="/especialidades/clinica-da-dor" element={<PainClinic />} />
            <Route path="/especialidades/ortopedia" element={<Orthopedics />} />
            <Route path="/especialidades/nutricao" element={<Nutrition />} />
            <Route path="/especialidades/psicologia" element={<Psychology />} />
            <Route path="/especialidades/fisioterapia" element={<Physiotherapy />} />
            <Route path="/especialidades/rpg" element={<Rpg />} />
            <Route path="/especialidades/massoterapia" element={<MassageTherapy />} />
            <Route path="/especialidades/reumatologia" element={<Rheumatology />} />
            <Route path="/especialidades/fisiatria" element={<Physiatry />} />
            
            {/* Catch-all route to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
