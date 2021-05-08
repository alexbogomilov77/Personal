import React from 'react'

//components
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
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
              <Main />
            </ProblemsDetailsContextProvider>
          </ProblemsContextProvider>
        </RepairsContextProvider>
      </CarsContextProvider>
      </SelectedItemsContext>
    </div>
  )
}
