import React from 'react'

import Header from './Header'
// import Request from './Request'
import Service from './Service'
// import Billing from './Billing'

export default function Main () {
  return (
    <div className="dashboard-main">
      <Header />
      {/* <Request /> */}
      <Service />
      {/* <Billing /> */}
    </div>
  )
}

