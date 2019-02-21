
import React, { Component } from "react";
import "./App.css";
import "./button.css";
import "./paper.scss";
import Todo from "./todo";
class App extends Component {
  state = {
    addForm: {
      text: ""
    },
    list: []
  };

  updateForm = event => {
    const copy = Object.assign({}, this.state.addForm);
    const key = event.target.name;
    copy[key] = event.target.value;
    this.setState({
      addForm: copy
    });
  };

  submitTask = event => {
    console.log("submit");
    event.preventDefault();
    const copy = this.state.list.slice(0);
    copy.push(this.state.addForm);
    this.setState({
      list: copy,
      addForm: { text: "" }
    });
  };

  clearlist = event => {
    this.setState({ list: [] });
  };

  deleteTask = index => {
    const copy = this.state.list.slice(0);
    // remove the item at the index
    copy.splice(index, 1);
    //delete from copy
    //setcopy to orginal
    this.setState({ list: copy });
  };

  render() {
    const todoList = () => {
      // to devide the list into 3 parts 
      let chunk = Math.round(this.state.list.length / 3);
      const mod3 = this.state.list.length % 3;

      let temparray = [];

      if (this.state.list.length < 3) {
        chunk = 1;
      }

      for (let i = 0; i < this.state.list.length; i =  i + chunk) {
        if (
          i === this.state.list.length - 1 &&
          mod3 > 0 &&
          this.state.list.length > 3
        ) {

          if(temparray[0])
          temparray[0] = temparray[0].concat(
              this.state.list.slice(i, i + chunk + mod3)
            );
        } else {
          temparray.push(this.state.list.slice(i, i + chunk));
        }
      }

    // render 
      return temparray.map((temp, index) => {
        return (
          <div className={"part" + (index + 1)}>
            {temp.map(todo => (
              <Todo todo={todo} index={index} deleteTask={this.deleteTask} />
            ))}
          </div>
        );
      });
    };

    return (
      <div>
        <link rel="stylesheet" href="button.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Indie+Flower|Kalam"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Caveat|Sacramento|Shadows+Into+Light"
          rel="stylesheet"
        />
        <form onSubmit={this.submitTask}>
          <input
            type="text"
            placeholder="New Task✒️"
            name="text"
            onChange={this.updateForm}
            value={this.state.addForm.text}
          />
        </form>

        <div className="paper">{todoList()}</div>
        <div id="contentWrapper">
          <div id="content">
            <span id="button" onClick={this.clearlist}>
              clear all
            </span>
          </div>
        </div>

        {/* <button onClick={this.clearlist} > clear all </button> */}
      </div>
    );
  }
}

export default App;