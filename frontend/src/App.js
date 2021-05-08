import React from 'react'

//components
import Sidebar from './components/Sidebar/Sidebar'
import MainHeader from './components/MainHeader/MainHeader'
import Fixes from './components/Fixes/Fixes'
import Problems from './components/Problems/Problems'
import Problem from './components/Problem/Problem'
//contexts
import SelectedItemsContext from './contexts/SelectedItemsContext';
import CarsContextProvider from './contexts/CarsContext';
import RepairsContextProvider from './contexts/RepairsContext';
import ProblemsContextProvider from './contexts/ProblemsContext';
import ProblemsDetailsContextProvider from './contexts/ProblemsDetailsContext';
//styles
import './assets/styles/index.scss'
import './App.scss'

export default function App() {
  return (
    <div className="App">
      <SelectedItemsContext>
      <CarsContextProvider>
        <RepairsContextProvider>
          <ProblemsContextProvider>
            <ProblemsDetailsContextProvider>
              <Sidebar />
              <MainHeader />
              <Fixes />
              <div className="dashboard">
                <Problems />
                <Problem />
              </div>
            </ProblemsDetailsContextProvider>
          </ProblemsContextProvider>
        </RepairsContextProvider>
      </CarsContextProvider>
      </SelectedItemsContext>
    </div>
  )
}
