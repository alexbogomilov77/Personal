import React, { Component } from 'react'
import logo from '../../assets/images/dd2.jpg'
import ReactModal from 'react-modal';
import Modal from '../modals/Modal';

//redux
import { connect } from 'react-redux'
import { getRepairs } from '../../store/actions/getRepairsActions'


class Sidebar extends Component {

  state = {
    showModal: false,
    activeLink: null
  }

  handleClick = id => {
    this.setState({ activeLink: id });
    this.props.getRepairs(id);
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { activeLink } = this.state;

    return this.props.cars.length > 0 ? (
      <div className='sidebar'>

        <div className="logo">
          <img className="logo-image" src={logo}></img>
          <p className="logo-label">GaragePanel</p>
        </div>

        <button 
          onClick={this.handleOpenModal}
          className='new btn btn-active'>
          New
        </button>

        <div className='categories'>
          <span className="category">active</span>
          <span className='divider'> / </span>
          <span className="category active-category">waiting</span>
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
    getRepairs: (id) => dispatch(getRepairs(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

