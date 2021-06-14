import React, { useContext, useState } from 'react'
import { CarsContext } from '../../contexts/CarsContext'
//styles
import './NewCarModal.scss'

export default function Modal ({ closeModal }) {
  const { addCar, fetchCars } = useContext(CarsContext)

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
    addCar(car)
    fetchCars()
    closeModal()
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

