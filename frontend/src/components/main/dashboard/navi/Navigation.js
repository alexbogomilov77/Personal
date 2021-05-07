import React, { useContext, useState, useEffect } from 'react'
// import { v1 as uuidv1 } from 'uuid'
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
  // const [newService, setNewService] = useState('')

  useEffect(() => {
    setFetchedProblems(problems)
  },[problems])

  const handleClick = problem => {
    setActiveLink(problem.id)
    selectProblem(problem)
    selectProblemDetail('actions')
    fetchDetails('actions', problem.id)
  }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const service = {
  //     id: uuidv1(),
  //     repair_id: selectedRepair,
  //     name: newService
  //   }

  //   setFetchedServices([...fetchedServices, service])
  //   addService(service)
  //   setNewService('')
  // }

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
      {/* <div className="wrapper">
        <div className="steps-label">Problems</div>
        <ul className='steps'>
          <li className="step"></li>
          <li className="step active-step"></li>
          <li className="step"></li>
        </ul>
      </div> */}

      {/* <form className="new-step">
        <input type="text" value={newService} onChange={e => setNewService(e.target.value)} />
        <button className="add" type="submit" onClick={handleSubmit}></button>
      </form> */}
  
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

