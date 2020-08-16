import React, { Component } from 'react'

//redux
import { connect } from 'react-redux'

class Service extends Component {

  displayServiceDetails = () => 
    this.props.parts.length > 0 ? 
      this.props.parts.map(item => {
        return (
          <li
            key={item.part_id}
            className={'service-list-item ' + (item.part_id === this.activeLink ? 'active-item' : '')}>
            <span className="service-name">{item.title}</span>
            <span className="service-value">{item.price}</span>
          </li>
        )
      })
     : 
      this.props.actions.map(item => {
        return (
          <li
            key={item.action_id}
            className={'service-list-item ' + (item.action_id === this.activeLink ? 'active-item' : '')}>
            <span className="service-name">{item.title}</span>
            <span className="service-value">{item.price}</span>
          </li>
        )
      })
    
  


  render() {
    return this.props.actions.length > 0 ? (
      <div className="dashboard-main-service">

        <div className="service-input-fields">
          <div className="input-block">
            <div className="input">
              <label className="input-label" htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>

          <div className="input-block">
            <label className="input-label" htmlFor="value">Price:</label>
            <div className="input">
              <input type="text" id="value" name="value" />
            </div>
          </div>
          <button className="add btn-active2"></button>
        </div>


        <div className='service-list-wrapper'>
          <ul className='service-list'>
            {this.displayServiceDetails()}
          </ul>
        </div>

        <div className="dashboard-main-service-footer">
          <button className="action-btn btn-active">complete</button>
        </div>

      </div>
    ) : (
      <div>
        <code>no actions!</code>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    actions: state.getActions.listOfActions,
    parts: state.getParts.listOfParts,
  }
}

export default connect(mapStateToProps)(Service)

