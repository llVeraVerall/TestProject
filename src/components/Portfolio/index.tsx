import React from 'react';
import './portfolio.scss';

export const Portfolio = () =>{
	return(
		<div>

			<div className='portfolio__title'>Portfolio
			<div className='portfolio__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
		</div>
			<div className='portfolio__nav'>
				 <ul>
					 <li>All</li>
					 <li>WEB DESIGN</li>
					 <li>GRAPHIC DESIGN</li>
					 <li>FLAT DESIGN</li>
					 </ul>
				</div>
				<div className='portfolio__icons'>
					<div className='icon1'></div >
					<div className='icon2'></div>
					<div className='icon3'></div>
					<div className='icon4'></div>
					<div className='icon5'></div>
					<div className='icon6'></div>
					<div className='icon7'></div>
					<div className='icon8'></div>
					</div>
		</div>
	)
}