import React, { useState } from 'react';
import '../styles/header.css';
import toggle_light from '../assets/day.png';
import toggle_dark from '../assets/dark-mode.png';

const Header = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <nav className='navbar'>
        <div className='logo'>
          <span className={theme === 'dark' ? 'light' : 'dark'}>RJ</span>
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className='contact-me'>
          <button className={theme === 'dark' ? 'contactbnt' : 'contactbntlight'}>Contact Me</button>
          <img src={theme === 'dark' ? toggle_dark : toggle_light} alt='Toggle Theme' onClick={toggleTheme} className={theme === 'dark' ? 'toggle_theme dark' : 'toggle_theme'} />
        </div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </nav>
  );
};

export default Header;
