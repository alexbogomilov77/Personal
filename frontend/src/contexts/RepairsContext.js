import React, { createContext, useState } from 'react';
import axios from 'axios'

export const RepairsContext = createContext();

const RepairsContextProvider = props => {
  const [repairs, setRepairs] = useState([])

  const fetchRepairs = carid => {
    axios.get(`http://localhost:5000/repairs/${carid}`)
    .then(response => {
      setRepairs(response.data)
    })
  }

  const addRepair = carid => {
    const repair = { car_id: carid }
    // const today = new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now())
    axios.post(`http://localhost:5000/repairs/add`, repair)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <RepairsContext.Provider value={{ repairs, fetchRepairs, addRepair }}>
      {props.children}
    </RepairsContext.Provider>
  );
}

export default RepairsContextProvider;
