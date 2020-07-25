import React, { Component } from 'react'
// import Comment from './Comment'
import axios from 'axios'
// import { connect } from 'react-redux'
import logo from '../../assets/images/dd2.jpg'
import ReactModal from 'react-modal';
import Modal from '../modals/Modal';
// import { deleteCommentAction } from '../actions/rootActions'

class Sidebar extends Component {

  state = {
    cars: [],
    showModal: false,
    activeLink: null
  }

  componentDidMount() {
    axios.get('http://localhost:8080/cars').then( response => {
        console.log(response.data)
        this.setState({ cars: response.data});
      }
    )
  }

  handleClick = id => {
    this.setState({ activeLink: id });
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { activeLink, cars } = this.state;
    // const { carsState } = this.state
    // const postList = carsState.length ? (
    //   carsState.map(post => {
    //     return (
    //       <div key={post.id}>
    //         {post.plate}
    //       </div>
    //     )
    //   })
    // ) : (
    //   <div className="center">No posts to show</div>
    // );

    return cars.length > 0 ? (
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
          {cars.map((car) => {
            return (
              <li
                key={car.vehicleID}
                onClick={() => this.handleClick(car.vehicleID)}
                className={'sidebar-item ' + (car.vehicleID === activeLink ? 'active-item': '')}>
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

// const mapStateToProps = (state) => {
//   return {
//     cars: state.listCars
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteComment: (id) => dispatch(deleteCommentAction(id))
//   }
// }

export default Sidebar

