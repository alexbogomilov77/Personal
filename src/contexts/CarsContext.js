import React, { createContext, useState } from 'react';
import axios from 'axios'

export const CarsContext = createContext();

const CarsContextProvider = props => {
  const [cars, setCars] = useState([])
  const [selectedTab, setSelectedTab] = useState(null)

  const fetchCars = () => {
    axios.get('http://localhost:8080/cars')
    .then(response => {
      const selectedTab = Number(localStorage.getItem('sidebarTab'))
      const carsInSelectedTab = response.data.filter(el => el.state === selectedTab)
      setCars(carsInSelectedTab)
    })
  }

  const selectTab = value => {
    localStorage.setItem('sidebarTab', value)
    setSelectedTab(value)
    fetchCars()
  }

  return (
    <CarsContext.Provider value={{ cars, fetchCars, selectedTab, selectTab }}>
      {props.children}
    </CarsContext.Provider>
  );
}

export default CarsContextProvider;