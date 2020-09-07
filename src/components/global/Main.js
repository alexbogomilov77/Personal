import React, { Component } from 'react'

import Search from '../../components/main/Search'
import InfoBar from '../../components/main/info/InfoBar'
import Dashboard from '../../components/main/dashboard/Dashboard'

class Main extends Component {

  render() {
    return (
        <div className="main">
            <Search />
            <InfoBar />
            <Dashboard />
        </div>
    )
  }
}

export default (Main)

