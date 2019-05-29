import React, { Component } from 'react';
import TodoUI from './Todos';

class App extends Component {
  state = {
    todos : [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "play games"}
    ]
  };
  deleteTodo = (id) => {
    const todosArray = this.state.todos.filter( element => {
      return element.id !== id;
    });
    this.setState({todos: todosArray});
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <TodoUI todoArray={this.state.todos} deleteTodoFunc={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
