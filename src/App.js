import React from 'react'

//components
import Main from './components/global/Main'
import Header from './components/global/Header'
import Sidebar from './components/global/Sidebar'

//styles
import './assets/styles/index.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
