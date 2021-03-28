import React, { useState } from 'react'
import axios from 'axios'

export default function Modal () {

  const carDetailsLabels = [
    'plate',
    'make',
    'model',
    'year',
    'engine'
  ]

  const [car, setCar] = useState({
    status: 0,
    plate: '',
    make: '',
    model: '',
    year: '',
    engine: ''
  })

  const handleChange = e => {
    const { id, value } = e.target;
    setCar(prevState => ({
        ...prevState,
        [id]: value
    }));
  }

  const handleSubmit = e => {
      e.preventDefault()
      axios.post('http://localhost:5000/cars/add', car)
      .then(response => {
        console.log(response)
      }
    )
  }

  const carDetailsList = () => 
    carDetailsLabels.map(item => {
      return (
        <li key={item}>
          <div className="inputLabel">{item}:</div>
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

