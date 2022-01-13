import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Helicopters from './pages/Helicopters';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import AddHelicopter from './pages/AddHelicopter';
import RemoveHelicopter from './pages/RemoveHelicopter';
import ErrorPage from './pages/ErrorPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Helicopters />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/reservations/new" element={<Reserve />} />
      <Route path="/helicopters/new" element={<AddHelicopter />} />
      <Route path="/helicopters/remove" element={<RemoveHelicopter />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
