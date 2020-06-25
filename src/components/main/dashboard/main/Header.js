import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <div className="dashboard-main-header">
          {/* <p className="label">Cleaning DPF</p> */}
          <div className="toggle-action2">
            <div className="left">
              <div className="btn-switch btn-switch-left btn-active">
                {/* ❖ */}
              </div>
              {/* <span className="btn-switch-label">request</span> */}
            </div>
            <div className="right">
              <div className="btn-switch btn-switch-right">
                {/* ❖ */}
              </div>
              {/* <span className="btn-switch-label">diagnose</span> */}
            </div>
          </div>


          <span className="label">Turbo Charging</span>
          {/* <div className="toggle-action">
            <span className="action active-action">Request</span>
            <span className="divider-action"> / </span>
            <span  className="action">Diagnose</span>
          </div> */}

          <div className="toggle-action">
            <span className="action active-action">Service</span>
            {/* <span className="divider-action"> / </span> */}
            {/* <span  className="action">Parts</span> */}
          </div>
      </div>
    )
  }
}

export default (Header)

