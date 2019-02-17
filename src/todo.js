import React, {Component} from 'react';

class Todo extends Component {

    state = {
        hide: 'false'
    }
    
    hideTask = () =>{
        if (this.state.hide === 'false'){
            this.setState({hide:'done'})
        }else{
            this.setState({hide:'false'})
        }

        console.log(this.state.hide)

    }
    
render(){
    return (
            <div>
                <li onClick={this.hideTask} > 
                    <span >◌</span>
                    <span className={this.state.hide} > {this.props.todo.text} </span>
                </li>
            </div>
    )
}

}

export default Todo;