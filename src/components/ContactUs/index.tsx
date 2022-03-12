import React from 'react';
import './contactUs.scss';
import { BlaBlaMap } from '../maps';

export const ContactUs = () =>{
	return(
		<div className='contact__block'>
			<div className='contact__tite'>Contact Us
			<div className='contact__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
		</div>
		<div className='contact__wrapper'>
		<input className="input__name" placeholder='Your name'/>
		<input className="input__email" placeholder='Your email'/>
		<textarea className="massage" placeholder='Your message'></textarea>
		<button className='contact__button'>SUBMIT</button>
		<div className='map'><BlaBlaMap /></div>
	</div>
	</div>
	)
}