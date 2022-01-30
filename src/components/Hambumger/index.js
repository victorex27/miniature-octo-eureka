import React from 'react';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import './Hambumger.scss';

const Hamburger = (props) => {
  const { responsiveSideBar, onClick } = props;

  const icon = responsiveSideBar ? (
    <GiHamburgerMenu size={30} />
  ) : (
    <FaTimes size={30} />
  );

  const color = responsiveSideBar ? '#141727' : '#fff';
  return (
    <button className='Button' onClick={onClick}>
      <IconContext.Provider value={{ color, className: 'hamburger' }}>
        <span>{icon}</span>
      </IconContext.Provider>
    </button>
  );
};
export default Hamburger;
