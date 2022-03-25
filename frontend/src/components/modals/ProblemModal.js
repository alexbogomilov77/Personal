
import React, { useContext, useState } from 'react'
import { v1 as uuidv1 } from 'uuid'
import { SelectedItemsContext } from '../../contexts/SelectedItemsContext'
import { ProblemsContext } from '../../contexts/ProblemsContext'

export default function ProblemModal ({ closeModal }) {
  const { selectedFix } = useContext(SelectedItemsContext)
  const { addProblem } = useContext(ProblemsContext)

  const problemDetailsLabels = [
    'name',
    'description'
  ]

  const [problem, setProblem] = useState({
    id: uuidv1(),
    fix_id: selectedFix,
    name: '',
    description: ''
  })

  const handleChange = e => {
    const { id, value } = e.target;
    setProblem(prevState => ({
        ...prevState,
        [id]: value
    }));
  }

  const handleSubmit = e => {
    e.preventDefault()
    addProblem(problem)
    closeModal()
  }

  const problemDetailsList = () => 
    problemDetailsLabels.map(item => {
      return (
        <li key={item}>
          <p className="inputLabel">{item}:</p>
          <input 
            type="text" 
            id={item}
            onChange={handleChange}
            />
        </li>
      )
  })

  return (
    <div className="modal">
      <form className="modalForm" onSubmit={handleSubmit}>
        <ul>
          { problemDetailsList() }
        </ul>
        <button className="btn btnLight" type="submit">Submit</button>
      </form>
    </div>
  )
}

