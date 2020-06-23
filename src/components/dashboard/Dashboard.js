import React, { Component } from 'react'

import Navigation from '../../components/dashboard/Navigation'
import Main from '../../components/dashboard/Main'

class Dashboard extends Component {

  render() {
    //Share your service to Auto brands Feature
    return (
        <div className="dashboard">
            <Navigation />
            <div className='vertical-divider'></div>
            <Main />
        </div>
    )
  }
}

export default (Dashboard)

