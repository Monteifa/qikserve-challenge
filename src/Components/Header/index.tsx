import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

import './index.css';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className='header_container'>
      <nav className='desktop_nav'>
        <a href=''>MENU</a>
        <a href=''>ENTRAR</a>
        <a href=''>CONTATO</a>
      </nav>

      <div className='mobile_nav'>
        <div></div>
        <div className='active_nav'>Menu</div>
        <FaBars
          className='mobile_nav_icon'
          onClick={() => setNavbarOpen(!navbarOpen)}
        />

        {navbarOpen && (
          <div className='teste_nav'>
            <a href=''>MENU</a>

            <a href=''>ENTRAR</a>

            <a href=''>CONTATO</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
