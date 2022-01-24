import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Helicopters from './pages/Helicopters';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import AddHelicopter from './pages/AddHelicopter';
import RemoveHelicopter from './pages/RemoveHelicopter';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Helicopters />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add-reservation" element={<Reserve />} />
        <Route path="/add-helicopter" element={<AddHelicopter />} />
        <Route path="/remove-helicopter" element={<RemoveHelicopter />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </>
);

export default App;
