import React, { createContext, useState } from 'react';
import axios from 'axios'

export const CarsContext = createContext();

const CarsContextProvider = props => {
  const [cars, setCars] = useState([])
  const [selectedTab, setSelectedTab] = useState(null)

  const fetchCars = () => {
    axios.get('http://localhost:5000/cars')
    .then(response => {
      const selectedTab = Number(localStorage.getItem('sidebarTab'))
      const carsInSelectedTab = response.data.filter(el => el.status === selectedTab)
      setCars(carsInSelectedTab)
    })
  }

  const addCar = car => {
    axios.post('http://localhost:5000/cars/add', car)
    .then(response => {
      console.log(response)
    })
  }

  const changeCarStatus = (id, status) => {
    let changedStatus = { status: null }
    status === 0
    ? changedStatus.status = 1
    : changedStatus.status = 0

    axios.post(`http://localhost:5000/cars/update/${id}`, changedStatus)
    .then(() => fetchCars())
  }

  const selectTab = value => {
    localStorage.setItem('sidebarTab', value)
    setSelectedTab(value)
    fetchCars()
  }

  return (
    <CarsContext.Provider value={{ cars, fetchCars, addCar, changeCarStatus, selectedTab, selectTab }}>
      {props.children}
    </CarsContext.Provider>
  );
}

export default CarsContextProvider;
