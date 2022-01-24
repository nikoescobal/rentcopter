import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { fetchHelicopters } from './redux/reducers/helicopters';
import { fetchReservations } from './redux/reducers/reservations';
import { useDispatch } from 'react-redux';
import Helicopters from './pages/Helicopters';
import Reservations from './pages/Reservations';
import Homepage from './pages/Homepage';
import AddHelicopter from './pages/AddHelicopter';
import RemoveHelicopter from './pages/RemoveHelicopter';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHelicopters());
    dispatch(fetchReservations());
  }, [dispatch]);
  const { pathname } = window.location;
  return (
    <>
      <Router>
        {pathname !== '/login' && pathname !== '/register' && pathname !== '/login/' && pathname !== '/register/' ? <Navbar /> : null }
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/add-reservation" element={<Helicopters />} />
          <Route path="/add-helicopter" element={<AddHelicopter />} />
          <Route path="/remove-helicopter" element={<RemoveHelicopter />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
