import React, { Component } from 'react'

//redux
import { connect } from 'react-redux'
import { getActions } from '../../../../store/actions/getActionsActions'

class Navigation extends Component {

  state = {
    activeLink: null
  }

  
  handleClick = id => {
    this.setState({ activeLink: id });
    this.props.getActions(id);
  };

  displayServices = () => this.props.services.map(item => {
    return (
      <li
        key={item.service_id}
        onClick={() => this.handleClick(item.service_id)}
        className={'steps-list-item ' + (item.service_id === this.activeLink ? 'active-item': '')}>
        {item.title}
      </li>
    )
  })

  render() {
    return this.props.services.length > 0 ? (
      <div className="dashboard-navigation">
        <div className="wrapper">
          <div className="steps-label">Service</div>
          <ul className='steps'>
            <li className="step"></li>
            <li className="step active-step"></li>
            <li className="step"></li>
          </ul>
        </div>
        
        <div className="new-step">
          <input type="text" id="step" name="new-step" />
          <button className="add"></button>
        </div>
        <ul className='steps-list'>
          { this.displayServices() }
        </ul>
      </div>
    ) : (
      <div>
      <code>no services!</code>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActions: (id) => dispatch(getActions(id))
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.getServices.listOfServices
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

