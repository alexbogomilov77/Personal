import React, { Component } from 'react'

import Header from './Header'
// import Request from './Request'
import Service from './Service'
// import Billing from './Billing'

class Main extends Component {

  render() {
    return (
      <div className="dashboard-main">
        <Header />
        {/* <Request /> */}
        <Service />
        {/* <Billing /> */}
      </div>
    )
  }
}

export default (Main)

