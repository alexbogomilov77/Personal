import React, { Component } from 'react'
import axios from 'axios'
class Modal extends Component {

state = {
    vehicleID: 0,
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

    // console.log(this.state)

    // this.setState({
    //     content: e.target.value
    // });
    axios.post('http://localhost:8080/cars', this.state).then( response => {
      console.log(response)
    }
  )
}

  render() {
    return (
      <div className="modal">
        <form onSubmit={this.handleSubmit}>
          <label>Plate:</label>
          <input 
            type="text" 
            id="plate"
            onChange={this.handleChange} 
            value={this.state.content} 
            />
          <label>Make:</label>
          <input
            type="text" 
            id="make"
            onChange={this.handleChange} 
            value={this.state.content} 
            />
          <label>Model:</label>
          <input 
            type="text" 
            id="model"
            onChange={this.handleChange} 
            value={this.state.content} 
            />
          <label>Year:</label>
          <input
            type="text" 
            id="year"
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

