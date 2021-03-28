import React, { useContext, useState, useEffect } from 'react'
import logo from '../../assets/images/dd2.jpg'
import { GrSync } from 'react-icons/gr'
import ReactModal from 'react-modal';
import Modal from '../modals/Modal';
import { SelectedItemsContext } from '../../contexts/SelectedItemsContext'
import { CarsContext } from '../../contexts/CarsContext'
import { RepairsContext } from '../../contexts/RepairsContext'

export default function Sidebar () {
  const { selectCar } = useContext(SelectedItemsContext)
  const { cars, fetchCars, changeCarStatus, selectedTab, selectTab } = useContext(CarsContext)
  const { fetchRepairs } = useContext(RepairsContext)

  const [showModal, setModal] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  // const [selectedTab, setSelectedTab] = useState(null)
  const [isCarExist, setIsCarExist] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isSearchLegit, setIsSearchLegit] = useState(false)

  useEffect(() => {
    selectTab(0)
    fetchCars()
  },[])

  const handleClick = id => {
    setActiveLink(id)
    fetchRepairs(id)
    selectCar(id)
  }

  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
    fetchCars()
  }

  const displayCars = () =>
    cars.map(car => {
      return (
        <li
          key={car._id}
          className={'sidebar-item ' + (car._id === activeLink ? 'active-item': '')}>
          <div className="plate" onClick={() => handleClick(car._id)}>{car.plate}</div>
          <div className="changeBtn" onClick={() => changeCarStatus(car._id, car.status,)}>
           <GrSync color="red" />
          </div>
        </li>
      )
    })

  return cars.length ? (
    <div className='sidebar'>

      <div className="logo">
        <img className="logo-image" src={logo}></img>
        <p className="logo-label">GaragePanel</p>
      </div>

      <button 
        onClick={handleOpenModal}
        className='new btn btn-active'>
        New
      </button>

      <div className='categories'>
      <span
          className={'category ' + (selectedTab === 0 ? 'active-category': '')}
          onClick={() => selectTab(0)}
        >
          active
        </span>
        <span className='divider'> / </span>
        <span
          className={'category ' + (selectedTab === 1 ? 'active-category': '')}
          onClick={() => selectTab(1)}
        >
          waiting
        </span>
      </div>

      <ul className='sidebar-list'>
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
        <Modal />
        <button className="closeModal" onClick={handleCloseModal}>close</button>
      </ReactModal>
    </div>
  ) : (
    <div>
      <code>no cars in your garage!</code>
    </div>
  )
}
