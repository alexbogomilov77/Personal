import React, { Component } from 'react'
// import Comment from './Comment'
import { connect } from 'react-redux'
// import { deleteCommentAction } from '../actions/rootActions'

class Sidebar extends Component {

  state = {
    activeLink: null
  }

  handleClick = id => {
    this.setState({ activeLink: id });
  };

  render() {
    const { activeLink } = this.state;

    return this.props.cars.length > 0 ? (
      <div className='sidebar'>

        <button class='new btn btn-active'>
          New
        </button>

        <div className='categories'>
          <span>active</span>
          <span className='divide'> / </span>
          <span>waiting</span>
        </div>

        <ul className='sidebar-list'>
          {this.props.cars.map((car) => {
            return (
              <li
                key={car.id}
                onClick={() => this.handleClick(car.id)}
                className={'sidebar-item ' + (car.id === activeLink ? 'active-item': '')}>
                  {car.make}
              </li>
            );
          })}
        </ul>
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
    cars: state.listCars
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteComment: (id) => dispatch(deleteCommentAction(id))
//   }
// }

export default connect(mapStateToProps)(Sidebar)
