import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  return (
    <div className="header__content">
      <div className="logo__wrapper">
        <div className="header__logo"></div>
        <div className="header__title">
          BLA BLA
          <div className="header__text">One Page Flat Template</div>
        </div>
      </div>
      <div className="header__nav">
        <ul className="menu">
          <li className="li__title">
            <Link to="/">HOME</Link>
          </li>
          <li className="li__title">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="li__title">
            <Link to="/aboutUs">ABOUT</Link>
          </li>
          <li className="li__title">
            <Link to="/contactUs">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
