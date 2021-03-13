import React from 'react'

import Navigation from './navi/Navigation'
import Main from './main/Main'

export default function Dashboard () {
  return (
      <div className="dashboard">
          <Navigation />
          <div className='divider-vertical'></div>
          <Main />
      </div>
  )
}



