import { useSelector } from 'react-redux';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations_arr);

  return (
    <div>
      <h1>Reservations</h1>
      <p>You will be able to see your reservations in this page.</p>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.date}>
            {`${reservation.VIP}: `}
            {`${reservation.helicopter}, `}
            {reservation.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
