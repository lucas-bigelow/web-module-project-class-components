import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <input type="text" onChange={this.props.handleChange} />
          <button type="submit">Add a Todo</button>
          <button type="button" onClick={(evt) => this.props.handleFilter(evt)}>Filter Completed</button>
        </form>
      </div>
    )
  }
}
