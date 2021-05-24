import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ProblemsContext = createContext();

const ProblemsContextProvider = props => {
  const [problems, setProblems] = useState([])

  const fetchProblems = fix => {
    axios.get(`http://localhost:5000/problems/${fix}`)
    .then(response => {
      setProblems(response.data)
    })
  }

  const addProblem = problem => {
    axios.post(`http://localhost:5000/problems/add`, problem)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <ProblemsContext.Provider value={{ problems, fetchProblems, addProblem  }}>
      {props.children}
    </ProblemsContext.Provider>
  );
}

export default ProblemsContextProvider;
