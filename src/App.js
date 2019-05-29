import React, { Component } from 'react';
import TodoUI from './Todos';
import AddTodoUI from './AddTodo';
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
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos: todos});
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <TodoUI todoArray = {this.state.todos} deleteTodoFunc = {this.deleteTodo} />
        <AddTodoUI newTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
