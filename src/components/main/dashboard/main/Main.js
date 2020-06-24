import React, { Component } from 'react'

import Header from './Header'
// import Request from './Request'
// import Diagnose from './Diagnose'
import Service from './Service'
// import Billing from './Billing'

class Main extends Component {

  render() {
    return (
      <div className="dashboard-main">
        <Header />
        <Service />
        {/* <Request />
        <Diagnose />
        <Billing /> */}
      </div>
    )
  }
}

export default (Main)

