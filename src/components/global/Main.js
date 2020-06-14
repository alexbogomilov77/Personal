import React, { Component } from 'react'

import InfoBar from '../../components/dashboard/InfoBar'
import Dashboard from '../../components/dashboard/Dashboard'

class Main extends Component {

  render() {
    return (
        <div className="main">
            <InfoBar />
            <Dashboard />
        </div>
    )
  }
}

export default (Main)

