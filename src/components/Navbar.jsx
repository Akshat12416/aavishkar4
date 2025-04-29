import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-slate-900 bg-opacity-70 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-white text-sm mr-16 font-bold cursor-pointer"
        >
          AAVISHKAR 4.0
        </h1>
        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => scrollTo('about')}>
            About
          </li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => scrollTo('tracks')}>
            Tracks
          </li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => scrollTo('timeline')}>
            Timeline
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
