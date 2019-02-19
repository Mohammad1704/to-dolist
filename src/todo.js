import React, {Component} from 'react';

class Todo extends Component {

    state = {
        checked: 'false'
    }
    
    checkedTask = () =>{
        if (this.state.checked === 'false'){
            this.setState({checked:'done'})
        }else{
            this.setState({checked:'false'})
        }
        console.log(this.state.checked)
    }
    
    
render(){
    return (
            <div>
                <li> 
                    <span onClick={this.checkedTask} >◌</span>
                    <span className={this.state.checked} > {this.props.todo.text}  </span>  
                    <button id ='del' onClick={(event) => {this.props.deleteTask(this.props.index) ; this.setState({checked:'false'})} } >delete </button> 
                </li>
            </div>
    )
}

}

export default Todo;