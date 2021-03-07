import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ActionsContext = createContext();

const ActionsContextProvider = props => {
  const [actions, setActions] = useState([])

  const fetchActions = value => {
    axios.get(`http://localhost:8080/actions/${value}`)
    .then(response => {
      setActions(response.data)
    })
  }

  return (
    <ActionsContext.Provider value={{ actions, fetchActions }}>
      {props.children}
    </ActionsContext.Provider>
  );
}

export default ActionsContextProvider;