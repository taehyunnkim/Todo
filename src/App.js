import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';
import './App.css';

class App extends Component {
  state = {
    items: [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "Finish math homework"}
    ]
  }

  addItem = (item) => {
    let newItems = [...this.state.items, item];
    this.setState({
      items: newItems
    });
    console.log(this.state);
  }

  deleteItem = (id) => {
    const newTodos = this.state.items.filter(item => {
      return item.id !== id
    });

    this.setState({
      items: newTodos
    });
  }

  render() {
    return(
      <div className = "todo-app container">
          <h1 className = "center header">Today's Todo List</h1>
          <Todos deleteItem = {this.deleteItem} items={this.state.items} />
          <AddForm addItem = {this.addItem}/>
      </div>
    );
  }
}

export default App;
