import './index.css';

import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
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

        <AiOutlineMenu width={24} height={24} />
      </div>
    </div>
  );
};

export default Header;
