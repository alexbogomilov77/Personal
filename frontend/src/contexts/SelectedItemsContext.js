import React, { createContext, useState } from 'react';

export const SelectedItemsContext = createContext();

const SelectedItemsContextProvider = props => {
  const [selectedCar, setSelectedCar] = useState(null)
  const [selectedFix, setSelectedFix] = useState(null)
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [selectedProblemDetail, setSelectedProblemDetail] = useState(null)

  const selectCar = car => {
    checkSelectedCar(car)
    setSelectedCar(car)
  }

  const selectFix = fix => {
    setSelectedFix(fix)
  }

  const selectProblem = problem => {
    setSelectedProblem(problem)
  }

  const selectProblemDetail = detail => {
    setSelectedProblemDetail(detail)
  }

  const checkSelectedCar = car => {
    if (car !== selectedCar) {
      emptyAllFields()
    }
  }

  const emptyAllFields = () => {
    setSelectedFix(null)
    setSelectedProblem(null)
    setSelectedProblemDetail(null)
  }

  return (
    <SelectedItemsContext.Provider
      value={{
        selectedCar,
        selectCar,
        selectedFix,
        selectFix,
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
