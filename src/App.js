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
    console.log(id);

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
