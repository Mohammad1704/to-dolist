import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo.js'
class App extends Component {
  render() {
    const list = [
      {
        "title": "go out",
        "text" : " buy stuff"
      },
      {
        "title": "go out",
        "text" : " buy stuff"
      },
      {
        "title": "go out",
        "text" : " buy stuff"
      }
    ]

    const todoList = list.map((todo) => {
      return <Todo todo = {todo} />
    })
    return (
     <div>
{todoList}
      </div>
    );
  }
}

export default App;
