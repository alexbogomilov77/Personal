import React, { useContext, useState, useEffect } from 'react'
import logo from '../../assets/images/dd2.jpg'
import { GrSync } from 'react-icons/gr'
import ReactModal from 'react-modal';
import Modal from '../modals/NewCarModal';
//contexts
import { SelectedItemsContext } from '../../contexts/SelectedItemsContext'
import { CarsContext } from '../../contexts/CarsContext'
import { FixesContext } from '../../contexts/FixesContext'
//styles
import './Sidebar.scss'

export default function Sidebar () {
  const { selectCar } = useContext(SelectedItemsContext)
  const { cars, changeCarStatus, selectedTab, selectTab } = useContext(CarsContext)
  const { fetchFixes } = useContext(FixesContext)

  const [showModal, setModal] = useState(false)
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    selectTab(0)
  },[])

  const handleClick = id => {
    setActiveLink(id)
    fetchFixes(id)
    selectCar(id)
  }

  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  const displayCars = () =>
    cars.map(car => {
      return (
        <li
          key={car._id}
          className={'car ' + (car._id === activeLink ? 'active': '')}>
          <div className="changeBtn" onClick={() => changeCarStatus(car._id, car.status,)}>
           <GrSync />
          </div>
          <div className="plate" onClick={() => handleClick(car._id)}>{car.plate}</div>
        </li>
      )
    })

  return cars.length ? (
    <div className='sidebar'>

      <div className="logo">
        <img src={logo}></img>
        <p>GaragePanel</p>
      </div>

      <button 
        onClick={handleOpenModal}
        className='new btn btnDark'>
        new
      </button>

      <div className='categories'>
        <span
            className={'category ' + (selectedTab === 0 ? 'active': '')}
            onClick={() => selectTab(0)}
          >
            active
          </span>
          <span className='divider'> / </span>
          <span
            className={'category ' + (selectedTab === 1 ? 'active': '')}
            onClick={() => selectTab(1)}
          >
            waiting
          </span>
      </div>

      <ul className='cars'>
        { displayCars() }
      </ul>

      <ReactModal 
        className="modal-wrapper"
        overlayClassName="modal-overlay"
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
      >
        <Modal closeModal={handleCloseModal} />
        <button className="closeModal" onClick={handleCloseModal}>close</button>
      </ReactModal>
    </div>
  ) : (
    <div>
      <code>no cars in your garage!</code>
    </div>
  )
}
