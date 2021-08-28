import React, { createContext, useState, useContext } from 'react';
import { LoadingContext } from './LoadingContext'
import axios from 'axios'

export const FixesContext = createContext();

const FixesContextProvider = props => {
  const { stopLoading } = useContext(LoadingContext)
  const [fixes, setFixes] = useState([])

  const fetchFixes = carid => {
    axios.get(`http://localhost:5000/fixes/${carid}`)
    .then(response => {
      setFixes(response.data)
      stopLoading()
    })
  }

  const addFix = fix => {
    axios.post(`http://localhost:5000/fixes/add`, fix)
    .then(stopLoading())
  }

  return (
    <FixesContext.Provider value={{ fixes, fetchFixes, addFix }}>
      {props.children}
    </FixesContext.Provider>
  );
}

export default FixesContextProvider;
