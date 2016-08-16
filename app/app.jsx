import React from 'react';
import ReactDOM from 'react-dom';
// ****** This is using DESTRUCTURING from ES6 *******
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import Countdown from 'Countdown';
import Timer from 'Timer';

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<IndexRoute component={Timer} />
  		<Route path="countdown" component={Countdown}/>
  	</Route>


  </Router>,
  document.getElementById('app')
);

// define routes here
// updates styles, bold when linked is clicked
// update aliases in webpack config