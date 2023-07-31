import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav nav-black'>
      <div className='nav-contents'>
        <img
          className='nav-logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='netflix-logo'
        />
        <img
          className='nav-avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
          alt='netflix-avatar'
        />
      </div>
    </nav>
  );
};

export default Nav;
