import React, { createContext, useState } from 'react';
import axios from 'axios'

export const RepairsContext = createContext();

const RepairsContextProvider = props => {
  const [repairs, setRepairs] = useState([])

  const fetchRepairs = value => {
    axios.get(`http://localhost:8080/repairs/${value}`)
    .then(response => {
      setRepairs(response.data)
    })
  }

  return (
    <RepairsContext.Provider value={{ repairs, fetchRepairs }}>
      {props.children}
    </RepairsContext.Provider>
  );
}

export default RepairsContextProvider;