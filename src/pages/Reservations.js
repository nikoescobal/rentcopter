import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ReservationCard from '../components/ReservationCard';
import { topDown } from '../animations';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations_arr);
  useEffect(() => {
    topDown();
  }, []);
  return (
    <div id="main" className="p-4 md:p-24 flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 h-screen transition-all opacity-0 -translate-y-full origin-left ease-out duration-500">
      <h1 className="cool-title text-center !text-5xl">Reservations</h1>
      <p className="text-center">You will be able to see your reservations in this page.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly mt-20 m-auto w-full h-full" style={{ gap: '20px' }}>
        {reservations.map((reservation) => (
          <ReservationCard key={uuidv4()} reservation={reservation} />
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
