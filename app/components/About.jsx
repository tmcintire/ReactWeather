import React from 'react';

var About = (props) => {
	return(
			<div>
				<h1 className="text-center page-title">About</h1>
				<hr />
				<p>Welcome to my React weather page.  This is for the Complete React Web App Developer Course!</p>
				<p>Here are some of the tools I used:</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a>
					</li>
				</ul>
			</div>
		);
};

module.exports = About;