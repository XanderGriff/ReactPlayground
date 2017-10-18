var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
    	return{
    		todos:['test1','test2','test3']
    	}
    },

    render: function(){
        return(
            <div id="todo-list">
            	<p>The busiest people....</p>
            	<ul>
            		<li>{this.state.todos[0]}</li>
            		<li>{this.state.todos[1]}</li>
            		<li>{this.state.todos[2]}</li>
            	</ul>
            </div> 
        );
    } // render
});



ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
