import React, {Component} from 'react';

class Todo extends Component {

render(){
    return (
        <div>
        <h1> hello</h1>
<h3>{this.props.todo.title}</h3>
<h5>{this.props.todo.text}</h5>
        </div>
    )
}

}

export default Todo;