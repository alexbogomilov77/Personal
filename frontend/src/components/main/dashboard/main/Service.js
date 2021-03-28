import React, { useContext, useState } from 'react'
import { SelectedItemsContext } from '../../../../contexts/SelectedItemsContext'
import { ServicesDetailsContext } from '../../../../contexts/ServicesDetailsContext'

export default function Service () {
  const { selectedService, selectedServiceDetail } = useContext(SelectedItemsContext)
  const { details, addDetail } = useContext(ServicesDetailsContext)

  const [activeLink, setActiveLink] = useState(null)
  const [newDetail, setNewDetail] = useState({
    name: '',
    price: ''
  })

  const handleInput = e => {
    const { id, value } = e.target;
    setNewDetail(prevState => ({
        type: selectedServiceDetail,
        service_id: selectedService,
        ...prevState,
        [id]: value
    }))
  }
  console.log('mounted')
  
  const displayServiceDetails = () =>
    details.map(item => {
      return (
        <li
          key={item._id}
          className={'service-list-item ' + (item._id === activeLink ? 'active-item' : '')}>
          <span className="service-name">{item.title}</span>
          <span className="service-value">{item.price}</span>
        </li>
      )
    })

  return details.length > 0 ? (
    <div className="dashboard-main-service">

      <div className="service-input-fields">
        <div className="input-block">
          <div className="input">
            <label className="input-label" htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleInput}/>
          </div>
        </div>

        <div className="input-block">
          <label className="input-label" htmlFor="value">Price:</label>
          <div className="input">
            <input type="text" id="price" name="value" onChange={handleInput} />
          </div>
        </div>
        <button className="add btn-active2"  onClick={() => addDetail(newDetail)}></button>
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
      <code>no info!</code>
    </div>
  )
}

