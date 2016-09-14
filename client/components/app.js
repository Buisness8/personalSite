import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	render(){
		return (
			<div>
				<h1>Chris Ritchie is so cool.com</h1>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));