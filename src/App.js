import React, { Component } from 'react'

//components
import Main from './components/global/Main'
import Header from './components/global/Header'
import Sidebar from './components/global/Sidebar'

//redux
import { connect } from 'react-redux'
import { getCars } from './store/actions/getCarsActions'

//styles
import './assets/styles/index.scss'

class App extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Header />
        <Main />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCars: () => dispatch(getCars())
  }
}

export default connect(null, mapDispatchToProps)(App)