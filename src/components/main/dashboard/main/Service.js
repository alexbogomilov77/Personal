import React, { Component } from 'react'

class Service extends Component {

  render() {
    return (
      <div className="dashboard-main-service">

          <div className="columns">
            <div className="column-left">
              <label className="label" for="name">Name:</label>
              <div className="name">
                <input type="text" id="name" name="new-step" />
              </div>

              <div className='service-list-wrapper'>
                <ul className='service-list'>
                  <li className="service-list-item">
                    <span className="name">Clean filter system</span>
                  </li>
                  <li className="service-list-item">
                    <span className="name">Clean filter system</span>
                  </li>
                  <li className="service-list-item">
                    <span className="name">Clean filter system</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="column-right">
              <label className="label" for="value">Price:</label>
              <div className="value">
                <input type="text" id="value" name="new-step" />
                <button className="add"></button>
              </div>

              <div className='service-list-wrapper'>
                <ul className='service-list'>
                  <li className="service-list-item">
                    <span className="value">120$</span>
                  </li>
                  <li className="service-list-item">
                    <span className="value">120$</span>
                  </li>
                  <li className="service-list-item">
                    <span className="value">120$</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="dashboard-main-service-footer">
            <button className="action-btn">complete</button>
          </div>

      </div>
    )
  }
}

export default (Service)

