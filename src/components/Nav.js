import { useState, useEffect } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [show, handleShow] = useState(false);

  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);

    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);
  return (
    <nav className={`nav ${show && 'nav-black'}`}>
      <div className='nav-contents'>
        <img
          onClick={() => navigate('/')}
          className='nav-logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='netflix-logo'
        />
        <img
          onClick={() => navigate('/profile')}
          className='nav-avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
          alt='netflix-avatar'
        />
      </div>
    </nav>
  );
};

export default Nav;
