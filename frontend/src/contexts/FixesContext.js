import React, { createContext, useState } from 'react';
import axios from 'axios'

export const FixesContext = createContext();

const FixesContextProvider = props => {
  const [fixes, setFixes] = useState([])

  const fetchFixes = carid => {
    axios.get(`http://localhost:5000/fixes/${carid}`)
    .then(response => {
      setFixes(response.data)
    })
  }

  const addFix = fix => {
    axios.post(`http://localhost:5000/fixes/add`, fix)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <FixesContext.Provider value={{ fixes, fetchFixes, addFix }}>
      {props.children}
    </FixesContext.Provider>
  );
}

export default FixesContextProvider;
