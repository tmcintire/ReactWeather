import React from 'react';
import ReactDOM from 'react-dom';
// ****** This is using DESTRUCTURING from ES6 *******
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<Route path="about" component={About}/>
  		<Route path="examples" component={Examples}/>
  		<IndexRoute component={Weather}/>
  	</Route>


  </Router>,
  document.getElementById('app')
);
