import React, { Component } from 'react'

class Service extends Component {

  render() {
    return (
      <div className="dashboard-main-service">

        <div className="service-input-fields">
          <div className="input-block">
            <div className="input">
              <label className="input-label" htmlFor="name">Name:</label>
              <input type="text" id="name"  name="name" />
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
            <li className="service-list-item">
              <span className="service-name">clean filter system</span>
              <span className="service-value">120$</span>
            </li>
            <li className="service-list-item">
              <span className="service-name">clean filter system</span>
              <span className="service-value">120$</span>
            </li>
            <li className="service-list-item">
              <span className="service-name">clean filter system</span>
              <span className="service-value">120$</span>
            </li>
            <li className="service-list-item">
              <span className="service-name">clean filter system</span>
              <span className="service-value">120$</span>
            </li>
          </ul>
        </div>

        <div className="dashboard-main-service-footer">
          <button className="action-btn btn-active">complete</button>
        </div>

      </div>
    )
  }
}

export default (Service)

