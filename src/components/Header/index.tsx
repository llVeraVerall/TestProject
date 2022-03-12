import React from 'react';
import './header.scss';

export const Header = () => {
	return(
		<div className='header__content'>
			<div className='logo__wrapper'>
			<div className='header__logo'></div>
			<div className='header__title'>BLA BLA
			<div className='header__text'>One Page Flat Template</div>
			</div>
			</div>
			<div className='header__nav'>
				 <ul className="menu">
					 <li className='li__title'>HOME</li>
					 <li className='li__title'>PORTFOLIO</li>
					 <li className='li__title'>ABOUT</li>
					 <li className='li__title'>CONTACT</li>
					 </ul>
				</div>
		</div>
	)
}