import React, { useContext, useState, useEffect } from 'react'
import ReactModal from 'react-modal';
import Modal from '../../modals/ProblemModal';
//contexts
import { SelectedItemsContext } from '../../../contexts/SelectedItemsContext'
import { ProblemsContext } from '../../../contexts/ProblemsContext'
import { ProblemsDetailsContext } from '../../../contexts/ProblemsDetailsContext'
//styles
import './Problems.scss'

export default function Navigation () {
  const { selectProblem, selectProblemDetail } = useContext(SelectedItemsContext)
  const { problems } = useContext(ProblemsContext)
  const { fetchDetails } = useContext(ProblemsDetailsContext)

  const [fetchedProblems, setFetchedProblems] = useState([])
  const [selectedProblem, setSelectedProblem] = useState('')
  const [showModal, setModal] = useState(false)

  useEffect(() => {
    setFetchedProblems(problems)
  },[problems])

  const handleClick = problem => {
    setSelectedProblem(problem.id)
    selectProblem(problem)
    selectProblemDetail('actions')
    fetchDetails('actions', problem.id)
  }

  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  const displayProblems = () => fetchedProblems.map(el => {
    return (
      <li
        key={el.id}
        onClick={() => handleClick(el)}
        className={el.id === selectedProblem ? 'selectedProblem' : ''}>
        {el.name}
      </li>
    )
  })

  return (
    <div className="problems">
      <button 
        onClick={handleOpenModal}
        className='btn btnLight'>
        new
      </button>

      <ul> {fetchedProblems.length ? displayProblems() : ''} </ul>

      <ReactModal 
        className="modal-wrapper"
        overlayClassName="modal-overlay"
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
      >
        <Modal />
        <button className="closeModal" onClick={handleCloseModal}>close</button>
      </ReactModal>
    </div>
  )
}

