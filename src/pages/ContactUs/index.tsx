import React from 'react';
import './contactUs.scss';
import { BlaBlaMap } from '../../components/maps';

export const ContactUs = () => {
  return (
    <div className="contact__block">
      <div className="contact__tite">
        Contact Us
        <div className="contact__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </div>
      </div>
      <div className="contact__wrapper">
        <div className="input__wrapper">
          <div className="input__add">
            <input className="input__name" placeholder="Your name" />
            <input className="input__email" placeholder="Your email" />
          </div>
          <textarea className="massage" placeholder="Your message"></textarea>
        </div>
        <div className="aria__wrapper">
          <BlaBlaMap />
          <button className="contact__button">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};
