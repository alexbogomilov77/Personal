import React, { Component } from 'react'
import logo from '../../assets/images/dd2.jpg'
import ReactModal from 'react-modal';
import Modal from '../modals/Modal';

import axios from 'axios'

//redux
import { connect } from 'react-redux'
import { getCars } from '../../store/actions/getCarsActions'
import { getRepairs } from '../../store/actions/getRepairsActions'


class Sidebar extends Component {

  state = {
    showModal: false,
    activeLink: null,
    selectedTab: null,
    isCarExist: false,
    searchInputValue: '',
    isSearchLegit: false
  }

  componentDidMount() {
    this.selectTab(0)
  }

  selectTab = value => {
    localStorage.setItem('sidebarTab', value)
    this.selectedTab = value
    this.props.getCars();
  }

  handleClick = id => {
    this.setState({ activeLink: id });
    this.props.getRepairs(id);
  }

  handleResponse = response => {
    this.setState({ isCarExist: response });
  }

  changeStatus = (plate, value) => {
    alert('test')
    axios.post(`http://localhost:8080/cars/${plate}`, {status: value}).then( response => {
      console.log(response)
    })
  }

  handleInput = event => {
    console.log(event.target.value.length)
    if (event.target.value.length === 8) {
      this.setState({ isSearchLegit: true })
    } else {
      this.setState({ isSearchLegit: false })
    }
  }

  handleKeyUp = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.setState({ searchInputValue: event.target.value });
      axios.get(`http://localhost:8080/cars/search/${this.state.searchInputValue}`)
      .then( response => {
        response.data.length > 0 ? this.handleResponse(true) : this.handleResponse(false)
      }).catch((err) => {
        alert(err)
      })
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { activeLink, isCarExist, isSearchLegit, searchInputValue } = this.state;
    let buttons;
    // if (!isSearchLegit) { !isSearchLegit !isCarExist
        buttons =
        <div className="actionButtons">
          <button disabled={!isSearchLegit || isCarExist} className="actionBtn">Ad</button>
          <button disabled={!isSearchLegit && !isCarExist} className="actionBtn" onClick={() => this.changeStatus(searchInputValue, 0)}>A</button>
          <button disabled={!isSearchLegit && !isCarExist} className="actionBtn" onClick={() => this.changeStatus(searchInputValue, 1)}>W</button>
          <button disabled={!isSearchLegit && isCarExist} className="actionBtn">R</button>
        </div>
    // }

    return this.props.cars.length > 0 ? (
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
            onChange={this.handleInput}
            onKeyUp={this.handleKeyUp}
          />
          {buttons}
        </div>
        

        {/* <button 
          onClick={this.handleOpenModal}
          className='new btn btn-active'>
          New
        </button> */}

        <div className='categories'>
        <span
            className={'category ' + (this.selectedTab === 0 ? 'active-category': '')}
            onClick={() => this.selectTab(0)}
          >
            active
          </span>
          <span className='divider'> / </span>
          <span
            className={'category ' + (this.selectedTab === 1 ? 'active-category': '')}
            onClick={() => this.selectTab(1)}
          >
            waiting
          </span>
        </div>

        <ul className='sidebar-list'>
          {this.props.cars.map((car) => {
            return (
              <li
                key={car.vehicle_id}
                onClick={() => this.handleClick(car.vehicle_id)}
                className={'sidebar-item ' + (car.vehicle_id === activeLink ? 'active-item': '')}>
                {car.plate}
              </li>
            );
          })}
        </ul>

        <ReactModal 
          className="modal-wrapper"
          overlayClassName="modal-overlay"
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
        >
          <Modal />
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    ) : (
      <div>
        <code>no cars in your garage!</code>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.getCars.listOfCars
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCars: () => dispatch(getCars()),
    getRepairs: (id) => dispatch(getRepairs(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

