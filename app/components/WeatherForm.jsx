import React from 'react';


var WeatherForm = React.createClass({
	onFormSubmit: function(e) {
			e.preventDefault();

			var location = this.refs.location.value;

			if(location.length > 0) {
				this.refs.location.value = '';
				this.props.onSearch(location);
			}
		},
	render: function() {
		return(
			<div>
				<h2>Get Weather</h2>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="text" ref="location" placeholder="Enter City Name"/>
					</div>
					<div>
						<button>Get Weather</button>
					</div>
				</form>
			</div>
			
		);
	}
});

module.exports = WeatherForm;