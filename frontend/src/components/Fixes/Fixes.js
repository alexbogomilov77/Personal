import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment'
import { v1 as uuidv1 } from 'uuid'
//contexts
import { SelectedItemsContext } from '../../contexts/SelectedItemsContext'
import { FixesContext } from '../../contexts/FixesContext'
import { ProblemsContext } from '../../contexts/ProblemsContext'
//styles
import './Fixes.scss'

export default function Fixes () {
  const { selectedCar, selectFix } = useContext(SelectedItemsContext)
  const { fixes, addFix } = useContext(FixesContext)
  const { fetchProblems } = useContext(ProblemsContext)

  const [selectedFix, setSelectedFix] = useState(null)
  const [fetchedFixes, setFetchedFixes] = useState([])

  useEffect(() => {
    setFetchedFixes(fixes)
    console.log(fixes)
  },[fixes])

  const handleSubmit = e => {
    e.preventDefault()
    const fix = {
      id: uuidv1(),
      car_id: selectedCar,
      start_date: moment().utc().toDate(),
    }

    setFetchedFixes([...fetchedFixes, fix])
    addFix(fix)
  }

  const handleClick = id => {
    setSelectedFix(id)
    fetchProblems(id)
    selectFix(id)
  }

  const displayFixes = () => fetchedFixes.map(el => {
    let day = new Date(el.start_date).getUTCDate()
    let month = new Date(el.start_date).getUTCMonth()
    let year = new Date(el.start_date).getUTCFullYear()
    let date = `${day}.${month}.${year}`
    return (
      <li
        key={el.id}
        onClick={() => handleClick(el.id)}
        className={'fix ' + (el.id === selectedFix ? 'selectedFix': '')}>
          {date}
      </li>
    )
  })

  return (
    <div className='fixesWrapper'>
      <form className="form">
        <button className="newFix btn btnLight" type="submit" onClick={handleSubmit}>
          +
        </button>
      </form>
      <ul className='fixes'>
        { fetchedFixes.length ? displayFixes() : '' }
      </ul>
    </div>
  )
}

