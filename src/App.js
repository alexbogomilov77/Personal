import React from 'react'

//components
import Main from './components/global/Main'
import Header from './components/global/Header'
import Sidebar from './components/global/Sidebar'
//contexts
import CarsContextProvider from './contexts/CarsContext';
import RepairsContextProvider from './contexts/RepairsContext';
import ServicesContextProvider from './contexts/ServicesContext';
import PartsContextProvider from './contexts/PartsContext';
import ActionsContextProvider from './contexts/ActionsContext';
//styles
import './assets/styles/index.scss'
import './App.scss'

export default function App() {
  return (
    <div className="App">
      <CarsContextProvider>
        <RepairsContextProvider>
          <ServicesContextProvider>
            <ActionsContextProvider>
            <PartsContextProvider>
              <Sidebar />
              {/* <Header /> */}
              <Main />
            </PartsContextProvider>
            </ActionsContextProvider>
          </ServicesContextProvider>
        </RepairsContextProvider>
      </CarsContextProvider>
    </div>
  )
}