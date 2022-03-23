import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment'
import { v1 as uuidv1 } from 'uuid'
//contexts
import { LoadingContext } from '../../contexts/LoadingContext'
import { SelectedItemsContext } from '../../contexts/SelectedItemsContext'
import { FixesContext } from '../../contexts/FixesContext'
import { ProblemsContext } from '../../contexts/ProblemsContext'
//styles
import './Fixes.scss'

export default function Fixes () {
  const { setLoading } = useContext(LoadingContext)
  const { selectedCar, selectFix, emptyProblems  } = useContext(SelectedItemsContext)
  const { fixes, addFix } = useContext(FixesContext)
  const { fetchProblems } = useContext(ProblemsContext)

  const [selectedFix, setSelectedFix] = useState(null)
  const [fetchedFixes, setFetchedFixes] = useState([])

  useEffect(() => {
    setSelectedFix(null)
    //to improve method above it is clearing fixes
    //after selecting another car and go back to previous selected
    setFetchedFixes(fixes)
  },[fixes])

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    const fix = {
      id: uuidv1(),
      car_id: selectedCar,
      start_date: moment().utc().toDate(),
    }

    setFetchedFixes([...fetchedFixes, fix])
    addFix(fix)
  }

  const handleClick = id => {
    setLoading(true)
    emptyProblems()
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
      {/* <p className="label">Fixes</p> */}
      <form className="form">
        <button className="newFix btn btnWhite" type="submit" onClick={handleSubmit}>
          +
        </button>
      </form>
      <ul className='fixes'>
        { fetchedFixes.length ? displayFixes() : '' }
      </ul>
    </div>
  )
}
