import React from 'react';
import PropTypes from 'prop-types';
import logo from './nytime_logo.png';
import './header.css';

const Header = ({categories, activeCategory, handleClick}) => {
  const categoriesList = categories.map((i, index) => {
    let liClassName = 'nav-list__item';
    if (activeCategory === i) {
      liClassName += ' nav-list__item--active';
    }
    return (
      <li key={index}
        className={liClassName}
        onClick={() => handleClick(i)}>
        {i === null ? 'All' : i}
      </li>
    );
  });

  return (
    <div>
      <header className='header'>
        <a href='https://www.nytimes.com'>
          <img src={logo} className='header__logo' alt='logo' />
        </a>
      </header>
      <nav>
        <ul className='nav-list'>
          {categoriesList}
        </ul>
      </nav>
    </div>
  );
}

export default Header;

Header.propTypes = {
  categories: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  activeCategory: PropTypes.string
};
