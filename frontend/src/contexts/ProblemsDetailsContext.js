import React, { createContext, useState, useContext } from 'react';
import { LoadingContext } from './LoadingContext'
import axios from 'axios'

export const ProblemsDetailsContext = createContext();

const ProblemsDetailsContextProvider = props => {
  const { stopLoading } = useContext(LoadingContext)
  const [details, setDetails] = useState([])

  const fetchDetails = (detailType, problemId) => {
    axios.get(`https://app-garage-manager.herokuapp.com/${detailType}/${problemId}`)
    .then(response => {
      setDetails(response.data)
      stopLoading()
    })
  }

  const addDetail = detail => {
    axios.post(`https://app-garage-manager.herokuapp.com/${detail.type}/add`, detail)
    .then(stopLoading())
  }

  const deleteDetail = (detailId, detailType ) => {
    axios.delete(`https://app-garage-manager.herokuapp.com/${detailType}/delete/${detailId}`)
    .then(stopLoading())
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
