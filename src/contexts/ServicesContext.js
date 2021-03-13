import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ServicesContext = createContext();

const ServicesContextProvider = props => {
  const [services, setServices] = useState([])
  // const [selectedService, setSelectedService] = useState('')

  const fetchServices = value => {
    axios.get(`http://localhost:5000/services/${value}`)
    .then(response => {
      setServices(response.data)
    })
  }

  return (
    <ServicesContext.Provider value={{ services, fetchServices }}>
      {props.children}
    </ServicesContext.Provider>
  );
}

export default ServicesContextProvider;
