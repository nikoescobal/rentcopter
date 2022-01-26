import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { homepageAnims, topDown, downTop } from '../animations';
import guy from '../assets/guy.mp4';
import { fetchHelicopters } from '../redux/reducers/helicopters';
import { fetchReservations } from '../redux/reducers/reservations';

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.sessionStorage.getItem('token') == null ? navigate('/login') : null;
    topDown();
    homepageAnims();
    if (sessionStorage.getItem('token') !== null) {
      dispatch(fetchHelicopters());
      dispatch(fetchReservations());
    }
  }, []);
  const userinfo = sessionStorage.getItem('name');
  return (
    <div id="main" className=" overflow-hidden flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 h-screen transition-all opacity-0 -translate-y-full origin-top ease-out duration-500">
      <video autoPlay muted loop id="helis" className="video opacity-20 hidden md:block">
        <source src={guy} type="video/mp4" />
      </video>
      <h1 id="title1" className="raleway cool-title transition-all duration-1000 !text-4xl md:!text-6xl ml-10 relative mt-40 bottom-48 translate-x-full translate-y">
        Welcome,
        {userinfo}
      </h1>
      <h2 id="title2" className="raleway cool-title transition-all duration-1000 durat !text-4xl md:!text-6xl ml-10 relative bottom-32 translate-x-full">To the newest luxury experience</h2>
      <div className="w-full flex justify-center mt-10">
        <Link
          to="/add-reservation"
          type="button"
          id="title3"
          onClick={(e) => {
            e.preventDefault();
            downTop();
            setTimeout(() => {
              navigate('/add-reservation');
            }, 250);
          }}
          className="
            transition-all
            duration-1000
            w-2/6
            h-auto
             leading-loose
            text-lg
            rounded-xl
            relative
            m-auto
            bottom-30
            text-center
            font-bold
            opacity-0
            invisible
            bg-yellow-600
            animate-bounce
            mt-16"
        >
          Begin your journey
        </Link>
      </div>

    </div>
  );
};

export default Homepage;
