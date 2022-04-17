import React from 'react';
import './Footer.scss';

export const Footer: any = () => {
  const scrollToTop = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      setTimeout(scrollToTop, 10);
    }
  };
  return (
    <div className="footer__content">
      <div className="footer__text">
        &#169; Copyright 2016 Bla Bla Studio | One Page Flat Template
      </div>
      <button onClick={scrollToTop} className="scrollToTop">
        Up
      </button>
    </div>
  );
};
