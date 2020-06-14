import React from 'react';

//components
import Header from './components/Header'
import Sidebar from './components/Sidebar'

//styles
import './assets/styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
