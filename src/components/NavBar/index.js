import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='#' className='link'><img src={Home} alt='home icon'/><span>Dashboard</span></Link>
      <Link to='#' className='link'><img src={Request} alt='request icon'/><span>Requests</span></Link>
      <Link to='#' className='link'><img src={Folder1} alt='kyc icon'/><span>KYCs</span></Link>
      <Link to='#' className='link'><img src={Document} alt='report icon'/><span>Reports</span></Link>
      <Link to='#' className='link'><img src={Folder2} alt='trail icon'/><span>Audit Trail</span> <img className='arrow_down_circle' src={ArrowDownCircle} alt='trail icon'/></Link>
      <Link to='#' className='link'><img src={ThreeUsers} alt='user icon'/><span>Users</span></Link>
      <Link to='#' className='link'><img src={Setting} alt='settings icon'/><span>Settings</span></Link>
    </div>
  );
};

export default NavBar;
