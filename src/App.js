import React, { Component } from 'react'

//components
import Main from './components/global/Main'
import Header from './components/global/Header'
// import Search from './components/global/Search'
import Sidebar from './components/global/Sidebar'

//styles
//this  is redux branch
import './assets/styles/index.scss'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Header />
        {/* <Search /> */}
        <Main />
      </div>
    )
  }
}

export default App