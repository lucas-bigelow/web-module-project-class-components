import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {task: 'Clean garage', completed: true, hidden: false}
      ],
      userInput:  ''
    };
  }

  // event handlers
  handleChange = (e) => {
    this.setState({...this.state, userInput: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {...this.state, 
        todos: [...this.state.todos, {task: this.state.userInput, completed: false, hidden: false}]
      });
  }

  handleFilter = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        return {...todo,  hidden: todo.completed};
      })
    })
  }

  render() {
    return (
      <div>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleFilter={this.handleFilter}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}
