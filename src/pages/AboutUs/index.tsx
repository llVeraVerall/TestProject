import React from 'react';
import './aboutUs.scss';

export const AboutUs: React.FC = () => {
  return (
    <div className="about__content">
      <div className="about__tite">
        About Us
        <div className="about__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
      </div>
      <div className="about__cards">
        <div className="about__card">
          <div className="card__img">
            <img src={require('../../assets/img/ava-1.png')} />
          </div>
          <div className="card__title">
            Melannie Doe
            <div className="card__subtitle">Project Manager</div>
            <div className="card__text">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation{' '}
            </div>
          </div>
          <div className="card__options"></div>
        </div>
        <div className="about__card">
          <div className="card__img">
            <img src={require('../../assets/img/ava-3.png')} />
          </div>
          <div className="card__title">
            Jhonnie Doe
            <div className="card__subtitle">Graphic Designer</div>
            <div className="card__text">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="card__options"></div>
        </div>
        <div className="about__card">
          <div className="card__img">
            <img src={require('../../assets/img/ava-2.png')} />
          </div>
          <div className="card__title">
            Daniel Doe
            <div className="card__subtitle">Web Designer</div>
            <div className="card__text">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo
            </div>
          </div>
          <div className="card__options"></div>
        </div>
      </div>
    </div>
  );
};
