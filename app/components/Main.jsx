import React from 'react';
import Nav from 'Nav';

var Main = (props) => {
	return(
			<div>
				<Nav />
				<div>
				<p>Main rendered</p>
					<div>
						{props.children}
					</div>
				</div>
				
			</div>
		);
};

module.exports = Main;