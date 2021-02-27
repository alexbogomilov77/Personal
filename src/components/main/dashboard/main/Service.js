import React, { useContext, useState } from 'react'
import { PartsContext } from '../../../../contexts/PartsContext'

export default function Service () {
  const { parts } = useContext(PartsContext)

  const [activeLink, setActiveLink] = useState(null)

  const displayServiceDetails = () => 
    parts.length > 0
    ? parts.map(item => {
      return (
        <li
          key={item.part_id}
          className={'service-list-item ' + (item.part_id === activeLink ? 'active-item' : '')}>
          <span className="service-name">{item.title}</span>
          <span className="service-value">{item.price}</span>
        </li>
      )
    })
    : actions.map(item => {
      return (
        <li
          key={item.action_id}
          className={'service-list-item ' + (item.action_id === activeLink ? 'active-item' : '')}>
          <span className="service-name">{item.title}</span>
          <span className="service-value">{item.price}</span>
        </li>
      )
    })

  return actions.length > 0 ? (
    <div className="dashboard-main-service">

      <div className="service-input-fields">
        <div className="input-block">
          <div className="input">
            <label className="input-label" htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
        </div>

        <div className="input-block">
          <label className="input-label" htmlFor="value">Price:</label>
          <div className="input">
            <input type="text" id="value" name="value" />
          </div>
        </div>
        <button className="add btn-active2"></button>
      </div>


      <div className="service-list-wrapper">
        <ul className='service-list'>
          { displayServiceDetails() }
        </ul>
      </div>

      <div className="dashboard-main-service-footer">
        <button className="action-btn btn-active">complete</button>
      </div>

    </div>
  ) : (
    <div>
      <code>no actions!</code>
    </div>
  )
}

