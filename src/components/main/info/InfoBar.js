import React, { useContext, useState } from 'react'
import { RepairsContext } from '../../../contexts/RepairsContext'
import { ServicesContext } from '../../../contexts/ServicesContext'

export default function InfoBar () {
  const { repairs } = useContext(RepairsContext)
  const { fetchServices } = useContext(ServicesContext)

  const [activeLink, setActiveLink] = useState(null)

  const handleClick = id => {
    setActiveLink(id)
    fetchServices(id)
  };

  const displayRepairs = () => repairs.map(el => {
    let day = new Date(el.start_date).getUTCDate()
    let month = new Date(el.start_date).getUTCMonth()
    let year = new Date(el.start_date).getUTCFullYear()
    let date = `${day}.${month}.${year}`
    return (
      <li
        key={el.repair_id}
        onClick={() => handleClick(el.repair_id)}
        className={'history-nav-item ' + (el.repair_id === activeLink ? 'active-item': '')}>
          {date}
      </li>
    )
  })

  return repairs.length ? (
    <div className='infobar'>
      <div className='info'>
        <p className="infobar-label car-id">CB 3411 BA</p>
        <span className="specification">
          Honda Accord
        </span>
        <span className="specification">
          Diesel 2.2 CDTi
        </span>
        {/* <span className="specification">
          2005
        </span> */}
      </div>
      {/* <div className='divider'></div> */}
      <div className='history'>
        <p className="infobar-label">history</p>
        <ul className='history-nav'>
          { displayRepairs() }
        </ul>
      </div>
  </div>
  ) : (
    <div>
      <code>no history!</code>
    </div>
  )

}

