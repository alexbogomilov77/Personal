
import React, { useContext, useState } from 'react'
import { v1 as uuidv1 } from 'uuid'
import { SelectedItemsContext } from '../../contexts/SelectedItemsContext'
import { ProblemsContext } from '../../contexts/ProblemsContext'

export default function ProblemModal () {
  const { selectedFix } = useContext(SelectedItemsContext)
  const { addProblem } = useContext(ProblemsContext)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const problem = {
      id: uuidv1(),
      fix_id: selectedFix,
      name,
      description
    }
    addProblem(problem)
  }

  return (
    <div className="service">
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label className="input-label" htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="input-block">
          <label className="input-label" htmlFor="description">Description:</label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

