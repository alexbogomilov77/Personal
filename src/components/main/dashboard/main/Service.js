import React, { Component } from 'react'

class Service extends Component {

  render() {
    return (
      <div className="dashboard-main-service">
          <div className="columns">
            <div className="column-left">
              <label className="label" for="input-name">Name:</label>
              <div className="input-name">
                <input type="text" id="name" name="new-step" />
              </div>

              <div className='service-list-wrapper'>
                <ul className='service-list'>
                  <li className="service-list-item service-name">
                    clean filter system
                  </li>
                  <li className="service-list-item service-name">
                    clean filter system
                  </li>
                  <li className="service-list-item service-name">
                    clean filter system
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="column-right">
              <label className="label" for="input-value">Price:</label>
              <div className="input-value">
                <input type="text" id="value" name="new-step" />
                <button className="add"></button>
              </div>

          {/* <div className="toggle-action">
            <span className="action active-action">Parts</span>
            <span className="divider-action"> / </span>
            <span  className="action">Parts</span>
          </div> */}

              <div className='service-list-wrapper'>
                <ul className='service-list'>
                  <li className="service-list-item service-value">
                    120$
                  </li>
                  <li className="service-list-item service-value">
                    120$
                  </li>
                  <li className="service-list-item service-value">
                    120$
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="dashboard-main-service-footer">
            <button className="action-btn btn-active">complete</button>
          </div>

      </div>
    )
  }
}

export default (Service)

