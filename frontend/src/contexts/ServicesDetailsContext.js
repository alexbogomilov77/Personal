import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ServicesDetailsContext = createContext();

const ServicesDetailsContextProvider = props => {
  const [details, setDetails] = useState([])

  const fetchDetails = (detailType, service) => {
    axios.get(`http://localhost:5000/${detailType}/${service}`)
    .then(response => {
      setDetails(response.data)
    })
  }

  const addDetail = newDetail => {
    const detail = {
      id: newDetail.id,
      service_id: newDetail.service_id,
      name: newDetail.name,
      price: newDetail.price,
    }
    axios.post(`http://localhost:5000/${newDetail.type}/add`, detail)
    .then(response => {
      console.log(response)
    })
  }

  const deleteDetail = (detailId, detailType ) => {
    axios.delete(`http://localhost:5000/${detailType}/delete/${detailId}`)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <ServicesDetailsContext.Provider
      value={{
        details,
        fetchDetails,
        addDetail,
        deleteDetail
      }}>
      {props.children}
    </ServicesDetailsContext.Provider>
  );
}

export default ServicesDetailsContextProvider;
