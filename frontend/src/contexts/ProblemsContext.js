import React, { createContext, useState, useContext } from 'react';
import { LoadingContext } from './LoadingContext'
import axios from 'axios'

export const ProblemsContext = createContext();

const ProblemsContextProvider = props => {
  const { stopLoading } = useContext(LoadingContext)
  const [problems, setProblems] = useState([])

  const fetchProblems = fix => {
    axios.get(`http://localhost:5000/problems/${fix}`)
    .then(response => {
      setProblems(response.data)
      stopLoading()
    })
  }

  const addProblem = problem => {
    axios.post(`http://localhost:5000/problems/add`, problem)
    .then(stopLoading())
  }

  return (
    <ProblemsContext.Provider value={{ problems, fetchProblems, addProblem  }}>
      {props.children}
    </ProblemsContext.Provider>
  );
}

export default ProblemsContextProvider;
