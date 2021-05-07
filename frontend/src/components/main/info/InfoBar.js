import React, { useContext, useState } from 'react'
import { SelectedItemsContext } from '../../../contexts/SelectedItemsContext'
import { RepairsContext } from '../../../contexts/RepairsContext'
import { ProblemsContext } from '../../../contexts/ProblemsContext'

export default function InfoBar () {
  const { selectedCar, selectRepair } = useContext(SelectedItemsContext)
  const { repairs, addRepair } = useContext(RepairsContext)
  const { fetchProblems } = useContext(ProblemsContext)

  const [activeLink, setActiveLink] = useState(null)

  const handleClick = id => {
    setActiveLink(id)
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
        className={'history-nav-item ' + (el._id === activeLink ? 'active-item': '')}>
          {date}
      </li>
    )
  })

  return (
    <div className='infobar'>
      <div className='history'>
        {/* <p className="infobar-label">history</p> */}
        <div className='new' onClick={() => addRepair(selectedCar)}>
          +
        </div>
        <ul className='history-nav'>
          { repairs.length ? displayRepairs() : '' }
        </ul>
      </div>
    </div>
  )
}

