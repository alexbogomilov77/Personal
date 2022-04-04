import React from "react";

//components
// import Loading from "./components/Loading/Loading";
import Sidebar from "./components/Sidebar/Sidebar";
import MainHeader from "./components/MainHeader/MainHeader";
import Fixes from "./components/Fixes/Fixes";
import Problems from "./components/Problems/Problems";
// import Problem from "./components/Problem/Problem";
//contexts
// import LoadingContext from "./contexts/LoadingContext";
// import SelectedItemsContextProvider from "./contexts/SelectedItemsContext";
// import CarsContextProvider from "./contexts/CarsContext";
// import FixesContextProvider from "./contexts/FixesContext";
// import ProblemsContextProvider from "./contexts/ProblemsContext";
// import ProblemsDetailsContextProvider from "./contexts/ProblemsDetailsContext";
//styles
import "./assets/styles/index.scss";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainHeader />
      <div className="dashboard">
        <Fixes />
        <Problems />
      </div>
    </div>
    // <LoadingContext>
    //   <SelectedItemsContextProvider>
    //     <CarsContextProvider>
    //       <FixesContextProvider>
    //         <ProblemsContextProvider>
    //           <ProblemsDetailsContextProvider>
    //             <Loading />
    //             <div className="App">
    //               <Sidebar />
    //               <MainHeader />
    //               <div className="dashboard">
    //                 <Fixes />
    //                 <Problems />
    //                 <Problem />
    //               </div>
    //             </div>
    //           </ProblemsDetailsContextProvider>
    //         </ProblemsContextProvider>
    //       </FixesContextProvider>
    //     </CarsContextProvider>
    //   </SelectedItemsContextProvider>
    // </LoadingContext>
  );
}
