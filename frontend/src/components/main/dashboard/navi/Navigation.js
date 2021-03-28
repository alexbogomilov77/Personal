import React, { useContext, useState } from 'react'
import { SelectedItemsContext } from '../../../../contexts/SelectedItemsContext'
import { ServicesContext } from '../../../../contexts/ServicesContext'
import { ServicesDetailsContext } from '../../../../contexts/ServicesDetailsContext'

export default function Navigation () {
  const { selectedRepair, selectService, selectServiceDetail } = useContext(SelectedItemsContext)
  const { services, addService } = useContext(ServicesContext)
  const { fetchDetails } = useContext(ServicesDetailsContext)

  const [activeLink, setActiveLink] = useState(null)
  const [newService, setNewService] = useState(null)

  const handleClick = id => {
    setActiveLink(id)
    selectService(id)
    selectServiceDetail('actions')
    fetchDetails('actions', id)
  }

  const handleInput = event => {
    setNewService(event.target.value)
  }

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
        <input type="text" id="step" name="new-step" onChange={handleInput} />
        <button className="add" onClick={() => addService(selectedRepair, newService)}></button>
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

