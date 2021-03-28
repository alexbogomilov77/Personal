import React from 'react'

//components
import Main from './components/global/Main'
import Header from './components/global/Header'
import Sidebar from './components/global/Sidebar'
//contexts
import SelectedItemsContext from './contexts/SelectedItemsContext';
import CarsContextProvider from './contexts/CarsContext';
import RepairsContextProvider from './contexts/RepairsContext';
import ServicesContextProvider from './contexts/ServicesContext';
import ServicesDetailsContextProvider from './contexts/ServicesDetailsContext';
//styles
import './assets/styles/index.scss'
import './App.scss'

export default function App() {
  return (
    <div className="App">
      <SelectedItemsContext>
      <CarsContextProvider>
        <RepairsContextProvider>
          <ServicesContextProvider>
            <ServicesDetailsContextProvider>
              <Sidebar />
              {/* <Header /> */}
              <Main />
            </ServicesDetailsContextProvider>
          </ServicesContextProvider>
        </RepairsContextProvider>
      </CarsContextProvider>
      </SelectedItemsContext>
    </div>
  )
}