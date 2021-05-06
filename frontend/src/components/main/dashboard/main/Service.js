import React, { useContext, useState, useEffect } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { v1 as uuidv1 } from 'uuid'
import { SelectedItemsContext } from '../../../../contexts/SelectedItemsContext'
import { ServicesDetailsContext } from '../../../../contexts/ServicesDetailsContext'

export default function Service () {
  const { selectedService, selectedServiceDetail } = useContext(SelectedItemsContext)
  const { details, addDetail, deleteDetail } = useContext(ServicesDetailsContext)

  const [fetchedDetails, setFetchedDetails] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    setFetchedDetails(details)
  },[details])

  const handleSubmit = e => {
    e.preventDefault()
    const detail = {
      id: uuidv1(),
      service_id: selectedService.id,
      name,
      price,
      type: selectedServiceDetail,
    }

    setFetchedDetails([...fetchedDetails, detail])
    addDetail(detail)
    setName('')
    setPrice('')
  }

  const handleDelete = itemId => {
    deleteDetail(itemId, selectedServiceDetail)
    setFetchedDetails(fetchedDetails.filter(item => item.id !== itemId));
  }
  
  const displayServiceDetails = () =>
    fetchedDetails.map(item => {
      return (
        <li key={item.id} className="service-list-item">
          <p className="service-name">{item.name}</p>
          <p className="service-value">{item.price}</p>
          <div className="deleteDetail" onClick={() => handleDelete(item.id)}>
            <FiTrash2 />
          </div>
        </li>
      )
    })

  return (
    <div className="dashboard-main-service">

      <form className="service-input-fields">
        <div className="input-block">
          <label className="input-label" htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        

        <div className="input-block">
          <label className="input-label" htmlFor="value">Price:</label>
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        
        <button className="add btn-active2" type="submit" onClick={handleSubmit}></button>
      </form>


      <div className="service-list-wrapper">
        <ul className='service-list'>
          { fetchedDetails.length ? displayServiceDetails() : '' }
        </ul>
      </div>

      <div className="dashboard-main-service-footer">
        <button className="action-btn btn-active">complete</button>
      </div>

    </div>
  )
}

