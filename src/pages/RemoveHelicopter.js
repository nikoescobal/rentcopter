import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeliCard from '../components/HeliCard';
import { topDown } from '../animations';

const RemoveHelicopter = () => {
  const navigate = useNavigate();
  const helicopters = useSelector((state) => state.helicopters.helicopters_arr);
  useEffect(() => {
    window.sessionStorage.getItem('token') == null ? navigate('/login') : null;
    window.sessionStorage.getItem('admin') !== 'true' ? navigate('/') : null;
    topDown();
  }, []);
  return (
    <div id="main" className="p-4 md:p-24 flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 transition-all opacity-0 -translate-y-full origin-left ease-out duration-500">
      <h1 className="cool-title text-center !text-3xl md:!text-5xl">Delete a helicopter</h1>
      <hr className="h-1 border-slate-700 mt-4" />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly mt-20 m-auto w-full h-full" style={{ gap: '20px' }}>
        {helicopters.map((helicopter) => (
          <HeliCard key={helicopter.id} helicopter={helicopter} />
        ))}
      </ul>
    </div>
  );
};

export default RemoveHelicopter;
