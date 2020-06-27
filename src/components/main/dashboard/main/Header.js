import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <div className="dashboard-main-header">
          <span className="label">Turbo Charging</span>
          
          <div className="toggle-action2">
            <div className="left">
              <div className="btn-switch btn-switch-left btn-active">
                ◉
              </div>
            </div>
            <div className="right">
              <div className="btn-switch btn-switch-right">
                ◉
              </div>
            </div>
          </div>
          
      </div>
    )
  }
}

export default (Header)

