import React, { useContext, useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid'
import { SelectedItemsContext } from '../../../../contexts/SelectedItemsContext'
import { ServicesContext } from '../../../../contexts/ServicesContext'
import { ServicesDetailsContext } from '../../../../contexts/ServicesDetailsContext'

export default function Navigation () {
  const { selectedRepair, selectService, selectServiceDetail } = useContext(SelectedItemsContext)
  const { services, addService } = useContext(ServicesContext)
  const { fetchDetails } = useContext(ServicesDetailsContext)

  const [fetchedServices, setFetchedServices] = useState([])
  const [activeLink, setActiveLink] = useState('')
  const [newService, setNewService] = useState('')

  useEffect(() => {
    setFetchedServices(services)
  },[services])

  const handleClick = service => {
    setActiveLink(service.id)
    selectService(service)
    selectServiceDetail('actions')
    fetchDetails('actions', service.id)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const service = {
      id: uuidv1(),
      repair_id: selectedRepair,
      name: newService
    }

    setFetchedServices([...fetchedServices, service])
    addService(service)
    setNewService('')
  }

  const displayServices = () => fetchedServices.map(el => {
    return (
      <li
        key={el.id}
        onClick={() => handleClick(el)}
        className={'steps-list-item ' + (el.id === activeLink ? 'active-item': '')}>
        {el.name}
      </li>
    )
  })

  return (
    <div className="dashboard-navigation">
      <div className="wrapper">
        <div className="steps-label">Service</div>
        <ul className='steps'>
          <li className="step"></li>
          <li className="step active-step"></li>
          <li className="step"></li>
        </ul>
      </div>

      <form className="new-step">
        <input type="text" value={newService} onChange={e => setNewService(e.target.value)} />
        <button className="add" type="submit" onClick={handleSubmit}></button>
      </form>
  
      <ul className='steps-list'>
        { fetchedServices.length ? displayServices() : ''}
      </ul>
    </div>
  )
}

