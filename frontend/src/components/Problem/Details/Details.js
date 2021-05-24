import React, { useContext, useState, useEffect } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { v1 as uuidv1 } from 'uuid'
//contexts
import { SelectedItemsContext } from '../../../contexts/SelectedItemsContext'
import { ProblemsDetailsContext } from '../../../contexts/ProblemsDetailsContext'
//styles
import './Details.scss'

export default function Body () {
  const { selectedProblem, selectedProblemDetail } = useContext(SelectedItemsContext)
  const { details, addDetail, deleteDetail } = useContext(ProblemsDetailsContext)

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
      problem_id: selectedProblem.id,
      name,
      price,
      type: selectedProblemDetail,
    }

    setFetchedDetails([...fetchedDetails, detail])
    addDetail(detail)
    setName('')
    setPrice('')
  }

  const handleDelete = itemId => {
    deleteDetail(itemId, selectedProblemDetail)
    setFetchedDetails(fetchedDetails.filter(item => item.id !== itemId));
  }
  
  const displayProblemDetails = () =>
    fetchedDetails.map(item => {
      return (
        <li key={item.id} className="detail">
          <p className="detailName">{item.name}</p>
          <p className="detailValue">{item.price}</p>
          <div className="deleteDetail" onClick={() => handleDelete(item.id)}>
            <FiTrash2 />
          </div>
        </li>
      )
    })

  return (
    <div className="detailsWrapper">

      <form className="form">
        <div className="inputBlock">
          <label className="inputLabel" htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        

        <div className="inputBlock">
          <label className="inputLabel" htmlFor="value">Price:</label>
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        
        <div className="submitBtn">
          <button className="btn btnLight" type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>

      <ul className='details'>
        { fetchedDetails.length && selectedProblem ? displayProblemDetails() : '' }
      </ul>

      <div className="footer">
        <button className="btn btnLight">complete</button>
      </div>

    </div>
  )
}

