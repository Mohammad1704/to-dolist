import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo.js'
class App extends Component {

  state = {
    addForm:{
          text:''
           },

            list : [
            {
              "text" : ""
            }
          ]


  }
  updateForm = (event) => {
    const newTask = event.target.value
    const originalState = this.state.addForm
    const copy = Object.assign({}, originalState);
    const key = event.target.name
    copy[key] = newTask
    this.setState({
      addForm: copy
    })
  }   

submitTask = (event) => {
  event.preventDefault()
  const copy = this.state.list.slice(0)
  copy.push(this.state.addForm)
  this.setState({
    list : copy,
    addForm: {
      text:''
    }
  })
}

clearlist = (event) => {
  this.setState({list: []});

}

  render() {
    

    const todoList = this.state.list.map((todo) => {
      return <Todo todo = {todo} />
    })
    return (
     <div>
       <link href="https://fonts.googleapis.com/css?family=Caveat|Sacramento|Shadows+Into+Light" rel="stylesheet" />
       <form onSubmit={this.submitTask}>
       
       <input type='text' placeholder="New Task✒️" onfocus="this.value=''" name='text' onChange={this.updateForm} value={this.state.addForm.text} />
       </form>
       <ul>{todoList}</ul>
       <button onClick={this.clearlist} > clear all </button>
      </div>
    );
  }
}

export default App;
