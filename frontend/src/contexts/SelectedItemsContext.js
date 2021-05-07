import React, { createContext, useState } from 'react';

export const SelectedItemsContext = createContext();

const SelectedItemsContextProvider = props => {
  const [selectedCar, setSelectedCar] = useState(null)
  const [selectedRepair, setSelectedRepair] = useState(null)
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [selectedProblemDetail, setSelectedProblemDetail] = useState(null)

  const selectCar = car => {
    setSelectedCar(car)
  }

  const selectRepair = repair => {
    setSelectedRepair(repair)
  }

  const selectProblem = problem => {
    setSelectedProblem(problem)
  }

  const selectProblemDetail = detail => {
    setSelectedProblemDetail(detail)
  }

  return (
    <SelectedItemsContext.Provider
      value={{
        selectedCar,
        selectCar,
        selectedRepair,
        selectRepair,
        selectedProblem,
        selectProblem,
        selectedProblemDetail,
        selectProblemDetail
      }}>
      {props.children}
    </SelectedItemsContext.Provider>
  );
}

export default SelectedItemsContextProvider;
