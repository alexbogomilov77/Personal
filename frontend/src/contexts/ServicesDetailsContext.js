import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ServicesDetailsContext = createContext();

const ServicesDetailsContextProvider = props => {
  const [details, setDetails] = useState([])

  const fetchDetails = (detailType, service) => {
    console.log('detailType', detailType)
    console.log('service', service)
    axios.get(`http://localhost:5000/${detailType}/${service}`)
    .then(response => {
      setDetails(response.data)
    })
  }

  const addDetail = newDetail => {
    console.log(newDetail)
    const detail = {
      service_id: newDetail.service_id,
      title: newDetail.name,
      price: newDetail.price,
    }
    axios.post(`http://localhost:5000/${newDetail.type}/add`, detail)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <ServicesDetailsContext.Provider
      value={{
        details,
        fetchDetails,
        addDetail
      }}>
      {props.children}
    </ServicesDetailsContext.Provider>
  );
}

export default ServicesDetailsContextProvider;
