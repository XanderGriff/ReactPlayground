var React = require('react');
var ReactDOM = require('react-dom');

// Create component

var ToDoComponent = React.createClass({
	render: function(){
		return(
			<h1>Heloooo</h1>
		);
	}
});

ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));