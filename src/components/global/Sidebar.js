import React, { Component } from 'react'
// import Comment from './Comment'
import axios from 'axios'
import { connect } from 'react-redux'
import logo from '../../assets/images/dd2.jpg'
// import { deleteCommentAction } from '../actions/rootActions'

class Sidebar extends Component {

  state = {
    activeLink: null,
    carsState: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/cars').then( response => {
        console.log(response.data)
        this.setState({ carsState: response.data});
      }
    )
  }

  handleClick = id => {
    this.setState({ activeLink: id });
  };

  render() {
    const { activeLink } = this.state;

    const { carsState } = this.state
    const postList = carsState.length ? (
      carsState.map(post => {
        return (
          <div key={post.id}>
            {post.plate}
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return this.props.cars.length > 0 ? (
      <div className='sidebar'>

        <div className="logo">
          <img className="logo-image" src={logo}></img>
          <p className="logo-label">GaragePanel</p>
        </div>

        <button className='new btn btn-active'>
          New
        </button>

        {postList}

        <div className='categories'>
          <span className="category">active</span>
          <span className='divider'> / </span>
          <span className="category active-category">waiting</span>
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

