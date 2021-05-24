import React, { useContext } from 'react'
//contexts
import { SelectedItemsContext } from '../../contexts/SelectedItemsContext'

//styles
import './MainHeader.scss'

export default function MainHeader () {
  const {
    selectedCar,
    selectedFix,
    selectedProblem } = 
    useContext(SelectedItemsContext)

  const displayMessage = () => {
    if (!selectedCar) {
      return 'You need to selected a car from the list'
    } else if (selectedCar && !selectedFix) {
      return 'see previous Fixes or create a new one'
    } else if (selectedCar && selectedFix && !selectedProblem) {
      return 'choose already existing problem or a new one'
    }
  }

  return (
    <div className='mainHeader'>
      <p>{ displayMessage() }</p>
    </div>
  )
}
