import React, { createContext, useState } from 'react';

export const SelectedItemsContext = createContext();

const SelectedItemsContextProvider = props => {
  const [selectedCar, setSelectedCar] = useState(null)
  const [selectedRepair, setSelectedRepair] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null)

  const selectCar = car => {
    setSelectedCar(car)
  }

  const selectRepair = repair => {
    setSelectedRepair(repair)
  }

  const selectService = service => {
    setSelectedService(service)
  }

  const selectServiceDetail = detail => {
    setSelectedServiceDetail(detail)
  }

  return (
    <SelectedItemsContext.Provider
      value={{
        selectedCar,
        selectCar,
        selectedRepair,
        selectRepair,
        selectedService,
        selectService,
        selectedServiceDetail,
        selectServiceDetail
      }}>
      {props.children}
    </SelectedItemsContext.Provider>
  );
}

export default SelectedItemsContextProvider;
