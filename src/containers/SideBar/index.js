import React from 'react';
import "./SideBar.scss";
import Logo from '../../img/logo.svg'
import NavBar from '../../components/NavBar';

const SideBar = (props) =>{

    return (<div className='SideBar'>
        <div className='logo'>
            <img src={Logo} alt='logo' />
        </div>
        <NavBar/>
    </div>);
}

export default SideBar;