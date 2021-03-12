import React, { useState } from 'react'
import axios from 'axios'

export default function Modal () {

  const carDetailsLabels = [
    'plate',
    'make',
    'model',
    'year',
    'fuel',
    'engine',
    'cc'
  ]

  const [vehicle, setVehicle] = useState({
    vehicleID: 0,
    state: 0,
    plate: '',
    make: '',
    model: '',
    fuel: '',
    engine: '',
    cc: ''
  })

  const handleChange = e => {
    const { id, value } = e.target;
    setVehicle(prevState => ({
        ...prevState,
        [id]: value
    }));
  }

  const handleSubmit = e => {
      console.log('click')
      e.preventDefault()
      axios.post('http://localhost:8080/cars', vehicle)
      .then(response => {
        console.log(response)
      }
    )
  }

  const carDetailsList = () => 
    carDetailsLabels.map(item => {
      return (
        <li key={item}>
          <label>{item}:</label>
          <input 
            type="text" 
            id={item}
            onChange={handleChange}
            />
        </li>
      )
  })

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <ul>
          { carDetailsList() }
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

