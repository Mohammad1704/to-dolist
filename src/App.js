import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css';
import './paper.scss';
import Todo from './todo.js'
class App extends Component {

  state = {
    addForm:{
          text:''
           },

            list : []


  }

  updateForm = (event) => {
    const copy = Object.assign({}, this.state.addForm);
    const key = event.target.name
    copy[key] = event.target.value
     this.setState({
      addForm: copy
    })
  }   

submitTask = (event) => {
  event.preventDefault()
  const copy = this.state.list.slice(0)
  copy.push(this.state.addForm)
  this.setState({
    list : copy , addForm: { text:'' }
  })
}

clearlist = (event) => {
  this.setState({list: []});
}

deleteTask = (index) => {
  const copy = this.state.list.slice(0)
  // remove the item at the index
  copy.splice(index,1)
  //delete from copy 
  //setcopy to orginal 
  this.setState({list : copy})

  
}

render() {

    const todoList = this.state.list.map((todo, index) => {
      return <Todo todo = {todo} index={index} deleteTask={this.deleteTask}/>
      
    })
    
    return (
     
     <div>
         <link rel="stylesheet" href="button.css"/>
       <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Kalam" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css?family=Caveat|Sacramento|Shadows+Into+Light" rel="stylesheet" />
       <form onSubmit={this.submitTask}>
       
       <input type='text' placeholder="New Task✒️" onFocus="this.value=''" name='text' onChange={this.updateForm} value={this.state.addForm.text} />
       </form>
       
       {/* <ul>{todoList}</ul> */}

       <div class="paper">
  <div class="part1">
    <h2>Title</h2>
    <p>Let dolore magna aliquyam erat, sed diam.</p>
  </div>
  <div class="part2">
    <p>  <ul>{todoList}</ul> </p>
  </div>
  <div class="part3">
    <p>  <ul>{todoList}</ul> <span class="pageNumber">6</span></p>
  </div>
</div>
       <div id="contentWrapper">
		<div id="content">
			
			
			<span id="button" onClick={this.clearlist} >clear all</span>
		</div>
	</div>

       {/* <button onClick={this.clearlist} > clear all </button> */}


      </div>
    );
  }
}

export default App;
