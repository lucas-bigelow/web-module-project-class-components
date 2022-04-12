import React from 'react'

// a todo will be an object with the following form:
// {task: "Whatever Task", completed: false(default)}

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{textDecoration: this.props.todo.completed ? 'line-through' : ''}}>{this.props.todo.task}</h3>
      </div>
    )
  }
}
