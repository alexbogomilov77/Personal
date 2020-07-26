import React, { Component } from 'react'
import axios from 'axios'
class Modal extends Component {

state = {
    vehicleID: 0,
    plate: 'PB1447AB',
    make: 'Skoda',
    model: 'SuperB',
    year: 2010
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

