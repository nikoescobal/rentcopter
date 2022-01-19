import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HeliCard from '../components/HeliCard';

const Helicopters = () => {
  const helicopters = useSelector((state) => state.helicopters.helicopters_arr);
  useEffect(() => {
    const parent = document.getElementById('main-heli');
    setTimeout(() => {
      parent.classList.replace('opacity-0', 'opacity-1');
      parent.classList.replace('scale-0', 'scale-100');
    }, 150);
  }, []);
  return (
    <div id="main-heli" className="p-4 md:p-24 flex justify-center flex-col w-full lg:w-5/6 h-screen transition-all opacity-0 scale-0">
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
