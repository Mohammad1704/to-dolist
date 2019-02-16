import React, {Component} from 'react';

class Todo extends Component {

    
render(){
    return (
        <div>
<h5>{this.props.todo.text}</h5>


        </div>
    )
}

}

export default Todo;