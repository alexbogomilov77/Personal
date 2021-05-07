import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ProblemsDetailsContext = createContext();

const ProblemsDetailsContextProvider = props => {
  const [details, setDetails] = useState([])

  const fetchDetails = (detailType, problemId) => {
    axios.get(`http://localhost:5000/${detailType}/${problemId}`)
    .then(response => {
      setDetails(response.data)
    })
  }

  const addDetail = detail => {
    axios.post(`http://localhost:5000/${detail.type}/add`, detail)
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
    <ProblemsDetailsContext.Provider
      value={{
        details,
        fetchDetails,
        addDetail,
        deleteDetail
      }}>
      {props.children}
    </ProblemsDetailsContext.Provider>
  );
}

export default ProblemsDetailsContextProvider;
