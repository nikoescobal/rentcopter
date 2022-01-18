import { useSelector } from 'react-redux';
import HeliCard from '../components/HeliCard';

const Helicopters = () => {
  const helicopters = useSelector((state) => state.helicopters.helicopters_arr);

  return (
    <div className="p-4 md:p-24 flex justify-center flex-col w-full h-screen">
      <h1 className="cool-title text-center !text-5xl">Helicopters</h1>
      <p className="text-center">You will be able to see the helicopters in this page.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly mt-20 m-auto w-full h-full" style={{ gap: '20px' }}>
        {helicopters.map((helicopter) => (
          <HeliCard key={helicopter.id} helicopter={helicopter} />
        ))}
      </ul>
    </div>
  );
};

export default Helicopters;
