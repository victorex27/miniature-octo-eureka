import React, { useState } from 'react';
import Hamburger from '../components/Hambumger';
import Header from '../containers/Header';
import MainDiv from '../containers/MainDiv';
import SideBar from '../containers/SideBar';
import './Home.scss';

const Home = (props) => {
  const [responsiveSideBar, setResponsiveSideBar] = useState(true);

  const onClick = (ev) => {
    ev.preventDefault();
    setResponsiveSideBar(!responsiveSideBar);
  };

  const sideBarStyle = responsiveSideBar ? 'nav' : ' nav click';
  return (
    <>
      <Hamburger responsiveSideBar={responsiveSideBar} onClick={onClick} />
      <div className='Home'>
        <div className={sideBarStyle}>
          <SideBar />
        </div>

        {responsiveSideBar && (
          <div className='container'>
            <Header /> <MainDiv />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
