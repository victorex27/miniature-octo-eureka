import React from 'react';
import './Header.scss';

import SearchIcon from '../../img/icon-search.svg';
import Vector5Icon from '../../img/vector5.svg';
import Vector6Icon from '../../img/vector6.svg';

const Header = (props) => {
  return (
    <header className='Header'>
      <div>
        <span>Dashboard</span>
      </div>
      <div>
        <form action='#' className='search'>
          <img src={SearchIcon} alt='search icon' />
          <input type='text' placeholder='Enter Keywords ...' />
        </form>

        <div>
          <select defaultValue='en'>
            <option value='en'> EN </option>
            <option value='fr'> FR </option>
          </select>
          <svg className='search__icon'>
            <use xlinkHref='../../img/icon-chevron-down'></use>
          </svg>
        </div>

        <span>
          <img src={Vector6Icon} alt='search icon' />
        </span>
        <span>
          <img src={Vector5Icon} alt='search icon' />
        </span>
        <span>
          <img src='./img1.png' alt='profile pics' />
        </span>
      </div>
    </header>
  );
};

export default Header;
