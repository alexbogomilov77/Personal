import React, { Component } from 'react'

class Modal extends Component {

state = {
    plate: '',
    make: '',
    model: '',
    year: ''
}

handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
}
handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    // this.props.addTodo(this.state);
    this.setState({
        content: e.target.value
    });
    // this.setState({
    //     content: ''
    // })
}

  render() {
    return (
      <div className="modal">
        <form onSubmit={this.handleSubmit}>
          <label>Add new car:</label>
          <input 
            type="text" 
            id="plate"
            onChange={this.handleChange} 
            value={this.state.content} 
            />
            <button type="submit">Submit</button>
        </form>
        <p>{this.state.plate}</p>
      </div>
    )
  }
}

export default (Modal)

