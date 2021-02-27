import React, { createContext, useState } from 'react';
import axios from 'axios'

export const PartsContext = createContext();

const PartsContextProvider = props => {
  const [parts, setParts] = useState([])

  const fetchParts = () => {
    axios.get(`http://localhost:8080/parts/`)
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