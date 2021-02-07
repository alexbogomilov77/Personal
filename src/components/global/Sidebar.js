import React, { useContext, useState } from 'react'
import logo from '../../assets/images/dd2.jpg'
import ReactModal from 'react-modal';
import Modal from '../modals/Modal';
import { CarsContext } from '../../App'
import axios from 'axios'

//redux
// import { connect } from 'react-redux'
// import { getCars } from '../../store/actions/getCarsActions'
// import { getRepairs } from '../../store/actions/getRepairsActions'


export default function Sidebar () {
  const cars = useContext(CarsContext)

  const [showModal, setModal] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [selectedTab, setSelectedTab] = useState(null)
  const [isCarExist, setIsCarExist] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isSearchLegit, setIsSearchLegit] = useState(false)

  // componentDidMount() {
  //   this.selectTab(0)
  // }

  // const selectTab = value => {
  //   selectTab = value => {
  //     localStorage.setItem('sidebarTab', value)
  //     this.selectedTab = value
  //     this.props.getCars();
  //   }
  // }

  const handleClick = id => {
    setActiveLink(id)
    this.props.getRepairs(id);
  }

  const changeStatus = (plate, value) => {
    axios.post(`http://localhost:8080/cars/${plate}`, {status: value})
  }

  const handleInput = event => {
    event.target.value.length === 8
    ? setIsSearchLegit(true)
    : setIsSearchLegit(false)
  }

  const handleKeyUp = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchInputValue(event.target.value)
      axios.get(`http://localhost:8080/cars/search/${searchInputValue}`)
      .then( response => {
        response.data.length > 0
        ? setIsCarExist(true)
        : setIsCarExist(false)
      }).catch( err => {
        alert(err)
      })
    }
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

  return cars ? (
    <div className='sidebar'>

      <div className="logo">
        <img className="logo-image" src={logo}></img>
        <p className="logo-label">GaragePanel</p>
      </div>

      <div className="searchField">
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
      </div>
      

      {/* <button 
        onClick={this.handleOpenModal}
        className='new btn btn-active'>
        New
      </button> */}

      <div className='categories'>
      <span
          className={'category ' + (selectedTab === 0 ? 'active-category': '')}
          onClick={() => setSelectedTab(0)}
        >
          active
        </span>
        <span className='divider'> / </span>
        <span
          className={'category ' + (selectedTab === 1 ? 'active-category': '')}
          onClick={() => setSelectedTab(1)}
        >
          waiting
        </span>
      </div>

      <ul className='sidebar-list'>
        {cars.map(car => {
          return (
            <li
              key={car.vehicle_id}
              onClick={() => handleClick(car.vehicle_id)}
              className={'sidebar-item ' + (car.vehicle_id === activeLink ? 'active-item': '')}>
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
        onRequestClose={handleCloseModal}
      >
        <Modal />
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </div>
  ) : (
    <div>
      <code>no cars in your garage!</code>
    </div>
  )
}
