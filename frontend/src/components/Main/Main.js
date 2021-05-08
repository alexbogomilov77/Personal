import React from 'react'

import Fixes from './Fixes/Fixes'
import Problems from './Problems/Problems'
import Problem from './Problem/Problem'
//styles
import './Main.scss'

export default function Main () {
  return (
    <div className="main">
      <Fixes />
      <div className="dashboard">
        <Problems />
        <Problem />
      </div>
    </div>
  )
}

