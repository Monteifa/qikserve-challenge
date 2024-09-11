import { useState } from 'react';

import { FaBars } from 'react-icons/fa6';

import { useDataContext } from '../../contexts/DataContext';

import './Header.css';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { restaurant } = useDataContext();

  return (
    <div
      className='header_container'
      style={{ backgroundColor: restaurant?.webSettings.navBackgroundColour }}
    >
      <nav className='desktop_nav'>
        <a href=''>MENU</a>
        <a href=''>ENTRAR</a>
        <a href=''>CONTATO</a>
      </nav>

      <div className='mobile_nav_container'>
        <div></div>
        <div className='active_nav'>Menu</div>
        <FaBars
          className='mobile_nav_icon'
          onClick={() => setNavbarOpen(!navbarOpen)}
        />

        {navbarOpen && (
          <div
            className='mobile_nav'
            style={{
              backgroundColor: restaurant?.webSettings.navBackgroundColour,
            }}
          >
            <a href=''>MENU</a>

            <a href=''>ENTRAR</a>

            <a href=''>CONTATO</a>
          </div>
        )}
      </div>
    </div>
  );
};

export { Header };
