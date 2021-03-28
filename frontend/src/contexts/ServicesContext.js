import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ServicesContext = createContext();

const ServicesContextProvider = props => {
  const [services, setServices] = useState([])

  const fetchServices = value => {
    axios.get(`http://localhost:5000/services/${value}`)
    .then(response => {
      setServices(response.data)
    })
  }

  const addService = (selectedRepair, newService) => {
    const service = {
      repair_id: selectedRepair,
      title: newService
    }
    axios.post(`http://localhost:5000/services/add`, service)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <ServicesContext.Provider value={{ services, fetchServices, addService }}>
      {props.children}
    </ServicesContext.Provider>
  );
}

export default ServicesContextProvider;
