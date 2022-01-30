import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './NavBar.scss';
import Home from '../../img/Home.svg';
import Request from '../../img/Request.svg';
import Folder1 from '../../img/Folder1.svg';
import Folder2 from '../../img/Folder2.svg';
import ThreeUsers from '../../img/ThreeUsers.svg';
import Setting from '../../img/Setting.svg';
import Document from '../../img/Document.svg';
import ArrowDownCircle from '../../img/ArrowDownCircle.svg';

const NavBar = (props) => {
  return (
    <div className='NavBar'>
      <Link
        exact
        to='/'
        className={({isActive}) => 'link' + (isActive ? ' is-active' : '')}
      >
        <img src={Home} alt='home icon' />
        <span>Dashboard</span>
      </Link>
      <Link
        exact
        to='/request'
        className={({isActive}) => 'link' + (isActive ? ' is-active' : '')}
      >
        <img src={Request} alt='request icon' />
        <span>Requests</span>
      </Link>
      <Link
        exact
        to='/kyc'
        className={({isActive}) => 'link' + (isActive ? ' is-active' : '')}
      >
        <img src={Folder1} alt='kyc icon' />
        <span>KYCs</span>
      </Link>
      <Link
        exact
        to='/report'
        className={({isActive}) => 'link' + (isActive ? ' is-active' : '')}
      >
        <img src={Document} alt='report icon' />
        <span>Reports</span>
      </Link>
      <Link
        exact
        to='/trail'
        className={({isActive}) => 'link' + (isActive ? ' is-active' : '')}
      >
        <img src={Folder2} alt='trail icon' />
        <span>Audit Trail</span>
        <img
          className='arrow_down_circle'
          src={ArrowDownCircle}
          alt='trail icon'
        />
      </Link>
      <Link
        exact
        to='/user'
        className={({isActive}) => 'link' + (isActive ? ' is-active' : '')}
      >
        <img src={ThreeUsers} alt='user icon' />
        <span>Users</span>
      </Link>
      <Link
        exact
        to='/setting'
        className={({isActive}) => 'link' + (isActive ? ' is-active' : '')}
      >
        <img src={Setting} alt='settings icon' />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default NavBar;
