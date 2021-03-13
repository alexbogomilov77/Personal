import React, { useContext, useState, useEffect } from 'react'
import logo from '../../assets/images/dd2.jpg'
import ReactModal from 'react-modal';
import Modal from '../modals/Modal';
import { CarsContext } from '../../contexts/CarsContext'
import { RepairsContext } from '../../contexts/RepairsContext'

export default function Sidebar () {
  const { cars, fetchCars, selectedTab, selectTab } = useContext(CarsContext)
  const { fetchRepairs } = useContext(RepairsContext)

  const [showModal, setModal] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  // const [selectedTab, setSelectedTab] = useState(null)
  const [isCarExist, setIsCarExist] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isSearchLegit, setIsSearchLegit] = useState(false)

  useEffect(() => {
    // Modal.setAppElement('body');
    selectTab(0)
    fetchCars()
  },[])

  const handleClick = id => {
    setActiveLink(id)
    fetchRepairs(id)
  }

  const changeStatus = (plate, value) => {
    // axios.post(`http://localhost:8080/cars/${plate}`, {status: value})
  }

  const handleInput = event => {
    event.target.value.length === 8
    ? setIsSearchLegit(true)
    : setIsSearchLegit(false)
  }

  const handleKeyUp = event => {
    // if (event.keyCode === 13) {
    //   event.preventDefault();
    //   searchInputValue(event.target.value)
    //   axios.get(`http://localhost:8080/cars/search/${searchInputValue}`)
    //   .then( response => {
    //     response.data.length > 0
    //     ? setIsCarExist(true)
    //     : setIsCarExist(false)
    //   }).catch( err => {
    //     alert(err)
    //   })
    // }
  }

  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  // return (
  //   let buttons;
  //   if (!isSearchLegit) { !isSearchLegit !isCarExist
  //       buttons =
  //       <div className="actionButtons">
  //         <button disabled={!isSearchLegit && isCarExist} className="actionBtn">Add</button>
  //         <button disabled={!isSearchLegit && !isCarExist} className="actionBtn" onClick={() => this.changeStatus(searchInputValue, 0)}>A</button>
  //         <button disabled={!isSearchLegit && !isCarExist} className="actionBtn" onClick={() => this.changeStatus(searchInputValue, 1)}>W</button>
  //         <button disabled={!isSearchLegit && isCarExist} className="actionBtn">R</button>
  //       </div>
  //   }

  return cars.length ? (
    <div className='sidebar'>

      <div className="logo">
        <img className="logo-image" src={logo}></img>
        <p className="logo-label">GaragePanel</p>
      </div>

      {/* <div className="searchField">
        <input
          type="search"
          className="searchInput"
          name="q"
          placeholder="Search in your garage"
          onChange={handleInput}
          onKeyUp={handleKeyUp}
        />
        <div className="actionButtons">
          <button disabled={!isSearchLegit && isCarExist} className="actionBtn">Add</button>
          <button disabled={!isSearchLegit && !isCarExist} className="actionBtn" onClick={() => changeStatus(searchInputValue, 0)}>A</button>
          <button disabled={!isSearchLegit && !isCarExist} className="actionBtn" onClick={() => changeStatus(searchInputValue, 1)}>W</button>
          <button disabled={!isSearchLegit && isCarExist} className="actionBtn">R</button>
        </div>
      </div> */}
      

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
        {cars.map(car => {
          return (
            <li
              key={car._id}
              onClick={() => handleClick(car._id)}
              className={'sidebar-item ' + (car._id === activeLink ? 'active-item': '')}>
              {car.plate}
            </li>
          );
        })}
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
