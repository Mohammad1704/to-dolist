import React, {Component} from 'react';

class Todo extends Component {

    state = {
        hide: 'done'
    }
    
    hideTask = () =>{
        if (this.state.hide === 'false'){
            this.setState({hide:'done'})
        }else{
            this.setState({hide:'false'})
        }
    }
render(){
    return (
        <div>
 <li> <span  onClick={this.hideTask} >◌</span> {this.props.todo.text}</li>
 </div>
    )
}

}

export default Todo;