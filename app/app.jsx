var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>,
	document.getElementById('app')
	);
