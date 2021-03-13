import React, { useContext, useState } from 'react'
import { ServicesContext } from '../../../../contexts/ServicesContext'
import { ActionsContext } from '../../../../contexts/ActionsContext'

export default function Navigation () {
  const { services } = useContext(ServicesContext)
  const { fetchActions } = useContext(ActionsContext)

  const [activeLink, setActiveLink] = useState(null)

  const handleClick = id => {
    setActiveLink(id)
    fetchActions(id)
  };

  const displayServices = () => services.map(el => {
    return (
      <li
        key={el._id}
        onClick={() => handleClick(el._id)}
        className={'steps-list-item ' + (el._id === activeLink ? 'active-item': '')}>
        {el.title}
      </li>
    )
  })

  return services.length ? (
    <div className="dashboard-navigation">
      <div className="wrapper">
        <div className="steps-label">Service</div>
        <ul className='steps'>
          <li className="step"></li>
          <li className="step active-step"></li>
          <li className="step"></li>
        </ul>
      </div>
      
      <div className="new-step">
        <input type="text" id="step" name="new-step" />
        <button className="add"></button>
      </div>
      <ul className='steps-list'>
        { displayServices() }
      </ul>
    </div>
  ) : (
    <div>
      <code>no services!</code>
    </div>
  )
}

