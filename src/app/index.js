var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
        		<div>
        			<p>{this.props.testvar.price}</p>
            </div>
        );
    }
});

var myVariable = {name: 'test', price: 4.5 * 3};

ReactDOM.render(<TodoComponent mssg="hi there" testvar={myVariable}/>, document.getElementById('todo-wrapper'));

