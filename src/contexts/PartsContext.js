import React, { createContext, useState } from 'react';
import axios from 'axios'

export const PartsContext = createContext();

const PartsContextProvider = props => {
  const [parts, setParts] = useState([])

  const fetchParts = value => {
    axios.get(`http://localhost:5000/parts/${value}`)
    .then(response => {
      setParts(response.data)
    })
  }

  return (
    <PartsContext.Provider value={{ parts, fetchParts }}>
      {props.children}
    </PartsContext.Provider>
  );
}

export default PartsContextProvider;
