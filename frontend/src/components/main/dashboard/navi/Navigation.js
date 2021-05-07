import React, { useContext, useState, useEffect } from 'react'
import { SelectedItemsContext } from '../../../../contexts/SelectedItemsContext'
import { ProblemsContext } from '../../../../contexts/ProblemsContext'
import { ProblemsDetailsContext } from '../../../../contexts/ProblemsDetailsContext'

import ReactModal from 'react-modal';
import ProblemModal from '../../../modals/ProblemModal';

export default function Navigation () {
  const { selectProblem, selectProblemDetail } = useContext(SelectedItemsContext)
  const { problems } = useContext(ProblemsContext)
  const { fetchDetails } = useContext(ProblemsDetailsContext)

  const [fetchedProblems, setFetchedProblems] = useState([])
  const [activeLink, setActiveLink] = useState('')
  const [showModal, setModal] = useState(false)

  useEffect(() => {
    setFetchedProblems(problems)
  },[problems])

  const handleClick = problem => {
    setActiveLink(problem.id)
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
        className={'steps-list-item ' + (el.id === activeLink ? 'active-item': '')}>
        {el.name}
      </li>
    )
  })

  return (
    <div className="dashboard-navigation">
      <button 
        onClick={handleOpenModal}
        className='new btn btn-active'>
        New
      </button>
      <ul className='steps-list'>
        { fetchedProblems.length ? displayProblems() : ''}
      </ul>

      <ReactModal 
        className="modal-wrapper"
        overlayClassName="modal-overlay"
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
      >
        <ProblemModal />
        <button className="closeModal" onClick={handleCloseModal}>close</button>
      </ReactModal>
    </div>
  )
}

