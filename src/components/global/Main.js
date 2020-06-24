import React, { Component } from 'react'

import InfoBar from '../../components/main/info/InfoBar'
import Dashboard from '../../components/main/dashboard/Dashboard'

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

