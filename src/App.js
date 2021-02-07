// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'

//components
import Main from './components/global/Main'
import Header from './components/global/Header'
import Sidebar from './components/global/Sidebar'
//styles
import './assets/styles/index.scss'
import './App.scss'
import axios from 'axios'

export const CarsContext = React.createContext()

export default function App() {

  useEffect(() => {
    selectTab(0)
    fetchCars()
  },[])

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
    <div className="App">
      <CarsContext.Provider value={cars}>
        <Sidebar />
        <Header />
        <Main />
      </CarsContext.Provider>
    </div>
  )
}