import React from 'react';
import './SideBar.scss';
import Logo from '../../img/logo.svg';
import NavBar from '../../components/NavBar';

const SideBar = (props) => {
  return (
    <div className='SideBar'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <NavBar />
      <div className='user'>
        <span className='user__image'>
          <img src='./img1.png' alt='profile pics' />
        </span>
        <div className='user__detail'>
          <span> Nafisa Sh.</span>
          <span> Support Manager</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
