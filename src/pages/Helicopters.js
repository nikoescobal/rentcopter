import { useSelector } from 'react-redux';

const Helicopters = () => {
  const helicopters = useSelector((state) => state.helicopters.helicopters_arr);

  return (
    <div>
      <h1>Helicopters</h1>
      <p>You will be able to see the helicopters in this page.</p>
      <ul>
        {helicopters.map((helicopter) => (
          <li key={helicopter}>{helicopter}</li>
        ))}
      </ul>
    </div>
  );
};

export default Helicopters;
