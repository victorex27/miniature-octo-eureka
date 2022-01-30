import React from 'react';
import Header from '../containers/Header';
import MainDiv from '../containers/MainDiv';
import SideBar from '../containers/SideBar';
import "./Home.scss"

const Home = (props) => {
  return (
    <div className='Home'>
      <SideBar />
      <div className='container'>
        <Header />
        {/* <MainDiv /> */}
      </div>
    </div>
  );
};

export default Home;
