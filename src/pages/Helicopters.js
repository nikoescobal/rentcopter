import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HeliModal from '../components/HeliModal';
import { topDown } from '../animations';

const Helicopters = () => {
  const helicopters = useSelector((state) => state.helicopters.helicopters_arr);
  useEffect(() => {
    topDown();
  }, []);
  return (
    <div id="main" className="p-4 md:p-24 flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 h-screen transition-all opacity-0 -translate-y-full origin-top ease-out duration-500">
      <h1 className="raleway cool-title text-center !text-5xl">Helicopters</h1>
      <p className="text-center">You will be able to see the helicopters in this page.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly mt-20 m-auto w-full h-full" style={{ gap: '20px' }}>
        {helicopters.map((helicopter) => (
          <HeliModal key={helicopter.id} helicopter={helicopter} />
        ))}
      </ul>
    </div>
  );
};

export default Helicopters;
