import React, { Component } from 'react'
// import Comment from './Comment'
import { connect } from 'react-redux'
// import { deleteCommentAction } from '../actions/rootActions'

class Sidebar extends Component {

//   handleDelete = (el) => {
//     this.props.deleteComment(el)
//   }

  render() {
    return this.props.cars.length > 0 ? (
      <div className="sidebar">
        <button class="btn btn-active">
          ADD
        </button>
        <ul className="sidebar-list">
          {this.props.cars.map((car) => {
            return (
              <li className="sidebar-item" key={car.id}>
                  {car.make}
                {/* <Comment
                  id={comment.id}
                  date={comment.date}
                  msg={comment.text}
                  delete={this.handleDelete}
                /> */}
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

