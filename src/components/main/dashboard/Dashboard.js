import React, { Component } from 'react'

import Navigation from './navi/Navigation'
import Main from './main/Main'

class Dashboard extends Component {

  render() {
    //Share your service to Auto brands Feature
    return (
        <div className="dashboard">
            <Navigation />
            <div className='divider-vertical'></div>
            <Main />
        </div>
    )
  }
}

export default (Dashboard)

