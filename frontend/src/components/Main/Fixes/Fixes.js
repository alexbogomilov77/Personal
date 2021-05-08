import React, { useContext, useState } from 'react'
//contexts
import { SelectedItemsContext } from '../../../contexts/SelectedItemsContext'
import { RepairsContext } from '../../../contexts/RepairsContext'
import { ProblemsContext } from '../../../contexts/ProblemsContext'
//styles
import './Fixes.scss'

export default function Fixes () {
  const { selectedCar, selectRepair } = useContext(SelectedItemsContext)
  const { repairs, addRepair } = useContext(RepairsContext)
  const { fetchProblems } = useContext(ProblemsContext)

  const [selectedFix, setSelectedFix] = useState(null)

  const handleClick = id => {
    setSelectedFix(id)
    fetchProblems(id)
    selectRepair(id)
  }

  const displayRepairs = () => repairs.map(el => {
    let day = new Date(el.start_date).getUTCDate()
    let month = new Date(el.start_date).getUTCMonth()
    let year = new Date(el.start_date).getUTCFullYear()
    let date = `${day}.${month}.${year}`
    return (
      <li
        key={el._id}
        onClick={() => handleClick(el._id)}
        className={'fix ' + (el._id === selectedFix ? 'selectedFix': '')}>
          {date}
      </li>
    )
  })

  return (
    <div className='fixesWrapper'>
      <div className='newFix btn btnLight' onClick={() => addRepair(selectedCar)}>
        +
      </div>
      <ul className='fixes'>
        { repairs.length ? displayRepairs() : '' }
      </ul>
    </div>
  )
}

