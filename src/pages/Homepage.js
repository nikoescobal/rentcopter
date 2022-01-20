import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { homepageAnims, topDown, downTop } from '../animations';

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    topDown();
    homepageAnims();
  }, []);
  return (
    <div id="main" className=" overflow-hidden flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 h-screen transition-all opacity-0 -translate-y-full origin-top ease-out duration-500">
      <video autoPlay muted loop id="helis" className="video opacity-20">
        <source src="https://i.imgur.com/5JiqJ1Q.mp4" type="video/mp4" />
      </video>
      <h1 id="title1" className="raleway cool-title transition-all duration-1000 !text-6xl ml-10 relative bottom-48 translate-x-full translate-y">Welcome, user</h1>
      <h2 id="title2" className="raleway cool-title transition-all duration-1000 durat !text-6xl ml-10 relative bottom-32 translate-x-full">To the newest luxury experience</h2>
      <div className="w-full flex justify-center">
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
            h-12
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
            mt-10"
        >
          Begin your journey
        </Link>
      </div>

    </div>
  );
};

export default Homepage;
