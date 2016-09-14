import React from 'react';
import ReactDOM from 'react-dom';

import Music from './music'
import Code from './code'


class App extends React.Component {
	render(){
		return (
			<div>
				<h1>Chris Ritchie is so cool.com</h1>
				<Music />
				<Code />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));