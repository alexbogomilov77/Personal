import React, { useContext, useState } from 'react'
import { SelectedItemsContext } from '../../../contexts/SelectedItemsContext'
import { RepairsContext } from '../../../contexts/RepairsContext'
import { ServicesContext } from '../../../contexts/ServicesContext'

export default function InfoBar () {
  const { selectedCar, selectRepair } = useContext(SelectedItemsContext)
  const { repairs, addRepair } = useContext(RepairsContext)
  const { fetchServices } = useContext(ServicesContext)

  const [activeLink, setActiveLink] = useState(null)

  const handleClick = id => {
    setActiveLink(id)
    fetchServices(id)
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

  //     <div className='info'>
  //       <p className="infobar-label car-id">CB 3411 BA</p>
  //       <span className="specification">
  //         Honda Accord
  //       </span>
  //       <span className="specification">
  //         Diesel 2.2 CDTi
  //       </span>
  //       <span className="specification">
  //         2005
  //       </span>
  //     </div>
  //     <div className='divider'></div>
  return (
    <div className='infobar'>
      <div className='history'>
        <p className="infobar-label">history</p>
        <ul className='history-nav'>
          { repairs.length ? displayRepairs() : '' }
        </ul>
        <div className='new' onClick={() => addRepair(selectedCar)}>
          +
        </div>
      </div>
    </div>
  )
}

