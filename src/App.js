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
              "text" : " buy stuff"
            },
            {
              "text" : " buy stuff"
            },
            {
              "text" : " buy stuff"
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

  render() {
    

    const todoList = this.state.list.map((todo) => {
      return <Todo todo = {todo} />
    })
    return (
     <div>
       <form onSubmit={this.submitTask}>
       <label>text</label>
       <input type='text' onfocus="this.value=''" name='text' onChange={this.updateForm} value={this.state.addForm.text} />
       </form>
{todoList}
      </div>
    );
  }
}

export default App;
