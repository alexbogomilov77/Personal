import React, { Component } from 'react'

class Navigation extends Component {

  render() {
    return (
      <div className="dashboard-navigation">
        <div className="steps-label">Service</div>

        <ul className='steps'>
          <li className="step"></li>
          <li className="step"></li>
          <li className="step active-step"></li>
          <li className="step"></li>
        </ul>
        
        <div className="new-step">
          <input type="text" id="step" name="new-step" />
          <button className="add">+</button>
        </div>

        <ul className='steps-list'>
          <li className="steps-list-item">Cleaning DPF</li>
          <li className="steps-list-item">Mega Settings</li>
          <li className="steps-list-item active-item">Turbo Charging</li>
          <li className="steps-list-item">Cleaning DPF</li>
          <li className="steps-list-item">Mega Settings</li>
          <li className="steps-list-item">Turbo Charging</li>
          <li className="steps-list-item">Cleaning DPF</li>
          <li className="steps-list-item">Mega Settings</li>
          <li className="steps-list-item">Turbo Charging</li>
        </ul>
      </div>
    )
  }
}

export default (Navigation)

